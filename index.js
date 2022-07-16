// query to dom for getting elements
const todoTitle = document.getElementById("todoTitle");
const todoPlaceHolder = document.getElementById("placeHolder");
const submitBtn = document.getElementById("submitButton");
const todoMain = document.getElementById("main");
// new todo handeler
const handelNewTodo = (event) => {
  // prevent to rerender page by form
  event.preventDefault();

  // validate todo form
  // undifiend or 

  const notValid = () => {
    const noValue =alert('please type title and description');
  };
  if (!todoTitle.value) return notValid();

  // ******

  // creat an object form todo title and description
  const newTodo = {
    title: todoTitle.value,
    description: todoPlaceHolder.value,
  };
  // create a list item for todo
  const todoListItem = document.createElement("li");
  // todoListItem.className='list-item'
  todoListItem.setAttribute("class", "list-item");
  // create a h3 for title 
  const todoTitleHeading = document.createElement("h3");
  todoTitleHeading.innerHTML = newTodo.title;
  // javascript style(camelCase)
  todoTitleHeading.style.color = "red";
    // create a pragraph for title 
  const todoDescPara = document.createElement("p");
  todoDescPara.innerHTML = newTodo.description;
  todoListItem.appendChild(todoTitleHeading);
  todoListItem.appendChild(todoDescPara);
  console.log(todoListItem);
  // create a div with 3 button for delet, edite and update form(action button)
  const todoAction = document.createElement("div");
  const delButtonAction = document.createElement("button");
  delButtonAction.innerText="delete"
  const editButtonAction = document.createElement("button");
  editButtonAction.innerText="edite"
  const updateButtonAction = document.createElement("button");
  updateButtonAction.innerText="update"
  // appenend CRUD buttons to our div 
  todoAction.appendChild(delButtonAction);
  todoAction.appendChild(editButtonAction);
  todoAction.appendChild(updateButtonAction);
  // put action to maine constant 
  todoListItem.appendChild(todoAction);
  // put our list item into our main ul
  todoMain.appendChild(todoListItem);

  //   const newTodoListItem=`<li>
  //    <h3>${newTodo.title}</h3>
  //    <p>${newTodo.description}</p>
  //    </li>`
  //    todoMain.innerHTML+=newTodoListItem
};
submitBtn.addEventListener("click", handelNewTodo);
