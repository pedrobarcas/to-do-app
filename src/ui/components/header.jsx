import { h } from "../../h"

export function Header(href){
    return (
        <header className="main-header">
            <a className="fa-solid fa-arrow-left" href={href}></a>
            <h1>Tarefas</h1>
        </header>
    )
}