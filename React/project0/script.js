const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let totalCounter = 0 // total number of created todos [GLOBAL VARIABLE]
                     // this ensures a new index for each todo I create is unique

// updates the item count by incr
function updateItemCountSpan(incr) {
  itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) + incr
}

// updates unchecked count by incr
function updateUncheckedCountSpan(incr) {
  uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + incr
}

function deleteChecked()
{
  const todos = list.getElementsByTagName('li')

  for (let i = 0; i < todos.length; i++)
  {

    // loop through all of the checkboxes and check if they are checked

    let todo = todos[i]
    let todoIdx = parseInt(todo.getAttribute('index'))
    let checkbox = todo.childNodes[0]
    
    console.log(checkbox)

    if (checkbox.checked === true)
    {
      updateItemCountSpan(-1)
      todo.remove()
    }
  }
}

function deleteTodo(index)
{
  const todos = list.getElementsByTagName('li')

  for (let i = 0; i < todos.length; i++)
  {
    let todo = todos[i]
    let todoIdx = parseInt(todo.getAttribute('index'))
    let checkbox = todo.childNodes[0]

    console.log(checkbox)

    if (todoIdx === index)
    {
      console.log("is Checked: " + checkbox.checked)
      updateItemCountSpan(-1)
      if (checkbox.checked === false)
      {
        updateUncheckedCountSpan(-1)
      }
      todo.remove()
    }

  }
}

function clickCheckBox(index)
{
  const todos = list.getElementsByTagName('li')

  for (let i = 0; i < todos.length; i++)
  {
    let todo = todos[i]
    let checkbox = todo.getElementsByTagName('input')[0]
    let todoIdx = parseInt(checkbox.getAttribute('index'))

    if (todoIdx === index)
    {
      if (checkbox.checked === true)
      {
        checkbox.checked = true
        updateUncheckedCountSpan(-1)
      } else
      {
        checkbox.checked = false
        updateUncheckedCountSpan(1)
      }
    }

  }


}

function newTodo() {

  let text = prompt('Please enter TODO Here!!!!')

  // create checkbox
  const newCheckBox = document.createElement('input')
  newCheckBox.setAttribute('type', 'checkbox')
  newCheckBox.setAttribute('style', classNames['TODO_CHECKBOX'])
  newCheckBox.setAttribute('index', totalCounter)
  newCheckBox.setAttribute('onClick', 'clickCheckBox(' + totalCounter + ')')

  // create text box
  const newDetails = document.createElement('span')
  newDetails.innerHTML = text
  newDetails.setAttribute('style', classNames['TODO_TEXT'])


  // create delete button
  const deleteTodo = document.createElement('button')
  deleteTodo.setAttribute('style', classNames['TODO_DELETE'])
  deleteTodo.setAttribute('onClick', 'deleteTodo(' + totalCounter + ')')
  deleteTodo.textContent = 'DELETE!!'

  const newTodo = document.createElement('li')
  newTodo.setAttribute('style', classNames['TODO_CONTAINER'])
  newTodo.setAttribute('index', totalCounter)
  newTodo.appendChild(newCheckBox)
  newTodo.appendChild(newDetails)
  newTodo.appendChild(deleteTodo)

  updateItemCountSpan(1)
  updateUncheckedCountSpan(1)

  list.appendChild(newTodo)

  totalCounter++

}
