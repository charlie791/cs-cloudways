# Quote System API Endpoints

## GraphQL Schema Extensions

### Types

```graphql
type Quote {
  id: ID!
  quoteNumber: String!
  status: QuoteStatus!
  customer: Customer!
  items: [QuoteItem!]!
  projectDetails: ProjectDetails
  totalAmount: Float
  validUntil: String
  messages: [QuoteMessage!]!
  attachments: [Attachment!]!
  createdAt: String!
  updatedAt: String!
  submittedAt: String
  quotedAt: String
  timeline: [QuoteEvent!]!
}

type QuoteItem {
  id: ID!
  product: Product!
  quantity: Float!
  unit: String!
  specifications: JSON
  notes: String
  pricePerUnit: Float
  totalPrice: Float
}

type ProjectDetails {
  projectName: String
  projectType: ProjectType
  timeline: String
  budget: BudgetRange
  roomsAreas: [RoomArea!]
  additionalNotes: String
}

type Customer {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  phone: String
  company: String
  address: Address
}

type QuoteMessage {
  id: ID!
  author: User!
  content: String!
  attachments: [Attachment!]
  createdAt: String!
  isInternal: Boolean!
}

type Attachment {
  id: ID!
  filename: String!
  url: String!
  mimeType: String!
  size: Int!
  uploadedBy: User!
  uploadedAt: String!
}

type QuoteEvent {
  id: ID!
  type: QuoteEventType!
  description: String!
  user: User
  timestamp: String!
  metadata: JSON
}

enum QuoteStatus {
  DRAFT
  SUBMITTED
  IN_REVIEW
  QUOTED
  ACCEPTED
  REJECTED
  EXPIRED
  CANCELLED
}

enum QuoteEventType {
  CREATED
  UPDATED
  SUBMITTED
  REVIEWED
  QUOTED
  MESSAGE_SENT
  FILE_UPLOADED
  STATUS_CHANGED
}

enum ProjectType {
  KITCHEN
  BATHROOM
  FLOORING
  OUTDOOR
  COMMERCIAL
  OTHER
}

enum BudgetRange {
  UNDER_5K
  RANGE_5K_10K
  RANGE_10K_25K
  RANGE_25K_50K
  OVER_50K
}
```

### Queries

```graphql
# Get single quote by ID
query GetQuote($id: ID!) {
  quote(id: $id) {
    id
    quoteNumber
    status
    customer {
      id
      firstName
      lastName
      email
      phone
      company
    }
    items {
      id
      product {
        id
        name
        slug
        sku
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
      quantity
      unit
      specifications
      notes
      pricePerUnit
      totalPrice
    }
    projectDetails {
      projectName
      projectType
      timeline
      budget
      roomsAreas {
        name
        squareFootage
      }
      additionalNotes
    }
    totalAmount
    validUntil
    messages {
      id
      author {
        name
        avatar {
          url
        }
      }
      content
      attachments {
        id
        filename
        url
      }
      createdAt
    }
    attachments {
      id
      filename
      url
      mimeType
      size
    }
    timeline {
      id
      type
      description
      user {
        name
      }
      timestamp
    }
    createdAt
    updatedAt
    submittedAt
    quotedAt
  }
}

# Get user's quotes with filtering
query GetMyQuotes(
  $userId: ID!
  $status: [QuoteStatus!]
  $dateFrom: String
  $dateTo: String
  $search: String
  $first: Int = 20
  $after: String
  $orderBy: QuoteOrderByInput
) {
  quotes(
    where: {
      customerId: $userId
      status: $status
      createdAt: { from: $dateFrom, to: $dateTo }
      search: $search
    }
    first: $first
    after: $after
    orderBy: $orderBy
  ) {
    pageInfo {
      hasNextPage
      endCursor
      total
    }
    edges {
      node {
        id
        quoteNumber
        status
        projectDetails {
          projectName
        }
        items {
          id
        }
        totalAmount
        createdAt
        updatedAt
      }
    }
  }
}

# Get quote statistics
query GetQuoteStats($userId: ID!) {
  quoteStats(userId: $userId) {
    totalQuotes
    draftQuotes
    activeQuotes
    completedQuotes
    totalValue
    averageValue
  }
}
```

### Mutations

```graphql
# Create new quote
mutation CreateQuote($input: CreateQuoteInput!) {
  createQuote(input: $input) {
    quote {
      id
      quoteNumber
      status
    }
    success
    message
  }
}

# Update existing quote
mutation UpdateQuote($id: ID!, $input: UpdateQuoteInput!) {
  updateQuote(id: $id, input: $input) {
    quote {
      id
      status
      updatedAt
    }
    success
    message
  }
}

# Submit quote for review
mutation SubmitQuote($id: ID!, $input: SubmitQuoteInput) {
  submitQuote(id: $id, input: $input) {
    quote {
      id
      status
      submittedAt
    }
    success
    message
  }
}

# Add message to quote
mutation AddQuoteMessage($quoteId: ID!, $input: QuoteMessageInput!) {
  addQuoteMessage(quoteId: $quoteId, input: $input) {
    message {
      id
      content
      createdAt
    }
    success
  }
}

# Upload attachment
mutation UploadQuoteAttachment($quoteId: ID!, $file: Upload!) {
  uploadQuoteAttachment(quoteId: $quoteId, file: $file) {
    attachment {
      id
      filename
      url
    }
    success
    message
  }
}

# Delete quote (draft only)
mutation DeleteQuote($id: ID!) {
  deleteQuote(id: $id) {
    success
    message
  }
}

# Clone existing quote
mutation CloneQuote($id: ID!) {
  cloneQuote(id: $id) {
    quote {
      id
      quoteNumber
    }
    success
    message
  }
}
```

### Input Types

```graphql
input CreateQuoteInput {
  items: [QuoteItemInput!]!
  projectDetails: ProjectDetailsInput
  customer: CustomerInput!
  attachments: [ID!]
  notes: String
}

input QuoteItemInput {
  productId: ID!
  quantity: Float!
  unit: String!
  specifications: JSON
  notes: String
}

input ProjectDetailsInput {
  projectName: String
  projectType: ProjectType
  timeline: String
  budget: BudgetRange
  roomsAreas: [RoomAreaInput!]
  additionalNotes: String
}

input CustomerInput {
  firstName: String!
  lastName: String!
  email: String!
  phone: String
  company: String
  addressLine1: String
  addressLine2: String
  city: String
  state: String
  zipCode: String
}

input UpdateQuoteInput {
  items: [QuoteItemInput!]
  projectDetails: ProjectDetailsInput
  customer: CustomerInput
  notes: String
}

input SubmitQuoteInput {
  finalNotes: String
  preferredContactMethod: ContactMethod
}

input QuoteMessageInput {
  content: String!
  attachmentIds: [ID!]
}

input QuoteOrderByInput {
  field: QuoteOrderByField!
  direction: OrderDirection!
}

enum QuoteOrderByField {
  CREATED_AT
  UPDATED_AT
  QUOTE_NUMBER
  TOTAL_AMOUNT
  STATUS
}

enum OrderDirection {
  ASC
  DESC
}

enum ContactMethod {
  EMAIL
  PHONE
  TEXT
}
```

### Subscriptions (Future)

```graphql
# Real-time quote updates
subscription OnQuoteUpdate($quoteId: ID!) {
  quoteUpdate(quoteId: $quoteId) {
    quote {
      id
      status
      messages {
        id
        content
        author {
          name
        }
        createdAt
      }
    }
    event {
      type
      description
      timestamp
    }
  }
}
```

## REST Endpoints (File Uploads)

### Upload Quote Attachment
```
POST /api/quotes/{quoteId}/attachments
Content-Type: multipart/form-data

Body:
- file: File
- description: String (optional)

Response:
{
  "success": true,
  "attachment": {
    "id": "123",
    "filename": "floor-plan.pdf",
    "url": "/uploads/quotes/123/floor-plan.pdf",
    "size": 1024000
  }
}
```

## Implementation Notes

### Authentication
- All quote endpoints require authentication
- Guest quotes stored in session until account creation
- JWT token in Authorization header

### Permissions
- Users can only view/edit their own quotes
- Sales team can view all quotes
- Admin has full access

### Caching Strategy
- Cache quote list for 5 minutes
- Invalidate on any quote mutation
- Real-time updates bypass cache

### Error Codes
```typescript
enum QuoteErrorCode {
  QUOTE_NOT_FOUND = 'QUOTE_NOT_FOUND',
  UNAUTHORIZED = 'UNAUTHORIZED',
  INVALID_STATUS_TRANSITION = 'INVALID_STATUS_TRANSITION',
  PRODUCT_NOT_AVAILABLE = 'PRODUCT_NOT_AVAILABLE',
  INVALID_FILE_TYPE = 'INVALID_FILE_TYPE',
  FILE_TOO_LARGE = 'FILE_TOO_LARGE',
  QUOTE_EXPIRED = 'QUOTE_EXPIRED'
}
```

### Rate Limiting
- 10 quotes per hour per user
- 50 messages per quote per day
- 100MB total attachments per quote

## Testing Queries

### Create Quote Test
```graphql
mutation {
  createQuote(input: {
    items: [{
      productId: "123",
      quantity: 50,
      unit: "sqft",
      specifications: {
        finish: "polished",
        thickness: "3cm"
      }
    }],
    projectDetails: {
      projectName: "Kitchen Renovation",
      projectType: KITCHEN,
      timeline: "2-3 months",
      budget: RANGE_10K_25K
    },
    customer: {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "555-0123"
    }
  }) {
    quote {
      id
      quoteNumber
    }
    success
    message
  }
}
```

## Next Steps

1. Extend WordPress GraphQL schema
2. Implement resolver functions
3. Set up file upload handling
4. Configure caching policies
5. Add webhook notifications