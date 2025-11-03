/**
 * Implementação simples do padrão **Observer** (ou *Publish/Subscribe*),
 * --
 * permitindo que múltiplos observadores (funções) sejam notificados 
 * automaticamente quando um evento ou alteração ocorre.
 *
 * Ideal para cenários onde é necessário reagir a mudanças de estado 
 * sem criar dependências diretas entre componentes.
 *
 * @class
 * @since 1.0.0
 *
 * @example
 * const obs = new Observable();
 *
 * function logger(data) {
 *   console.log("Evento recebido:", data);
 * }
 *
 * obs.subscribe(logger);
 * obs.notify({ msg: "Olá, mundo!" }); // -> "Evento recebido: { msg: 'Olá, mundo!' }"
 *
 * obs.unsubscribe(logger);
 * obs.notify({ msg: "Não será logado" }); // Nenhum assinante restante
 */
export class Observable {
  /**
   * Cria uma nova instância do Observable.
   * --
   *
   * @constructor
   * @example
   * const observable = new Observable();
   */
  constructor() {
    /**
     * Lista de funções assinantes (observers) que serão notificadas.
     * --
     * @type {Array<Function>}
     * @private
     */
    this.subscribers = [];
  }

  /**
   * Adiciona uma nova função à lista de assinantes.
   * --
   *
   * @param {Function} fn - Função a ser chamada quando o evento ocorrer.
   * @returns {void}
   *
   * @example
   * observable.subscribe((data) => console.log(data));
   */
  subscribe(fn) {
    this.subscribers.push(fn);
  }

  /**
   * Remove uma função específica da lista de assinantes.
   * --
   *
   * @param {Function} fn - Função previamente registrada com `subscribe`.
   * @returns {void}
   *
   * @example
   * observable.unsubscribe(logger);
   */
  unsubscribe(fn) {
    this.subscribers = this.subscribers.filter((sub) => sub !== fn);
  }

  /**
   * Remove **todas** as funções assinantes.
   * --
   *
   * @returns {void}
   *
   * @example
   * observable.unsubscribeAll();
   */
  unsubscribeAll() {
    this.subscribers = [];
  }

  /**
   * Notifica todos os assinantes, enviando um dado para cada um deles.
   * --
   *
   * @param {*} data - Dados ou payload a serem transmitidos aos observadores.
   * @returns {void}
   *
   * @example
   * observable.notify({ type: "TASK_ADDED", task: newTask });
   */
  notify(data) {
    this.subscribers.forEach((fn) => fn(data));
  }
}
