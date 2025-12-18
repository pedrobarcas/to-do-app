import { h } from "../../h";
import styles from "./styles/accountHeader.module.css"



export function AccountHeader({user}){
    return (
        
    <header className={`box-animated ${styles.header}`}>
        <a href="./account.html">
            <div className={`${styles.header_content}`}>
                <div className={styles.circle_img}>{user.email[0].toUpperCase()}</div>
                <div className={styles.header_content_text}>
                    <h1>To do<span className="fa-solid fa-chevron-down"></span></h1>
                    <h2>{user.email}</h2>
                </div>
            </div>
        </a>
    </header>
    )
}