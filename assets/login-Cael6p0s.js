import { e as signInWithEmailAndPassword, a as auth, c as configService } from "./index-BPGqw3BG.js";
/* empty css               */
/* empty css                */
import { a as authExceptions } from "./exceptions-iRS8a2Aj.js";
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("submit");
const messageBox = document.getElementById("message-box");
button.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, email.value, password.value).then(() => {
    location.replace(configService.get("routers").home);
  }).catch((error) => {
    console.log(error);
    messageBox.textContent = authExceptions(error.code);
    messageBox.style.color = "var(--error-message)";
    button.style.backgroundColor = "var(--error-message)";
  });
});
//# sourceMappingURL=login-Cael6p0s.js.map
