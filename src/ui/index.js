import { TaskUi } from "./views/taskList/listTaskUI.jsx";
import { LocalStorageRepository } from "../infrastructure/LocalStorage.js";

import { TaskService } from "./../domain/taskService.js";
import { TaskRepository } from "./../application/taskRepository.js";
import { TaskFactory } from "../domain/taskFactory.js";
import { QueryParams } from "../utils/getQueryParams.js";

import { TaskCreateViewModel } from "./viewmodels/taskCreateViewModel.js";
import { TaskDetailViewModel } from "./viewmodels/taskDetailViewModel.js";
import { TaskEditViewModel } from "./viewmodels/taskEditViewModel.js";
import { TaskListViewModel } from "./viewmodels/taskListViewModel.js";
import { TaskRemoveViewModel } from "./viewmodels/taskRemoveViewModel.js";

const taskService = new TaskService([], [], []);
const taskRepository = new TaskRepository(
  taskService,
  new LocalStorageRepository("task")
);
const queryParams = new QueryParams();
const taskFactory = TaskFactory;

export const taskCreateViewModel = new TaskCreateViewModel(
  taskFactory,
  taskRepository
);
export const taskDetailViewModel = new TaskDetailViewModel(
  taskRepository,
  queryParams
);
export const taskEditViewModel = new TaskEditViewModel(
  taskRepository,
  taskService
);
export const taskListViewModel = new TaskListViewModel(taskRepository);
export const taskRemoveViewModel = new TaskRemoveViewModel(taskRepository);

export const taskUi = new TaskUi(taskListViewModel, taskDetailViewModel);
