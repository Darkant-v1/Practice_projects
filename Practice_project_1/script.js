// Select elements
const inputField = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const toDoList = document.getElementById('toDoList');

// Function to add a new task
function addTask() {
    const taskText = inputField.value.trim();

    if (taskText === '') {
        alert('Please enter a list item!');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    // Create Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTask(taskSpan));
    listItem.appendChild(editButton);

    // Create Remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeTask(listItem));
    listItem.appendChild(removeButton);

    // Append the new task to the list
    toDoList.appendChild(listItem);

    // Clear the input field
    inputField.value = '';
}

// Function to edit a task
function editTask(taskSpan) {
    const newTaskText = prompt('Edit your task:', taskSpan.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskSpan.textContent = newTaskText.trim();
    }
}

// Function to remove a task
function removeTask(listItem) {
    toDoList.removeChild(listItem);
}

// Attach event listener to the Add button
addButton.addEventListener('click', addTask);

// Allow pressing Enter to add a task
inputField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
