import { TaskDetailView } from "./taskDetailView";

import { taskDetailViewModel } from "../..";
import { taskEditViewModel } from "../..";
import { taskRemoveViewModel } from "../..";

import { taskDetail } from "../../components/taskDetail";

const view = new TaskDetailView(
    taskDetailViewModel,
    taskEditViewModel, 
    taskRemoveViewModel,
    taskDetail //function
)

const container = document.querySelector(".container");

view.render(container)
