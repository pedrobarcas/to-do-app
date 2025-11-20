import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../../firebase/firebase";
import { configService } from "../..";
import { authExceptions } from "./exceptions";

const email = document.getElementById("email")
const password = document.getElementById("password")
const button = document.getElementById("submit")
const messageBox = document.getElementById("message-box")

button.addEventListener("click", () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
        location.replace(configService.get("routers").home)
    })
    .catch((error) => {
        console.log(error)
        messageBox.textContent = authExceptions(error.code)
        messageBox.style.color = "var(--error-message)"
        button.style.backgroundColor = "var(--error-message)"
    })
})