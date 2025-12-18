import { h } from "../../h"

/**
 * Componente Header
 * -----------------
 * Responsável por renderizar o cabeçalho principal da aplicação.
 * 
 * Estrutura:
 * - Exibe um link (`<a>`) em formato de seta para a esquerda, usado como botão de voltar.
 * - Mostra o título fixo "Tarefas".
 * 
 * Parâmetros:
 * @param {string} href - URL de destino do link de voltar.
 * 
 * Retorno:
 * - JSX representando o cabeçalho.
 */

export function Header({title, href}){
    return (
        <header className="main-header">
            <a className="fa-solid fa-arrow-left header-icon" href={href}></a>
            <h1>{title}</h1>
        </header>
    )
}