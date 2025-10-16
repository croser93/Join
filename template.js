function renderContact(i) {
    return `<label class="dropdown-item sp_between">
                <span>${contact [i]}</span>
                <input type="checkbox" id="categoryCheckbox">
            </label>`;
}

function renderCategory(i) {
  return `
       <label class="dropdown-item" onclick="changeCategory(this)">
            <span>${category[i]}</span>
        </label>`;
}
