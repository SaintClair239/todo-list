const clearField = function() {
    document.querySelector('#categories-form').value = "";
    document.querySelector('.names-form').value = "";
    document.querySelector('.descriptions-form').value = "";
    document.querySelector('.due-dates-form').value = "";
}

const fillField = function(task) {
    document.querySelector('#categories-form').value = task.category;
    document.querySelector('.names-form').value = task.name;
    document.querySelector('.descriptions-form').value = task.description;
    document.querySelector('.due-dates-form').value = task.date;
}

export { clearField, fillField }