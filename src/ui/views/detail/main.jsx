/**
 * Setup da TaskDetailView
 * -----------------------
 * Responsável por configurar dependências e inicializar a tela de detalhes da tarefa.
 *
 * Fluxo:
 * 1. Obtém o repositório da tarefa via `packingDependecyTask(queryParams.getQueryParams("key"))`.
 * 2. Instancia os ViewModels:
 *    - `TaskDetailViewModel`: busca e marca como concluída.
 *    - `EditViewModel`: edita a tarefa em tempo real.
 *    - `RemoveViewModel`: remove a tarefa do repositório.
 * 3. Conecta o componente de UI `taskDetail` com os ViewModels por meio de `TaskDetailView`.
 * 4. Renderiza a view dentro do container `.container`.
 *
 * Este arquivo é o ponto de entrada para a tela de detalhe de uma tarefa.
 */

import { service } from "../../index.js";
import { queryParams } from "../../index.js";
import { packingDependecyTask } from "../../index.js";
import { configService } from "../../index.js";

import { TaskDetailViewModel } from "../../viewmodels/taskDetailViewModel.js";
import { EditViewModel } from "../../viewmodels/EditViewModel.js";
import { RemoveViewModel } from "../../viewmodels/removeViewModel.js";

import { taskDetail } from "./taskDetail";
import { TaskDetailView } from "./taskDetailView";

import { TaskCard } from "../../components/task";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Form } from "../../components/form";


import { h } from "../../../h.js";
import { config } from "../../../config.js";

const taskRepository = packingDependecyTask(queryParams.getQueryParams("key"))

// viewmodels
const taskDetailViewModel = new TaskDetailViewModel(taskRepository, queryParams);
const taskEditViewModel = new EditViewModel(taskRepository, service);
const taskRemoveViewModel = new RemoveViewModel(taskRepository);

const view = new TaskDetailView(
    {
        "detail": taskDetailViewModel,
        "edit": taskEditViewModel,
        "remove": taskRemoveViewModel,
    },

    taskDetail(await taskDetailViewModel.get("task_id"), {
        "TaskCard": TaskCard,
        "Header": Header,
        "Footer": Footer,
        "Form": Form
    }),
    configService
);

const container = document.querySelector(".container");
view.render(container);
