const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Close button
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); // Save task list to local storage
}

// Click event to mark tasks as done or delete them
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save after checking/unchecking
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Save after deleting
    }
}, false);

// Save tasks to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load tasks when page reloads (only if data exists)
function showTask() {
    let storedTasks = localStorage.getItem("data");
    if (storedTasks) {
        listContainer.innerHTML = storedTasks;
    } else {
        listContainer.innerHTML = ""; // Ensure it's empty initially
    }
}

showTask(); // Load stored tasks when page loads
