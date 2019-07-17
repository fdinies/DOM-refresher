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
  const value = addForm.querySelector('input[type="text"]').value

  // create elements
  const li = document.createElement('li')
  const bookName = document.createElement('span')
  const deleteBtn = document.createElement('span')

  // add content
  deleteBtn.textContent = 'delete'
  bookName.textContent = value

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

const searchBar = document.forms['search-books'].querySelector(
  'input'
)

searchBar.addEventListener('keyup', e => {
  const term = e.target.value.toLowerCase()
  const books = list.getElementsByTagName('li')

  Array.from(books).forEach(book => {
    const title = book.firstElementChild.textContent
    if (title.toLowerCase().indexOf(term) !== -1) {
      book.style.display = 'block'
    } else {
      book.style.display = 'none'
    }
  })
})

//tabbed content

const tabs = document.querySelector('.tabs')
/*
single Element
<ul class="tabs">
          <li data-target="#about" class="active">About</li>
          <li data-target="#contact">Contact</li>
        </ul>
*/
const panels = document.querySelectorAll('.panel')
/*
NodeList
<div class="panel active" id="about">
          <p>Content for about tab...</p>
          <p>
            Lorem ipsum ...
          </p>
        </div>
        <div class="panel" id="contact">
          <p>Content for contact tab...</p>
          <p>
            Lorem ipsum ...
          </p>
        </div>
*/

//console.log(panels)
tabs.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    const targetPanel = document.querySelector(
      e.target.dataset.target
    )

    Array.from(tabs.children).forEach(c =>
      c.classList.remove('active')
    )
    e.target.classList.add('active')

    //console.log(targetPanel)
    panels.forEach(panel => {
      //console.log(panel)
      if (panel === targetPanel) {
        panel.classList.add('active')
      } else {
        panel.classList.remove('active')
      }
    })
  }
})
