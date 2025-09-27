import { h } from "../../h";

export function GroupForm(method) {  
  let title = "Nova lista";
  let message = "CRIAR LISTA";
  console.log(method)
  if (method && method.method != "post") {
    title = "Renomear lista";
    message = "SALVAR";
  }

  return (
    <section className="todo__form--container">
      <div className="todo__form--content">
        <p className="todo__form--title">{title}</p>

        <div className="todo__form--input">
          <label htmlFor="group">
            <span
              className="fa-regular fa-face-smile"
              style="color: var(--main-color)"
            ></span>
          </label>
          <input
            type="text"
            name="group"
            id="group"
            placeholder="Inserir o título da lista"
          />
        </div>

        <div className="todo__form--personalization-content">
          <div className="todo__form--personalization">Cor</div>
        </div>

        <div className="todo__form--select-color">
          <div
            dataset={{"color":  "#778cdd"}}
            className="todo__form--color-content"
            style="background-color: #778cdd"
          ></div>

          <div
            dataset={{"color": "#f2b7c1"}}
            className="todo__form--color-content"
            style="background-color: #f2b7c1"
          ></div>

          <div
            dataset={{"color": "#437d89"}}
            className="todo__form--color-content"
            style="background-color: #437d89"
          ></div>
        </div>

        <div className="todo__form--actions">
          <p id="cancel">CANCELAR</p>
          <p id="create">{message}</p>
        </div>
      </div>
    </section>
  );
}
