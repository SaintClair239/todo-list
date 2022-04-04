import { updateModal } from './modal';
import { displayCategories } from './category';
import { domUpdate } from './DOM';
import { runStoredCategories, runStoredTasks } from './localStorage';

const tasksArr = [];

const Tasks = function(category, name, description, date) {
    const editModal = function() {
        const active = document.querySelector('.modal');
        const active2 = document.querySelector('#overlay')
        active.classList.add('active')
        active2.classList.add('active')
    }

    const editTask = function() {
        this.category = document.querySelector('#categories-form').value
        this.name = document.querySelector('.names-form').value;
        this.description = document.querySelector('.descriptions-form').value
        this.date = document.querySelector('.due-dates-form').value
    }

    return { editModal, category, name, description, date, editTask }
};

const taskObjects = function() {
    const category = document.querySelector('#categories-form').value;
    const name = document.querySelector('.names-form').value;
    const description = document.querySelector('.descriptions-form').value;
    const dueDate = document.querySelector('.due-dates-form').value;

    const newTask = Tasks(category, name, description, dueDate);
    return newTask
};

function init() {
    const newTask = Tasks("All", "Study Javascript", "Spend 6 hours practicing", "2022-03-01")
    pushTasks(newTask);
    runStoredTasks()
    runStoredCategories()
    displayCategories();
    domUpdate.displayTasks(tasksArr);
    updateModal()  
}

const pushTasks = function(task) {
    tasksArr.push(task)
};


export { tasksArr, taskObjects, pushTasks, init }