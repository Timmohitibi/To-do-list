const inputBox = document.getElementById("input-box"); // Fixed typo
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData(); // Optional: Save to localStorage
}

// Add click event for the list items
listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData(); // Optional: Save to localStorage
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData(); // Optional: Save to localStorage
  }
}, false);

// Optional: Save data to localStorage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Optional: Load saved data
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();