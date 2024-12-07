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
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

// Create a function that displays each book on the shelf, using a loop
function displayBooks() {
    
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

// Create a function to remove a specific book from the library
// Add a button to delete or remove the book from the library
// Add a button for each book to change the read status