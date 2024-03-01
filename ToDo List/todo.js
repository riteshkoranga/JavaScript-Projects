//variables

const addBtn = document.getElementById('addTask');
const taskContainer = document.getElementById('taskContainer');

const inputTask = document.getElementById('input-task');


//Event listener for Add Button
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputTask.value === "") {
        alert("Please enter a task");
        return;
    }

    const task = document.createElement('div');
    task.classList.add('task');

    const li = document.createElement('li');
    li.innerText = inputTask.value;
    task.appendChild(li);

    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkBtn.classList.add('checkTask');

    task.appendChild(checkBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn);

    taskContainer.appendChild(task);
    //console.log("running");
    inputTask.value = "";

    checkBtn.addEventListener('click', function () {
        checkBtn.parentElement.style.textDecoration = "line-through solid black 3px";

    })

    deleteBtn.addEventListener('click', function (e) {
        //e.preventDefault();
        task.remove(li);

    })






})