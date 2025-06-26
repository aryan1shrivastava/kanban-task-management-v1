const item = document.getElementsByClassName("item");
const addtaskbtn = document.getElementById("add-task");
const board = document.getElementById("todo");

function dragevents(target) {
  target.addEventListener("dragstart", () => {
    console.log("dragging started");
    target.classList.add("dragging");
  });
  target.addEventListener("dragend", () => {
    console.log("dragging ended");
    target.classList.remove("dragging");
  });
}

addtaskbtn.addEventListener("click", () => {
  //what i am doing wrong
  const input = prompt("Enter your task: ");
  if (!input) return; //here we check if input is empty

  console.log("clicked");
  const task = document.createElement("p");
  task.classList.add("item");
  task.setAttribute("draggable", "true");
  task.innerText = input;

  dragevents(task); // Adding drag events to the new task

  board.appendChild(task);
});

const allBoards = document.querySelectorAll(".board");
const allItems = document.querySelectorAll(".item");

allItems.forEach(dragevents);

allBoards.forEach((board) => {
  board.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");
    board.appendChild(draggingItem);
    console.log("upar se kuch gaya");
  });
});
