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
    constructor(viewModels, components, config){
        this.taskDetailVM = viewModels.detail;
        this.taskEditVM = viewModels.edit;
        this.taskRemoveVM = viewModels.remove;
        this.taskDetailComponent = components;
        this.config = config
    }

    async render(root){
        await this.taskDetailVM.get("task_id").then(task => {
            console.log(task)
            
            root.appendChild(this.taskDetailComponent);
            
            const name = document.getElementById("name");
            const anotations = document.getElementById("anotations");
            const date = document.getElementById("date");
    
            const button_completed_task = document.querySelector(".task-checkbox");
            const button_favorite = document.querySelector(".favorite");
            const button_add_my_day = document.getElementById("add-my-day")
            window.addEventListener("input", async () => {
                await this.taskEditVM.edit(task, {
                name: name.value,
                description: anotations.value,
                date: date.value
               });
            });

            if (task.my_day){
                button_add_my_day.textContent = "Adicionado ao meu dia"
                button_add_my_day.style.color = "var(--main-color)"
            }
    
            
            this.taskRemoveVM.subscribe(() => {
                history.back()
            })
            document.querySelector(".fa-trash").addEventListener("click", async () => {
                await this.taskRemoveVM.remove(task);
            })
            
            this.taskDetailVM.subscribe(() => {
                location.reload()
            })
            
            button_completed_task.addEventListener('click', async () => {
                  console.log("aaaa")
                  await this.taskDetailVM.completedTask(task);
            })

            button_favorite.addEventListener('click', async () => {
                  console.log("aaaa")
                  await this.taskDetailVM.favoritedTask(task);
            })

            button_add_my_day.addEventListener("click", async () => {
                await this.taskDetailVM.addMyDay(task);
            })
        });
    }
}
