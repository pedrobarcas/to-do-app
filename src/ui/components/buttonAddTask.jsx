// Componente responsável por exibir o botão de adicionar uma nova tarefa.

/**
 * Renderiza o botão de adicionar tarefa.
 * @returns {HTMLElement} Seção com botão "+".
 */
import { h } from "../../h";

export function AddTask() {
  return (
    <section className="add-task">
      <button>+</button>
    </section>
  );
}
