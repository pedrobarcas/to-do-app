import { h } from "../../h";

export function SettingsDropDown(){
    return (
        <div className="settings-drop-down">
            <div id="changeThemeButton" className="drop-down-content">
            <span
                className="fa-solid fa-palette"
                aria-label="Botão para alterar o tema da lista atual"
            ></span>
            <strong>Alterar tema</strong>
            </div>
            <div id="sendCopy" className="drop-down-content">
                <span className="fa-solid fa-copy" aria-label="Botão para enviar uma cópia da lista de tarefas atual"></span>
                    <strong>Enviar uma cópia</strong>
            </div>
        </div>
    )
}