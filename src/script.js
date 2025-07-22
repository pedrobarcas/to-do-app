showTasks()

const add_task = document.querySelector('.add-task')
const main_form = document.querySelector('.main-form')
const task_checkbox = document.querySelectorAll('.task-checkbox')

function showForm(){
    add_task.style.display = 'none'
    main_form.style.display = 'flex'
}

function hideForm(){
    add_task.style.display = 'flex'
    main_form.style.display = 'none'
}

function addTask(){
    const task = document.getElementById('task').value
    if (task != ''){
        const quantity_tasks = localStorage.length
        localStorage.setItem(`task${quantity_tasks + 1}`, JSON.stringify({'task': task, 'completed': false}))
    }

    console.log(window.innerWidth)

    if (window.innerWidth <= 480){
        hideForm()
    }

    showTasks()
    
}

function showTasks(){
    const main_tasks = document.querySelector('.main-tasks')
    main_tasks.innerHTML = ''

    for(let i = 1; i <= localStorage.length; i++){
        const task = JSON.parse(localStorage.getItem(`task${i}`))
        const task_class = document.createElement('div')
        task_class.className = `tasks task${i}`

        const task_name_class = document.createElement('div')
        task_name_class.className = 'task-name'
        task_name_class.textContent = task.task

        const checkbox_tag = document.createElement('input')
        checkbox_tag.type = 'checkbox'
        checkbox_tag.checked = task.completed
        checkbox_tag.name = 'completed'
        checkbox_tag.className = 'task-checkbox'

        if (checkbox_tag.checked){
            task_name_class.style.textDecoration = 'line-through'

        }

        main_tasks.appendChild(task_class)
        task_class.appendChild(checkbox_tag)
        task_class.appendChild(task_name_class)

    }
}

task_checkbox.forEach(
    checkbox => (checkbox.addEventListener('change', (event) => {

        const task_name_class = event.target.parentElement.className.split(' ')[1]
        const task = JSON.parse(localStorage.getItem(task_name_class))

        if (event.target.checked){
            event.target.parentElement.style.textDecoration = 'line-through'
            task.completed = true    
        }
        else{
            event.target.parentElement.style.textDecoration = 'none'
            task.completed = false
        }

        localStorage.setItem(task_name_class, JSON.stringify(task))
    }))
)