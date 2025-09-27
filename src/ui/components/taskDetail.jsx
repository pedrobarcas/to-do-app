import { h } from "../../h";
import { TaskCard } from "./task";
import { Header } from "./header";
import { Footer } from "./footer";
import { Form } from "./form";

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

export function taskDetail(task){
    return (
      <main className="main-content">
        

        <Header href={"./index.html"}/>
        <div className="main-task tasks">
            <TaskCard task={task} forEdition={true} />
        </div>
        <Form task={task}/>
        <Footer content={task.create_date}/>
    </main>
    )
}