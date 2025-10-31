import { sendCopy } from "./share";

export function copyListTasks(tasks, title) {
  let tasksCopy = `${title}\n`;
  const tasksNotCompleted = [];
  const tasksCompleted = [];
  tasks.forEach((task) => {
    if (!task.completed) {
      tasksNotCompleted.push(task);
    } else {
      tasksCompleted.push(task);
    }
  });

  tasksNotCompleted.forEach((task) => {
    tasksCopy += `○ ${task.name}\n`;

    tasksCopy += "\n Concluidas:\n";

    tasksCompleted.forEach((task) => {
      tasksCopy += `    ● ${task.name}\n`;
    });
  });

  sendCopy(tasksCopy);
}
