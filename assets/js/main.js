'use strict'
let setMainDiv= document.createElement('div')
setMainDiv.className='main-todo-list'
document.body.append(setMainDiv);

let createTodoDiv=document.createElement('div')
createTodoDiv.className='add-todo-box'

let getMainDiv=document.querySelector('.main-todo-list')
getMainDiv.append(createTodoDiv);

let getTodoBox=document.querySelector('.add-todo-box')
let setTodoInput=document.createElement('input')
getTodoBox.appendChild(setTodoInput)
setTodoInput.id="TodoInput"
let getTodoInput=document.querySelector('#TodoInput')

let setTodoButton=document.createElement('button')
getTodoBox.append(setTodoButton)
setTodoButton.id="TodoButton"

let addTodoBtn=document.querySelector('#TodoButton')

let deleteAll=document.createElement('button')
getTodoBox.append(deleteAll)
deleteAll.id=('delete_all')
function css() {
    getMainDiv.style.width='100%'
    getMainDiv.style.margin='auto'
    getMainDiv.style.height='600px'
    getMainDiv.style.border='2px solid green'

    getTodoInput.style.type='text'
    getTodoInput.style.width='300px'
    getTodoInput.style.height='30px'
    getTodoInput.style.outline='none'
    getTodoInput.style.fontSize='20px'
    getTodoInput.style.marginTop='80px'
    getTodoInput.style.marginLeft='80px'

    addTodoBtn.style.outline='none'
    addTodoBtn.textContent = "Click"
    addTodoBtn.style.marginLeft='40px'
    addTodoBtn.style.padding='8px 20px'
    addTodoBtn.style.backgroundColor='lightgreen'
    addTodoBtn.style.fontSize='20px'
    addTodoBtn.style.fontWeight='bold'
    addTodoBtn.style.border='none'
    addTodoBtn.style.cursor='pointer'

    
    deleteAll.style.outline='none'
    deleteAll.textContent = "Delete All"
    deleteAll.style.marginLeft='40px'
    deleteAll.style.padding='8px 20px'
    deleteAll.style.backgroundColor='red'
    deleteAll.style.fontSize='20px'
    deleteAll.style.fontWeight='bold'
    deleteAll.style.border='none'
    deleteAll.style.cursor='pointer'
}
css()
addTodoBtn.addEventListener('click',clickBtn)

let setTodoUl=document.createElement('ul')
getTodoBox.append(setTodoUl)
setTodoUl.id='todoUl'
let todoList=document.getElementById('todoUl')
setTodoUl.style.marginTop='20px'

function clickBtn() {
    if (getTodoInput.value !='') {
        let setTodoLi=document.createElement('li')
        let setTodoIcon=document.createElement('i')
        setTodoIcon.classList = "fa-solid fa-trash deleteBtn"
        setTodoIcon.style.marginLeft = "40px"
        setTodoIcon.style.color = "red"
        setTodoIcon.style.cursor = "pointer"
        todoList.append(setTodoLi);
        setTodoLi.className='todoItem'
        let getTodoItem = document.querySelectorAll(".todoItem")
        let getInputValue= getTodoInput.value

        getTodoItem[getTodoItem.length - 1].textContent =  getInputValue
        getTodoInput.value = ""
        todoList.style.listStyle = "decimal"
        getTodoItem[getTodoItem.length - 1].style.fontSize = "23px"
        getTodoItem[getTodoItem.length - 1].style.fontWeight = "600"
        getTodoItem[getTodoItem.length - 1].appendChild(setTodoIcon)
        getTodoItem[getTodoItem.length - 1].style.marginTop = "10px"

        let deleteButton = document.querySelectorAll(".deleteBtn")
       
        for (let j = 0; j < deleteButton.length; j++) {
            deleteButton[j].onclick = function(){
                todoList.removeChild(getTodoItem[j])  
            }
            
        }
        deleteAll.onclick= function () {
            if (todoList.childElementCount !=0) {
               try {
                for (let i = 0; i < getTodoItem.length; i++) {
                    setTodoUl.removeChild(setTodoUl.lastElementChild)
                }
               } catch (error) {
                 console.log(error);
               }
            }
        }
    }
}
