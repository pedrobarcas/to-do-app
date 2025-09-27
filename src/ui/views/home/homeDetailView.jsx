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

export class homeView{
    constructor(Ui, listVM, createVM, groupForm){
        this.Ui = Ui
        this.listVM = listVM;
        this.createVM = createVM;
        this.groupForm = groupForm;
        this.color;

    }

    bindEvents(root = document){

        const form = root.querySelector('.todo__form--container');
        console.log('aaaaaasa')
        const group = root.getElementById('group');

        root.querySelector('.todo__footer--content').addEventListener('click', () => {
            form.style.display = 'flex'
        })

        root.getElementById('cancel').addEventListener('click', () => {
            form.style.display = 'none'
        })

        root.getElementById('create').addEventListener('click', () => {
            this.createVM.create(group.value.trim(), this.color)
            form.style.display = 'none'
            this.Ui.renderGroups(document.querySelector('.home__group'))
        })

        document.querySelectorAll(".todo__form--color-content").forEach(color => {
            color.addEventListener('click', (event) => {
            this.color = event.target.dataset.color
            console.log(this.color)
      })
    })
    }

    render(root = document){
        const main_content = document.querySelector(".main-content")
        const form = <this.groupForm method={'post'}/>
        main_content.prepend(form)

        this.bindEvents(root)

        this.Ui.renderGroups(document.querySelector('.home__group'))

    }
}