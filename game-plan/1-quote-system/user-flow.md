# Quote System User Flows

## Flow Diagrams

### 1. Quick Quote Flow (From Product Page)

```
Product Page
    \u2502
    \u2502 [Request Quote Button]
    \u2193
Quick Quote Modal
    \u2502
    \u251c\u2500\u2500 Product Info (Pre-filled)
    \u251c\u2500\u2500 Quantity & Specifications
    \u251c\u2500\u2500 Project Details
    \u251c\u2500\u2500 Contact Information
    \u2514\u2500\u2500 Optional Attachments
    \u2502
    \u2502 [Submit Quote]
    \u2193
Confirmation Screen
    \u2502
    \u251c\u2500\u2500 Quote Number
    \u251c\u2500\u2500 Next Steps
    \u2514\u2500\u2500 [View Quote] [Continue Shopping]
```

### 2. Quote Builder Flow (Complex Quotes)

```
Homepage/Nav
    \u2502
    \u2502 [Start Quote]
    \u2193
Quote Builder
    \u2502
    \u251c\u2500\u2500 Step 1: Project Overview
    \u2502   \u251c\u2500\u2500 Project Name
    \u2502   \u251c\u2500\u2500 Project Type
    \u2502   \u251c\u2500\u2500 Timeline
    \u2502   \u2514\u2500\u2500 Budget Range
    \u2502
    \u251c\u2500\u2500 Step 2: Add Products
    \u2502   \u251c\u2500\u2500 Search/Browse
    \u2502   \u251c\u2500\u2500 Add to Quote
    \u2502   \u251c\u2500\u2500 Specify Quantity
    \u2502   \u2514\u2500\u2500 Add Specifications
    \u2502
    \u251c\u2500\u2500 Step 3: Project Details
    \u2502   \u251c\u2500\u2500 Room/Area Assignment
    \u2502   \u251c\u2500\u2500 Upload Floor Plans
    \u2502   \u2514\u2500\u2500 Additional Notes
    \u2502
    \u2514\u2500\u2500 Step 4: Review & Submit
        \u251c\u2500\u2500 Quote Summary
        \u251c\u2500\u2500 Contact Info
        \u2514\u2500\u2500 [Save Draft] [Submit Quote]
```

### 3. Quote Management Flow

```
User Dashboard
    \u2502
    \u2502 [My Quotes]
    \u2193
Quote List
    \u2502
    \u251c\u2500\u2500 Filters (Status, Date, Search)
    \u251c\u2500\u2500 Quote Cards
    \u2502   \u251c\u2500\u2500 Quote #12345
    \u2502   \u251c\u2500\u2500 Status Badge
    \u2502   \u251c\u2500\u2500 Items Count
    \u2502   \u2514\u2500\u2500 Last Updated
    \u2502
    \u2502 [Select Quote]
    \u2193
Quote Details
    \u2502
    \u251c\u2500\u2500 Quote Header
    \u251c\u2500\u2500 Status Timeline
    \u251c\u2500\u2500 Products List
    \u251c\u2500\u2500 Messages Thread
    \u251c\u2500\u2500 Attachments
    \u2514\u2500\u2500 Actions
        \u251c\u2500\u2500 [Edit] (if draft)
        \u251c\u2500\u2500 [Clone]
        \u251c\u2500\u2500 [Download PDF]
        \u2514\u2500\u2500 [Accept/Reject] (if quoted)
```

## Wireframes

### Quick Quote Modal

```
\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  Request Quote for: Calacatta Gold    [X] \u2502
\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502                                            \u2502
\u2502  [\u2588] Product Image                         \u2502
\u2502      SKU: CAL-001                          \u2502
\u2502      Category: Marble                      \u2502
\u2502                                            \u2502
\u2502  Quantity: [____50____] sq ft              \u2502
\u2502                                            \u2502
\u2502  Finish:   (\u25cf) Polished  ( ) Honed        \u2502
\u2502  Thickness: (\u25cf) 3cm      ( ) 2cm          \u2502
\u2502                                            \u2502
\u2502  Project Timeline:                         \u2502
\u2502  [Select Timeline      \u25bc]                  \u2502
\u2502                                            \u2502
\u2502  Additional Notes:                         \u2502
\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  \u2502                                      \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u2502                                            \u2502
\u2502  [\u2193] Upload Files (Optional)               \u2502
\u2502                                            \u2502
\u2502  --- Contact Information ---               \u2502
\u2502                                            \u2502
\u2502  Name:  [______________] [______________]  \u2502
\u2502  Email: [_____________________________]   \u2502
\u2502  Phone: [_____________________________]   \u2502
\u2502                                            \u2502
\u2502  [Cancel]              [Submit Quote \u2192]    \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
```

### Quote Builder - Product Selection

```
\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  Step 2 of 4: Select Products                        \u2502
\u2502  [1]\u2500\u2500[\u25cf]\u2500\u2500[3]\u2500\u2500[4]                                  \u2502
\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502                                                      \u2502
\u2502  Search: [_________________] [Filter \u25bc]             \u2502
\u2502                                                      \u2502
\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  \u2502 Available Products                  Your Quote \u2502
\u2502  \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502 Kitchen (2 items)        \u2502
\u2502  \u2502 \u2502[\u2588] Calacatta Gold     \u2502 \u2502 \u2022 Calacatta Gold        \u2502
\u2502  \u2502 \u2502    Marble             \u2502 \u2502   50 sqft @ 3cm         \u2502
\u2502  \u2502 \u2502    $85/sqft           \u2502 \u2502 \u2022 Black Galaxy          \u2502
\u2502  \u2502 \u2502    [Add to Quote +]   \u2502 \u2502   30 sqft @ 2cm         \u2502
\u2502  \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502                          \u2502
\u2502  \u2502                           \u2502 Master Bath (1 item)     \u2502
\u2502  \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502 \u2022 Carrara White         \u2502
\u2502  \u2502 \u2502[\u2588] Black Galaxy       \u2502 \u2502   45 sqft @ 3cm         \u2502
\u2502  \u2502 \u2502    Granite            \u2502 \u2502                          \u2502
\u2502  \u2502 \u2502    $65/sqft           \u2502 \u2502 [+ Add Room]             \u2502
\u2502  \u2502 \u2502    [Add to Quote +]   \u2502 \u2502                          \u2502
\u2502  \u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502 Subtotal: 125 sqft       \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u2502                                                      \u2502
\u2502  [← Back]                    [Save Draft] [Next →]   \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
```

### Quote Details Page

```
\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  [\u2190] Back to Quotes                                  \u2502
\u2502                                                      \u2502
\u2502  Quote #Q-2024-0156            [Status: In Review]  \u2502
\u2502  Kitchen & Bath Renovation      [Download PDF] [Clone] \u2502
\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502                                                      \u2502
\u2502  Timeline:  [\u25cf]\u2500\u2500\u2500\u2500\u2500[\u25cf]\u2500\u2500\u2500\u2500\u2500[\u25cf]\u2500\u2500\u2500\u2500\u2500[ ]\u2500\u2500\u2500\u2500\u2500[ ]         \u2502
\u2502           Created  Submitted  In Review              \u2502
\u2502           Dec 15   Dec 16     Dec 17                 \u2502
\u2502                                                      \u2502
\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  \u2502 Products (3 items)                 \u2502 Messages      \u2502
\u2502  \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  \u2502 1. Calacatta Gold Marble           \u2502 [JD] John Doe \u2502
\u2502  \u2502    Kitchen - 50 sqft @ 3cm         \u2502 Thanks for... \u2502
\u2502  \u2502    Polished finish                 \u2502 2 hours ago   \u2502
\u2502  \u2502                                    \u2502               \u2502
\u2502  \u2502 2. Black Galaxy Granite            \u2502 [ST] Sales    \u2502
\u2502  \u2502    Kitchen - 30 sqft @ 2cm         \u2502 Hi John, I've \u2502
\u2502  \u2502    Polished finish                 \u2502 1 hour ago    \u2502
\u2502  \u2502                                    \u2502               \u2502
\u2502  \u2502 3. Carrara White Marble            \u2502 [Type message]\u2502
\u2502  \u2502    Master Bath - 45 sqft @ 3cm     \u2502 [___________] \u2502
\u2502  \u2502    Honed finish                    \u2502 [Send]        \u2502
\u2502  \u2502                                    \u2502               \u2502
\u2502  \u2502 Total: 125 sqft                    \u2502               \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u2502                                                      \u2502
\u2502  Attachments: floor-plan.pdf, inspiration-1.jpg      \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
```

## Mobile Responsive Designs

### Mobile Quote List
```
\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 My Quotes         [+] \u2502
\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 [All] [Active] [Draft] \u2502
\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502
\u2502 \u2502 Q-2024-0156    > \u2502 \u2502
\u2502 \u2502 Kitchen Renov... \u2502 \u2502
\u2502 \u2502 [In Review]      \u2502 \u2502
\u2502 \u2502 3 items \u2022 Dec 17 \u2502 \u2502
\u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502
\u2502                        \u2502
\u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u2502
\u2502 \u2502 Q-2024-0155    > \u2502 \u2502
\u2502 \u2502 Bathroom Update  \u2502 \u2502
\u2502 \u2502 [Quoted]         \u2502 \u2502
\u2502 \u2502 2 items \u2022 Dec 15 \u2502 \u2502
\u2502 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
```

## Interaction Details

### Form Validation
- Real-time validation for email/phone
- Quantity must be > 0
- At least one product required
- File size limit: 10MB per file
- Accepted file types: PDF, JPG, PNG

### Loading States
- Skeleton screens for lists
- Progress bar for file uploads
- Spinner for form submissions
- Optimistic updates for messages

### Error Handling
- Inline error messages
- Toast notifications for actions
- Retry buttons for failed requests
- Offline mode with sync queue

### Keyboard Navigation
- Tab through form fields
- Enter to submit forms
- Escape to close modals
- Arrow keys in product lists

## Accessibility Requirements

### ARIA Labels
```html
<button aria-label=\"Request quote for Calacatta Gold marble\">
  Request Quote
</button>

<div role=\"status\" aria-live=\"polite\">
  Quote submitted successfully
</div>
```

### Focus Management
- Focus trap in modals
- Return focus on close
- Skip links for navigation
- Visible focus indicators

### Screen Reader Support
- Descriptive headings
- Form field labels
- Status announcements
- Alternative text for images

## Performance Considerations

### Lazy Loading
- Load products on scroll
- Defer message history
- Progressive image loading
- Code split by route

### Caching Strategy
- Cache product images
- Store draft quotes locally
- Prefetch common queries
- Background sync for updates

## Next Steps

1. Create high-fidelity mockups
2. Build interactive prototypes
3. Conduct user testing
4. Iterate based on feedback
5. Implement components