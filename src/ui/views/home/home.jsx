import { taskUi, taskViewModel} from "../../index.js";
import { UiElements, MockupElements } from "./elements.js";
import { FormUi, HeaderUi } from "./homeController.js";
import { MockupUi } from "../../components/mockup.jsx";


function Home(){
    return (
        <div>
        </div>
    )
}
taskUi.renderTask(false);

UiElements.add_task.addEventListener('click', () => {
    UiElements.settings.setAttribute('disabled', 'true');
    FormUi.showForm();
});

UiElements.send_task.addEventListener('click', () => {
    UiElements.settings.setAttribute('disabled', 'false');
    
    taskViewModel.createTask(UiElements.task.value);
    FormUi.hideForm();
    location.reload();
});

UiElements.button_completed_tasks.addEventListener('click', () => {
    taskUi.showCompletedTasks(true);
});

UiElements.settings.addEventListener('click', () => {
    HeaderUi.showDropDown();
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50)
        header === null || header === void 0 ? void 0 : header.classList.add('shrink');
    else
        header === null || header === void 0 ? void 0 : header.classList.remove('shrink');
});

const completedDisplay = window.getComputedStyle(UiElements.completed_tasks).display;

window.addEventListener('load', () => {
    if (!UiElements.main_tasks.innerHTML && completedDisplay === 'none') {
        MockupElements.mockup.appendChild(
        MockupUi.showMockup())
    }
        
    else MockupUi.hideMockup();
})

UiElements.button_completed_tasks.addEventListener('click', () => {
    if (!UiElements.main_tasks.innerHTML && UiElements.completed_tasks.style.display == 'none' || !UiElements.completed_tasks.style.display){
        MockupElements.mockup.appendChild(
            MockupUi.showMockup()
        )
    }
    
    else MockupUi.hideMockup()
});