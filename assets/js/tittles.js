// Variable that selects the main element, and a variable that selects 
// the 5 button elements
const mainEl = document.querySelector('#main');
const addEl = document.querySelector('#add');
const sortEl = document.querySelector('#sort');
const quizEl = document.querySelector('#bookQuiz');
const viewEl = document.querySelector('#viewLibrary');
const visualsEl = document.querySelector('#changeVisuals');

// Function that handles the case where there are no books 
// to display
function noBooks() {
  mainEl.innerHTML ="No Books in library yet...";
}

function renderBookList() {
  let booksArray = JSON.parse(localStorage.getItem('books')) || [];
  if (booksArray.length === 0) {
      noBooks();
  }
  for (let i = 0; i < booksArray.length; i++) {
  const newBook = document.createElement("article");
  const newTitle = document.createElement("h2");
  newTitle.textContent = booksArray[i].title;
  const newAuthorname = document.createElement("blockquote");
  newAuthorname.textContent = "Authored by " + booksArray[i].author;
//   console.log('Author: ' + newAuthorname.textContent);
  newBook.appendChild(newTitle);
  newBook.appendChild(newAuthorname);
  mainEl.appendChild(newBook);
  }
}

//Call the `renderBookList` function
renderBookList();

addEl.addEventListener('click', function () {
  redirectPage("book.html");
});
sortEl.addEventListener('click', function () {
    let bookItems = JSON.parse(localStorage.getItem('books')) || [];
    if (bookItems !== null) {
        bookItems.sort((a, b) => {
            const titleA = a.title.toUpperCase(); // ignore upper and lowercase
            const titleB = b.title.toUpperCase(); // ignore upper and lowercase
            if (titleA < titleB) {
              return -1;
            }
            if (titleA > titleB) {
              return 1;
            }
            // names must be equal
            return 0;
          });
        // bookItems.sort();
        console.log('Array sorted');
        // console.log("Hello");
        setTimeout(() => {
                console.log("After wait!");
        }, 6000); // Wait for 1 second (1000 milliseconds)
    }
    localStorage.setItem('books', JSON.stringify(bookItems));
  });