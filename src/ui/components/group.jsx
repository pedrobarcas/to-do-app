import { h } from "../../h"

/**
 * Componente GroupCard
 * --------------------
 * Responsável por renderizar um cartão que representa um grupo de tarefas.
 * 
 * Estrutura:
 * - Renderiza um link (`<a>`) que redireciona o usuário para a página `listTask.html`
 *   passando o nome do grupo como parâmetro na URL (`?key=nomeDoGrupo`).
 * - Exibe um ícone ilustrativo (lista) e o nome do grupo.
 * 
 * Parâmetros:
 * @param {Object} props - Objeto contendo as informações do grupo.
 * @param {Object} props.group - Subobjeto que contém os dados do grupo.
 * @param {string} props.group.name - Nome do grupo que será exibido e passado na URL.
 * 
 * Retorno:
 * - JSX representando o cartão do grupo.
 */

export function GroupCard(props){
    let icon = "fa-solid fa-list-ul"

    if (props.group.icon && !props.group.icon.includes("fa-regular")){
      icon = props.group.icon
    }
    
    return (
        <a className="content-box" href={`listTask.html?key=${props.group.id}`}>
        <span
          className={icon}
          aria-label="Imagem ilustrativa de uma casa"
          style={`color: ${props.group.color}`}
        ></span>
        <p>{props.group.name}</p>
      </a>
    )
} 