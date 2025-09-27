import { h } from "../../h";

export function SettingsDropDown(){
    return (
        <div className="settings-drop-down">
            <p id="changeThemeButton">
            <span
                className="fa-solid fa-palette"
                aria-label="imagem ilustrativa de uma palheta artística"
            ></span>
            Alterar tema
            </p>
        </div>
    )
}