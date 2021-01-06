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
        let descriptionOfTask = document.createElement("p");

        //Create buttons ADD and DELETE
        let buttonDone = document.createElement("BUTTON")
        let buttonText = document.createTextNode("Done");
        buttonDone.setAttribute("class", "buttonDone__"+task.className);
        buttonDone.appendChild(buttonText);
        
        let buttonDelete = document.createElement("BUTTON");
        buttonText2 = document.createTextNode("Delete");
        buttonDelete.setAttribute("class", "buttonDelete__"+task.className);
        buttonDelete.appendChild(buttonText2);
        
        //Append all the created elements to unordered list
        titleOfTask.innerHTML = task.title;
        descriptionOfTask.innerText = task.description;
        listElement.appendChild(titleOfTask);
        listElement.appendChild(descriptionOfTask);
        listElement.appendChild(buttonDone);
        listElement.appendChild(buttonDelete);
        unorderedList.append(listElement);

        inputTitle.value = "";
        inputaddDescription.value = "";

        //Add Event Listener to ADD and DELETE BUTTON
        let taskDeleteButton = document.querySelectorAll('button[class^="buttonDelete__"]');

        taskDeleteButton.forEach(DeleteTaskFromDisplay);
        function DeleteTaskFromDisplay(button) {
            button.addEventListener('click', () => {
            let deleteTask = button.className;
            console.log(deleteTask);
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
    }       
}

//         for (const button of taskDoneButton) {
//             button.addEventListener('click', () => {
//                 let deleteTask = button.className;
//                 console.log(deleteTask);
//                 let removeID = 0;
//                 if (deleteTask.length === 20) {
//                     removeID = deleteTask.slice(-1);
//                 }
//                 else if (deleteTask.length === 21) {
//                     removeID = deleteTask.slice(-2);
//                 }
//                 let removeElementLen = document.getElementsByClassName(arrayOfTasks[removeID].className);
//                 if (removeElementLen.length > 0) {
//                     removeElementLen[0].remove();
//                 }
//             })
//         }
//     }
// }





