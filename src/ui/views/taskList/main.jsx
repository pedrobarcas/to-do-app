
import { UiElements } from "./elements";
import { MockupElements } from "./elements";
import { FormUi } from "./listTaskUI";
import { HeaderUi } from "./listTaskUI";

import { MockupUi } from "../../components/mockup";
import { MainHeader } from "../../components/mainHeader";
import { AddTask } from "../../components/buttonAddTask";
import { MainForm } from "../../components/mainForm";
import { ListTaskView } from "./listTaskView";

import { TaskUi } from "./listTaskUI";

import { TaskService } from "../../../domain/taskService.js";
import { TaskRepository } from "../../../application/taskRepository.js";
import { QueryParams } from "../../../utils/getQueryParams.js";

import { ListViewModel } from "../../viewmodels/ListViewModel.js";
import { TaskDetailViewModel } from "../../viewmodels/taskDetailViewModel";
import { CreateViewModel } from "../../viewmodels/createViewModel.js"; 

import { TaskFactory } from "../../../domain/factorys/taskFactory.js";
import { LocalStorageRepository } from "../../../infrastructure/LocalStorage.js";

const taskService = new TaskService([], [], [])
const queryParams = new QueryParams()

const key = queryParams.getQueryParams("key")
console.log(key)

export const taskRepository = new TaskRepository(
  taskService,
  new LocalStorageRepository(key)
);

const taskListViewModel = new ListViewModel(taskRepository)

const taskDetailViewModel = new TaskDetailViewModel(
  taskRepository,
  queryParams

)

const taskCreateViewModel = new CreateViewModel(TaskFactory, taskRepository)

const taskUii = new TaskUi(taskListViewModel, taskDetailViewModel);

const listTaskView = new ListTaskView(
  taskCreateViewModel,
  taskUii,
  UiElements,
  MockupElements,
  FormUi,
  HeaderUi,
  MockupUi,
  MainHeader,
  AddTask,
  MainForm
);

listTaskView.render(key)