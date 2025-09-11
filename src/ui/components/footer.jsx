import { h } from "../../h";

export function Footer(content){
    console.log(content)
    return (
        <footer className="main-footer">
            <hr />
            <div className="footer-content">
            <div className="task-date">{content.content}</div>
            <div className="task-actions">
                <span className="fa-solid fa-trash"></span>
            </div>
            </div>
        </footer>
    )
}