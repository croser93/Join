function toggleContactDropdown() {
            const dropdown = document.getElementById('contactDropdown');
            dropdown.classList.toggle('open');
        }

          function toggleCategoryDropdown() {
            const dropdown = document.getElementById('categoryDropdown');
            dropdown.classList.toggle('open');
        }

        function changeCategory(selection) {
            let text = '';
            // if (!selection) return;
            if (typeof selection === 'string') {
                text = selection;
            } else if (selection instanceof Element) {
                const span = selection.querySelector('span');
                text = span ? span.innerText.trim() : selection.innerText.trim();
            }
            const display = document.getElementById('selectedCategory');
            if (display && text) {
                display.textContent = text;
            }
            toggleCategoryDropdown();
        }