import { o as onAuthStateChanged, c as configService, a as auth } from "./index-ChufUB_s.js";
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.replace(configService.get("routers").login);
  } else {
    console.log("Acesso liberado para:", user.email);
  }
});
//# sourceMappingURL=private-check-e8s1RHyo.js.map
