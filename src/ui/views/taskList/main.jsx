//    taskCreateVM,
//    taskUI,
//    UiElements,
//    MockupElements,
//    FormUi,
//    HeaderUi,
//    MockupUi

import { taskCreateViewModel } from "../..";
import { taskUi } from "../..";
import { UiElements } from "./elements";
import { MockupElements } from "./elements";
import { FormUi } from "./listTaskUI";
import { HeaderUi } from "./listTaskUI";
import { MockupUi } from "../../components/mockup";

import { ListTaskView } from "./listTaskView";

const listTaskView = new ListTaskView(
  taskCreateViewModel,
  taskUi,
  UiElements,
  MockupElements,
  FormUi,
  HeaderUi,
  MockupUi
);

listTaskView.render()
