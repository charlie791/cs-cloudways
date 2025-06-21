# Quote System Components

## Component Hierarchy

```
QuotePage
\u251c\u2500\u2500 QuoteLayout
\u2502   \u251c\u2500\u2500 QuoteSidebar
\u2502   \u2514\u2500\u2500 QuoteContent
\u251c\u2500\u2500 QuoteBuilder
\u2502   \u251c\u2500\u2500 ProductSelector
\u2502   \u251c\u2500\u2500 QuoteLineItems
\u2502   \u251c\u2500\u2500 QuoteSpecifications
\u2502   \u2514\u2500\u2500 QuoteSummary
\u251c\u2500\u2500 QuoteList
\u2502   \u251c\u2500\u2500 QuoteFilters
\u2502   \u251c\u2500\u2500 QuoteCard
\u2502   \u2514\u2500\u2500 QuotePagination
\u2514\u2500\u2500 QuoteDetails
    \u251c\u2500\u2500 QuoteHeader
    \u251c\u2500\u2500 QuoteTimeline
    \u251c\u2500\u2500 QuoteProducts
    \u251c\u2500\u2500 QuoteMessages
    \u2514\u2500\u2500 QuoteActions
```

## Core Components

### 1. QuickQuoteForm

**Purpose**: Simplified quote request for single products

**Props**:
```typescript
interface QuickQuoteFormProps {
  productId?: string;
  productName?: string;
  onSuccess?: (quoteId: string) => void;
  onCancel?: () => void;
}
```

**Features**:
- Pre-populated product information
- Collapsible advanced options
- File upload support
- Form validation
- Loading states

**State**:
- Form data (React Hook Form)
- Upload progress
- Submission status

### 2. QuoteBuilder

**Purpose**: Advanced multi-product quote creation

**Props**:
```typescript
interface QuoteBuilderProps {
  initialQuote?: Quote;
  mode: 'create' | 'edit' | 'clone';
  onSave?: (quote: Quote) => void;
  onSubmit?: (quote: Quote) => void;
}
```

**Features**:
- Product search and add
- Drag-drop reordering
- Room/area grouping
- Auto-save drafts
- Specification matrix
- Running total display

**Sub-components**:
- `ProductSelector`: Search and filter products
- `QuoteLineItems`: List of selected products
- `QuoteSpecifications`: Detailed specs for each item
- `QuoteSummary`: Overview and totals

### 3. QuoteList

**Purpose**: Display and manage user's quotes

**Props**:
```typescript
interface QuoteListProps {
  userId?: string;
  initialFilters?: QuoteFilters;
  viewMode?: 'grid' | 'list';
  onQuoteSelect?: (quote: Quote) => void;
}
```

**Features**:
- Multiple view modes
- Advanced filtering
- Bulk actions
- Infinite scroll
- Real-time updates

**Sub-components**:
- `QuoteFilters`: Status, date, search
- `QuoteCard`: Summary view of quote
- `QuotePagination`: Load more functionality

### 4. QuoteDetails

**Purpose**: Comprehensive quote view and management

**Props**:
```typescript
interface QuoteDetailsProps {
  quoteId: string;
  isEditable?: boolean;
  showMessaging?: boolean;
}
```

**Features**:
- Full quote information
- Status timeline
- Messaging interface
- Action buttons
- Print/PDF view
- Revision history

**Sub-components**:
- `QuoteHeader`: Title, status, metadata
- `QuoteTimeline`: Visual status progression
- `QuoteProducts`: Detailed product list
- `QuoteMessages`: Communication thread
- `QuoteActions`: Accept, reject, revise

### 5. QuoteStatus

**Purpose**: Visual status indicator

**Props**:
```typescript
interface QuoteStatusProps {
  status: QuoteStatus;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  animated?: boolean;
}
```

**Features**:
- Color-coded badges
- Progress indicators
- Tooltip descriptions
- Animated transitions

## Shared Components

### QuoteProductCard

**Purpose**: Reusable product display in quotes

```typescript
interface QuoteProductCardProps {
  product: Product;
  quantity: number;
  specifications?: ProductSpecs;
  isEditable?: boolean;
  onUpdate?: (updates: Partial<QuoteItem>) => void;
  onRemove?: () => void;
}
```

### QuoteFileUpload

**Purpose**: Handle file attachments

```typescript
interface QuoteFileUploadProps {
  maxFiles?: number;
  maxSize?: number;
  acceptedTypes?: string[];
  onUpload?: (files: File[]) => void;
  existingFiles?: UploadedFile[];
}
```

### QuotePriceDisplay

**Purpose**: Consistent price formatting

```typescript
interface QuotePriceDisplayProps {
  amount: number;
  label?: string;
  showCurrency?: boolean;
  size?: 'sm' | 'md' | 'lg';
  isEstimate?: boolean;
}
```

## Component Guidelines

### State Management
- Use React Hook Form for all forms
- Leverage Apollo cache for quote data
- Context for complex builder state
- Local state for UI-only concerns

### Error Handling
- Display inline validation errors
- Toast notifications for actions
- Fallback UI for failed loads
- Retry mechanisms for submissions

### Performance
- Lazy load heavy components
- Virtualize long lists
- Debounce search inputs
- Optimistic UI updates

### Accessibility
- Proper ARIA labels
- Keyboard navigation
- Screen reader support
- Focus management

### Testing Strategy
- Unit tests for logic
- Integration tests for forms
- E2E tests for critical flows
- Visual regression tests

## Styling Approach

### Design Tokens
```scss
// Quote-specific tokens
--quote-status-draft: #gray-400;
--quote-status-submitted: #blue-500;
--quote-status-review: #yellow-500;
--quote-status-quoted: #purple-500;
--quote-status-accepted: #green-500;
--quote-status-rejected: #red-500;
```

### Component Classes
```css
.quote-container
.quote-header
.quote-content
.quote-sidebar
.quote-actions
.quote-status-badge
.quote-timeline
.quote-message-thread
```

### Responsive Breakpoints
- Mobile: Full-width stacked layout
- Tablet: Two-column layout
- Desktop: Three-column with sidebar

## Implementation Notes

1. **Start Simple**: Build QuickQuoteForm first
2. **Reuse Patterns**: Extract common patterns early
3. **Mock Data**: Use realistic data for development
4. **Progressive Enhancement**: Basic functionality first
5. **User Testing**: Get feedback on each component

## Next Steps

1. Create TypeScript interfaces in `types/quote.ts`
2. Set up Quote context provider
3. Build QuickQuoteForm component
4. Implement quote submission flow
5. Add real-time status updates