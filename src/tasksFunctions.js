import { tasksArr } from "./tasks";

const deleteTask = function(el) {
    const index = Array.from(el.parentElement.parentElement.parentElement.parentElement.children).indexOf(el.parentElement.parentElement.parentElement)
    tasksArr.splice(index, 1);
};

const expandTask = function(el) {
    const target = Array.from(el.parentElement.parentElement.parentElement.children)[1];
    if(target.classList.contains('inactive')) {
        target.classList.remove('inactive')
    } else {
        target.classList.add('inactive')
    }
}

export { deleteTask, expandTask }