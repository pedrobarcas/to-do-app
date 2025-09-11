import { TaskUi } from "./views/home/homeUI.jsx";

import { TaskService } from "./../domain/taskService.js";
import { TaskRepository } from "./../application/taskRepository.js";
import { TaskLocalStorageRepository } from "./../infrastructure/taskLocalStorageRepository.js";
import { TaskFactory } from "../domain/taskFactory.js";
import { TaskViewModel } from "./viewmodels/taskViewModel.js";
import { QueryParams } from "../utils/getQueryParams.js";

const taskService = new TaskService([], [], []);
const taskLocalStorageRepository = new TaskLocalStorageRepository();
const taskRepository = new TaskRepository(
  taskService,
  taskLocalStorageRepository
);
const taskFactory = TaskFactory;

export const taskViewModel = new TaskViewModel(
  taskRepository,
  taskFactory,
  new QueryParams()
);
export const taskUi = new TaskUi(taskViewModel);
export const taskDetailViewModel = taskViewModel;
