showTasks();

const add_task = document.querySelector('.add-task');
const main_form = document.querySelector('.main-form');
const task_checkbox = document.querySelectorAll('.task-checkbox');
const tasks = document.querySelectorAll('.tasks');

/*
    Esta funçao exibe o formulario de ediçao de tarefas
    e esconde o botao de adicionar tarefa.

*/
function showForm() {
    add_task.style.display = 'none';
    main_form.style.display = 'flex';
}

/* Esta funçao esconde o formulario */
function hideForm() {
    add_task.style.display = 'flex';
    main_form.style.display = 'none';
}

/* 
    Esta funçao adiciona uma tarefa ao localStorage e cria um novo taskCount (id para as tarefas).
    Ela verifica se o valor da tarefa é válido (não vazio e com tamanho máximo de 25 caracteres).
    Se o valor for válido, ela incrementa o contador de tarefas, armazena a tarefa no localStorage
    e atualiza a exibição das tarefas. Se a tela for pequena (<= 480px), esconde o formulário.  
*/
function addTask() {
    let taskCount = Number(localStorage.getItem('taskCount')) || 0;
    const taskValue = document.getElementById('task').value.trim();

    if (taskValue.length === 0 || taskValue.length > 25) return;

    taskCount += 1;
    localStorage.setItem(`task${taskCount}`, JSON.stringify({ task: taskValue, completed: false }));
    localStorage.setItem('taskCount', taskCount);

    document.getElementById('task').value = '';
    if (window.innerWidth <= 480) hideForm();
    showTasks();
}

/*
    Esta funçao exibe as tarefas armazenadas no localStorage.
    Ela percorre o contador de tarefas e cria elementos DOM para cada tarefa,
    incluindo uma caixa de seleção para marcar como concluída, o nome da tarefa e um botão de exclusão.
    Se a tarefa estiver concluída, o nome da tarefa é exibido com um risco (text-decoration: line-through).
*/ 
function showTasks() {
    const main_tasks = document.querySelector('.main-tasks');
    main_tasks.innerHTML = '';

    const taskCount = Number(localStorage.getItem('taskCount')) || 0;
    for (let i = 1; i <= taskCount; i++) {
        const item = localStorage.getItem(`task${i}`);
        if (!item) continue;
        const task = JSON.parse(item);

        const task_class = document.createElement('div');
        task_class.className = `tasks task${i}`;

        const checkbox_tag = document.createElement('input');
        checkbox_tag.type = 'checkbox';
        checkbox_tag.checked = task.completed;
        checkbox_tag.className = 'task-checkbox';

        const task_name_class = document.createElement('div');
        task_name_class.className = 'task-name';
        task_name_class.textContent = task.task;
        if (task.completed) task_name_class.style.textDecoration = 'line-through';

        // Toolbar
        const main_tool_bar = document.createElement('div');
        main_tool_bar.className = 'main-tool-bar';
        const tool_bar = document.createElement('div');
        tool_bar.className = 'tool-bar';

        // Trash button
        const button_trash_icon = document.createElement('button');
        const trash_icon = document.createElement('span');
        trash_icon.className = 'fa-solid fa-trash';
        trash_icon.style.color = '#e74c3c';
        button_trash_icon.appendChild(trash_icon);

        // Checkbox event
        checkbox_tag.addEventListener('change', (event) => {
            task.completed = event.target.checked;
            localStorage.setItem(`task${i}`, JSON.stringify(task));
            showTasks();
        });

        // Remove task event
        button_trash_icon.addEventListener('click', () => {
            localStorage.removeItem(`task${i}`);
            showTasks();
        });

        // Build DOM
        tool_bar.appendChild(button_trash_icon);
        main_tool_bar.appendChild(tool_bar);

        task_class.appendChild(checkbox_tag);
        task_class.appendChild(task_name_class);
        task_class.appendChild(main_tool_bar);
        main_tasks.appendChild(task_class);
    }
}