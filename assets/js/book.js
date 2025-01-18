// Variables that selects the form element
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const genreInput = document.querySelector('#genre');
const reviewInput = document.querySelector('#review');
const cpageInput = document.querySelector('#cpage');
const tpageInput = document.querySelector('#tpage');
const addabookForm = document.querySelector('#addabook-form');
const errorEl = document.querySelector('#error');

readLocalStorage();

// If the form is submitted with missing data, 
// display an error message to the user.
function showResponse() {
    // Prevent default action
    // console.log(event);
    const response = 'Please complete the form.'
    errorEl.textContent = response;
  }

  // Event listener to the form on submit. 
addabookForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const tText = titleInput.value.trim();
    const aText = authorInput.value.trim();
    const gText = genreInput.value.trim();
    const rText = reviewInput.value.trim();
    const cpText = cpageInput.value.trim();
    const tpText = tpageInput.value.trim();

    if ((tText === '') || (aText === '') || (gText === '')  || (rText === '') || (cpText === '') || (tpText === '')) {
        showResponse();
        return;
    }

    const bookentry = {
          title: tText,
          author: aText,
          genre: gText,
          review: rText,
          currentpage: cpText,
          totalpages: tpText,
        };  
    // Add new Bookentry to Booktems array, clear the input
    bookItems.push(bookentry);
    // console.log(blogItems);
    titleInput.value= '';
    authorInput.value= '';
    genreInput.value= '';
    reviewInput.value= '';
    cpageInput.value= '';
    tpageInput.value= '';
    
    // Store updated BookItems in localStorage, re-render the list
    storeLocalStorage();
    redirectPage("book.html");
  });