
## Create a Task Management App

### Requirements

  - Use the provided files to start writing code.
  - Create new task when pressing the add button.
  - Display error message if user press add button without adding any text.
  - All list item shoud be visible.
  - When click on any task, mark as complete. (just changing the color to green should be enough)
  - Each task should have a delete button, when clicked should remove the task from the list.
  - Create a Delete all button, when clicked should remove all the tasks at once.

### Sample example
- The below example is just to give an idea, you can use your own styling

![appimage](https://user-images.githubusercontent.com/7606310/103648681-e8be2a00-4f65-11eb-998f-b6232f4ac238.png)

### Hint
- To get input value from input field you can do something like:


```sh
HTML: <input type="text" id="myInput" placeholder="Title..." />

In JS File :

 let li = document.createElement("li");
 let inputValue = document.getElementById("myInput").value;
 let textValue = document.createTextNode(inputValue);
 li.appendChild(textValue)
```