import { GroupCard } from "../../components/group";
import { h } from "../../../h";


/**
 * Classe HomeUi
 * -------------
 * Responsável por manipular o DOM da home e renderizar os grupos.
 *
 * Estrutura:
 * - Recebe:
 *   @param {ListViewModel} listViewModel - Fornece acesso à lista de grupos.
 *
 * Métodos:
 * - renderGroups(root):
 *   1. Carrega todos os grupos através da `listViewModel`.
 *   2. Para cada grupo, cria um template chamando `createTemplateGroup`.
 *
 * - createTemplateGroup(root, group):
 *   1. Gera um componente `GroupCard` representando o grupo.
 *   2. Insere o cartão no DOM (`root.appendChild`).
 */

export class HomeUi {
  constructor(listViewModel) {
    this.listViewModel = listViewModel
  }

  async renderGroups(root, cached = false) {
    const cacheKey = "groups";
    const localCache = localStorage.getItem(cacheKey);

    if (cached && localCache) {
      root.innerHTML = "";
      const groups = JSON.parse(localCache);
      groups.forEach((group) => this.createTemplateGroup(root, group));
      return;

    }
    const groups = await this.listViewModel.load();
    root.innerHTML = "";

    localStorage.setItem(cacheKey, JSON.stringify(groups));

    groups.forEach((group) => this.createTemplateGroup(root, group));
  }


  createTemplateGroup(root, group) {
    const groupCard = <GroupCard group={group}/>
    root.appendChild(groupCard)
    }

}
