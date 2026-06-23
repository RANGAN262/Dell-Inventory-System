/* ============================================================
   DELL INVENTORY MANAGEMENT SYSTEM — script.js
   Pure Vanilla JavaScript | No arrow functions
   Author : College Assignment
   ============================================================ */

/* ---------- 1. INITIAL INVENTORY DATA ---------- */

/**
 * Primary data structure: an array of product objects.
 * Each object holds:
 *   name    {string}  — product display name
 *   inStock {boolean} — availability flag
 */
var inventory = [
  { name: "Dell XPS 13",            inStock: true  },
  { name: "Dell XPS 15",            inStock: true  },
  { name: "Dell Inspiron 15",       inStock: true  },
  { name: "Dell Latitude 7440",     inStock: false },
  { name: "Dell Alienware M18",     inStock: true  },
  { name: "Dell G15 Gaming Laptop", inStock: false },
  { name: "Dell Precision 5680",    inStock: true  }
];


/* ---------- 2. DISPLAY INVENTORY ---------- */

/**
 * displayInventory()
 * Reads the global `inventory` array and renders every product
 * as a table row inside #inventory-body.
 * Also calls updateStatistics() so the dashboard cards stay in sync.
 */
function displayInventory() {
  var tbody = document.getElementById("inventory-body");
  tbody.innerHTML = ""; // clear previous rows

  if (inventory.length === 0) {
    var emptyRow = document.createElement("tr");
    var emptyCell = document.createElement("td");
    emptyCell.setAttribute("colspan", "4");
    emptyCell.style.textAlign = "center";
    emptyCell.style.padding = "32px";
    emptyCell.style.color = "#8C9BAA";
    emptyCell.textContent = "No products in inventory. Add one above.";
    emptyRow.appendChild(emptyCell);
    tbody.appendChild(emptyRow);
    updateStatistics();
    return;
  }

  var i;
  for (i = 0; i < inventory.length; i++) {
    var product = inventory[i];

    // --- Serial number cell ---
    var tdSerial = document.createElement("td");
    tdSerial.textContent = i + 1;

    // --- Product name cell ---
    var tdName = document.createElement("td");
    tdName.textContent = product.name;

    // --- Status badge cell ---
    var tdStatus = document.createElement("td");
    var badge = document.createElement("span");
    if (product.inStock) {
      badge.className = "badge badge-instock";
      badge.textContent = "In Stock";
    } else {
      badge.className = "badge badge-outstock";
      badge.textContent = "Out of Stock";
    }
    tdStatus.appendChild(badge);

    // --- Action buttons cell ---
    var tdActions = document.createElement("td");
    tdActions.className = "action-cell";

    var editBtn = document.createElement("button");
    editBtn.className = "btn btn-edit";
    editBtn.textContent = "Edit";
    editBtn.setAttribute("data-index", i);
    editBtn.addEventListener("click", function () {
      var index = parseInt(this.getAttribute("data-index"), 10);
      populateUpdateForm(index);
    });

    var deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-delete";
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("data-index", i);
    deleteBtn.addEventListener("click", function () {
      var index = parseInt(this.getAttribute("data-index"), 10);
      deleteProduct(index);
    });

    tdActions.appendChild(editBtn);
    tdActions.appendChild(deleteBtn);

    // --- Assemble row ---
    var tr = document.createElement("tr");
    tr.appendChild(tdSerial);
    tr.appendChild(tdName);
    tr.appendChild(tdStatus);
    tr.appendChild(tdActions);

    tbody.appendChild(tr);
  }

  updateStatistics();
}


/* ---------- 3. UPDATE STATISTICS ---------- */

/**
 * updateStatistics()
 * Counts total, in-stock, and out-of-stock products
 * and updates the three dashboard stat cards.
 */
function updateStatistics() {
  var total    = inventory.length;
  var inStock  = 0;
  var outStock = 0;

  var i;
  for (i = 0; i < inventory.length; i++) {
    if (inventory[i].inStock) {
      inStock++;
    } else {
      outStock++;
    }
  }

  document.getElementById("total-count").textContent   = total;
  document.getElementById("instock-count").textContent = inStock;
  document.getElementById("outstock-count").textContent = outStock;
}


/* ---------- 4. CHECK AVAILABILITY ---------- */

/**
 * checkAvailability()
 * Searches the inventory array (case-insensitive) for the name
 * entered in #search-input and displays the appropriate message.
 */
function checkAvailability() {
  var input       = document.getElementById("search-input");
  var searchTerm  = input.value.trim();
  var messageBox  = document.getElementById("search-message");

  // Validate: empty input
  if (searchTerm === "") {
    showMessage(messageBox, "Please enter a product name to search.", "error");
    return;
  }

  var searchLower = searchTerm.toLowerCase();
  var found       = false;
  var i;

  for (i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === searchLower) {
      found = true;
      if (inventory[i].inStock) {
        showMessage(messageBox, "✔  \"" + inventory[i].name + "\" — Product is available.", "success");
      } else {
        showMessage(messageBox, "⚠  \"" + inventory[i].name + "\" — Product is currently out of stock.", "warning");
      }
      break;
    }
  }

  if (!found) {
    showMessage(messageBox, "✘  \"" + searchTerm + "\" — Product not found.", "error");
  }
}


/* ---------- 5. ADD PRODUCT ---------- */

/**
 * addProduct()
 * Reads #add-name-input and #add-status-select, validates them,
 * pushes a new object to the inventory array, then refreshes the view.
 */
function addProduct() {
  var nameInput   = document.getElementById("add-name-input");
  var statusSelect = document.getElementById("add-status-select");
  var messageBox  = document.getElementById("add-message");

  var productName = nameInput.value.trim();

  // Validation 1: empty name
  if (productName === "") {
    showMessage(messageBox, "Product name cannot be empty.", "error");
    nameInput.focus();
    return;
  }

  // Validation 2: duplicate check (case-insensitive)
  var nameLower = productName.toLowerCase();
  var i;
  for (i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === nameLower) {
      showMessage(messageBox, "\"" + productName + "\" already exists in the inventory.", "error");
      nameInput.focus();
      return;
    }
  }

  // Determine stock status from dropdown
  var inStockValue = (statusSelect.value === "true");

  // Push new product object into the array
  inventory.push({
    name:    productName,
    inStock: inStockValue
  });

  // Refresh UI
  displayInventory();
  showMessage(messageBox, "\"" + productName + "\" has been added successfully.", "success");

  // Reset form fields
  nameInput.value     = "";
  statusSelect.value  = "true";
  nameInput.focus();
}


/* ---------- 6. UPDATE PRODUCT ---------- */

/**
 * populateUpdateForm(index)
 * Called when the user clicks Edit on a row.
 * Populates the Update section with the selected product's data.
 *
 * @param {number} index — position in the inventory array
 */
function populateUpdateForm(index) {
  var product = inventory[index];

  document.getElementById("update-index").value          = index;
  document.getElementById("update-name-input").value     = product.name;
  document.getElementById("update-status-select").value  = product.inStock ? "true" : "false";

  // Clear any previous update message
  var updateMessage = document.getElementById("update-message");
  updateMessage.className = "message-box hidden";
  updateMessage.textContent = "";

  // Scroll to the update panel
  document.getElementById("update-name-input").scrollIntoView({ behavior: "smooth", block: "center" });
  document.getElementById("update-name-input").focus();
}

/**
 * updateProduct()
 * Reads the hidden index and new field values from the Update form,
 * validates them, then mutates the inventory array entry.
 */
function updateProduct() {
  var indexInput    = document.getElementById("update-index");
  var nameInput     = document.getElementById("update-name-input");
  var statusSelect  = document.getElementById("update-status-select");
  var messageBox    = document.getElementById("update-message");

  // Validation: no product selected for editing
  if (indexInput.value === "") {
    showMessage(messageBox, "Please click Edit on a product row first.", "error");
    return;
  }

  var index       = parseInt(indexInput.value, 10);
  var newName     = nameInput.value.trim();

  // Validation: empty name
  if (newName === "") {
    showMessage(messageBox, "Product name cannot be empty.", "error");
    nameInput.focus();
    return;
  }

  // Validation: duplicate check — allow the same product to keep its own name
  var nameLower = newName.toLowerCase();
  var i;
  for (i = 0; i < inventory.length; i++) {
    if (i !== index && inventory[i].name.toLowerCase() === nameLower) {
      showMessage(messageBox, "Another product with the name \"" + newName + "\" already exists.", "error");
      nameInput.focus();
      return;
    }
  }

  var newInStock = (statusSelect.value === "true");

  // Apply the update
  inventory[index].name    = newName;
  inventory[index].inStock = newInStock;

  // Refresh UI
  displayInventory();
  showMessage(messageBox, "\"" + newName + "\" has been updated successfully.", "success");

  // Reset update form
  clearForm();
}


/* ---------- 7. DELETE PRODUCT ---------- */

/**
 * deleteProduct(index)
 * Asks for confirmation before removing a product from the array.
 *
 * @param {number} index — position in the inventory array
 */
function deleteProduct(index) {
  var productName = inventory[index].name;

  // Confirmation dialog before deletion
  var confirmed = window.confirm(
    "Are you sure you want to delete \"" + productName + "\" from the inventory?\n\nThis action cannot be undone."
  );

  if (!confirmed) {
    return; // User cancelled — do nothing
  }

  // Remove the element using splice (array method)
  inventory.splice(index, 1);

  // Refresh UI
  displayInventory();

  // Clear update form in case the deleted product was loaded there
  clearForm();

  // Show deletion notice — use the search message box as a global notification area
  var notification = document.getElementById("search-message");
  showMessage(notification, "\"" + productName + "\" has been removed from the inventory.", "info");
}


/* ---------- 8. CLEAR FORM ---------- */

/**
 * clearForm()
 * Resets all fields in the Update section.
 */
function clearForm() {
  document.getElementById("update-index").value         = "";
  document.getElementById("update-name-input").value    = "";
  document.getElementById("update-status-select").value = "true";

  var messageBox = document.getElementById("update-message");
  messageBox.className  = "message-box hidden";
  messageBox.textContent = "";
}


/* ---------- 9. SHOW MESSAGE ---------- */

/**
 * showMessage(element, text, type)
 * Displays a styled feedback message inside a given container element.
 * Type must be one of: "success", "error", "info", "warning"
 *
 * @param {HTMLElement} element — target message container
 * @param {string}      text    — message to display
 * @param {string}      type    — CSS class suffix for styling
 */
function showMessage(element, text, type) {
  element.textContent  = text;
  element.className    = "message-box " + type;

  // Auto-hide the message after 5 seconds
  setTimeout(function () {
    element.className    = "message-box hidden";
    element.textContent  = "";
  }, 5000);
}


/* ---------- 10. EVENT LISTENERS ---------- */

/**
 * DOMContentLoaded
 * Wires up all button click listeners and renders the initial view.
 */
document.addEventListener("DOMContentLoaded", function () {

  /* Check Availability button */
  document.getElementById("check-btn").addEventListener("click", function () {
    checkAvailability();
  });

  /* Allow pressing Enter in the search input */
  document.getElementById("search-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkAvailability();
    }
  });

  /* Add Product button */
  document.getElementById("add-btn").addEventListener("click", function () {
    addProduct();
  });

  /* Allow pressing Enter in the add-name input */
  document.getElementById("add-name-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addProduct();
    }
  });

  /* Update Product button */
  document.getElementById("update-btn").addEventListener("click", function () {
    updateProduct();
  });

  /* Clear / Cancel button */
  document.getElementById("clear-btn").addEventListener("click", function () {
    clearForm();
  });

  /* Initial render */
  displayInventory();
});