import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../../firebase/firebase"

const email = document.getElementById("email")
const password = document.getElementById("password")
const button = document.getElementById("submit")

button.addEventListener("click", () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
        location.replace(configService.get("routers").login)
    })
    .catch((error) => {
        console.log(error)
    })
})