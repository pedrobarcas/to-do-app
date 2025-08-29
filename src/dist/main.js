import { Task } from "./task.js";
import { TaskUi } from "./taskUi.js";
import { FormUi } from "./taskUi.js";
import { HeaderUi } from "./taskUi.js";
import { MockupUi } from "./taskUi.js";
import { UiElements, TaskElements } from "./uiElements.js";


const taskUi = new TaskUi()

taskUi.renderTasks(false)
UiElements.add_task.addEventListener('click', () => {
    UiElements.settings.setAttribute('disabled', 'true');
    FormUi.showForm();
});

UiElements.send_task.addEventListener('click', () => {
    UiElements.settings.setAttribute('disabled', 'false');
    taskUi.createTask();
    FormUi.hideForm();
    location.reload()
});

UiElements.button_completed_tasks.addEventListener('click', () => {
    taskUi.showCompletedTasks(true);
})

UiElements.settings.addEventListener('click', () => {
    HeaderUi.showDropDown();
})

window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50)
        header === null || header === void 0 ? void 0 : header.classList.add('shrink');
    else
        header === null || header === void 0 ? void 0 : header.classList.remove('shrink');
});

const completedDisplay = window.getComputedStyle(UiElements.completed_tasks).display;

if (!UiElements.main_tasks.innerHTML && completedDisplay === 'none') {
    MockupUi.showMockup();
} else {
    MockupUi.hideMockup();
}

UiElements.button_completed_tasks.addEventListener('click', () => {
    console.log(UiElements.main_tasks.innerHTML)
    console.log(UiElements.completed_tasks.style.display)
    if (!UiElements.main_tasks.innerHTML && UiElements.completed_tasks.style.display == 'none' || !UiElements.completed_tasks.style.display){
        MockupUi.showMockup()
    }
    else{
        MockupUi.hideMockup()
}})
