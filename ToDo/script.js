const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for '×'
        span.className = "close";
        li.appendChild(span);

        listContainer.appendChild(li);

        // Clear the input box
        inputBox.value = "";
        saveData();
    }
}

// Event listener for clicking on list items or spans
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to save the current state of the list to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to show tasks from localStorage when the page loads
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

// Show tasks on page load
showTask();
