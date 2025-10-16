
const task = [];
let subtaskArray = [];

function toggleContactDropdown() {
  const dropdown = document.getElementById("contactDropdown");
  dropdown.classList.toggle("open");
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

  var input = document.getElementById("subtaskReadOut");
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


function fetchSVG() {
  fetch('./assets/Urgent.svg')
    .then(response => response.text())
    .then(svgContent => {
      document.querySelector("#urgentBtn .urgent_icon").innerHTML = svgContent;
    })
    .catch(error => console.error('Error fetching SVG:', error));
}