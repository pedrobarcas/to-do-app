import { h } from "../../../h";

/**
 * ListTaskView
 * ----------------
 * Classe que coordena toda a interface da lista de tarefas,
 * manipulando UI, Mockup, Form e Header.
 */

export class ListTaskView {
  constructor(key, {viewModels = {}, uis = {}, components = {}, styles={}, config }) {
    this.viewModels = viewModels;
    this.uis = uis;
    this.components = components;
    this.config = config;
    this.styles = styles
    this.color = this.viewModels.groupVM.find(key)?.color;
  }

  /**
   * bindEvents(key)
   * ----------------
   * Liga todos os eventos da UI (formulário, botões, scroll, tema, etc)
   * 
   */
  bindUiEvents() {

    this.uis.UiElements.add_task.addEventListener("click", () => {
      this.uis.UiElements.settings.setAttribute("disabled", "true");
      this.uis.FormUi.showForm();
    });

    this.uis.UiElements.button_completed_tasks.addEventListener("click", () => {
      this.uis.taskUI.showCompletedTasks();
      this.uis.linesRenderer()
    });

    this.uis.UiElements.settings.addEventListener("click", () => {
      this.uis.HeaderUi.showDropDown();
    });

    const form = document.querySelector(`.${this.styles.groupForm.container}`);

    document.getElementById("cancel")?.addEventListener("click", () => {
      form.style.display = "none";
    });

    window.addEventListener("scroll", () => {
      const header = document.querySelector(".main-header");
      if (window.scrollY > 50) header?.classList.add("is-shrink");
      else header?.classList.remove("is-shrink");
    });

    document
      .getElementById("changeThemeButton")
      ?.addEventListener("click", () => {
        this.uis.UiElements.main_content.classList.toggle("light-theme");
      });

    document.getElementById("editGroup")?.addEventListener("click", () => {
      form.style.display = "flex";
    });

    document.querySelectorAll(`.${this.styles.groupForm.colorContent}`)
      .forEach((colorEl) => {
        colorEl.addEventListener("click", (event) => {
          const color = event.target.dataset.color;
          document.documentElement.style.setProperty("--main-color", color);
          this.color = color;
        });
      });

  }

  bindViewModelsEvents(key){

    document.getElementById("create")?.addEventListener("click", () => {
      this.viewModels.groupVM.edit(
        this.viewModels.groupVM.find(key),
        {
          id: document.getElementById("group").value,
          name: document.getElementById("group").value,
          color: this.color,
          icon: Array.from(document.querySelector(".icon").classList)
                      .slice(0, 2)
                      .join(" ") 
        }
      );

      localStorage.setItem("teste de location", location.href)
      console.log(group.name)
      location.href = this.config.get("routers").list.concat(`?key=${document.getElementById("group").value}`)
    });


    this.viewModels.taskCreateVM.subscribe(() => {
      this.uis.FormUi.hideForm();
      this.uis.taskUI.renderTask(key);
      
    });
    
    this.uis.UiElements.send_task.addEventListener("click", (event) => {
      this.uis.UiElements.settings.setAttribute("disabled", "false");

      const value = this.uis.UiElements.task.value.trim();
      
      this.viewModels.taskCreateVM.create(value);
    

    });

    document.getElementById("deleteGroup")?.addEventListener("click", () => {
      this.viewModels.groupVM.remove(key);
      console.trace()
      location.href = this.config.get("routers").home;
    });

    async function sendCopy(text) {
      if (navigator.share) {
        try {
           await navigator.share({
             title: "Lista de tarefas",
             text: text,
        });
      console.log("Compartilhamento feito com sucesso!");
    } catch (err) {
      console.error("Erro ao compartilhar:", err);
    }
    } else {
      alert("Seu navegador não suporta compartilhamento nativo. Por isso, copiamos a lista de tarefa para Área de transferência do seu teclado, basta apenas colar onde quiser.");


    }  
    }

    document?.getElementById("sendCopy")?.addEventListener("click", async () => {
      let tasksCopy = `${key}\n`
      const tasksNotCompleted = [];
      const tasksCompleted = [];
      this.viewModels.taskListVM.load().forEach((task) => {
        if (!task.completed){
          tasksNotCompleted.push(task)
        }
        
        else{
          tasksCompleted.push(task)
        }
      });
      
      tasksNotCompleted.forEach(task => {
        tasksCopy += (`○ ${task.name}\n`)
      })
      
      tasksCopy += ("\n Concluidas:\n")
      
      tasksCompleted.forEach(task => {
        tasksCopy += (`    ● ${task.name}\n`)
      })
      
      
      if (navigator.clipboard) {
        navigator.clipboard.writeText(tasksCopy);
      } else {
        copyToClipboardFallback(tasksCopy);
      }
      sendCopy(tasksCopy)
    })
  }
  
  handle(e){
    e.preventDefault()
  }
  
  /**
   * render(key)
   * ----------------
   * Renderiza toda a interface da lista.
   */
  render(key) {
    this.uis.taskUI.renderTask(key);
    this.uis.theme(key, this.color);
    
    this.uis.UiElements.main_content.prepend(<this.components.groupForm method={"put"} />);
    
    let dropDown = <this.components.groupDropDown />;
    if (this.config.get("mainGroups").includes(key)) {
      dropDown = <this.components.DropDown />;
    }
    
    const header = <this.components.Header title={key} dropDown={dropDown} />;
    this.uis.UiElements.main_content.appendChild(header);
    this.uis.UiElements.main_content.appendChild(this.components.ButtonAddTask());
    this.uis.UiElements.main_content.appendChild(this.components.Form(this.handle));
    if (document.querySelector(".icon")){
      document.querySelector(".icon").classList = `${this.viewModels.groupVM.find(key)?.icon} icon`
    }

    this.uis.linesRenderer();
    this.bindViewModelsEvents(key)
    this.bindUiEvents();
  }
}
