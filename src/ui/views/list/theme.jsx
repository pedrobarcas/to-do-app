/**
 * theme(key)
 * ----------------
 * Aplica tema de acordo com o grupo selecionado.
 */
export function theme(color) {
  if (color) {
    document.documentElement.style.setProperty("--main-color", color);
  }
}