import { UiElements, MockupElements} from "./elements";

export class HeaderUi{
    static showDropDown(){
        UiElements.settings_drop_down.classList.toggle('is-hidden')
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
            mockup_img.setAttribute('alt', 'imagem ilustrativa de conclusão de todas as tarefas')
    
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
    constructor(viewModel){
        this.viewModel = viewModel
    }

    showCompletedTasks(){
        if (UiElements.completed_tasks.style.display == 'none' || UiElements.completed_tasks.style.display == '') {
            UiElements.completed_tasks.style.display = 'flex';
            UiElements.button_completed_tasks.innerHTML = `<span class="fa-solid fa-chevron-down"></span> Concluídas`;
        }

        else {
            UiElements.completed_tasks.style.display = 'none';
            UiElements.button_completed_tasks.innerHTML = `<span class="fa-solid fa-chevron-right"></span> Concluídas`;
        }
    }

    renderTask(completed = false){
        if (!completed) UiElements.main_tasks.innerHTML = '';
        else UiElements.completed_tasks.innerHTML = '';

        this.viewModel.loadTasks().forEach(task => {
            this.createTemplateTask(task, task.completed)
        })
    }

    createTemplateTask(task, completed = false){
        const task_class = document.createElement('ul');
        task_class.className = `tasks task${task.id}`;

        const completed_tasks = document.createElement('button');
        completed_tasks.className = 'task-checkbox';

        const task_name_class = document.createElement('a');
        task_name_class.className = 'task-name';
        task_name_class.textContent = task.name

        if (task.completed)
            task_name_class.style.textDecoration = 'line-through';

        task_class.appendChild(completed_tasks);
        task_class.appendChild(task_name_class);

        if (!completed) UiElements.main_tasks.appendChild(task_class)

        else {
            UiElements.completed_tasks.appendChild(task_class);
            completed_tasks.style.backgroundColor = 'var(--main-color)'
            completed_tasks.innerHTML = `<span class="fa-solid fa-check"></span>`
            completed_tasks.style.border = 'none'
        }

        completed_tasks.addEventListener('click', (event) => {
            this.viewModel.completedTask(task)
            location.reload()
        })
    }
}