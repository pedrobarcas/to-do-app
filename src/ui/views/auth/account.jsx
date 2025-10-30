import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase/firebase";
import { configService } from "../..";


const email = document.getElementById("email");
const logout = document.getElementById("logout");
const icon = document.getElementById("icon")

const userCached = JSON.parse(localStorage.getItem("userCached"))

//onAuthStateChanged(auth, user => {
email.textContent = userCached.email;
icon.textContent = userCached.email[0].toUpperCase();
//})

logout.addEventListener("click", () => {
    localStorage.removeItem("userCached")
    signOut(auth)
    location.replace(configService.get("routers").login)
})