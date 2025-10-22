import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../../firebase/firebase";
import { configService } from "../..";

const email = document.getElementById("email")
const password = document.getElementById("password")
const button = document.getElementById("submit")

button.addEventListener("click", () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
        location.replace(configService.get("routers").home)
    })
    .catch((error) => {
        console.log(error)
    })
})