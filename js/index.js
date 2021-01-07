const inputTitle = document.querySelector("#input__class");
const inputaddDescription = document.querySelector("#input__addDescription");
const unorderedList = document.querySelector(".tasks__display");
let arrayOfTasks = [];

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
        titleOfTask.setAttribute("id", "task__title"+task.className);
        titleOfTask.setAttribute("class", task.className);
        let descriptionOfTask = document.createElement("p");
        descriptionOfTask.setAttribute("id", "task__desc"+task.className);
        descriptionOfTask.setAttribute("class", task.className);

        //Create button DELETE        
        let buttonDelete = document.createElement("BUTTON");
        buttonText2 = document.createTextNode("Delete");
        buttonDelete.setAttribute("id", "buttonDelete__"+task.className);
        buttonDelete.appendChild(buttonText2);
        
        //Append all the created elements to unordered list
        titleOfTask.innerHTML = task.title;
        descriptionOfTask.innerText = task.description;
        listElement.appendChild(titleOfTask);
        listElement.appendChild(descriptionOfTask);
        listElement.appendChild(buttonDelete);
        unorderedList.append(listElement);

        //Clear Inputs title and description in Browser
        inputTitle.value = "";
        inputaddDescription.value = "";        

        //Add Event Listener to DELETE BUTTON
        let taskDeleteButton = document.querySelectorAll('button[id^="buttonDelete__"]');
        taskDeleteButton.forEach(DeleteTaskFromDisplay);
    }       
}

function DeleteTaskFromDisplay(button) {
    button.addEventListener('click', () => {
    let deleteTask = button.id;
    let removeID = 0;
    if (deleteTask.length === 20) {
        removeID = deleteTask.slice(-1);
    }
    else if (deleteTask.length === 21) {
        removeID = deleteTask.slice(-2);
    }
    let removeElementLen = document.getElementsByClassName(arrayOfTasks[removeID].className);
    if (removeElementLen.length > 0) {
        removeElementLen[0].remove();
    }    
    
    });
}

unorderedList.addEventListener('click', AddOrRemoveTask, false);

function AddOrRemoveTask(task) {
    let clickedClass = task.target.className;
    if (task.target !== task.currentTarget && task.target.className) {
        let removeElement = document.getElementsByClassName(clickedClass);
        removeElement[0].classList.toggle("removedElement")
    }
}


