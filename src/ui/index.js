import { TaskUi } from "./views/home/homeController.js";

import { TaskService} from "./../domain/taskService.js";
import { TaskRepository } from "./../application/taskRepository.js";
import { TaskLocalStorageRepository } from "./../infrastructure/taskLocalStorageRepository.js";
import { TaskFactory } from "../domain/taskFactory.js";
import { TaskViewModel } from "./viewmodels/taskViewModel.js";

const taskService = new TaskService([], [], []);
const taskLocalStorageRepository = new TaskLocalStorageRepository();
const taskRepository = new TaskRepository(taskService, taskLocalStorageRepository);
const taskFactory = TaskFactory;

export const taskViewModel = new TaskViewModel(taskRepository, taskFactory);
export const taskUi = new TaskUi(taskViewModel)