# ✅ To-Do List

A responsive and interactive **To-Do List web application** built with **HTML, CSS, and JavaScript** for creating, managing, completing, and deleting daily tasks.

The application uses **Local Storage** to persist tasks, so your tasks remain available even after refreshing or reopening the browser.

---

## 🚀 Features

- ➕ **Add Tasks**
  - Create new tasks using the input field.

- ⌨️ **Enter Key Support**
  - Press Enter to quickly add a task.

- ✅ **Complete / Undo Tasks**
  - Mark tasks as completed and undo them when needed.

- 🗑️ **Delete Tasks**
  - Remove individual tasks from the list.

- 🧹 **Clear All Tasks**
  - Remove all saved tasks with a single click.

- 💾 **Local Storage**
  - Tasks are stored in the browser and remain available after refreshing the page.

- 📭 **Empty State**
  - Displays a message when there are no tasks available.

- 📱 **Responsive Design**
  - Provides a clean user experience across different screen sizes.

---

## 🛠️ Technologies Used

- **HTML5** — Page structure and markup
- **CSS3** — Styling, layout, and responsive design
- **JavaScript (ES6+)** — Application logic and DOM manipulation
- **Local Storage API** — Persistent task storage

---

## 🔄 How It Works

1. Enter a task in the input field.
2. Click the **Add Task** button or press **Enter**.
3. JavaScript creates and displays the task dynamically.
4. The task is saved to **Local Storage**.
5. Tasks can be marked as completed or restored using **Complete / Undo**.
6. Individual tasks can be deleted.
7. The **All Clear** button removes all saved tasks.

---

## 💾 Data Persistence

This project uses the browser's **Local Storage API** to save tasks.

Tasks are converted into JSON using `JSON.stringify()` before being stored and converted back using `JSON.parse()` when the application loads.

This allows tasks to remain available even after refreshing or reopening the browser.

---

## 📂 Project Structure

```text
To-Do-list/
│
├── index.html
├── style.css
└── script.js
