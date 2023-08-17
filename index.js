const add = document.getElementById('addBtn');
const showMessage = document.getElementById('emptyTask');
let todoList = [];

if(todoList.length<=0){
    showMessage.innerText = "There's no task to show "
    
};

let tname = document.getElementById('text');
let tdes = document.getElementById('description');

const submitHandler = (e) => {
    e.preventDefault();
    let taskName = tname.value;
    let taskDescription = tdes.value;
  
    let nameResult = document.getElementById('todoResult');
  
    todoList.push({
      taskName,
      taskDescription
    });
  
    let todoResult = "<div id='containerResult'>";
  
    todoList.map((item, index) => {
      todoResult += ` <h2 id='task'>Task ${index + 1} </h2>`;
      todoResult += `<h3>${item.taskName} </h3>`;
      todoResult += ` <p> ${item.taskDescription} </p>`;
    });
  
    todoResult += "</div>";
  
    nameResult.innerHTML = todoResult;
  
    tname.value = ""; 
    tdes.value = ""; 
  };


add.addEventListener('click',submitHandler)
