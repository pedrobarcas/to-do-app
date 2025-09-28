/**
 * Classe TaskDetailView
 * ---------------------
 * Responsável por controlar a tela de detalhes de uma tarefa, conectando UI e ViewModels.
 *
 * Estrutura:
 * - Recebe:
 *   @param {TaskDetailViewModel} taskDetailVM - Lida com busca e conclusão da tarefa.
 *   @param {EditViewModel} taskEditVM - Lida com a edição dos dados da tarefa.
 *   @param {RemoveViewModel} taskRemoveVM - Remove a tarefa do repositório.
 *   @param {Function} taskDetailComponent - Componente que renderiza o detalhe da tarefa.
 *
 * Métodos:
 * - render(root):
 *   1. Obtém a tarefa a partir da `taskDetailVM` usando o `task_id` da URL.
 *   2. Renderiza o componente `taskDetail` dentro do `root`.
 *   3. Seleciona elementos do DOM (inputs e botões).
 *   4. Eventos:
 *      - `input`: edita a tarefa em tempo real (nome, anotações, data).
 *      - clique no ícone de lixeira: remove a tarefa e redireciona para a home.
 *      - clique no botão de checkbox: alterna conclusão da tarefa e recarrega a tela.
 *
 * Exemplo de uso:
 * const view = new TaskDetailView(taskDetailVM, editVM, removeVM, taskDetail);
 * view.render(document.querySelector(".container"));
 */

export class TaskDetailView{
    constructor(taskDetailVM, taskEditVM, taskRemove, taskDetailComponent){
        this.taskDetailVM = taskDetailVM;
        this.taskEditVM = taskEditVM;
        this.taskRemoveVM = taskRemove;
        this.taskDetailComponent = taskDetailComponent
    }

    render(root){
        const task = this.taskDetailVM.get("task_id");
        root.appendChild(this.taskDetailComponent);
        
        const name = document.getElementById("name");
        const anotations = document.getElementById("anotations");
        const date = document.getElementById("date");

        const button_completed_task = document.querySelector(".task-checkbox");
        
        window.addEventListener("input", () => {
            this.taskEditVM.edit(task, {
            name: name.value,
            description: anotations.value,
            date: date.value
           });
        });

        
        document.querySelector(".fa-trash").addEventListener("click", () => {
            this.taskRemoveVM.remove(task);
            window.location.href = "../../../index.html";
        
        })
        
        button_completed_task.addEventListener('click', () => {
              this.taskDetailVM.completedTask(task);
              location.reload()
        })
    }
}
