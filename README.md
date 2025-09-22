# To-Do App

Um gerenciador de tarefas moderno, construído com **Vanilla JS**, **JSX (Hiperscript)** e estruturado com **Clean Architecture** e **princípios SOLID**.  
O projeto utiliza **MVVM** para separar claramente **UI, ViewModel e Domain**, facilitando manutenção e escalabilidade.

---

## 🌟 Funcionalidades

- Criar, editar, concluir e remover tarefas.
- Agrupar tarefas por listas (ex.: "Importante", "Meu Dia").
- Visualizar tarefas ativas e concluídas.
- Tema claro/escuro e temas customizados por grupo.
- Upload de arquivos e adição de anotações nas tarefas.
- UI moderna, responsiva e fluida.

---

## 🏗️ Arquitetura

O projeto segue **Clean Architecture**:

- **Domain**

  - `Task` e `Group` → entidades.
  - `TaskFactory` e `GroupFactory` → factories para criação de objetos.
  - `TaskService` → regras de negócio e validações.

- **Application**

  - `Repository` e `TaskRepository` → abstração de persistência.
  - `ViewModels` → `CreateViewModel`, `ListViewModel`, `DetailViewModel`, `EditViewModel`, `RemoveViewModel`.

- **Infrastructure**

  - `LocalStorageRepository` → persistência no `localStorage`.

- **UI**
  - Componentes reutilizáveis (`TaskCard`, `GroupCard`, `Form`, `MainForm`, `AddTask`, etc.)
  - Classes de UI (`TaskUi`, `FormUi`, `HeaderUi`, `MockupUi`) para renderização e interação.

---

## 🛠️ Boas práticas aplicadas

- **SOLID**

  - **SRP**: cada classe cumpre apenas uma responsabilidade.
  - **OCP**: classes extensíveis sem alterar código existente.
  - **LSP**: subclasses substituem classes base sem quebrar lógica.
  - **ISP**: cada classe/interface expõe apenas métodos relevantes.
  - **DIP**: dependências injetadas via construtor, desacopladas de implementações concretas.

- **Modularidade**

  - Código dividido em módulos claros: componentes, ViewModels, serviços, repositórios e factories.

- **Reutilização e manutenção**
  - Components e UI são reutilizáveis.
  - Separação clara entre lógica de negócio, persistência e interface.

---

## ⚙️ Setup

1. Clone o repositório:

```bash
git clone https://github.com/pedrobarcas/todo-app.git
cd todo-app
npm install
npm run dev
```
