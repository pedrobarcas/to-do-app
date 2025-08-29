import { UiElements, MockupElements} from "./uiElements.js";
import {NameExceededValidator} from './validators'
import { TaskFactory, TaskService, TaskRepository, TaskLocalStorageRepository} from "./task.js";

export class HeaderUi{
    static showDropDown(){
        UiElements.settings_drop_down.classList.toggle('hide')
    }
}

export class MockupUi{
    static showMockup(){

        if (MockupElements.mockup.innerHTML == ''){
            const main_mockup_task = document.createElement('div');
            main_mockup_task.className = 'main-mockup-task';
    
            const mockup_task = document.createElement('div');
            mockup_task.className = 'mockup-task';
    
            const mockup_img = document.createElement('img');
            mockup_img.setAttribute('src', './public/to-do.png');
            mockup_img.style.width = '150%'
    
            const text_task = document.createElement('p');
            text_task.textContent = 'As tarefas serão mostradas aqui se não fizerem parte de listas criadas por você';
    
            MockupElements.mockup.appendChild(main_mockup_task)
            main_mockup_task.appendChild(mockup_task);
            mockup_task.appendChild(mockup_img);
            mockup_task.appendChild(text_task);
        }
    }

    static hideMockup() {
        const mockup = document.querySelector('.main-mockup-task');
        mockup.remove()
    }}


export class FormUi{
    static showForm() {
        UiElements.add_task.style.display = 'none';
        UiElements.main_form.style.display = 'flex';
    }

    static hideForm() {
        UiElements.add_task.style.display = 'flex';
        UiElements.main_form.style.display = 'none';
    }
}

export class TaskUi{
    constructor(){
        this.service = new TaskService([], [], [new NameExceededValidator()])
        this.storage = new TaskLocalStorageRepository();
        this.repository = new TaskRepository(this.service, this.storage);
    }

    showCompletedTasks(){
        const completed_tasks = document.querySelector('.drop-down-task');
        
        if (completed_tasks.style.display == 'none' || completed_tasks.style.display == '') {
            completed_tasks.style.display = 'flex';
            UiElements.button_completed_tasks.innerHTML = `<span class="fa-solid fa-chevron-down"></span> Concluídas`;
        }

        else {
            completed_tasks.style.display = 'none';
            UiElements.button_completed_tasks.innerHTML = `<span class="fa-solid fa-chevron-right"></span> Concluídas`;
        }
    }
    
    createTask(){
        const task = TaskFactory.createTask(UiElements.task.value)
        return this.repository.save(task)
    }

    renderTasks(completed = false) {
        if (!completed) UiElements.main_tasks.innerHTML = '';
        else UiElements.completed_tasks.innerHTML = '';      

        const tasks = this.repository.load()
        const parsedTasks = tasks.map(task => JSON.parse(task[1]));

        parsedTasks.forEach(task => {
            this.createTemplateTask(task, task.completed)
        })
        
      
    }

    completedTask(task){
        this.repository.completed(task)
    }

    createTemplateTask(task, completed = false){
        const task_class = document.createElement('div');
        task_class.className = `tasks task${task.id}`;
        const completed_tasks = document.createElement('button');
        completed_tasks.className = 'task-checkbox';
        const task_name_class = document.createElement('a');
        task_name_class.className = 'task-name';
        task_name_class.textContent = task.name

        if (task.completed)
            task_name_class.style.textDecoration = 'line-through';

        const main_tool_bar = document.createElement('div');
        task_class.appendChild(completed_tasks);
        task_class.appendChild(task_name_class);
        task_class.appendChild(main_tool_bar);
        if (!completed) UiElements.main_tasks.appendChild(task_class)
        else {
            UiElements.completed_tasks.appendChild(task_class);
            completed_tasks.style.backgroundColor = 'var(--main-color)'
            completed_tasks.innerHTML = `<span class="fa-solid fa-check"></span>`
           
            completed_tasks.style.border = 'none'
        }

        completed_tasks.addEventListener('click', (event) => {
            this.completedTask(task)
            location.reload()
        })
    }
}