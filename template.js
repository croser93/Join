

function renderContact(i) {
    return `<label class="dropdown-item sp_between">
            <div class="dpf_cc gap8">
                <div id="contactDropdownList_${i}" class="iconConact dpf_cc">${contact[i].slice(0, 2)}  </div>
                <span id="contactName">${contact[i]}</span>
            </div>
                <input type="checkbox" id="categoryCheckbox${i}" onchange="selectContacts(${i}, this)">
            </label>`;
}

function renderCategory(i) {
  return `
       <label class="dropdown-item" onclick="changeCategory(this)">
            <span>${category[i]}</span>
        </label>`;
}
