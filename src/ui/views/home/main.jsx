/**
 * Setup da HomeView
 * -----------------
 * Responsável por configurar dependências e inicializar a tela inicial.
 *
 * Fluxo:
 * 1. Instancia `GroupFactory` para criação de grupos.
 * 2. Resolve o repositório de grupos via `packingDependecyTask("group")`.
 * 3. Cria os ViewModels:
 *    - `homeListViewModel` (listar grupos).
 *    - `homeCreateViewModel` (criar grupos).
 * 4. Cria a camada de UI `HomeUi` (renderização dos grupos).
 * 5. Instancia a `homeView` (ligação UI + ViewModels).
 * 6. Executa `view.render(document)` para carregar a tela.
 *
 * Este arquivo é o ponto de entrada da página inicial.
 */

import { GroupCreateViewModel } from "../../viewmodels/createGroupViewModel";
import { GroupFactory } from "../../../domain/factorys/groupFactory";
import { packingDependecyTask } from "../..";

import { configService } from "../..";

import { ListViewModel } from "../../viewmodels/ListViewModel";

import { HomeUi } from "./homeUI";
import { homeView } from "./homeDetailView";

import styles from "../../components/styles/groupForm.module.css"
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {

    const shouldRefresh = confirm(
      "Nova versão disponível! Deseja atualizar agora?"
    );
    if (shouldRefresh) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("Aplicativo pronto para uso offline 🚀");
  },
});


const groupFactory = GroupFactory;
const groupRepository = packingDependecyTask('group');

const homeListViewModel = new ListViewModel(groupRepository);
const homeCreateViewModel = new GroupCreateViewModel(groupFactory, groupRepository);
const homeUi = new HomeUi(homeListViewModel)

const view = new homeView(homeUi, homeListViewModel, homeCreateViewModel, GroupForm, styles, configService)


view.render(document)