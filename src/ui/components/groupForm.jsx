import { h } from "../../h";
import styles from "./styles/groupForm.module.css";

function listColor() {
  return (
    <div className={styles.selectColor}>
      {[
        "#778cdd",
        "#f2b7c1",
        "#437d89",
        "#f4a261",
        "#e76f51",
        "#9b5de5",
        
      ].map((color) => (
        <div
          key={color}
          dataset={{color}}
          className={styles.colorContent}
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
}

function listIcons() {
  const icons = [
    "fa-bars", "fa-star", "fa-heart", "fa-gift", "fa-tag", "fa-book",
    "fa-pen-to-square", "fa-trash", "fa-folder", "fa-code", "fa-thumbtack",
    "fa-users", "fa-flask", "fa-briefcase", "fa-cart-shopping",
    "fa-dumbbell", "fa-moon", "fa-sun",
  ];

  return (
    <div className={styles.listIcons} onClick={selectIcon}>
      {icons.map((icon) => (
        <span key={icon} className={`fa-solid ${icon}`}></span>
      ))}
    </div>
  );
}

export function GroupForm(method) {
  const isEdit = method && method.method !== "post";
  const title = isEdit ? "Renomear lista" : "Nova lista";
  const message = isEdit ? "SALVAR" : "CRIAR LISTA";

  return (
    <form className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>

        <div className={styles.input}>
          <label htmlFor="group" role="button" tabIndex="0" onClick={showListIcon}>
            <span
              className="fa-regular fa-face-smile icon"
              style={{ color: "var(--main-color)" }}
            ></span>
          </label>
          <input
            type="text"
            name="group"
            id="group"
            placeholder="Inserir o título da lista"
            className={styles.group}
          />
        </div>

        <div className={styles.personalizationContent}>
          <div className={styles.personalization}>Cor</div>
          {listColor()}
        </div>

        {listIcons()}

        <div className={styles.actions}>
          <button id="cancel" tabIndex={1} type="button" className={styles.button}>
            CANCELAR
          </button>
          <button id="create" tabIndex={0} type="button" className={styles.button}>
            {message}
          </button>
        </div>
      </div>
    </form>
  );
}

function showListIcon() {
  const personalization = document.querySelector(`.${styles.personalizationContent}`);
  const list = document.querySelector(`.${styles.listIcons}`);
  if (personalization.style.display === "flex") {
    personalization.style.display = "none";
    list.style.display = "flex";
  } else {
    personalization.style.display = "flex";
    list.style.display = "none";
  }
}

function selectIcon() {
  const icons = document.querySelector(`.${styles.listIcons}`).querySelectorAll("*");
  icons.forEach((el) => {
    el.addEventListener("click", (e) => {
      icons.forEach((icon) => icon.classList.remove("is-selected"));
      e.target.classList.add("is-selected");
      document.querySelector(".icon").classList = `${e.target.classList} icon`;
    });
  });
}
