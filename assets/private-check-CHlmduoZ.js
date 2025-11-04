import { o as onAuthStateChanged, c as configService, a as auth } from "./index-CEjhPFPf.js";
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.replace(configService.get("routers").login);
  } else {
    console.log("Acesso liberado para:", user.email);
  }
});
//# sourceMappingURL=private-check-CHlmduoZ.js.map
