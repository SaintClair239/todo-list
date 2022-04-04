import './styles.css'
import { getCategories, categoryLists, displayCategories } from './category.js'
import { taskObjects, tasksArr } from './tasks.js';
import { pushTasks, init  } from './tasks.js'
import { deleteTask, expandTask } from './tasksFunctions.js'
import { openModal, closeModal, saveAndSubmit, updateModal } from './modal.js'
import { domUpdate } from './DOM.js';
import { saveCategories, saveTasks } from './localStorage'

init()
console.log(categoryLists)

const open = document.querySelector('.add-tasks');
open.addEventListener('click', ()=> {
    updateModal();
    openModal()
    domUpdate.clearField()
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
        domUpdate.displayTasks(tasksArr)
        saveTasks()
        closeModal()
    }
})

const addCategory = document.querySelector('.category-btn');
addCategory.addEventListener('click', () => {
    const categoryInputValue = document.getElementById('category-input').value;
    if (categoryInputValue == "") return
    getCategories(categoryInputValue)
    displayCategories()
    saveCategories()
    document.getElementById('category-input').value = "";
});

let targetElement;


const taskFunction = document.querySelector('.tasks');
taskFunction.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        deleteTask(e.target);
        saveTasks()
        domUpdate.displayTasks(tasksArr)
        
    } 

    if (e.target.classList.contains('expand')) {
        expandTask(e.target)
    }

    if (e.target.classList.contains('edit')) {
        saveAndSubmit()
        const index = Array.from(e.target.parentElement.parentElement.parentElement.parentElement.children).indexOf(e.target.parentElement.parentElement.parentElement)
        tasksArr[index].editModal()
        domUpdate.fillField(tasksArr[index])
        targetElement = tasksArr[index]
    }
})

const save = document.querySelector('.modal');
save.addEventListener('click', (e) => {
    if (e.target.classList.contains('save')) { 
        e.preventDefault()
        console.log(targetElement)
        targetElement.editTask()  
        domUpdate.displayTasks(tasksArr)
        domUpdate.clearField()
        saveTasks()
        
        closeModal()
    } 
})

const filter = document.querySelector('.categories');
filter.addEventListener('click', (e) => {
    categoryLists.forEach(category2 => {
        if (e.target.textContent == category2 && e.target.textContent != "All") {
            const filtered = [];
            for (let i = 0; i < tasksArr.length; i++) {
                if (tasksArr[i].category == category2) {
                filtered.push(tasksArr[i]);
                }
            }
            domUpdate.displayTasks(filtered)
        } else if (e.target.textContent == "All") {
            domUpdate.displayTasks(tasksArr)
        }
    })
})