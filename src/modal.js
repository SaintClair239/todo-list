import { categoryLists } from "./category";

const openModal = function() {
    const active = document.querySelector('.modal');
    const active2 = document.querySelector('#overlay')
    active.classList.add('active')
    active2.classList.add('active')
};

const closeModal = function() {
    const active = document.querySelector('.modal');
    const active2 = document.querySelector('#overlay');
    active.classList.remove('active')
    active2.classList.remove('active')

    const submit = document.querySelector('.submit')
    const save = document.querySelector('.save')

    if (submit.classList.contains('inactive')){
        submit.classList.remove('inactive')
        save.classList.add('inactive')
    }
}

const saveAndSubmit = function() {
    const submit = document.querySelector('.submit')
    submit.classList.add('inactive');
    const save = document.querySelector('.save')
    save.classList.remove('inactive')
}

const updateModal = function() {
    const categoriesOption = document.querySelector('#categories-form');
    categoriesOption.innerHTML = "";
    categoryLists.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoriesOption.appendChild(option);
    });
};

const removeModalDiv = function() {
    const remove = document.querySelector('.container');
    remove.removeChild(remove.children[2])
    remove.removeChild(remove.children[1])
}


export { updateModal, openModal, closeModal, removeModalDiv, saveAndSubmit }