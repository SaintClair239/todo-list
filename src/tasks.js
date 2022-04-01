import Img from './img/delete.png'
import Img2 from './img/edit.png'
import Img3 from './img/expand.png'
import { openModal, updateModal } from './modal';
import { displayCategories } from './category';

const Tasks = function(category, name, description, date) {
    const editModal = function() {
        openModal()
    }

    const editTask = function() {
        this.category = document.querySelector('#categories-form').value
        this.name = document.querySelector('.names-form').value;
        this.description = document.querySelector('.descriptions-form').value
        this.date = document.querySelector('.due-dates-form').value
    }

    return { editModal, category, name, description, date, editTask }
};

const tasksArr = [];

function init() {
    const newTask = Tasks("All", "Study Javascript", "Spend 6 hours practicing", "2022-03-01")
    pushTasks(newTask)
    displayCategories();
    displayTasks(tasksArr);
    updateModal()
}

const taskObjects = function() {
    const category = document.querySelector('#categories-form').value;
    const name = document.querySelector('.names-form').value;
    const description = document.querySelector('.descriptions-form').value;
    const dueDate = document.querySelector('.due-dates-form').value;

    const newTask = Tasks(category, name, description, dueDate);
    return newTask
};

const pushTasks = function(task) {
    tasksArr.push(task)
};

const displayTasks = function(taskArray) {
    const tasks = document.querySelector('.tasks');
    tasks.innerHTML = "";

    taskArray.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        tasks.appendChild(taskDiv);

        const topTask = document.createElement('div');
        topTask.classList.add('top-task-wrapper');
        taskDiv.appendChild(topTask);

        const taskWrapper = document.createElement('div');
        taskWrapper.classList.add('task-wrapper');
        topTask.appendChild(taskWrapper);
    
        const input = document.createElement('input');
        input.type = "checkbox";
        const label = document.createElement('label');
        label.textContent = task.name;
    
        taskWrapper.appendChild(input);
        taskWrapper.appendChild(label);
    
        const taskFunctions = document.createElement('div');
        taskFunctions.classList.add('tasks-functions-wrapper');
    
        topTask.appendChild(taskFunctions);

        const funcInput1 = document.createElement('input');
        funcInput1.type = "image"
        funcInput1.src = Img3
        funcInput1.classList.add('tasks-functions');
        funcInput1.classList.add('expand');

        const funcInput2 = document.createElement('input');
        funcInput2.type = "image"
        funcInput2.src = Img2
        funcInput2.classList.add('tasks-functions');
        funcInput2.classList.add('edit');
    
        const funcInput3 = document.createElement('input');
        funcInput3.type = "image"
        funcInput3.src = Img
        funcInput3.classList.add('tasks-functions');
        funcInput3.classList.add('delete');

        taskFunctions.appendChild(funcInput1);
        taskFunctions.appendChild(funcInput2);
        taskFunctions.appendChild(funcInput3);

        const taskDetails = document.createElement('div');
        taskDetails.classList.add('tasks-details');
        taskDetails.classList.add('inactive');
        taskDiv.appendChild(taskDetails);

        const desc = document.createElement('div');
        desc.classList.add('desc');
        taskDetails.appendChild(desc);

        const h41 = document.createElement('h4');
        h41.textContent = "Description:"
        const p1 = document.createElement('p');
        p1.classList.add('description-details');
        p1.textContent = task.description
        desc.appendChild(h41)
        desc.appendChild(p1)

        const due = document.createElement('div')
        due.classList.add('due');
        taskDetails.appendChild(due);

        const h42 = document.createElement('h4');
        h42.textContent = "Due Date:"
        const p2 = document.createElement('p');
        p2.classList.add('due-date-details');
        p2.textContent = task.date
        due.appendChild(h42);
        due.appendChild(p2);
    }) 
};

export { tasksArr, taskObjects, pushTasks, displayTasks, init }