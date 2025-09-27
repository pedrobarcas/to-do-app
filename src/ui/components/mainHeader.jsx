import { h } from "../../h";
import { SettingsDropDown } from "./settingsDropDown";
/**
 * Componente MainHeader
 * ---------------------
 * Renderiza o cabeçalho principal da aplicação, incluindo título e opções de configuração.
 *
 * Estrutura:
 * - Exibe o título (por padrão "Tarefas", mas pode ser personalizado).
 * - Inclui um botão de configurações (ícone `fa-ellipsis-vertical`).
 * - Possui um menu suspenso (drop-down) com a opção de alterar o tema.
 *
 * Parâmetros:
 * @param {string} [title="Tarefas"] - Título exibido no cabeçalho.
 *
 * Retorno:
 * - JSX representando o cabeçalho principal com configurações.
 */

export function MainHeader({title, dropDown}){
    return (
        <header className="main-header">
            <h1>{title}</h1>
            <div className="main-settings">
            <div id="settings" className="fa-solid fa-ellipsis-vertical"></div>
            </div>
            {dropDown}
        </header>
    )
}