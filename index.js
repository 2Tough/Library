
let bookAuthor = document.getElementById('book-author')
let bookTitle = document.getElementById('book-title')
let bookPages = document.getElementById('book-number-of-pages')
let bookStatus = document.getElementById('book-read-or-not')
let addedBooks = document.getElementById('added-books')
let removeBooks = document.getElementsByClassName('remove-btn')

const addBtn = document.getElementById('add-btn')


let myLibrary = []
let entryNum = 0




function Book(author, title, pages, status) {
    this.author = author
    this.title = title
    this.pages = pages
    this.status = status
    
}






addBtn.addEventListener('click', function() {
    addBookTolibrary(event)
    
    
})

function addBookTolibrary(event) {
    event.preventDefault()
    let newBook = new Book(bookAuthor.value, bookTitle.value, bookPages.value, bookStatus.value)
    myLibrary.push(newBook)
    console.log(bookStatus.value)

    showLibrary()
    
   }

function showLibrary() {
    addedBooks.innerHTML = ''
    myLibrary.forEach((book, index) => {
        
       const createBookCard = document.createElement("div")
       createBookCard.classList.add("book-card")
       createBookCard.innerHTML = ` 
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>Pages: ${book.pages}</p>`
       addedBooks.appendChild(createBookCard)
       createBookCard.dataset.id = index
       
       const readButton = document.createElement("button");
        readButton.classList.add("read-button");
        readButton.innerHTML = `${book.status}`
        readButton.addEventListener("click", () => {
            if(readButton.innerHTML == 'Read') {
                readButton.textContent = 'Not read'
                
            } else {
                readButton.textContent = 'Read'
                
            }
            readButton.innerHTML
            });
        createBookCard.appendChild(readButton);
        
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => {
            myLibrary.splice(myLibrary.indexOf(book), 1);
            showLibrary();
        });
        createBookCard.appendChild(deleteButton); 
        addedBooks.appendChild(createBookCard);
        
    });
}
        
     
        

