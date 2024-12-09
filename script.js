// Create Array to store books
const myLibrary = [];

// Create a function to construct a book with given information
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// Create a function to add a new book into the library array
function addBookToLibrary(event) {
    event.preventDefault();
    
    const title = document.querySelector('#book-title').value;
    const author = document.querySelector('#book-author').value;
    const pages = document.querySelector('#page-number').value;
    let isRead = document.querySelector('#book-read').value;
    
    if (isRead === 'on') {
        isRead = true;
    } else {
        isRead = false;
    }

    const newBook = new Book(title, author, pages, isRead);
    
    myLibrary.push(newBook);

    displayBooks();
}

// Create a function that displays each book on the shelf, using a loop
function displayBooks() {
    
    myLibrary.forEach((book) => {
        
        // Get reference fo the main div
        const mainDiv = document.querySelector(".main");

        // Create new div
        let bookDiv = document.createElement("div");

        // Add "book" class
        bookDiv.classList.add("book");

        // Append child new div to main div
        mainDiv.appendChild(bookDiv);
        

        let bookDetailsDiv = document.createElement("div");
        bookDetailsDiv.classList.add("book-details")
        bookDiv.appendChild(bookDetailsDiv);

        // Work on the book-edit-button creation


        let titleEl = document.createElement('h2');
        titleEl.textContent = book.title;
        bookDetailsDiv.appendChild(titleEl)

        let authorEl = document.createElement('h3');
        authorEl.textContent = book.author;
        bookDetailsDiv.appendChild(authorEl);

        let pagesEl = document.createElement('p');
        pagesEl.textContent = `Pages: ${book.pages}`;
        bookDetailsDiv.appendChild(pagesEl);
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

// 

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', addBookToLibrary)

// Create a function to remove a specific book from the library
// Add a button to delete or remove the book from the library
// Add a button for each book to change the read status