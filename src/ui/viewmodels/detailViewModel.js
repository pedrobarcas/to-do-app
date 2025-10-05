import { Observable } from "../../domain/Observable";

/**
 * Classe DetailViewModel
 * ----------------------
 * Responsável por buscar uma entidade específica, geralmente para exibir
 * detalhes em tela.
 *
 * Estrutura:
 * - Recebe um `repository` (fonte de dados).
 * - Recebe um `queryParam` (objeto utilitário para ler parâmetros da URL).
 *
 * Métodos:
 * - get(param):
 *   1. Obtém o valor do parâmetro da URL via `queryParam`.
 *   2. Busca no repositório a entidade correspondente ao ID.
 *   3. Retorna o objeto encontrado.
 *
 * Exemplo de uso:
 * const vm = new DetailViewModel(LocalStorageRepository, new QueryParams(window.location));
 * const task = vm.get("task_id");
 */

export class DetailViewModel extends Observable {
  constructor(repository, queryParam) {
    super();
    this.repository = repository;
    this.queryParam = queryParam;
  }

  get(param) {
    return this.repository.find(this.queryParam.getQueryParams(param));
  }
}
