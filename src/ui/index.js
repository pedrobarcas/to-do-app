import { LocalStorageRepository } from "../infrastructure/LocalStorage.js";
import { ConfigService } from "../domain/services/configService.js";
import { config } from "../config.js";

import { TaskService } from "../domain/services/taskService.js";
import { TaskRepository } from "./../application/taskRepository.js";
import { QueryParams } from "../utils/getQueryParams.js";

export const service = new TaskService([], [], []);
export const queryParams = new QueryParams();
export const configService = new ConfigService(config);

export function packingDependecyTask(key) {
  return new TaskRepository(service, new LocalStorageRepository(key));
}
