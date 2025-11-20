import { createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth"
import { authExceptions } from "./exceptions"
import { auth } from "../../../../firebase/firebase"
import { configService } from "../.."

const email = document.getElementById("email")
const password = document.getElementById("password")
const button = document.getElementById("submit")
const messageBox = document.getElementById("message-box")

button.addEventListener("click", async () => {

    try{
        const userCredentials = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredentials.user;
    
        await sendEmailVerification(user);
        console.log("Email enviado, por favor, veja sua caixa de e-mails. Caso não apareça, navegue ate a aba de SPAM do seu e-mail.")
        location.replace(configService.get("routers").login)
    }

    catch(error){
        console.log(error)
        messageBox.textContent = authExceptions(error.code)
        messageBox.style.color = "var(--error-message)"
        button.style.backgroundColor = "var(--error-message)"
    };
})