import { h } from "../../h";

export function GroupSettingsDropDown(){
    return (
        <div className="settings-drop-down">
            <div id="changeThemeButton" className="drop-down-content">
            <span
                className="fa-solid fa-palette"
                aria-label="Botão para alterar o tema da lista atual"
            ></span>
            <strong>Alterar tema</strong>
            </div>
            <div id="editGroup" className="drop-down-content">
                <span className="fa-solid fa-pencil" aria-label="Botão para editar as informações do grupo atual"></span>
                <strong>Renomear lista</strong>
            </div>
            <div id="deleteGroup" className="drop-down-content">
                <span className="fa-solid fa-trash" aria-label="Botão para excluir a lista atual"></span>
                <strong>Excluir lista</strong>
            </div>
            <div id="sendCopy" className="drop-down-content">
                <span className="fa-solid fa-copy" aria-label="Botão para enviar uma cópia da lista de tarefas atual"></span>
                    <strong>Enviar uma cópia</strong>
            </div>
        </div>
    )
}