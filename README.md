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

- ⚡ **Dynamic Task Management**
  - Tasks are dynamically created, updated, and removed using JavaScript.

- 📱 **Responsive Design**
  - Provides a clean user experience across different screen sizes.

---

## 🛠️ Technologies Used

- **HTML5** — Page structure and markup
- **CSS3** — Styling, layout, and responsive design
- **JavaScript (ES6+)** — Application logic, DOM manipulation, and event handling
- **Local Storage API** — Persistent task storage

---

## 🔄 How It Works

1. Enter a task in the input field.
2. Click the **Add Task** button or press **Enter**.
3. JavaScript creates the task dynamically.
4. The task is displayed in the task list.
5. The task is saved to **Local Storage**.
6. Users can mark tasks as completed or undo them.
7. Individual tasks can be deleted.
8. The **All Clear** button removes all tasks and clears the stored data.

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
```

---

## 💻 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/deepanshupal-dev/To-Do-list.git
```

### 2. Open the project

```bash
cd To-Do-list
```

### 3. Run the application

Open `index.html` in your browser or use the **Live Server** extension in VS Code.

---

## 🧠 What I Learned

Through this project, I practiced:

- DOM manipulation
- Event listeners
- JavaScript functions
- Arrays and objects
- Dynamic element creation
- User input handling
- Local Storage
- `JSON.stringify()`
- `JSON.parse()`
- Array methods such as `push()` and `filter()`
- Conditional logic
- Keyboard events
- Dynamic UI updates
- Responsive web design

---

## 🎯 Future Improvements

Some improvements I plan to add in future versions:

- ✏️ Edit existing tasks
- 🔍 Search and filter tasks
- 📊 Task statistics
- 📅 Task categories and priorities
- 🌙 Dark mode
- 🔔 Task reminders
- 🎨 Improved UI and animations

---

## 👨‍💻 Author

**Deepanshu Pal**

Frontend Developer | Aspiring Full Stack Developer

- GitHub: [@deepanshupal-dev](https://github.com/deepanshupal-dev)
- Email: deepanshupal190@gmail.com

---

⭐ If you find this project useful, feel free to explore the repository and give it a star!
