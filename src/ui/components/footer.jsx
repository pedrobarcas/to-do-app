// Componente que representa o rodapé de uma tarefa,
// exibindo a data e as ações disponíveis (como deletar).

/**
 * Renderiza o rodapé da tarefa com data e ações.
 * @param {{ content: string }} content - Dados recebidos (ex.: data da tarefa).
 * @returns {HTMLElement} Rodapé formatado.
 */
export function Footer(content) {

  return (
    <footer className="main-footer">
      <hr />
      <div className="footer-content">
        <div className="task-date">{content.content}</div>
        <div className="task-actions">
          <span className="fa-solid fa-trash"></span>
        </div>
      </div>
    </footer>
  );
}
