import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase/firebase";
import { userCached } from "../../../../firebase/firebase";

const email = document.getElementById("email");
const logout = document.getElementById("logout");
const icon = document.getElementById("icon")
const username = document.getElementById("username")


email.textContent = userCached?.email;
username.textContent = userCached?.displayName
icon.textContent = userCached?.displayName[0].toUpperCase();

logout.addEventListener("click", () => {
    localStorage.removeItem("userCached")
    signOut(auth)
    location.replace("/")
})