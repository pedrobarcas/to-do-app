import { o as onAuthStateChanged, c as configService, a as auth } from "./index-BPGqw3BG.js";
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.replace(configService.get("routers").login);
  } else {
    console.log("Acesso liberado para:", user.email);
  }
});
//# sourceMappingURL=private-check-BevK0UrK.js.map
