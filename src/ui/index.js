import { LocalStorageRepository } from "../infrastructure/LocalStorage.js";

import { TaskService } from "./../domain/taskService.js";
import { TaskRepository } from "./../application/taskRepository.js";
import { QueryParams } from "../utils/getQueryParams.js";

export const service = new TaskService([], [], []);
export const queryParams = new QueryParams();

export function packingDependecyTask(key) {
  return new TaskRepository(service, new LocalStorageRepository(key));
}
