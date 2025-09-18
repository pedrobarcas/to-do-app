import { h } from "../../h";

export function MainHeader(){
    return (
        <header className="main-header">
            <h1>Tarefas</h1>
            <div className="main-settings">
            <div id="settings" className="fa-solid fa-ellipsis-vertical"></div>
            <div className="settings-drop-down">
                <p id="changeThemeButton">
                <span
                    className="fa-solid fa-palette"
                    aria-label="imagem ilustrativa de uma palheta artística"
                ></span>
                Alterar tema
                </p>
            </div>
            </div>
        </header>
    )
}