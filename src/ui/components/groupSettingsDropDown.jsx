import { h } from "../../h";

export function GroupSettingsDropDown(){
    return (
        <div className="settings-drop-down">
            <div id="changeThemeButton" className="drop-down-content">
            <span
                className="fa-solid fa-palette"
                aria-label="imagem ilustrativa de uma palheta artística"
            ></span>
            Alterar tema
            </div>
            <div id="editGroup" className="drop-down-content">
                <span className="fa-solid fa-pencil"></span>
                Renomear lista
            </div>
            <div id="deleteGroup" className="drop-down-content">
                <span className="fa-solid fa-trash"></span>
                Excluir lista
            </div>
        </div>
    )
}