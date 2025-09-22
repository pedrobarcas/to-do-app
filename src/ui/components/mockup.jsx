import { h } from "../../h";
import { MockupElements } from "../views/taskList/elements";

/**
 * Classe MockupUi
 * ---------------
 * Responsável por exibir ou esconder um mockup ilustrativo quando não há tarefas a serem exibidas.
 *
 * Métodos estáticos:
 * - showMockup(): Retorna o JSX de um mockup com imagem e texto explicativo,
 *   utilizado para informar o usuário que não há tarefas na lista.
 *
 * - hideMockup(): Remove o elemento de mockup (`.main-mockup-task`) do DOM,
 *   caso exista.
 *
 * Dependências:
 * - Utiliza `MockupElements.main_mockup_task` para manipular o DOM.
 */

export class MockupUi{
    static showMockup(){
        return (
            <div className="main-mockup-task">
                <div className="mockup-task">
                    <img src="/to-do.png" alt="imagem ilustrativa de conclusão de todas as tarefas" width="150%"/>
                    <p>As tarefas serão mostradas aqui se não fizerem parte de listas criadas por você</p>
                </div>
            </div>
        )
    }

    static hideMockup() {
        if (MockupElements.main_mockup_task.innerHTML){
            MockupElements.main_mockup_task.remove()
        }
    }
}