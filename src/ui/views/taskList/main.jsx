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


import { service } from "../../index.js";
import { UiElements } from "./elements";
import { FormUi } from "./listTaskUI";
import { HeaderUi } from "./listTaskUI";

import { MainHeader } from "../../components/mainHeader";
import { AddTask } from "../../components/buttonAddTask";
import { MainForm } from "../../components/mainForm";
import { SettingsDropDown } from "../../components/settingsDropDown.jsx";
import { GroupSettingsDropDown } from "../../components/groupSettingsDropDown.jsx";
import { GroupForm } from "../../components/groupForm.jsx";


import { ListTaskView } from "./listTaskView";
import { GroupViewModel } from "../../viewmodels/groupViewModel.js";


import { TaskUi } from "./listTaskUI";

import { queryParams } from "../../index.js";
import { packingDependecyTask } from "../../index.js";
import { ListViewModel } from "../../viewmodels/ListViewModel.js";
import { TaskDetailViewModel } from "../../viewmodels/taskDetailViewModel";
import { RemoveViewModel } from "../../viewmodels/RemoveViewModel.js";
import { CreateViewModel } from "../../viewmodels/createViewModel.js"; 

import { TaskFactory } from "../../../domain/factorys/taskFactory.js";


const key = queryParams.getQueryParams("key");

export const taskRepository = packingDependecyTask(key);


const taskListViewModel = new ListViewModel(taskRepository);
const removeViewModel = new RemoveViewModel(taskRepository)

const taskDetailViewModel = new TaskDetailViewModel(
  taskRepository,
  queryParams

)

const taskCreateViewModel = new CreateViewModel(TaskFactory, taskRepository)

const groupRepository = packingDependecyTask('group')
const groupVM = new GroupViewModel(groupRepository, taskRepository, service)

const taskUi = new TaskUi(taskListViewModel, taskDetailViewModel);

const listTaskView = new ListTaskView(
  groupVM,
  taskCreateViewModel,
  taskUi,
  UiElements,
  FormUi,
  HeaderUi,
  MainHeader,
  AddTask,
  MainForm,
  GroupSettingsDropDown,
  GroupForm
);

listTaskView.render(key)