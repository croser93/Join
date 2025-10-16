function init() {
    renderContactOnHTML()
    renderCategoryOnHTML()
}

let contact = ["Alex", "Lisa", "Tim", "Max"]; // Soll später aus DB kommen
let category = ["Option1", "Option2", "Option3", "Option4"]; // category soll später hier gesetzt werden

function renderContactOnHTML() {
    const contactRef = document.getElementById("labelContact");
    
    for (let i = 0; i < contact.length; i++) {
        contactRef.innerHTML +=  renderContact(i);      
    }
}

function renderCategoryOnHTML() {
    const categoryRef = document.getElementById("labelCategory");
    
    for (let i = 0; i < category.length; i++) {
        categoryRef.innerHTML +=  renderCategory(i);      
    }
}

