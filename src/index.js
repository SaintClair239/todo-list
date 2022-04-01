import './styles.css'
import { categoryLists, getCategories } from './category.js'
import { displayCategories } from './category.js'
import { updateModal } from './modal.js'
import { taskObjects, tasksArr } from './tasks.js';
import { pushTasks } from './tasks.js'
import { displayTasks } from './tasks.js';
import { deleteTask } from './tasksFunctions.js'
import { expandTask } from './tasksFunctions.js'
import { openModal } from './modal.js'
import { closeModal } from './modal.js'
import { saveAndSubmit } from './modal.js';
import { clearField, fillField } from './DOM.js';
import { init } from './tasks.js';

init()

const open = document.querySelector('.add-tasks');
open.addEventListener('click', ()=> {
    updateModal();
    openModal()
    clearField()
});

const close = document.querySelector('.container');
close.addEventListener('click', (e)=> {
    if (e.target.id == "overlay" || e.target.classList.contains('close')) {
        e.preventDefault()
        closeModal()
    }

    if (e.target.classList.contains('submit')) {
        e.preventDefault()
        pushTasks(taskObjects());
        displayTasks(tasksArr)
    
        closeModal()
    }
})

const addCategory = document.querySelector('.category-btn');
addCategory.addEventListener('click', () => {
    const categoryInputValue = document.getElementById('category-input').value;
    if (categoryInputValue == "") return
    getCategories(categoryInputValue)
    displayCategories()
    document.getElementById('category-input').value = "";
});

let targetElement;


const taskFunction = document.querySelector('.tasks');
taskFunction.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        deleteTask(e.target)
        displayTasks(tasksArr)
        
    } 

    if (e.target.classList.contains('expand')) {
        expandTask(e.target)
    }

    if (e.target.classList.contains('edit')) {
        saveAndSubmit()
        const index = Array.from(e.target.parentElement.parentElement.parentElement.parentElement.children).indexOf(e.target.parentElement.parentElement.parentElement)
        tasksArr[index].editModal()
        fillField(tasksArr[index])
        targetElement = tasksArr[index]
    }
})

const save = document.querySelector('.modal');
save.addEventListener('click', (e) => {
    if (e.target.classList.contains('save')) { 
        e.preventDefault()
        targetElement.editTask() 
        displayTasks(tasksArr)
        clearField()    
        closeModal()
    } 
})

const filter = document.querySelector('.categories');
filter.addEventListener('click', (e) => {
    categoryLists.forEach(category2 => {
        if (e.target.textContent == category2 && e.target.textContent != "All") {
            let filtered = [];
            for (let i = 0; i < tasksArr.length; i++) {
                if (tasksArr[i].category == category2) {
                filtered.push(tasksArr[i]);
                }
            }
            displayTasks(filtered)
        } else if (e.target.textContent == "All") {
            displayTasks(tasksArr)
        }
    })
})