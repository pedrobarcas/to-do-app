export class ListTaskView{
  constructor(
    taskCreateVM,
    taskUI,
    UiElements,
    MockupElements,
    FormUi,
    HeaderUi,
    MockupUi,
    Header,
    ButtonAddTask,
    Form){

        this.taskCreateVM = taskCreateVM;
        this.taskUi = taskUI;
        this.UiElements = UiElements;
        this.MockupElements = MockupElements;
        this.FormUi = FormUi;
        this.HeaderUi = HeaderUi;
        this.MockupUi = MockupUi
        this.Header = Header
        this.ButtonAddTask = ButtonAddTask
        this.Form = Form
    }

 
  theme(key) {
    const themes = {
      "Importante": "pink-theme",
      "Meu Dia": "green-theme",
    };

    console.log(key)
    const themeClass = themes[key];
    if (themeClass) this.UiElements.main_content.classList.add(themeClass);
  }

  

  bindEvents(){
    this.UiElements.add_task.addEventListener('click', () => {
        this.UiElements.settings.setAttribute('disabled', 'true');
        this.FormUi.showForm();
    });

    this.UiElements.send_task.addEventListener('click', () => {
        this.UiElements.settings.setAttribute('disabled', 'false');
        
        this.taskCreateVM.create(this.UiElements.task.value);
        this.FormUi.hideForm();
        location.reload();
    });

    this.UiElements.button_completed_tasks.addEventListener('click', () => {
        this.taskUi.showCompletedTasks(true);
    });

    this.UiElements.settings.addEventListener('click', () => {
        this.HeaderUi.showDropDown();
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) header === null || header === void 0 ? void 0 : header.classList.add('is-shrink');
        else header === null || header === void 0 ? void 0 : header.classList.remove('is-shrink');
    });

    const completedDisplay = window.getComputedStyle(this.UiElements.completed_tasks).display;

    document.getElementById("changeThemeButton").addEventListener('click', () => {
        console.log("aaaa")
        this.UiElements.main_content.classList.toggle("light-theme")
    });

    window.addEventListener('load', () => {
        if (!this.UiElements.main_tasks.innerHTML && completedDisplay === 'none') {
            this.MockupElements.mockup.appendChild(
            this.MockupUi.showMockup())
        }
        else this.MockupUi.hideMockup();
    })

    this.UiElements.button_completed_tasks.addEventListener('click', () => {
        if (!this.UiElements.main_tasks.innerHTML && this.UiElements.completed_tasks.style.display == 'none' || !this.UiElements.completed_tasks.style.display){
            this.MockupElements.mockup.appendChild(this.MockupUi.showMockup())}
        
        else this.MockupUi.hideMockup()   
  })}

  render(key){
    this.UiElements.main_content.appendChild(this.Form())
    this.UiElements.main_content.appendChild(this.Header(key))
    this.UiElements.main_content.appendChild(this.ButtonAddTask())

    this.taskUi.renderTask(false, key);
    this.theme(key)
    this.bindEvents()
    
}}