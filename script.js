
const task = [];
let subtaskArray = [];
let contactColors = [ "#FF7A00",
                      "#9327FF",
                      "#6E52FF",
                      "#FC71FF",
                      "#FFBB2B",
                      "#1FD7C1",
                      "#FF3D00", // Rot-Orange
                      "#FF6EC7", // Rosa
                      "#C427FF", // Lila
                      "#5A00FF", // Dunkles Violett
                      "#00C2FF", // Hellblau
                      "#00FFB3", // Türkisgrün
                      "#FFD319", // Gelb
                      "#FF5A5A", // Koralle
                      "#B86BFF", // Flieder
                      "#FF8DC7", // Hellrosa
                      "#2AE8A8", // Minzgrün
                      "#FF9F1C", // Warmes Orange
                      "#F72585", // Magenta
                      "#7209B7"  // Tiefviolett
                      // 
                       ];

function toggleContactDropdown() {
  const dropdown = document.getElementById("contactDropdown");
  dropdown.classList.toggle("open");

  renderIcon()
}

function toggleCategoryDropdown() {
  const dropdown = document.getElementById("categoryDropdown");
  dropdown.classList.toggle("open");

}

function addTask(event) {
  event.preventDefault()
  let titel = document.getElementById("title");
  let discription = document.getElementById("discription");
  let date = document.getElementById("date");

  const newTask = {
    "titel": titel.value,
    "discription": discription.value,
    "date": date.value,
    "subtask": String(subtaskArray), // Create a copy of the subtaskArray
    "priority": selectedPriority
  };

  task.push(newTask);
  console.log(task);

  titel.value = "";
  discription.value = "";
  date.value = "";

}

function changeCategory(selection) {
  let text = "";
  if (typeof selection === "string") {
    text = selection;
  } else if (selection instanceof Element) {
    const span = selection.querySelector("span");
    text = span ? span.innerText.trim() : selection.innerText.trim();
  }
  const display = document.getElementById("selectedCategory");
  if (display && text) {
    display.textContent = text;
  }
  toggleCategoryDropdown();
}

function addSubtask() {
  let readout = document.getElementById("subtaskReadOut");
  let addSubtask = document.getElementById("addSubtask");

  let input = document.getElementById("subtaskReadOut");
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();

      subtaskArray.push(readout.value);

      subtask(addSubtask, subtaskArray);

      readout.value = "";
    }
  });
}




function subtask(addSubtask, subtaskArray) {
  addSubtask.innerHTML = "";

  for (let i = 0; i < subtaskArray.length; i++) {
    // Limit to 5 subtasks
    if (i < 5) {
      addSubtask.innerHTML += `<div class="taskOutput">・ ${subtaskArray[i]}</div>`;
    }
  }
}


// ######################################################################
const buttons = document.querySelectorAll('.priority-btn');
let selectedPriority = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Wenn dieser Button bereits aktiv ist → deaktivieren
    if (button.classList.contains('active')) {
      button.classList.remove('active');
      selectedPriority = '';
      console.log('Priorität zurückgesetzt');
      return; // Funktion hier beenden
    }

    // Sonst: alle anderen deaktivieren
    buttons.forEach(btn => btn.classList.remove('active'));

    // Aktuellen aktivieren
    button.classList.add('active');

    // Text (z. B. "Medium") speichern
    selectedPriority = button.textContent.trim().split(' ')[0];
    console.log('Ausgewählte Priorität:', selectedPriority);
  });
});
// ######################################################################

function fetchSVGs() {
  const svgs = [
    { path: './assets/Urgent.svg', selector: '#urgentBtn .urgent_icon' },
    { path: './assets/Medium.svg', selector: '#mediumBtn .medium_icon' },
    { path: './assets/Low.svg', selector: '#low_btn .low_icon' }
  ];

  svgs.forEach(svg => {
    fetch(svg.path)
      .then(response => response.text())
      .then(svgContent => {
        document.querySelector(svg.selector).innerHTML = svgContent;
      })
      .catch(error => console.error('Error fetching SVG:', error));
  });
}


function applyContactColors(i) {
  
  const badge = document.getElementById(`contactDropdownList_${i}`);
  const color = contactColors[i % contactColors.length];
  badge.style.backgroundColor = color;
}

let contactList = [];
let contactBadge = [];

function selectContacts(i, checkbox) {
  let badgeName = contactName[i].innerText // besseren Namen raussuchen
  let badgeEl = document.getElementById(`contactDropdownList_${i}`);


  // if (checkbox.checked === true)
  const alreadyIn = contactBadge.some(b => b.id === badgeEl.id);
    if (!alreadyIn) {

    contactBadge.push(badgeEl)
    
    contactList.push(badgeName);

  }
  else {
    contactList = contactList.filter(name => name !== badgeName);
    contactBadge = contactBadge.filter(name => name !== badgeEl);
  }
}

// function iconConactHTML() {
//   let iconConact = document.getElementById("iconConact")


    
//   contactBadge.forEach(badge => {
//     iconConact.appendChild(badge.cloneNode(true)); // clone = unabhängige Kopie
//   });

// }

function iconConactHTML() {
  const iconConact = document.getElementById("iconConact");
  iconConact.innerHTML = ""; // alte Anzeige leeren

  // max. 9 anzeigen
  const visibleBadges = contactBadge.slice(0, 9);

  // Badges einfügen
  visibleBadges.forEach(badge => {
    iconConact.appendChild(badge.cloneNode(true));
  });

  // Wenn mehr als 9 gespeichert sind → "+ Badge" anhängen
  if (contactBadge.length > 9) {
    const moreBadge = document.createElement("div");
    moreBadge.classList.add("iconConact", "dpf_cc");
    moreBadge.style.backgroundColor = "#ffffff";
    moreBadge.innerHTML = `<span>+${contactBadge.length - 9}</span>`;
    iconConact.appendChild(moreBadge);
  }
}

function toggleContactDropdown() {
  const dropdown = document.getElementById("contactDropdown");
  dropdown.classList.toggle("open");

  // Wenn geschlossen (also "open" wurde entfernt)
  if (!dropdown.classList.contains("open")) {
    iconConactHTML(); // oder dein console.log("Dropdown geschlossen")
  }

  // Wenn geöffnet kannst du hier z. B. renderIcon() ausführen
  else {
    renderIcon();
  }

}