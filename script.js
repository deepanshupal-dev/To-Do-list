let inputField = document.getElementById("inputField");
let btn = document.getElementById("btn");
let clearbtn = document.getElementById("clearbtn");
let taskContainer = document.getElementById("taskContainer");
let emptyMessage = document.getElementById("emptyMessage");

let tasks = [];

btn.addEventListener("click", function () {
  addTask();
});

inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
clearbtn.addEventListener("click", function () {
  tasks = [];
  taskContainer.innerHTML = "";
  localStorage.removeItem("tasks");
  emptyMessage.style.display = "block";
});

/* 
humne ye function last me banaya h aur fir isme vo sara code daal diya h
jisse hum task create karenge aur buttons ko function denge taaki hum iss poore 
code ko is function ki madad se uper diye gye dono event listener me use kar sake 
bina code duplicate ya copy kare sirf function ko call karke hi hum is function ke 
ander ka data use kar sakte h 
*/

function addTask() {
  if (inputField.value.trim() !== "") {
    // task yaha par poora ek object store kaar rha h
    let task = {
      // dat.now()  harr milisecond ko number ke roop me generate karta h jisse ek random id ya number genrate hote h
      id: Date.now(),
      text: inputField.value.trim(),
      completed: false,
    };

    // tasks.push(task) poore object ko tasks array ke andar add karega.
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    //createTask(task) task ko turant screen par dikhata hai ager hum ye nhi
    // lagayenge to task sirf localStorage me save hoga screen par nhi dikhega .
    createTask(task);

    inputField.value = "";
  }
}

let savedTasks = localStorage.getItem("tasks");
if (savedTasks) {
  tasks = JSON.parse(savedTasks);
  tasks.forEach(function (task) {
    createTask(task);
  });
}

function createTask(task) {
  emptyMessage.style.display = "none";

  let newElement = document.createElement("div");
  newElement.textContent = task.text;
  newElement.classList.add("task");

  // ek button ka contianer banya ja rha h dono buttons ko group karne ke liye
  let buttonBox = document.createElement("div");

  // Delete button
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  // complete button
  let complete = document.createElement("button");
  complete.textContent = "Complete";

  buttonBox.append(deleteButton, complete);
  newElement.append(buttonBox);

  deleteButton.addEventListener("click", function () {
    newElement.remove();

    tasks = tasks.filter(function (item) {
      return item.id !== task.id;
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  //  ye condition seedha localStorage me save hogi yahi refresh ke baad bhi complete
  // button ki jo value h yani completed h ya nhi  batayegi

  if (task.completed === true) {
    newElement.style.textDecoration = "line-through";
    complete.textContent = "Undo";
    complete.style.color = "red";
    newElement.style.backgroundColor = "green";
          newElement.style.color = "white";

  } else {
    newElement.style.textDecoration = "none";
    complete.textContent = "Complete";
    complete.style.color = "green";
    newElement.style.backgroundColor = "white";
          newElement.style.color = "black";

  }

  complete.addEventListener("click", function () {
    if (complete.textContent === "Complete") {
      newElement.style.textDecoration = "line-through";
      complete.textContent = "Undo";
      complete.style.color = "red";
      newElement.style.backgroundColor = "green";
      newElement.style.color = "white";
      
      task.completed = true;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      newElement.style.textDecoration = "none";
      complete.textContent = "Complete";
      complete.style.color = "green";
      newElement.style.backgroundColor = "white";
      newElement.style.color = "black";

      task.completed = false;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  });

  taskContainer.append(newElement);
}
