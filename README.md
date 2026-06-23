# Dell Inventory Management System

## Project Title
**Dell Inventory Management System** — A fully functional, browser-based inventory dashboard built with pure HTML5, CSS3, and Vanilla JavaScript.

---

## Introduction

This project is a front-end inventory management system designed for a hypothetical Dell e-commerce platform. It allows an administrator to view, search, add, update, and delete Dell laptop products from a catalog maintained entirely in JavaScript arrays — no database, no back-end, no external libraries required.

The system provides a polished, Dell-branded user interface with real-time statistics, full CRUD (Create, Read, Update, Delete) operations, and responsive layouts that work on desktop, tablet, and mobile screens.

---

## Objectives

1. Apply core JavaScript concepts: arrays, objects, functions, loops, and conditionals.
2. Perform complete CRUD operations on an in-memory data structure.
3. Integrate HTML, CSS, and JavaScript to build an interactive UI.
4. Implement client-side form validation and user feedback.
5. Demonstrate DOM manipulation and event-driven programming.
6. Produce production-quality, well-documented, maintainable code.

---

## Features

| Feature | Description |
|---|---|
| Dashboard Statistics | Live count of Total, In Stock, and Out of Stock products |
| Display Inventory | Table view with serial number, product name, status badge, and action buttons |
| Check Availability | Case-insensitive search with three distinct response messages |
| Add Product | Add new products with validation (empty name, duplicates) |
| Update Product | Edit an existing product's name or stock status |
| Delete Product | Remove a product after a confirmation dialog |
| Responsive Design | Adapts cleanly to desktop, tablet, and mobile viewports |
| Keyboard Support | Enter key triggers Search and Add actions |
| Auto-dismiss Messages | Feedback messages disappear after 5 seconds |

---

## Technologies Used

- **HTML5** — Semantic document structure
- **CSS3** — Custom properties (variables), Flexbox, CSS Grid, responsive media queries
- **Vanilla JavaScript (ES5-compatible)** — Arrays, DOM manipulation, event listeners

No frameworks, no libraries, no databases.

---

## Folder Structure

```
Dell-Inventory-System/
│
├── index.html       ← Application shell — all HTML markup
├── style.css        ← All visual styling, layout, and responsive rules
├── script.js        ← All application logic and data
├── README.md        ← Project documentation (this file)
└── TestCases.md     ← Manual test case specifications
```

---

## How To Run

1. Download or clone the project folder.
2. Open the `Dell-Inventory-System/` folder in your file explorer.
3. Double-click `index.html` **or** open it in any modern browser (Chrome, Firefox, Edge, Safari).
4. The application loads immediately — no installation, build step, or server required.

> **Tip:** For the best experience, use a recent version of Google Chrome or Microsoft Edge.

---

## Functional Requirements

### 1 — Display Inventory
All products are rendered in a table with columns: **#**, **Product Name**, **Status**, **Actions**.  
The table refreshes automatically after every add, update, or delete operation.

### 2 — Check Product Availability
A search input and button let users look up any product by name (case-insensitive).  
Possible responses:
- `Product is available.` — exists and is in stock
- `Product is currently out of stock.` — exists but not in stock
- `Product not found.` — no match in inventory

### 3 — Add Product
Admin enters a product name and selects a stock status from a dropdown.  
Validation prevents empty names and duplicate entries.

### 4 — Update Product
Clicking **Edit** on any row populates the Update section.  
Admin changes the name or status and clicks **Update Product**.  
Validation prevents clearing the name or creating a duplicate.

### 5 — Delete Product
Clicking **Delete** shows a browser `confirm()` dialog.  
Confirming removes the product and refreshes the table.

---

## JavaScript Functions

| Function | Purpose |
|---|---|
| `displayInventory()` | Renders all inventory items to the HTML table |
| `updateStatistics()` | Counts and updates the three dashboard stat cards |
| `checkAvailability()` | Searches inventory and displays availability message |
| `addProduct()` | Validates and adds a new product to the array |
| `populateUpdateForm(index)` | Loads a row's data into the Update form fields |
| `updateProduct()` | Validates and applies edits to an existing product |
| `deleteProduct(index)` | Confirms and removes a product from the array |
| `clearForm()` | Resets all Update section fields |
| `showMessage(element, text, type)` | Displays a styled, auto-dismissing feedback message |

---

## Testing

Manual test cases are documented in `TestCases.md`.  
Tests cover:
- Display Inventory
- Check Availability (in stock, out of stock, not found)
- Add Product (valid, empty, duplicate)
- Update Product (valid, empty, duplicate name)
- Delete Product (confirm, cancel)
- Input Validation

---

## Learning Outcomes

After completing this project, a developer will have demonstrated:

- **JavaScript arrays** — used as the sole data store; products are added, read, mutated, and removed using native array methods (`push`, `splice`) and `for` loops.
- **JavaScript functions** — logic is separated into focused, reusable, named functions (no arrow functions, per requirements).
- **Event handling** — `addEventListener` is used for all button clicks, keyboard events, and the `DOMContentLoaded` lifecycle event.
- **CRUD operations** — full Create, Read, Update, Delete cycle on in-memory data.
- **HTML/CSS/JavaScript integration** — strict separation: markup in `index.html`, styles in `style.css`, logic in `script.js`.
- **Conditional statements** — `if / else if / else` chains power availability checks and validation.
- **Problem solving** — edge cases (empty input, duplicates, accidental deletion, case sensitivity) are handled gracefully.

---

## Future Improvements

- **Persistent storage** — Saving inventory to `localStorage` or a backend API so data survives page refreshes.
- **Search-as-you-type** — Live filtering of the table while the user types in the search box.
- **Sorting & filtering** — Allow sorting by name or status, and filtering to show only in-stock or out-of-stock items.
- **Bulk import** — Accept a CSV upload to populate inventory in batch.
- **Pagination** — For large catalogs, add page controls to the table.
- **Unit tests** — Automated tests using Jest or a similar framework.
- **Price & SKU fields** — Extend the product object with additional attributes.

---

## Conclusion

The Dell Inventory Management System demonstrates a complete, single-page web application built without any external dependencies. It achieves clean separation of concerns (HTML for structure, CSS for presentation, JavaScript for behaviour), proper validation, real-time UI updates, and a professional, branded interface — all fundamentals of quality front-end development.