import { categoryLists } from "./category";
import { tasksArr } from "./tasks";

const storedTasks = JSON.parse(localStorage.getItem('tasks'));
const storedCategories = JSON.parse(localStorage.getItem('categories'));

const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
};

const saveCategories = function() {
    localStorage.setItem('categories', JSON.stringify(categoryLists))
};

const runStoredTasks = () => {
    if (storedTasks) {
        tasksArr.length = 0;
        storedTasks.forEach(element => {
            element.editModal = function() {
                const active = document.querySelector('.modal');
                const active2 = document.querySelector('#overlay')
                active.classList.add('active')
                active2.classList.add('active')
            } 
            element.editTask = function() {
                this.category = document.querySelector('#categories-form').value
                this.name = document.querySelector('.names-form').value;
                this.description = document.querySelector('.descriptions-form').value
                this.date = document.querySelector('.due-dates-form').value
            }
            tasksArr.push(element)
        });
    }
}

const runStoredCategories = () => {
    if (storedCategories) {
        categoryLists.length = 0;
        storedCategories.forEach(category => {
            categoryLists.push(category)
        })
    }
}


export { storedCategories, storedTasks, saveCategories, saveTasks, runStoredTasks, runStoredCategories }