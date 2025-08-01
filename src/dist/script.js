"use strict";
showTasks();
const add_task = document.querySelector('.add-task');
const main_form = document.querySelector('.main-form');
const task_checkbox = document.querySelectorAll('.task-checkbox');
const tasks = document.querySelectorAll('.tasks');
function showForm() {
    add_task.style.display = 'none';
    main_form.style.display = 'flex';
}
function hideForm() {
    add_task.style.display = 'flex';
    main_form.style.display = 'none';
}
function addTask() {
    let taskCount = Number(localStorage.getItem('taskCount')) || 0;
    const taskInput = document.getElementById('task');
    const taskValue = taskInput.value;
    if (taskValue.length === 0 || taskValue.length > 25)
        return;
    taskCount += 1;
    localStorage.setItem(`task${taskCount}`, JSON.stringify({ task: taskValue, completed: false }));
    localStorage.setItem('taskCount', String(taskCount));
    if (window.innerWidth <= 480)
        hideForm();
    showTasks();
}
function showTasks(completed = false) {
    let main_tasks;
    if (!completed) {
        main_tasks = document.querySelector('.main-tasks');
    }
    else {
        main_tasks = document.querySelector('.drop-down-task');
    }
    main_tasks.innerHTML = '';
    const taskCount = Number(localStorage.getItem('taskCount')) || 0;
    for (let i = 1; i <= taskCount; i++) {
        const item = localStorage.getItem(`task${i}`);
        if (!item)
            continue;
        const task = JSON.parse(item);
        if (!completed && task.completed)
            continue;
        if (completed && !task.completed)
            continue;
        const task_class = document.createElement('div');
        task_class.className = `tasks task${i}`;
        const checkbox_tag = document.createElement('input');
        checkbox_tag.type = 'checkbox';
        checkbox_tag.checked = task.completed;
        checkbox_tag.className = 'task-checkbox';
        const task_name_class = document.createElement('div');
        task_name_class.className = 'task-name';
        task_name_class.textContent = task.task;
        if (task.completed)
            task_name_class.style.textDecoration = 'line-through';
        const main_tool_bar = document.createElement('div');
        main_tool_bar.className = 'main-tool-bar';
        const tool_bar = document.createElement('div');
        tool_bar.className = 'tool-bar';
        const button_trash_icon = document.createElement('button');
        const trash_icon = document.createElement('span');
        trash_icon.className = 'fa-solid fa-trash';
        trash_icon.style.color = '#e74c3c';
        button_trash_icon.appendChild(trash_icon);
        tool_bar.appendChild(button_trash_icon);
        main_tool_bar.appendChild(tool_bar);
        task_class.appendChild(checkbox_tag);
        task_class.appendChild(task_name_class);
        task_class.appendChild(main_tool_bar);
        main_tasks.appendChild(task_class);
        checkbox_tag.addEventListener('change', (event) => {
            const input = event.currentTarget;
            task.completed = input.checked;
            console.log(task.completed);
            localStorage.setItem(`task${i}`, JSON.stringify(task));
            if (completed)
                showTasks(completed);
            else
                showTasks(false);
        });
        button_trash_icon.addEventListener('click', () => {
            localStorage.removeItem(`task${i}`);
            showTasks(completed);
        });
    }
}
function showCompletedTasks() {
    const button_completed_tasks = document.getElementById('button-completed-tasks');
    const completed_tasks = document.querySelector('.drop-down-task');
    if (completed_tasks.style.display == 'none' || completed_tasks.style.display == '') {
        completed_tasks.style.display = 'flex';
        button_completed_tasks.innerHTML = `Concluidas <span class="fa-solid fa-chevron-down"></span>`;
    }
    else {
        completed_tasks.style.display = 'none';
        button_completed_tasks.innerHTML = `Concluidas <span class="fa-solid fa-chevron-right"></span>`;
    }
    showTasks(true);
}
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50)
        header === null || header === void 0 ? void 0 : header.classList.add('shrink');
    else
        header === null || header === void 0 ? void 0 : header.classList.remove('shrink');
});
