const todoList = [{name:'wash cloth',
   dueDate:'02-12-2022'},
   {name:'make bread', 
   dueDate: '03-10-2021'}];
  renderTodoList();

  function renderTodoList() {
   let todoListHTML= '';

   todoList.forEach(function(todoObject, index) { 
    const{ name, dueDate } = todoObject;
  const html = `
     <div>${name}</div>
    <div> ${dueDate}</div>
    <button onclick="
    todoList.splice(${index}, 1);
    renderTodoList();
    " class="delete-button">Delete</button>`; 
 
 todoListHTML += html;
 });
  document.querySelector('.js-todoList').innerHTML = todoListHTML;
  }

  function addTodo() {
  const inputElement = document.querySelector('.js-input-name');
  const name = inputElement.value;

  const inputElementDate = document.querySelector('.js-input-date');
  const dueDate = inputElementDate.value;

  todoList.push({name,dueDate});

  inputElement.value = '';
  renderTodoList();
  }