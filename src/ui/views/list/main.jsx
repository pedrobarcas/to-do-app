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


import { service, queryParams, packingDependecyTask, packingDependecyTaskFirestore, configService } from "../../index.js";
import { UiElements } from "./elements";
import { FormUi, HeaderUi, TaskUi as TaskUiClass } from "./listTaskUI";

import { MainHeader } from "../../components/mainHeader";
import { AddTask } from "../../components/buttonAddTask";
import { MainForm } from "../../components/mainForm";
import { SettingsDropDown } from "../../components/settingsDropDown.jsx";
import { GroupSettingsDropDown } from "../../components/groupSettingsDropDown.jsx";
import { GroupForm } from "../../components/groupForm.jsx";

import { RelationFactory } from "../../../domain/factorys/relationFactory.js";
import { RelationViewModel } from "../../viewmodels/relationViewModel.js";

import { ListTaskView } from "./listTaskView";
import { GroupViewModel } from "../../viewmodels/groupViewModel.js";
import { ListTasksViewModel } from "../../viewmodels/listTasksViewModel.js";
import { TaskDetailViewModel } from "../../viewmodels/taskDetailViewModel";
import { CreateTaskViewModel } from "../../viewmodels/createTaskViewModel.js";
import { TaskFactory } from "../../../domain/factorys/taskFactory.js";
import { linesRenderer } from "./linesRenderer.jsx";
import { theme } from "./theme.jsx";

import styles from "../../components/styles/groupForm.module.css"

// Recupera a key da lista
const key = queryParams.getQueryParams("key");
// Repositories
const taskRepository = packingDependecyTaskFirestore("task");
const groupRepository = packingDependecyTask("group");
const relationRepository = packingDependecyTask("relation")

// ViewModels
const taskListViewModel = new ListTasksViewModel(taskRepository);
const taskDetailViewModel = new TaskDetailViewModel(taskRepository, queryParams);
const taskCreateViewModel = new CreateTaskViewModel(TaskFactory, taskRepository);
const relationViewModel = new RelationViewModel(RelationFactory, relationRepository)
const groupVM = new GroupViewModel(groupRepository, taskRepository, service);
const group = await groupVM.find(key)

// UIs
const taskUi = new TaskUiClass(taskListViewModel, taskDetailViewModel);

const listTaskView = new ListTaskView(
  group, {
  viewModels: {
    groupVM,
    taskCreateVM: taskCreateViewModel,
    taskListVM: taskListViewModel,
    taskDetailVM: taskDetailViewModel,
    relationVM: relationViewModel
  },
  uis: {
    taskUI: taskUi,
    UiElements,
    FormUi,
    HeaderUi,
    linesRenderer,
    theme
  },
  components: {
    Header: MainHeader,
    ButtonAddTask: AddTask,
    Form: MainForm,
    DropDown: SettingsDropDown,
    groupDropDown: GroupSettingsDropDown,
    groupForm: GroupForm,
  },
  styles: {
    groupForm: styles,
  },
  config: configService,
});

// Renderiza a lista
listTaskView.render(key);
