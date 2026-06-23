# Dell Inventory Management System — Test Cases

**Version:** 1.0  
**Testing Type:** Manual  
**Tester:** College Assignment Submission  

---

## How To Run Tests

1. Open `index.html` in a browser.
2. Follow each test step exactly as written.
3. Compare the actual result to the expected result.
4. Mark each test **PASS** or **FAIL**.

---

## Section 1 — Display Inventory Tests

---

### Test 1.1 — Load Application Displays All Products

| Field | Detail |
|---|---|
| **Test ID** | TC-1.1 |
| **Feature** | Display Inventory |
| **Pre-condition** | `index.html` is not yet opened |

**Steps:**
1. Open `index.html` in a browser.

**Expected Result:**
- The page loads without errors.
- The inventory table displays exactly **7 rows** with the following products in order:
  1. Dell XPS 13 — In Stock
  2. Dell XPS 15 — In Stock
  3. Dell Inspiron 15 — In Stock
  4. Dell Latitude 7440 — Out of Stock
  5. Dell Alienware M18 — In Stock
  6. Dell G15 Gaming Laptop — Out of Stock
  7. Dell Precision 5680 — In Stock
- Each row has an **Edit** and **Delete** button.
- Dashboard statistics show: **Total: 7 | In Stock: 5 | Out of Stock: 2**

---

### Test 1.2 — New Product Appears After Adding

| Field | Detail |
|---|---|
| **Test ID** | TC-1.2 |
| **Feature** | Display Inventory — after Add |
| **Pre-condition** | Application loaded (Test 1.1 passed) |

**Steps:**
1. Enter `Dell Vostro 15` in the **Add New Product** name field.
2. Select **In Stock** from the dropdown.
3. Click **Add Product**.

**Expected Result:**
- A success message appears: *"Dell Vostro 15" has been added successfully.*
- The inventory table now shows **8 rows**.
- `Dell Vostro 15` appears as the last row with status **In Stock**.
- Dashboard updates to: **Total: 8 | In Stock: 6 | Out of Stock: 2**

---

### Test 1.3 — Product Disappears After Deletion

| Field | Detail |
|---|---|
| **Test ID** | TC-1.3 |
| **Feature** | Display Inventory — after Delete |
| **Pre-condition** | Application loaded with 7 default products |

**Steps:**
1. Click **Delete** next to `Dell XPS 13` (row 1).
2. Click **OK** in the confirmation dialog.

**Expected Result:**
- The confirmation dialog appears with the product name.
- After confirming, `Dell XPS 13` is no longer in the table.
- The table shows **6 rows**.
- Dashboard updates to: **Total: 6 | In Stock: 4 | Out of Stock: 2**
- A notification message appears confirming the deletion.

---

## Section 2 — Check Availability Tests

---

### Test 2.1 — Search In-Stock Product

| Field | Detail |
|---|---|
| **Test ID** | TC-2.1 |
| **Feature** | Check Availability |
| **Pre-condition** | Application loaded with default inventory |

**Steps:**
1. Type `Dell XPS 13` in the **Check Product Availability** input.
2. Click **Check Availability**.

**Expected Result:**
- Message displayed: *"Dell XPS 13" — Product is available.*
- Message box uses a **green / success** style.

---

### Test 2.2 — Search Out-Of-Stock Product

| Field | Detail |
|---|---|
| **Test ID** | TC-2.2 |
| **Feature** | Check Availability |
| **Pre-condition** | Application loaded with default inventory |

**Steps:**
1. Type `Dell Latitude 7440` in the search input.
2. Click **Check Availability**.

**Expected Result:**
- Message displayed: *"Dell Latitude 7440" — Product is currently out of stock.*
- Message box uses a **yellow / warning** style.

---

### Test 2.3 — Search Non-Existent Product

| Field | Detail |
|---|---|
| **Test ID** | TC-2.3 |
| **Feature** | Check Availability |
| **Pre-condition** | Application loaded with default inventory |

**Steps:**
1. Type `Dell Studio 15` in the search input.
2. Click **Check Availability**.

**Expected Result:**
- Message displayed: *"Dell Studio 15" — Product not found.*
- Message box uses a **red / error** style.

---

### Test 2.4 — Case-Insensitive Search

| Field | Detail |
|---|---|
| **Test ID** | TC-2.4 |
| **Feature** | Check Availability — case insensitivity |
| **Pre-condition** | Application loaded with default inventory |

**Steps:**
1. Type `dell xps 13` (all lowercase) in the search input.
2. Click **Check Availability**.

**Expected Result:**
- Message displayed: *"Dell XPS 13" — Product is available.*
- The search is case-insensitive and finds the product correctly.

---

### Test 2.5 — Search With Empty Input

| Field | Detail |
|---|---|
| **Test ID** | TC-2.5 |
| **Feature** | Check Availability — validation |
| **Pre-condition** | Application loaded |

**Steps:**
1. Leave the search input blank.
2. Click **Check Availability**.

**Expected Result:**
- Error message: *Please enter a product name to search.*
- No inventory changes occur.

---

## Section 3 — Add Product Tests

---

### Test 3.1 — Add Valid Product

| Field | Detail |
|---|---|
| **Test ID** | TC-3.1 |
| **Feature** | Add Product |
| **Pre-condition** | Application loaded |

**Steps:**
1. Enter `Dell Vostro 14` in the Add Product name field.
2. Select **Out of Stock** from the dropdown.
3. Click **Add Product**.

**Expected Result:**
- Success message: *"Dell Vostro 14" has been added successfully.*
- Table shows the new product with **Out of Stock** status.
- Dashboard out-of-stock counter increments by 1.
- Name input field clears after adding.

---

### Test 3.2 — Add Product With Empty Name

| Field | Detail |
|---|---|
| **Test ID** | TC-3.2 |
| **Feature** | Add Product — validation |
| **Pre-condition** | Application loaded |

**Steps:**
1. Leave the name field blank.
2. Click **Add Product**.

**Expected Result:**
- Error message: *Product name cannot be empty.*
- Inventory is unchanged.
- Focus moves to the name input.

---

### Test 3.3 — Add Duplicate Product

| Field | Detail |
|---|---|
| **Test ID** | TC-3.3 |
| **Feature** | Add Product — duplicate prevention |
| **Pre-condition** | Application loaded with default inventory |

**Steps:**
1. Enter `Dell XPS 15` in the Add Product name field.
2. Click **Add Product**.

**Expected Result:**
- Error message: *"Dell XPS 15" already exists in the inventory.*
- No duplicate is added to the table.
- Inventory count stays the same.

---

### Test 3.4 — Add Duplicate With Different Case

| Field | Detail |
|---|---|
| **Test ID** | TC-3.4 |
| **Feature** | Add Product — case-insensitive duplicate check |
| **Pre-condition** | Application loaded with default inventory |

**Steps:**
1. Enter `dell xps 15` (lowercase) in the Add Product name field.
2. Click **Add Product**.

**Expected Result:**
- Error message: *already exists in the inventory.*
- The duplicate check works regardless of letter case.

---

## Section 4 — Update Product Tests

---

### Test 4.1 — Edit Populates Update Form

| Field | Detail |
|---|---|
| **Test ID** | TC-4.1 |
| **Feature** | Update Product — form population |
| **Pre-condition** | Application loaded |

**Steps:**
1. Click **Edit** on the `Dell Inspiron 15` row.

**Expected Result:**
- The Update section name field shows `Dell Inspiron 15`.
- The status dropdown shows `In Stock`.
- Page scrolls to / focuses the update name field.

---

### Test 4.2 — Update Product Name And Status

| Field | Detail |
|---|---|
| **Test ID** | TC-4.2 |
| **Feature** | Update Product |
| **Pre-condition** | TC-4.1 performed (Edit populated for Dell Inspiron 15) |

**Steps:**
1. Change the name field to `Dell Inspiron 16`.
2. Change the dropdown to `Out of Stock`.
3. Click **Update Product**.

**Expected Result:**
- Success message: *"Dell Inspiron 16" has been updated successfully.*
- The row in the table now reads `Dell Inspiron 16` with status **Out of Stock**.
- Update form fields clear automatically.
- Dashboard out-of-stock counter increases by 1.

---

### Test 4.3 — Update With Empty Name

| Field | Detail |
|---|---|
| **Test ID** | TC-4.3 |
| **Feature** | Update Product — validation |
| **Pre-condition** | An Edit has been clicked to populate the form |

**Steps:**
1. Clear the name field completely.
2. Click **Update Product**.

**Expected Result:**
- Error message: *Product name cannot be empty.*
- Inventory entry is unchanged.

---

### Test 4.4 — Update With Duplicate Name

| Field | Detail |
|---|---|
| **Test ID** | TC-4.4 |
| **Feature** | Update Product — duplicate validation |
| **Pre-condition** | Edit clicked on `Dell XPS 13` |

**Steps:**
1. Change the name field to `Dell XPS 15` (an existing product).
2. Click **Update Product**.

**Expected Result:**
- Error message: *Another product with the name "Dell XPS 15" already exists.*
- The original product `Dell XPS 13` is unchanged.

---

### Test 4.5 — Update Without Selecting A Row

| Field | Detail |
|---|---|
| **Test ID** | TC-4.5 |
| **Feature** | Update Product — guard against blank index |
| **Pre-condition** | No Edit button has been clicked |

**Steps:**
1. Type any name in the update name field.
2. Click **Update Product**.

**Expected Result:**
- Error message: *Please click Edit on a product row first.*
- Inventory is unchanged.

---

## Section 5 — Delete Product Tests

---

### Test 5.1 — Delete With Confirmation

| Field | Detail |
|---|---|
| **Test ID** | TC-5.1 |
| **Feature** | Delete Product |
| **Pre-condition** | Application loaded with default inventory |

**Steps:**
1. Click **Delete** next to `Dell G15 Gaming Laptop`.
2. Click **OK** in the confirmation dialog.

**Expected Result:**
- `Dell G15 Gaming Laptop` is removed from the table.
- Table shows 6 rows.
- Dashboard updates accordingly.
- Info message: *"Dell G15 Gaming Laptop" has been removed from the inventory.*

---

### Test 5.2 — Cancel Deletion

| Field | Detail |
|---|---|
| **Test ID** | TC-5.2 |
| **Feature** | Delete Product — accidental deletion prevention |
| **Pre-condition** | Application loaded with default inventory |

**Steps:**
1. Click **Delete** next to any product.
2. Click **Cancel** in the confirmation dialog.

**Expected Result:**
- Product is **not** removed.
- Table remains unchanged.
- Dashboard statistics remain unchanged.

---

## Section 6 — Input Validation Summary

| Test ID | Scenario | Expected Behaviour |
|---|---|---|
| TC-6.1 | Search field empty | Error: enter a product name |
| TC-6.2 | Add name empty | Error: name cannot be empty |
| TC-6.3 | Add duplicate name | Error: already exists |
| TC-6.4 | Add duplicate (different case) | Error: already exists (case-insensitive) |
| TC-6.5 | Update name empty | Error: name cannot be empty |
| TC-6.6 | Update with duplicate name | Error: already exists |
| TC-6.7 | Update without selecting a row | Error: click Edit first |
| TC-6.8 | Delete without confirming | Product not deleted |

---

## Test Results Log

Use this table to record results during testing.

| Test ID | Description | Status | Notes |
|---|---|---|---|
| TC-1.1 | Load — all products display | | |
| TC-1.2 | Display after add | | |
| TC-1.3 | Display after delete | | |
| TC-2.1 | Search in-stock product | | |
| TC-2.2 | Search out-of-stock product | | |
| TC-2.3 | Search not found | | |
| TC-2.4 | Case-insensitive search | | |
| TC-2.5 | Search empty input | | |
| TC-3.1 | Add valid product | | |
| TC-3.2 | Add empty name | | |
| TC-3.3 | Add duplicate | | |
| TC-3.4 | Add duplicate (lowercase) | | |
| TC-4.1 | Edit populates form | | |
| TC-4.2 | Update name and status | | |
| TC-4.3 | Update empty name | | |
| TC-4.4 | Update duplicate name | | |
| TC-4.5 | Update without selecting | | |
| TC-5.1 | Delete with confirm | | |
| TC-5.2 | Delete — cancel | | |