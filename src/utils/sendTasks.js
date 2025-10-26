export function copyListTasks(tasks) {
  let tasksCopy = `${key}\n`;
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
}
