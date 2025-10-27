import { auth } from "../../../../firebase/firebase";
import { configService } from "../..";
import { getRedirectResult, onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import { provider } from "../../../../firebase/firebase";

const email = document.getElementById("email");

onAuthStateChanged(auth, user => {
  console.log(user)
})

email.addEventListener("click", async () => {
  const result = await signInWithRedirect(auth, provider);
  console.log(result);
});


getRedirectResult(auth).then(
  console.log("Usuario logado").catch(error => {
    console.log(error)
  })
)