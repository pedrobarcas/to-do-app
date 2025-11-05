import { e as signInWithEmailAndPassword, a as auth, c as configService } from "./index-DaKAbugg.js";
/* empty css               */
/* empty css                */
/* empty css               */
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, email.value, password.value).then(() => {
    location.replace(configService.get("routers").home);
  }).catch((error) => {
    console.log(error);
  });
});
//# sourceMappingURL=login-mUN-Bawi.js.map
