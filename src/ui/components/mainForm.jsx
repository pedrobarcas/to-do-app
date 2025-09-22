import { h } from "../../h"

/**
 * Componente MainForm
 * -------------------
 * Responsável por renderizar o formulário principal para criação de novas tarefas.
 * 
 * Estrutura:
 * - Input de texto (`#task`) onde o usuário digita a descrição da tarefa.
 * - Botão (`#send-task`) para enviar a nova tarefa, representado por um ícone de seta para cima.
 * 
 * Parâmetros:
 * - Nenhum (componente independente, mas interage com lógica externa via eventos).
 * 
 * Retorno:
 * - JSX representando o formulário de criação de tarefas.
 */

export function MainForm(){
    return (
        <section className="main-form">
            <div className="content-form">
            <input type="text" placeholder="Sua tarefa" id="task" />
            <button id="send-task">
                <span
                className="fa-solid fa-arrow-up"
                aria-label="imagem ilustrativa de inclusão de uma tarefa"
                ></span>
            </button>
            </div>
        </section>
    )   
}
