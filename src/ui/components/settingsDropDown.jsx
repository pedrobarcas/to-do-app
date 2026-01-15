import { h } from "../../h";
import styles from "./styles/dropDown.module.css"

export function SettingsDropDown(){
    return (
        <div className={`${styles.dropDown} settings-drop-down is-close`}>
            <div id="changeThemeButton" className={styles.dropDownContent}>
            <span
                className="fa-solid fa-palette"
                aria-label="Botão para alterar o tema da lista atual"
            ></span>
            <strong>Alterar tema</strong>
            </div>
            <div id="sendCopy" className={styles.dropDownContent}>
                <span className="fa-solid fa-copy" aria-label="Botão para enviar uma cópia da lista de tarefas atual"></span>
                    <strong>Enviar uma cópia</strong>
            </div>
        </div>
    )
}