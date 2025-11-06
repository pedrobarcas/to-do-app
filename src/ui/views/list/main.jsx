/**
 * Setup da ListTaskView
 * ---------------------
 * Responsável por configurar dependências e inicializar a tela de tarefas de uma lista específica.
 *
 * Fluxo:
 * 1. Recupera a key da lista via `queryParams.getQueryParams("key")`.
 * 2. Resolve o repository da lista usando `packingDependecyTask(key)`.
 * 3. Cria os ViewModels:
 *    - `taskListViewModel` (listar tarefas da lista).
 *    - `taskDetailViewModel` (detalhes e conclusão de tarefas).
 *    - `taskCreateViewModel` (criar novas tarefas na lista).
 * 4. Cria a camada de UI `TaskUi` (renderização e interação com tasks).
 * 5. Instancia a `ListTaskView` ligando:
 *    - ViewModels (listagem, detalhe, criação)
 *    - UI (TaskUi, FormUi, HeaderUi, MockupUi)
 *    - Componentes visuais (MainHeader, AddTask, MainForm)
 *    - Seletores do DOM (UiElements, MockupElements)
 * 6. Executa `listTaskView.render(key)` para carregar e renderizar a tela.
 *
 * Este arquivo é o ponto de entrada da página de tarefas de uma lista específica.
 */


import { service, queryParams, packingDependecyTask, packingDependecyTaskFirestore, configService, packingDependecyFirestore } from "../../index.js";
import { UiElements } from "./elements";
import { FormUi, HeaderUi, TaskUi as TaskUiClass } from "./listTaskUI";

import { MainHeader } from "../../components/mainHeader";
import { AddTask } from "../../components/buttonAddTask";
import { MainForm } from "../../components/mainForm";
import { SettingsDropDown } from "../../components/settingsDropDown.jsx";
import { GroupSettingsDropDown } from "../../components/groupSettingsDropDown.jsx";
import { GroupForm } from "../../components/groupForm.jsx";

import { ListTaskView } from "./list/listTaskView.jsx";
import { TaskView } from "./TaskView.jsx";


import { GroupViewModel } from "../../viewmodels/groupViewModel.js";
import { ListTasksViewModel } from "../../viewmodels/listTasksViewModel.js";
import { TaskDetailViewModel } from "../../viewmodels/taskDetailViewModel";
import { CreateTaskViewModel } from "../../viewmodels/createTaskViewModel.js";
import { TaskUi } from "./listTaskUI";
import { ImportantTaskUi } from "./important/importantTaskUi.jsx";
import { TaskFactory } from "../../../domain/factorys/taskFactory.js";
import { linesRenderer } from "./linesRenderer.jsx";
import { theme } from "./theme.jsx";
import { MyDayTaskUi } from "./myDay/myDayTaskUi.jsx";
import { ListViewModel } from "../../viewmodels/listViewModel.js";

import styles from "../../components/styles/groupForm.module.css"

// Recupera a key da lista
const key = queryParams.getQueryParams("key");
const edit = queryParams.getQueryParams("edit")
// Repositories
const taskRepository = packingDependecyTaskFirestore("task");
const groupRepository = packingDependecyTask("group");
const groupTaskRepository = packingDependecyFirestore("task")
// ViewModels
const taskListViewModel = new ListTasksViewModel(taskRepository);
const listViewModel = new ListViewModel(groupTaskRepository);
const taskDetailViewModel = new TaskDetailViewModel(taskRepository, queryParams);
const taskCreateViewModel = new CreateTaskViewModel(TaskFactory, taskRepository);
const groupVM = new GroupViewModel(groupRepository, taskRepository, service);
const group = await groupVM.find(key)

// UIs
const taskUi = new TaskUi(taskListViewModel, taskDetailViewModel);
const groupUi = new ImportantTaskUi(listViewModel, taskDetailViewModel)
const myDayUi = new MyDayTaskUi(listViewModel, taskDetailViewModel)

function createView(ViewClass, {
  dropDown,
  taskUi,
  components = {},
  ...options
} = {}) {
  return new ViewClass(
    options.group,
    options.edit,
    {
      viewModels: {
        groupVM,
        taskCreateVM: taskCreateViewModel,
        taskListVM: taskListViewModel,
        taskDetailVM: taskDetailViewModel,
      },
      uis: {
        taskUI: taskUi, // agora vem por parâmetro
        UiElements,
        FormUi,
        HeaderUi,
        linesRenderer,
        theme,
      },
      components: {
        Header: MainHeader,
        ButtonAddTask: AddTask,
        Form: MainForm,
        DropDown: dropDown,
        groupForm: GroupForm,
        ...components, // permite sobrescrever ou adicionar
      },
      styles: {
        groupForm: styles,
      },
      config: configService,
    }
  );
}


const taskView = createView(TaskView, {
  dropDown: SettingsDropDown,
  taskUi: taskUi,
  group,
  edit
});


const listTaskView = createView(ListTaskView, {
  dropDown: GroupSettingsDropDown,
  taskUi: taskUi,
  group,
  edit
});


const importantTaskView = createView(TaskView, {
  dropDown: SettingsDropDown,
  taskUi: groupUi,
  group,
  edit
});

const myDayTaskView = createView(TaskView, {
  dropDown: SettingsDropDown,
  taskUi: myDayUi,
  group,
  edit
});



if (key === "Importante"){
  importantTaskView.render(key)
  console.log("aaaaa")
}

else if (key === "Meu Dia"){
  myDayTaskView.render(key)
}

else if (key === "Tarefas"){
  taskView.render(key)
}

else{
  listTaskView.render(key);
}

