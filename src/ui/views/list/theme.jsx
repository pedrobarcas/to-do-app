/**
 * theme(key)
 * ----------------
 * Aplica tema de acordo com o grupo selecionado.
 */
export function theme(key, color) {
  const themes = {
    Importante: "pink-theme",
    "Meu Dia": "green-theme",
  };

  const themeClass = themes[key];
  if (themeClass) document.querySelector(".main-content").classList.add(themeClass);

  if (color) {
    document.documentElement.style.setProperty("--main-color", color);
  }
}