import { e as createUserWithEmailAndPassword, a as auth, f as sendEmailVerification, c as configService } from "./index-CszmcCWL.js";
/* empty css               */
/* empty css                */
/* empty css               */
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("submit");
button.addEventListener("click", async () => {
  const userCredentials = await createUserWithEmailAndPassword(auth, email.value, password.value);
  const user = userCredentials.user;
  await sendEmailVerification(user);
  console.log("Email enviado, por favor, veja sua caixa de e-mails. Caso não apareça, navegue ate a aba de SPAM do seu e-mail.");
  location.replace(configService.get("routers").login);
});
//# sourceMappingURL=register-CHqrvkcm.js.map
