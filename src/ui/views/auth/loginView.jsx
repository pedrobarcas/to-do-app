import { auth } from "../../../../firebase/firebase";
import { configService } from "../..";
import { getRedirectResult, onAuthStateChanged, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { provider } from "../../../../firebase/firebase";

const email = document.getElementById("email");

onAuthStateChanged(auth, user => {
  console.log(user)
})

email.addEventListener("click", async () => {
  const result = await signInWithPopup(auth, provider);
  location.replace(configService.get("routers").home)
});