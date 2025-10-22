import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../firebase/firebase";


const email = document.getElementById("email");
const logout = document.getElementById("logout");
const icon = document.getElementById("icon")

onAuthStateChanged(auth, user => {
    email.textContent = user.email;
    icon.textContent = user.email[0].toUpperCase();
})

logout.addEventListener("click", () => {
    signOut(auth)
    location.replace("/")
})