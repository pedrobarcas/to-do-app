// Componente responsável por exibir o botão de adicionar uma nova tarefa.

/**
 * Renderiza o botão de adicionar tarefa.
 * @returns {HTMLElement} Seção com botão "+".
 */
import { h } from "../../h";
import styles from "./styles/fab.module.css"

export function Fab() {
  return (
    <section className={`${styles.fab} fab box-button-activate`}>
      <button>+</button>
    </section>
  );
}
