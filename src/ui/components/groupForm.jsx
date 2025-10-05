import { h } from "../../h";

function listColor(){
  return (
    <div className="todo__form--select-color">
      <div
        dataset={{"color":  "#778cdd"}}
        className="todo__form--color-content"
        style="background-color: #778bddff"
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

      <div
        dataset={{"color": "#f4a261"}}
        className="todo__form--color-content"
        style="background-color: #f4a261"
      ></div>

      <div
        dataset={{"color": "#e76f51"}}
        className="todo__form--color-content"
        style="background-color: #e76f51"
      ></div>

      <div
        dataset={{"color": "#9b5de5"}}
        className="todo__form--color-content"
        style="background-color: #9b5de5"
      ></div>
    </div>
  )
}

function listIcons(){
  return (
    <div className="todo__form--list-icons" onClick={selectIcon}>
      <span className="fa-solid fa-bars"></span>
      <span className="fa-solid fa-star"></span>
      <span className="fa-solid fa-heart"></span>
      <span className="fa-solid fa-gift"></span>
      <span className="fa-solid fa-tag"></span>
      <span className="fa-solid fa-book"></span>
      <span className="fa-solid fa-pen-to-square"></span>
      <span className="fa-solid fa-trash"></span>
      <span className="fa-solid fa-folder"></span>
      <span className="fa-solid fa-code"></span>
      <span className="fa-solid fa-thumbtack"></span>
      <span className="fa-solid fa-users"></span>
      <span className="fa-solid fa-flask"></span>
      <span className="fa-solid fa-briefcase"></span>
      <span className="fa-solid fa-cart-shopping"></span>
    </div>
  )
}

export function GroupForm(method) {  
  let title = "Nova lista";
  let message = "CRIAR LISTA";
  if (method && method.method != "post") {
    title = "Renomear lista";
    message = "SALVAR";
  }

  return (
    <section className="todo__form--container">
      <div className="todo__form--content">
        <p className="todo__form--title">{title}</p>

        <div className="todo__form--input">
          <label htmlFor="group" role="button" tabIndex="0" onClick={showListIcon}>
            <span
              className="fa-regular fa-face-smile icon"
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
          {listColor()}
        </div>

        {listIcons()}

        <div className="todo__form--actions">
          <p id="cancel" role="button">CANCELAR</p>
          <p id="create" role="button">{message}</p>
        </div>
      </div>
    </section>
  );
}

function showListIcon(){
  document.querySelector('.todo__form--personalization-content').classList.toggle('is-hidden')
  document.querySelector('.todo__form--list-icons').classList.toggle('is-active')
}

function selectIcon(){
  const icons = document.querySelector('.todo__form--list-icons').querySelectorAll("*")
  icons.forEach(
    el => {
      el.addEventListener('click', (e) => {
        icons.forEach(icon => {
          icon.classList.remove("is-selected")
        })
        e.target.classList.add("is-selected");
        document.querySelector(".icon").classList = `${e.target.classList} icon`
      })
  })
}