import { TaskUi } from "./views/taskList/listTaskUI.jsx";
import { LocalStorageRepository } from "../infrastructure/LocalStorage.js";

import { TaskService } from "./../domain/taskService.js";
import { TaskRepository } from "./../application/taskRepository.js";
import { TaskFactory } from "../domain/factorys/taskFactory.js";
import { QueryParams } from "../utils/getQueryParams.js";

import { CreateViewModel } from "./viewmodels/createViewModel.js";
import { TaskDetailViewModel } from "./viewmodels/taskDetailViewModel.js";
import { EditViewModel } from "./viewmodels/EditViewModel.js";

import { ListViewModel } from "./viewmodels/ListViewModel.js";
import { RemoveViewModel } from "./viewmodels/RemoveViewModel.js";

const taskService = new TaskService([], [], []);
export const taskRepository = new TaskRepository(
  taskService,
  new LocalStorageRepository("task")
);
const queryParams = new QueryParams();
const taskFactory = TaskFactory;

export const taskCreateViewModel = new CreateViewModel(
  taskFactory,
  taskRepository
);
export const taskDetailViewModel = new TaskDetailViewModel(
  taskRepository,
  queryParams
);
export const taskEditViewModel = new EditViewModel(taskRepository, taskService);
export const taskListViewModel = new ListViewModel(taskRepository);
export const taskRemoveViewModel = new RemoveViewModel(taskRepository);

export const taskUi = new TaskUi(taskListViewModel, taskDetailViewModel);

export function packingDependecyTask(key) {
  return new TaskRepository(taskService, new LocalStorageRepository(key));
}
