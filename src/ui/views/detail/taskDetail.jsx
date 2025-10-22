import { h } from "../../../h";
import { TaskCard } from "../../components/task";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Form } from "../../components/form";

/**
 * Componente taskDetail
 * ---------------------
 * Renderiza a página de detalhes de uma tarefa específica.
 *
 * Estrutura:
 * - Inclui o cabeçalho (`Header`) com botão de voltar para a home.
 * - Mostra a tarefa em edição (`TaskCard` com `forEdition=true`).
 * - Renderiza o formulário associado à tarefa (`Form`).
 * - Exibe o rodapé (`Footer`) com a data de criação da tarefa.
 *
 * Parâmetros:
 * @param {Object} task - Objeto representando a tarefa.
 * @param {number} task.id - ID da tarefa.
 * @param {string} task.name - Nome da tarefa.
 * @param {string} task.description - Descrição da tarefa.
 * @param {string} task.date - Data definida pelo usuário.
 * @param {string} task.create_date - Data de criação da tarefa.
 * @param {boolean} task.completed - Define se a tarefa está concluída.
 *
 * Retorno:
 * - JSX representando a página de detalhe de tarefa.
 *
 * Observação:
 * Este componente compõe outros componentes já documentados (`Header`, `TaskCard`, `Form`, `Footer`),
 * atuando como **container da página de detalhe**.
 */

export function taskDetail(task, components = {}){
    return (
      <main className="main-content">
        

        <components.Header title="Tarefas"/>
        <div className="main-task tasks">
            <components.TaskCard task={task} forEdition={true} />
        </div>
        <components.Form task={task}/>
        <components.Footer content={task.create_date}/>
    </main>
    )
}