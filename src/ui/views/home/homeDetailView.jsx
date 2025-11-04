/**
 * Classe homeView
 * ---------------
 * Responsável pela lógica da tela inicial (home).
 * Faz a ponte entre a camada de UI e os ViewModels.
 *
 * Estrutura:
 * - Recebe:
 *   @param {HomeUi} Ui - Classe que gerencia o DOM da home (renderização de grupos).
 *   @param {ListViewModel} listVM - ViewModel para carregar os grupos existentes.
 *   @param {CreateViewModel} createVM - ViewModel para criar novos grupos.
 *
 * Métodos:
 * - bindEvents(root = document):
 *   1. Seleciona elementos do formulário e footer.
 *   2. Exibe/oculta o modal de criação de grupo.
 *   3. Usa o `createVM` para criar um grupo a partir do input.
 *
 * - render(root = document):
 *   1. Inicializa eventos com `bindEvents`.
 *   2. Renderiza os grupos na seção `.home__group` via `Ui.renderGroups`.
 */
import { h } from "../../../h";
import { AccountHeader } from "../../components/accountHeader";

export class homeView{
    constructor(Ui, listVM, createVM, groupForm, styles, config){
        this.Ui = Ui;
        this.listVM = listVM;
        this.createVM = createVM;
        this.groupForm = groupForm;
        this.color;
        this.styles = styles;
        this.config = config

    }

    async bindEvents(root = document){
        this.createVM.subscribe(async (group) => {
            location.replace(`${this.config.get("routers").list}?key=${group.id}&edit=true`)
        })

        root.querySelector('.todo__footer').addEventListener('click', async () => {
            this.createVM.create("", "", "fa-solid fa-list-ul")
        })
    }

    async render(root = document){
        const main_content = document.querySelector(".main-content")
        const header = h(AccountHeader, {user: JSON.parse(localStorage.getItem("userCached"))})

        main_content.prepend(header)

        this.bindEvents(root)

        this.Ui.renderGroups(document.querySelector('.home__group'))

    }
}