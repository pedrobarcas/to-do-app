import { h } from "../../h";
import { TaskCard } from "./task";
import { Header } from "./header";
import { Footer } from "./footer";
import { Form } from "./form";
export function taskDetail(task){
    return (
      <main className="main-content">
        

        <Header href={"./index.html"}/>
        <div className="main-task tasks">
            <TaskCard task={task} forEdition={true} />
        </div>
        <Form task={task}/>
        <Footer content={task.create_date} />
    </main>
    )
}