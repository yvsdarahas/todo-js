const inputTitle = document.querySelector("#input__class");
const inputaddDescription = document.querySelector("#input__addDescription");
const unorderedList = document.querySelector(".tasks__display");
const tasksToDo = document.querySelector(".container");
const arrayOfTasks = [];
function AddTaskToDisplay() {
    if (inputTitle.value === "" || inputaddDescription.value === "") {
        alert("MISSING : Need to enter Input")
    } 
    else {
        //Create a new Object and array to store complete task data
        let task = new Object();
        task.id = arrayOfTasks.length;
        task.title = inputTitle.value;
        task.description = inputaddDescription.value;
        task.className = `class${task.id}`
        arrayOfTasks.push(task);
    
        //Create elements list, h1, p to list out the tasks
        let listElement = document.createElement("li");
        listElement.setAttribute("class", task.className);
        let titleOfTask = document.createElement("h1");
        titleOfTask.setAttribute("class", "task__title"+task.className);
        let descriptionOfTask = document.createElement("p");
        descriptionOfTask.setAttribute("class", "task__desc"+task.className);

        //Create button DELETE    
        let buttonDone = document.createElement("BUTTON");
        buttonDone.setAttribute("class", "buttonDone__"+task.className);
        buttonDone.innerText = "Done";
      
        let buttonDelete = document.createElement("BUTTON");
        buttonDelete.setAttribute("id", "buttonDelete__"+task.className);
        buttonDelete.innerText = "Delete"
        
        //Append all the created elements to unordered list
        titleOfTask.innerHTML = task.title;
        descriptionOfTask.innerText = task.description;
        listElement.appendChild(titleOfTask);
        listElement.appendChild(descriptionOfTask);
        listElement.appendChild(buttonDone);
        listElement.appendChild(buttonDelete);
        unorderedList.append(listElement);

        //Clear Inputs title and description in Browser
        inputTitle.value = "";
        inputaddDescription.value = "";   
    }       
}

//Add Event Listener to the Tasks created
unorderedList.addEventListener('click', AddOrRemoveTask, false);

function AddOrRemoveTask(task) {
    let clickedClass = task.target.className;
    let matchDelete = task.target.id.search("buttonDelete__");
    let matchDone = task.target.className.search("buttonDone__");
    if (!clickedClass&& matchDelete >= 0) {
        let deleteTask = task.target.id;
        let deleteTaskID = 0;
        if (deleteTask.length === 20) {
            deleteTaskID = deleteTask.slice(-1);
        }
        else if (deleteTask.length === 21) {
            deleteTaskID = deleteTask.slice(-2);
        }
        let removeElementLen = document.getElementsByClassName(arrayOfTasks[deleteTaskID].className);
        if (removeElementLen.length > 0) {
            removeElementLen[0].remove();
        }
    }
    else if (clickedClass && matchDone >= 0) {
        let deleteTaskID = "";
        if (clickedClass.length === 18) {
            deleteTaskID = clickedClass.slice(-6);
        }
        else if (clickedClass.length === 19) {
            deleteTaskID = clickedClass.slice(-7);
        }
        let removeElement = document.getElementsByClassName(deleteTaskID);
        removeElement[0].classList.toggle("removedElement");
    }
}

//Event to Clear all tasks from the display
function ClearAll() {
    while (unorderedList.firstChild) {
    unorderedList.removeChild(unorderedList.lastChild);
    }
}


