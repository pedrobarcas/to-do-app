import { h } from "../../h";

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

export function MainHeader(title = 'Tarefas'){
    return (
        <header className="main-header">
            <h1>{title}</h1>
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