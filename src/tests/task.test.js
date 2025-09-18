import { Task } from "../domain/entities/task.js";
import { TaskFactory } from "../domain/factorys/taskFactory.js";
import { TaskRepository } from "../application/taskRepository.js";
import { TaskService } from "../domain/taskService.js";
import { LocalStorageRepository } from "../infrastructure/LocalStorage.js";
import {
  NameExceededValidator,
  DescriptionExceededValidator,
  TaskDataValidator,
  TaskNotFoundValidator,
} from "../domain/validators/index.js";
import { TaskIDNotSend } from "../domain/exceptions/taskIDNotSend.js";

describe("Testando Tasks", () => {
  let repository;
  let service;

  beforeAll(() => {
    // Passando os validadores de edição e remoção
    const validatorsEdit = [
      new NameExceededValidator(),
      new DescriptionExceededValidator(),
      new TaskDataValidator(),
    ];
    const validatorsSave = [
      new NameExceededValidator(),
      new DescriptionExceededValidator(),
    ];
    const validatorsRemove = [new TaskNotFoundValidator(), new TaskIDNotSend()]; // só valida se a task existe
    const repositoryLocalStorage = new LocalStorageRepository("task");
    service = new TaskService(validatorsEdit, validatorsRemove, validatorsSave);
    repository = new TaskRepository(service, repositoryLocalStorage);
    localStorage.clear();
  });

  test("Instância da Task via Factory", () => {
    const task = TaskFactory.create(
      "Ir para a academia.",
      "Treinar peito e bíceps."
    );
    expect(task instanceof Task).toBe(true);
    expect(task.name).toBe("Ir para a academia.");
    expect(task.description).toBe("Treinar peito e bíceps.");
  });

  test("Salvar Task no localStorage", () => {
    const task = TaskFactory.create(
      "Ir para a academia.",
      "Treinar peito e bíceps."
    );
    const result = repository.save(task);
    expect(typeof result).toBe("object");
  });

  test("Carregamento das Tasks", () => {
    const task = TaskFactory.create(
      "Ir para a academia.",
      "Treinar peito e bíceps."
    );
    const result = repository.save(task);
    const task_load = repository.load();
    expect(typeof task_load).toBe("object");
  });

  test("Completamento de uma Task", () => {
    const task = TaskFactory.create(
      "Ir para a academia.",
      "Treinar peito e bíceps."
    );
    const result = repository.save(task);

    const completed_task = repository.completed(task);
    expect(typeof completed_task).toBe("object");
  });
});

describe("Testando TaskService", () => {
  let service;
  let repository;

  beforeAll(() => {
    const validatorsEdit = [
      new NameExceededValidator(),
      new DescriptionExceededValidator(),
      new TaskDataValidator(),
    ];
    const validatorsRemove = [new TaskDataValidator()];
    const validatorsSave = [
      new NameExceededValidator(),
      new DescriptionExceededValidator(),
    ];
    const repositoryLocalStorage = new LocalStorageRepository("task");
    service = new TaskService(validatorsEdit, validatorsRemove, validatorsSave);
    repository = new TaskRepository(service, repositoryLocalStorage);
    localStorage.clear();
  });

  test("Editar uma Task existente", () => {
    const task = TaskFactory.create("Correr", "10km");
    repository.save(task);

    const updatedTask = service.edit(task, { name: "Malhar" });
    expect(updatedTask.name).toBe("Malhar");
  });

  test("Validação de máximo de caracteres no nome", () => {
    const longName = "A".repeat(31);
    const task = TaskFactory.create(longName, "Descrição válida");

    expect(() => {
      service.validate(task, service.validatorsEdit);
    }).toThrow('O campo "nome" deve ter no máximo 30 caracteres.');
  });

  test("Validação de máximo de caracteres na descrição", () => {
    const longDesc = "D".repeat(151);
    const task = TaskFactory.create("Nome válido", longDesc);

    expect(() => {
      service.validate(task, service.validatorsEdit);
    }).toThrow('O campo "descrição" deve ter no máximo 150 caracteres.');
  });

  test("Validação de task sem nome nem descrição", () => {
    const task = TaskFactory.create("", "");

    expect(() => {
      service.validate(task, service.validatorsEdit);
    }).toThrow("Pelo menos o nome ou a descrição precisam ser preenchidos.");
  });
});
