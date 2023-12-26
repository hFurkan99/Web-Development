
const form = document.querySelector("#submit-form");
const input = document.querySelector("#task-input");
const submitBtn = document.querySelector("#submitbutton");
const deletAllBtn = document.querySelector("#delete-all-button");
const todoList = document.querySelector("#task-list");
let todos;

loadItems();


eventListeners();

function eventListeners() {
    //submit
     form.addEventListener("submit", addNewItem); 
     // delete an item
    todoList.addEventListener("click", deleteItem);   
     // delete items with delete all buton
     deletAllBtn.addEventListener("click", deleteAllItems);
 }

function loadItems() {
    todos = getItemsFromLS();
    todos.forEach(function (item) {
        createItems(item);
    });
}

function getItemsFromLS() {
    if (localStorage.getItem("todos") == null) {
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function setItemsToLS(newtodo) {
    todos = getItemsFromLS();
    todos.push(newtodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function createItems(newtodo) {
    //li oluşturma
   const li = document.createElement("li");
   li.className = "todo-list-items";
   li.appendChild(document.createTextNode(newtodo));

   //a oluşturma
   const a = document.createElement("a");
    a.setAttribute("href", "#");
   a.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    li.appendChild(a);
   todoList.appendChild(li);

}





 function addNewItem(e) {
     if (input.value== "") {
        alert("Add new item !");
     }
     else{
     createItems(input.value);
        setItemsToLS(input.value);
    input.value = "";
     e.preventDefault();
     }
 }

 function deleteItem(e) {
    if(e.target.className === "fa-solid fa-xmark"){
        if(confirm("Silmek istediğinizden emin misiniz ?")){
            e.target.parentElement.parentElement.remove();
            deleteToDoFromLS(e.target.parentElement.parentElement.textContent)
        }
    }
    e.preventDefault();
 }

 function deleteAllItems(e) {
      if(confirm("Hepsini silmek istiyor musun?")){
        while (todoList.firstChild) {
            todoList.removeChild(todoList.firstChild);
        }
        localStorage.clear();
      }
      e.preventDefault();
 }

 function deleteToDoFromLS(deleteToDo) {
    let todos = getItemsFromLS();

    todos.foreach(function(todo, index){
        if (todo == deleteToDo) {
            todos.splice(index, 1);
        }
    });

    localStorage.setItem("todos", JSON.stringify(todos));
 }


 