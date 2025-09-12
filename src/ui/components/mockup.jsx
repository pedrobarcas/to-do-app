import { h } from "../../h";
import { MockupElements } from "../views/taskList/elements";

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