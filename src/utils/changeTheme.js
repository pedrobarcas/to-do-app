export class Theme {
  constructor() {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", null);
    }
  }

  static setTheme(theme) {
    localStorage.setItem("theme", theme);
  }

  static changeTheme(content) {
    const theme = this.getTheme;

    if (content) {
      content.classList.add(theme);
    }
  }

  get getTheme() {
    return JSON.parse(localStorage.getItem("theme"));
  }
}
