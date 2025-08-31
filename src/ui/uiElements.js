const must = (el, name) => {
  if (!el) throw new Error(`Elemento ${name} não encontrado`);
  return el;
};

const Elements = (root = document) => ({
  get task() { 
    return must(root.getElementById('task'), 'Input da Tarefa'); 
  },
  get main_content() { 
    return must(root.querySelector('.main-content'), 'Conteúdo principal'); 
  },
  get main_completed_tasks() { 
    return must(root.querySelector('.main-drop-down-task'), 'Seção principal de tarefas concluídas'); 
  },
  get completed_tasks() { 
    return must(root.querySelector('.drop-down-task'), 'Lista de tarefas concluídas'); 
  },
  get main_tasks() { 
    return must(root.querySelector('.main-tasks'), 'Lista de tarefas ativas'); 
  },
  get add_task() { 
    return must(root.querySelector('.add-task'), 'Botão de adicionar tarefa'); 
  },
  get main_form() { 
    return must(root.querySelector('.main-form'), 'Formulário principal'); 
  },
  get send_task() { 
    return must(root.getElementById('send-task'), 'Botão de envio da tarefa'); 
  },
  get button_completed_tasks() { 
    return must(root.getElementById('button-completed-tasks'), 'Botão de exibir tarefas concluídas'); 
  },
  get task_checkbox() { 
    return root.querySelectorAll('.task-checkbox');
  },
  get tasks() { 
    return root.querySelectorAll('.tasks');
  },
  get settings() { 
    return must(root.getElementById('settings'), 'Botão de configurações'); 
  },
  get settings_drop_down() { 
    return must(root.querySelector('.settings-drop-down'), 'Menu de configurações'); 
  }
});

export const UiElements = Elements();

const TaskUiElements = (root = document) => ({
  get task_button() { 
    return must(root.querySelector('.task-checkbox'), 'Botão da Tarefa'); 
  }
});

export const TaskElements = TaskUiElements();

const MockupUiElements = (root = document) => ({
  get main_mockup_task() { 
    return must(root.querySelector('.main-mockup-task'), 'Mockup principal'); 
  },
  get mockup() { 
    return must(root.querySelector('.mockup'), 'Mockup Inicial'); 
  }
});

export const MockupElements = MockupUiElements();
