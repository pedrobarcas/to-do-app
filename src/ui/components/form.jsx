import { h } from "../../h";

export function Form(task){
    return (
        <section className="main-infos-task" id="main-infos-task">
            <div className="form-input-box">
            <span className="fa-regular fa-sun"></span>
            <button className="remember-me-button form-input">Lembrar-me</button>
            </div>

            <div className="form-input-box">
            <label for="date" className="fa-regular fa-calendar"></label>
            <input type="date" className="form-input" name="date" id="date" value={task.task.date}/>
            </div>

            <div className="form-input-box">
            <label for="archive" className="fa-solid fa-paperclip"></label>
            <label for="archive"> Adicionar um arquivo</label>
            <input type="file" className="form-input" name="archive" id="archive" />
            </div>

            <textarea
                name="anotations"
                id="anotations"
                placeholder="Adicionar anotações"
                value={task.task.description}
            ></textarea>
        </section>
    )
}