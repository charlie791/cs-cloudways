# Product Filter Logic

## Filter Architecture

### URL-Based State Management

Filters are stored in URL parameters for shareability and browser history:

```
/products?material=granite,marble&color=white&minPrice=50&maxPrice=150&sort=price-asc
```

### Filter State Structure

```typescript
interface FilterState {
  // Category filters
  categories: string[];
  materials: string[];
  colors: string[];
  patterns: string[];
  
  // Specification filters
  thickness: string[];
  finish: string[];
  applications: string[];
  
  // Range filters
  priceRange: {
    min: number;
    max: number;
  };
  
  // Availability
  availability: 'all' | 'in-stock' | 'special-order';
  
  // Sorting
  sortBy: SortOption;
  
  // Search
  searchQuery?: string;
}
```

## Filter Implementation

### 1. Filter Hook

```typescript
// useProductFilters.ts
export function useProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Parse filters from URL
  const filters = useMemo(() => {
    return {
      categories: searchParams.get('category')?.split(',') || [],
      materials: searchParams.get('material')?.split(',') || [],
      colors: searchParams.get('color')?.split(',') || [],
      priceRange: {
        min: Number(searchParams.get('minPrice')) || 0,
        max: Number(searchParams.get('maxPrice')) || 10000,
      },
      availability: searchParams.get('availability') || 'all',
      sortBy: searchParams.get('sort') || 'featured',
    };
  }, [searchParams]);
  
  // Update filters
  const updateFilters = useCallback((newFilters: Partial<FilterState>) => {
    const params = new URLSearchParams(searchParams);
    
    // Update each filter in URL
    Object.entries(newFilters).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length > 0) {
        params.set(key, value.join(','));
      } else if (typeof value === 'object' && value.min !== undefined) {
        params.set('minPrice', value.min.toString());
        params.set('maxPrice', value.max.toString());
      } else if (value) {
        params.set(key, value.toString());
      } else {
        params.delete(key);
      }
    });
    
    router.push(`/products?${params.toString()}`);
  }, [router, searchParams]);
  
  return { filters, updateFilters };
}
```

### 2. Filter Component Logic

```typescript
// FilterSection.tsx
interface FilterSectionProps {
  title: string;
  options: FilterOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  multiSelect?: boolean;
}

export function FilterSection({
  title,
  options,
  selectedValues,
  onChange,
  multiSelect = true
}: FilterSectionProps) {
  const handleChange = (value: string) => {
    if (multiSelect) {
      const newValues = selectedValues.includes(value)
        ? selectedValues.filter(v => v !== value)
        : [...selectedValues, value];
      onChange(newValues);
    } else {
      onChange([value]);
    }
  };
  
  return (
    <div className="filter-section">
      <h3>{title}</h3>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type={multiSelect ? 'checkbox' : 'radio'}
            checked={selectedValues.includes(option.value)}
            onChange={() => handleChange(option.value)}
          />
          {option.label} ({option.count})
        </label>
      ))}
    </div>
  );
}
```

### 3. Price Range Filter

```typescript
// PriceRangeFilter.tsx
interface PriceRangeFilterProps {
  min: number;
  max: number;
  currentMin: number;
  currentMax: number;
  onChange: (range: { min: number; max: number }) => void;
}

export function PriceRangeFilter({
  min,
  max,
  currentMin,
  currentMax,
  onChange
}: PriceRangeFilterProps) {
  const [localRange, setLocalRange] = useState({ 
    min: currentMin, 
    max: currentMax 
  });
  
  // Debounce the onChange to avoid too many updates
  const debouncedOnChange = useDebouncedCallback(
    (range: { min: number; max: number }) => {
      onChange(range);
    },
    500
  );
  
  const handleRangeChange = (type: 'min' | 'max', value: number) => {
    const newRange = {
      ...localRange,
      [type]: value
    };
    setLocalRange(newRange);
    debouncedOnChange(newRange);
  };
  
  return (
    <div className="price-range-filter">
      <div className="range-inputs">
        <input
          type="number"
          value={localRange.min}
          onChange={(e) => handleRangeChange('min', Number(e.target.value))}
          min={min}
          max={localRange.max}
        />
        <span>to</span>
        <input
          type="number"
          value={localRange.max}
          onChange={(e) => handleRangeChange('max', Number(e.target.value))}
          min={localRange.min}
          max={max}
        />
      </div>
      <RangeSlider
        min={min}
        max={max}
        values={[localRange.min, localRange.max]}
        onChange={([min, max]) => {
          setLocalRange({ min, max });
          debouncedOnChange({ min, max });
        }}
      />
    </div>
  );
}
```

## Filter Application Strategy

### 1. Client-Side Filtering (Small Datasets)

```typescript
function applyFilters(products: Product[], filters: FilterState): Product[] {
  return products.filter(product => {
    // Category filter
    if (filters.categories.length > 0) {
      const productCategories = product.categories.map(c => c.slug);
      if (!filters.categories.some(cat => productCategories.includes(cat))) {
        return false;
      }
    }
    
    // Material filter
    if (filters.materials.length > 0 && 
        !filters.materials.includes(product.material.slug)) {
      return false;
    }
    
    // Color filter
    if (filters.colors.length > 0) {
      const productColors = product.colors.map(c => c.slug);
      if (!filters.colors.some(color => productColors.includes(color))) {
        return false;
      }
    }
    
    // Price filter
    const price = parseFloat(product.price);
    if (price < filters.priceRange.min || price > filters.priceRange.max) {
      return false;
    }
    
    // Availability filter
    if (filters.availability === 'in-stock' && 
        product.stockStatus !== 'IN_STOCK') {
      return false;
    }
    
    return true;
  });
}
```

### 2. Server-Side Filtering (GraphQL)

```typescript
function buildGraphQLFilters(filters: FilterState) {
  const where: ProductWhereArgs = {};
  
  if (filters.categories.length > 0) {
    where.category = filters.categories;
  }
  
  if (filters.materials.length > 0) {
    where.material = filters.materials;
  }
  
  if (filters.colors.length > 0) {
    where.color = filters.colors;
  }
  
  if (filters.priceRange.min > 0) {
    where.minPrice = filters.priceRange.min;
  }
  
  if (filters.priceRange.max < 10000) {
    where.maxPrice = filters.priceRange.max;
  }
  
  if (filters.availability === 'in-stock') {
    where.stockStatus = ['IN_STOCK'];
  }
  
  return where;
}
```

## Advanced Filter Features

### 1. Dynamic Filter Options

```typescript
// Show only relevant filter options based on current selection
function getAvailableFilters(
  allProducts: Product[],
  currentFilters: FilterState
): FilterOptions {
  // Apply all filters except the one being calculated
  const filteredProducts = allProducts.filter(product => {
    // Apply other filters...
  });
  
  // Calculate available options
  const materials = new Map<string, number>();
  const colors = new Map<string, number>();
  
  filteredProducts.forEach(product => {
    // Count materials
    if (product.material) {
      const count = materials.get(product.material.slug) || 0;
      materials.set(product.material.slug, count + 1);
    }
    
    // Count colors
    product.colors.forEach(color => {
      const count = colors.get(color.slug) || 0;
      colors.set(color.slug, count + 1);
    });
  });
  
  return {
    materials: Array.from(materials.entries()).map(([value, count]) => ({
      value,
      count,
      label: formatLabel(value)
    })),
    colors: Array.from(colors.entries()).map(([value, count]) => ({
      value,
      count,
      label: formatLabel(value)
    }))
  };
}
```

### 2. Filter Combinations

```typescript
// Popular filter combinations
const FILTER_PRESETS = {
  'kitchen-countertops': {
    categories: ['countertops'],
    applications: ['kitchen'],
    thickness: ['3cm']
  },
  'bathroom-vanities': {
    categories: ['countertops'],
    applications: ['bathroom'],
    thickness: ['2cm']
  },
  'outdoor-pavers': {
    categories: ['pavers'],
    applications: ['outdoor']
  }
};

// Quick filter buttons
function QuickFilters({ onApply }: { onApply: (filters: FilterState) => void }) {
  return (
    <div className="quick-filters">
      {Object.entries(FILTER_PRESETS).map(([key, preset]) => (
        <button
          key={key}
          onClick={() => onApply(preset as FilterState)}
          className="quick-filter-btn"
        >
          {formatLabel(key)}
        </button>
      ))}
    </div>
  );
}
```

### 3. Smart Sorting

```typescript
const SORT_OPTIONS: Record<SortOption, (a: Product, b: Product) => number> = {
  'featured': (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0),
  'price-asc': (a, b) => parseFloat(a.price) - parseFloat(b.price),
  'price-desc': (a, b) => parseFloat(b.price) - parseFloat(a.price),
  'name-asc': (a, b) => a.name.localeCompare(b.name),
  'name-desc': (a, b) => b.name.localeCompare(a.name),
  'newest': (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  'popularity': (a, b) => b.totalSales - a.totalSales,
  'rating': (a, b) => b.averageRating - a.averageRating
};

function sortProducts(products: Product[], sortBy: SortOption): Product[] {
  const sortFn = SORT_OPTIONS[sortBy];
  return [...products].sort(sortFn);
}
```

## Mobile Filter Considerations

### Bottom Sheet Implementation

```typescript
// MobileFilters.tsx
export function MobileFilters({ 
  isOpen, 
  onClose,
  filters,
  onApply
}: MobileFiltersProps) {
  const [tempFilters, setTempFilters] = useState(filters);
  
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="mobile-filters">
        <header>
          <button onClick={onClose}>Cancel</button>
          <h2>Filters</h2>
          <button onClick={() => setTempFilters({})}>Clear</button>
        </header>
        
        <div className="filter-content">
          {/* Filter sections */}
        </div>
        
        <footer>
          <button 
            onClick={() => {
              onApply(tempFilters);
              onClose();
            }}
            className="apply-filters-btn"
          >
            Apply Filters ({getProductCount(tempFilters)} products)
          </button>
        </footer>
      </div>
    </BottomSheet>
  );
}
```

## Performance Optimizations

### 1. Filter Debouncing

```typescript
const debouncedFilterUpdate = useDebouncedCallback(
  (newFilters: FilterState) => {
    updateFilters(newFilters);
  },
  300
);
```

### 2. Memoization

```typescript
const filteredProducts = useMemo(
  () => applyFilters(products, filters),
  [products, filters]
);

const filterOptions = useMemo(
  () => getAvailableFilters(products, filters),
  [products, filters]
);
```

### 3. Virtual Scrolling

```typescript
// Use virtual scrolling for large result sets
const virtualizer = useVirtual({
  count: filteredProducts.length,
  getScrollElement: () => scrollElementRef.current,
  estimateSize: () => 300, // Estimated product card height
  overscan: 5
});
```

## Analytics Integration

```typescript
// Track filter usage
function trackFilterUsage(filterType: string, value: string) {
  analytics.track('Filter Applied', {
    filterType,
    value,
    currentFilters: filters,
    resultCount: filteredProducts.length
  });
}

// Track popular combinations
function trackFilterCombination(filters: FilterState) {
  const combination = Object.entries(filters)
    .filter(([_, value]) => value && value.length > 0)
    .map(([key, value]) => `${key}:${value}`)
    .join(',');
    
  analytics.track('Filter Combination', {
    combination,
    resultCount: filteredProducts.length
  });
}
```

## Next Steps

1. Implement filter components
2. Add URL state management
3. Create mobile filter UI
4. Add analytics tracking
5. Optimize performance