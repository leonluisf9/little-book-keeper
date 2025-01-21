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

//render visuals
const libraryGrid = document.querySelector("#library");
function renderBookList() {
  let booksArray = JSON.parse(localStorage.getItem('books')) || [];
  if (booksArray.length === 0) {
      noBooks();
  }
  //show books
  for (let i = 0; i < booksArray.length; i++) {
    //add column element
  const newBook = document.createElement("div");
  newBook.classList.add("col");
  //title and author
  const newTitle = document.createElement("h2");
  newTitle.textContent = booksArray[i].title;
  const newAuthorname = document.createElement("p");
  newAuthorname.textContent = "Authored by " + booksArray[i].author;
  //image
  const imageRef = booksArray[i].title.replaceAll(" ", "");
  let bookImage = document.createElement('img');
  bookImage.classList.add("img-fluid");
  bookImage.src = "./assets/images/" + imageRef + '.jpg';
  console.log(bookImage.src);
  //replace image if we do not have one in our database
  bookImage.addEventListener("error", function(){
    bookImage.src = "./assets/images/bookStandIn.jpg";
  });
  
  
  //add all elements to screen
  newBook.appendChild(bookImage);
  newBook.appendChild(newTitle);
  newBook.appendChild(newAuthorname);
  libraryGrid.appendChild(newBook);
  }
}

//Call the `renderBookList` function
renderBookList();


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