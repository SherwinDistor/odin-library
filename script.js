// Create Array to store books
const myLibrary = [

];

const bookShelf = document.querySelector('.main')

// Create a class with a constructor to construct a book with given information
class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

Book.prototype.changeRead = function () {
    this.isRead = !this.isRead;
}

// Create a function to add a new book into the library array
function addBookToLibrary() {
    
    const title = document.querySelector('#book-title').value;
    const author = document.querySelector('#book-author').value;
    const pages = document.querySelector('#page-number').value;
    let isRead;
    
    if (document.querySelector('#book-read').checked) {
        isRead = true;
    } else {
        isRead = false;
    }
    

    const newBook = new Book(title, author, pages, isRead);
    
    myLibrary.push(newBook);

    closePopup(popup);
    
    displayBooks();

    clearInput();
}



// Create a function that displays each book on the shelf, using a loop
function displayBooks() {

    bookShelf.innerHTML = '';

    myLibrary.map((book, index) => {
        
        // Get reference fo the main div
        const mainDiv = document.querySelector(".main");

        // Create new div
        let bookDiv = document.createElement("div");

        // Add "book" class
        bookDiv.classList.add("book");

        // Append child new div to main div
        mainDiv.appendChild(bookDiv);
        
        // Book details and Button div creation
        let bookDetailsDiv = document.createElement("div");
        bookDetailsDiv.classList.add("book-details");
        bookDiv.appendChild(bookDetailsDiv);

        let bookEditBtn = document.createElement('div');
        bookEditBtn.classList.add('book-edit-btn');
        bookDiv.appendChild(bookEditBtn);
        
        // Book details creation
        let titleEl = document.createElement('h2');
        titleEl.textContent = book.title;
        bookDetailsDiv.appendChild(titleEl);
        
        let authorEl = document.createElement('h3');
        authorEl.textContent = book.author;
        bookDetailsDiv.appendChild(authorEl);
        
        let pagesEl = document.createElement('p');
        pagesEl.textContent = `Pages: ${book.pages}`;
        bookDetailsDiv.appendChild(pagesEl);

        // button creation
        let editBtn = document.createElement('button');
        editBtn.id = "edit-btn";
        editBtn.dataset.index = index;
        editBtn.textContent = book.isRead === true ? 'Read' : 'Unread';
        editBtn.addEventListener('click', () => {
            myLibrary[index].changeRead();
            displayBooks();
        })
        bookEditBtn.appendChild(editBtn);
        

        // remove button and function
        let removeBtn = document.createElement('button');
        removeBtn.id = "remove-btn";
        removeBtn.dataset.index = index;
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
        })
        bookEditBtn.appendChild(removeBtn);
    })
}



// Add a button for adding a new book, input results into the book function and call the add a new book to library function
const openAddBookPopupBtn = document.querySelector('[data-popup-target]');
const closeBtn = document.querySelector('[data-close-btn]');
const overlay = document.getElementById('overlay');

openAddBookPopupBtn.addEventListener('click', () => {
    const popup = document.querySelector('.popup');
    openPopup(popup);
})

closeBtn.addEventListener('click', () => {
    const popup = document.querySelector('.popup')
    closePopup(popup);
})

// Create a function to change the dom elements for popup
function openPopup(popup) {
    if (popup == null) {
        return;
    }
    popup.classList.add('active');
    overlay.classList.add('active');
}

// Create a function to close the popup
function closePopup(popup) {
    if (popup == null) {
        return;
    }
    popup.classList.remove('active');
    overlay.classList.remove('active');
}

// Form submit button defined
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', addBookToLibrary)

// Clear input fields function
function clearInput() {
    document.querySelector('#book-title').value = '';
    document.querySelector('#book-author').value = '';
    document.querySelector('#page-number').value = '';
}

displayBooks()