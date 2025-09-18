import { h } from "../../h"

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
