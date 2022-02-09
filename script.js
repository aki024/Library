//Modal
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//LIBRARY ARRAY
let myLibrary = [];


//getting stuff from form
const addBookTitle = document.querySelector('#bookName')
const addBookAuthor = document.querySelector('#bookAuthor')
const addBookPages = document.querySelector('#bookPages')
const addBookStatus1 = document.querySelector('#bookStatus1')

const addBookButton = document.querySelector('#addBook')

//Book display container
const bookDisplay = document.querySelector('.body');

//BOOK OBJECT
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.changeStatus = function() {
        if (this.readStatus == true) {
            this.readStatus = false;
        } else {
            this.readStatus = true;
        }
    }

}
let removeBookButton;
let booksDiv;
let bookImages;

// Adding from library array to page divs
function addBookToPage() {
    addBookToLibrary();

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
        bookPagesArray[i].innerHTML = myLibrary[i].pages + ' pages';
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

        //close button
        const closeButton = document.createElement('span');
        closeButton.classList.add('close');
        closeButton.classList.add('closeBook');
        closeButton.innerHTML = '&times;';
        makeBook.appendChild(closeButton);
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
        const bookStatus = document.createElement('img');
        bookStatus.classList.add("status");
        if (pedja === true) {
            bookStatus.src = "clipart999036.png"
        } else { bookStatus.src = "866-8666493_edit-delete-not-encyclopedic-black-and-white-clip.png" }

        makeBookBottom.appendChild(bookStatus);
        bookDisplay.appendChild(makeBook);

        //Remove button

        removeBook();

    }
    changeImages()
    booksDiv = bookDivs;
}
let pedja;

function addBookToLibrary() {
    if (addBookAuthor.value != '' && addBookTitle.value != '' && addBookPages.value != '') {

        if (addBookStatus1.checked === true) {
            pedja = true;
        } else {
            pedja = false;
        }

        const book = new Book(addBookTitle.value, addBookAuthor.value, addBookPages.value, pedja);
        myLibrary.push(book);
    }
}

function removeBook() {

    const removeBook = document.querySelectorAll('.close.closeBook');
    const removeBookArray = Array.from(removeBook);
    removeBook.forEach(book => {
        book.addEventListener('click', removeOnClick)
    })
    removeBookButton = removeBookArray;
}


function removeOnClick(e) {



    removeBookButton.splice(e.target, 1);
    myLibrary.splice(e.target, 1);
    booksDiv.splice(e.target, 1);
    bookImages.splice(e.target, 1);
    bookDisplay.removeChild(e.target.parentNode);
    console.log(bookImages);
    console.log('1');



}

function changeImages() {
    const images = document.querySelectorAll('.status');
    const imagesArray = Array.from(images);

    images.forEach(image => {
        image.addEventListener('click', changeImageLol);
    })
    bookImages = imagesArray;
    console.log(bookImages);
    console.log('2');
}

function changeImageLol(e) {
    const images = document.querySelectorAll('.status');
    const imagesArray = Array.from(images);
    bookImages = imagesArray;
    let rez = bookImages.indexOf(e.target);
    console.log(rez);



    if (myLibrary[rez].readStatus == false) {
        myLibrary[rez].changeStatus();
        bookImages[rez].src = "clipart999036.png"
    } else {
        myLibrary[rez].changeStatus();
        bookImages[rez].src = "866-8666493_edit-delete-not-encyclopedic-black-and-white-clip.png"
    }

    console.log(bookImages);
    console.log('3');

}