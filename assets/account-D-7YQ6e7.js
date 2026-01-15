import { h as signOut, c as configService, a as auth } from "./index-ChufUB_s.js";
/* empty css               */
/* empty css                */
const email = document.getElementById("email");
const logout = document.getElementById("logout");
const icon = document.getElementById("icon");
const userCached = JSON.parse(localStorage.getItem("userCached"));
email.textContent = userCached.email;
icon.textContent = userCached.email[0].toUpperCase();
logout.addEventListener("click", () => {
  localStorage.removeItem("userCached");
  signOut(auth);
  location.replace(configService.get("routers").login);
});
//# sourceMappingURL=account-D-7YQ6e7.js.map
