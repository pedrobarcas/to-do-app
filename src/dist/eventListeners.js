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

window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50)
        header === null || header === void 0 ? void 0 : header.classList.add('shrink');
    else
        header === null || header === void 0 ? void 0 : header.classList.remove('shrink');
});