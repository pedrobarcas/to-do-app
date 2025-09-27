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


import { GroupFactory } from "../../../domain/factorys/groupFactory";
import { packingDependecyTask } from "../..";

import { CreateViewModel } from "../../viewmodels/createViewModel";
import { ListViewModel } from "../../viewmodels/ListViewModel";

import { GroupForm } from "../../components/groupForm";
import { HomeUi } from "./homeUI";
import { homeView } from "./homeDetailView";


const groupFactory = GroupFactory;
const groupRepository = packingDependecyTask('group');

const homeListViewModel = new ListViewModel(groupRepository);
const homeCreateViewModel = new CreateViewModel(groupFactory, groupRepository);
const homeUi = new HomeUi(homeListViewModel)

const view = new homeView(homeUi, homeListViewModel, homeCreateViewModel, GroupForm)


view.render(document)