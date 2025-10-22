import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { configService } from ".";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // não autenticado: redireciona pro login
    window.location.replace(configService.get("routers").login);
  } else {
    // autenticado: continua e pode carregar dados específicos
    console.log("Acesso liberado para:", user.email);
  }
});
