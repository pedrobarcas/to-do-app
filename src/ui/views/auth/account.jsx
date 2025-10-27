import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase/firebase";
import { userCached } from "../../../../firebase/firebase";

const email = document.getElementById("email");
const logout = document.getElementById("logout");
const icon = document.getElementById("icon")

//onAuthStateChanged(auth, user => {
//email.textContent = userCached?.email;
//icon.textContent = userCached?.email[0].toUpperCase();
//})

logout.addEventListener("click", () => {
    localStorage.removeItem("userCached")
    signOut(auth)
    location.replace("/")
})