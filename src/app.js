const list = document.querySelector('#book-list ul')

list.addEventListener('click', e => {
  if (e.target.className === 'delete') {
    const li = e.target.parentElement
    list.removeChild(li)
  }
})

document
  .querySelector('a')
  .addEventListener('click', e => e.preventDefault())

const addForm = document.forms['add-book']

addForm.addEventListener('submit', e => {
  e.preventDefault()
  const val = addForm.querySelector('input').value

  // create elements
  const li = document.createElement('li')
  const bookName = document.createElement('span')
  const deleteBtn = document.createElement('span')

  // add content
  deleteBtn.textContent = 'delete'
  bookName.textContent = val

  // add classes
  deleteBtn.classList.add('delete')
  bookName.classList.add('name')

  //append to document
  li.appendChild(bookName)
  li.appendChild(deleteBtn)

  list.appendChild(li)
})

const hideBox = document.querySelector('#hide')
hideBox.addEventListener('change', e => {
  if (hideBox.checked) {
    list.style.display = 'none'
  } else {
    list.style.display = 'block'
  }
})
