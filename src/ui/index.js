import { TaskUi } from "./views/taskList/listTaskUI.jsx";

import { TaskService } from "./../domain/taskService.js";
import { TaskRepository } from "./../application/taskRepository.js";
import { TaskLocalStorageRepository } from "./../infrastructure/taskLocalStorageRepository.js";
import { TaskFactory } from "../domain/taskFactory.js";
import { QueryParams } from "../utils/getQueryParams.js";

import { TaskCreateViewModel } from "./viewmodels/taskCreateViewModel.js";
import { TaskDetailViewModel } from "./viewmodels/taskDetailViewModel.js";
import { TaskEditViewModel } from "./viewmodels/taskEditViewModel.js";
import { TaskListViewModel } from "./viewmodels/taskListViewModel.js";
import { TaskRemoveViewModel } from "./viewmodels/taskRemoveViewModel.js";

const taskService = new TaskService([], [], []);
const taskLocalStorageRepository = new TaskLocalStorageRepository();
const taskRepository = new TaskRepository(
  taskService,
  taskLocalStorageRepository
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
export const taskEditViewModel = new TaskEditViewModel(taskRepository);
export const taskListViewModel = new TaskListViewModel(taskRepository);
export const taskRemoveViewModel = new TaskRemoveViewModel(taskRepository);

export const taskUi = new TaskUi(taskListViewModel, taskDetailViewModel);
