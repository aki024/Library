//LIBRARY ARRAY
let myLibrary = [];

//getting stuff from form
const addBookTitle = document.querySelector('#bookName')
const addBookAuthor = document.querySelector('#bookAuthor')
const addBookPages = document.querySelector('#bookPages')
const addBookStatus = document.querySelector('#bookStatus')
const addBookButton = document.querySelector('#addBook')

//Book display container
const bookDisplay = document.querySelector('.body');

//BOOK OBJECT
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

}

// Adding from library array to page divs
function addBookToPage() {
    addBookToLibrary();

    // const books = document.querySelectorAll('.book')
    // const bookDivs = Array.from(books);
    for (let i = 0; i < myLibrary.length; i++) {



        showBook();

        const bookTitle = document.querySelectorAll('.title');
        const bookTitleArray = Array.from(bookTitle);
        const bookAuthor = document.querySelectorAll('.author')
        const bookAuthorArray = Array.from(bookAuthor);
        const bookPages = document.querySelectorAll('.NOP')
        const bookPagesArray = Array.from(bookPages);
        const bookRead = document.querySelectorAll('.status')
        const bookReadArray = Array.from(bookRead);

        bookTitleArray[i].innerHTML = myLibrary[i].title
        bookAuthorArray[i].innerHTML = myLibrary[i].author
        bookPagesArray[i].innerHTML = myLibrary[i].pages
        bookReadArray[i].innerHTML = myLibrary[i].readStatus



    }

}


addBookButton.addEventListener('click', addBookToPage);


function showBook() {
    const books = document.querySelectorAll('.book')
    const bookDivs = Array.from(books);
    if (bookDivs.length === myLibrary.length - 1 || bookDivs.length === 0) {
        const makeBook = document.createElement('div');
        makeBook.classList.add("book");
        const makeBookTop = document.createElement('div');
        makeBookTop.classList.add("bookTop");
        makeBook.appendChild(makeBookTop);
        //now for the titles
        const bookTitle = document.createElement('h2');
        bookTitle.classList.add("title");

        makeBookTop.appendChild(bookTitle);

        //author
        const bookAuthor = document.createElement('p');
        bookAuthor.classList.add("author");

        makeBookTop.appendChild(bookAuthor);


        //bottom part
        const makeBookBottom = document.createElement('div');
        makeBookBottom.classList.add("bookBottom");
        makeBook.appendChild(makeBookBottom);

        //Number of pages
        const bookPages = document.createElement('p');
        bookPages.classList.add("NOP");

        makeBookBottom.appendChild(bookPages);

        //Read or not
        const bookStatus = document.createElement('p');
        bookStatus.classList.add("status");

        makeBookBottom.appendChild(bookStatus);



        bookDisplay.appendChild(makeBook);
    }
}

function addBookToLibrary() {
    if (addBookAuthor.value != '' && addBookTitle.value != '' && addBookPages.value != '' && addBookStatus.value != '') {


        const book = new Book(addBookTitle.value, addBookAuthor.value, addBookPages.value, addBookStatus.value);
        myLibrary.push(book);
    }
}