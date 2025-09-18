//import { taskRepository } from "../taskList/main.jsx";
import { TaskService } from "../../../domain/taskService.js";
import { QueryParams } from "../../../utils/getQueryParams.js";

import { packingDependecyTask } from "../../index.js";

import { TaskDetailViewModel } from "../../viewmodels/taskDetailViewModel.js";
import { EditViewModel } from "../../viewmodels/EditViewModel.js";
import { RemoveViewModel } from "../../viewmodels/RemoveViewModel.js";

import { taskDetail } from "../../components/taskDetail";
import { TaskDetailView } from "./taskDetailView";

const queryParams = new QueryParams();

const taskRepository = packingDependecyTask(queryParams.getQueryParams("key"))

// viewmodels
const taskDetailViewModel = new TaskDetailViewModel(taskRepository, queryParams);
const taskEditViewModel = new EditViewModel(taskRepository, new TaskService([], [], []));
const taskRemoveViewModel = new RemoveViewModel(taskRepository);

const view = new TaskDetailView(
    taskDetailViewModel,
    taskEditViewModel,
    taskRemoveViewModel,
    taskDetail
);

const container = document.querySelector(".container");
view.render(container);
