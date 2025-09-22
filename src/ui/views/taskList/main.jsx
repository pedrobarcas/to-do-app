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

import { queryParams } from "../../index.js";
import { packingDependecyTask } from "../../index.js";

import { ListViewModel } from "../../viewmodels/ListViewModel.js";
import { TaskDetailViewModel } from "../../viewmodels/taskDetailViewModel";
import { CreateViewModel } from "../../viewmodels/createViewModel.js"; 

import { TaskFactory } from "../../../domain/factorys/taskFactory.js";


const key = queryParams.getQueryParams("key");

export const taskRepository = packingDependecyTask(key);


const taskListViewModel = new ListViewModel(taskRepository);

const taskDetailViewModel = new TaskDetailViewModel(
  taskRepository,
  queryParams

)

const taskCreateViewModel = new CreateViewModel(TaskFactory, taskRepository)

const taskUi = new TaskUi(taskListViewModel, taskDetailViewModel);

const listTaskView = new ListTaskView(
  taskCreateViewModel,
  taskUi,
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