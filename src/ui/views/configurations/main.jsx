import { h } from "../../../h";
import { Header } from "../../components/header";
import { configService } from "../..";

const header = <Header title="Configurações" href={configService.get("routers").home}/>

const container = document.getElementById("container")

container.prepend(header)