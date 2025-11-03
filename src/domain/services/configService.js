/**
 * Serviço responsável por fornecer acesso centralizado a variáveis de configuração da aplicação.
 *
 * Normalmente é usado para encapsular o acesso a variáveis de ambiente (`process.env`),
 * oferecendo uma camada de abstração segura e de fácil manutenção.
 *
 * @class
 * @since 1.0.0
 *
 * @example
 * // Exemplo de uso
 * const config = new ConfigService(process.env);
 * const dbUrl = config.get("DATABASE_URL");
 * console.log(dbUrl);
 *
 * @module domínio/serviços/configService
 */
export class ConfigService {
  /**
   * Cria uma nova instância do ConfigService.
   *
   * @constructor
   * @param {Object<string, string>} env - Objeto contendo pares chave/valor de variáveis de ambiente.
   *
   * @example
   * const config = new ConfigService({ API_KEY: "12345" });
   */
  constructor(env) {
    /**
     * Armazena as variáveis de ambiente ou configurações globais da aplicação.
     * @type {Object<string, string>}
     * @private
     */
    this.env = env;
  }

  /**
   * Retorna o valor associado a uma chave de configuração.
   *
   * @param {string} key - Nome da variável de configuração desejada.
   * @returns {string|undefined} Valor da configuração, ou `undefined` se não existir.
   *
   * @example
   * const port = config.get("PORT");
   * console.log(port); // -> "3000"
   */
  get(key) {
    return this.env[key];
  }
}
