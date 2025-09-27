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
 * @param {Object} group - Objeto contendo as informações do grupo.
 * @param {Object} group.group - Subobjeto que contém os dados do grupo.
 * @param {string} group.group.name - Nome do grupo que será exibido e passado na URL.
 * 
 * Retorno:
 * - JSX representando o cartão do grupo.
 */

export function GroupCard(group){
    return (
        <a className="content-box" href={`listTask.html?key=${group.group.id}`}>
        <span
          className="fa-solid fa-list-ul"
          aria-label="Imagem ilustrativa de uma casa"
          style={`color: ${group.group.color}`}
        ></span>
        <p>{group.group.name}</p>
      </a>
    )
} 