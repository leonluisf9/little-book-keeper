let bookItems = [];

// Function called `readLocalStorage` that reads from local storage and 
// returns the data. If no data exists, return an empty array.

function readLocalStorage() {
    // Get stored bookItems from localStorage
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    // If bookItems were retrieved from localStorage, update the bookItems array to it
    if (storedBooks !== null) {
        bookItems = storedBooks;
    }
}
  
// Function called `storeLocalStorage` that takes a given object and 
// saves the new data to the existing blog data in local storage.
function storeLocalStorage() {
      localStorage.setItem('books', JSON.stringify(bookItems));
}
  
  // ! Use the following function whenever you need to redirect to a different page
let redirectURL = '';
const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// Light and Dark theme logic
const htmlRef = document.querySelector("#htmlTheme")
const darkThemeButtons = document.querySelectorAll("#btnradio2");
const lightThemeButtons = document.querySelectorAll("#btnradio1");

darkThemeButtons.forEach(element => {
  element.addEventListener("click", function(){
  //if(!htmlRef.getAttribute("data-bs-theme") == "dark"){
    htmlRef.setAttribute("data-bs-theme", "dark");
    let primaryElement = document.querySelector(".bg-primary");
    primaryElement.classList.add("bg-primary-subtle");
    primaryElement.classList.remove("bg-primary");
    console.log(primaryElement);
  //}
  })
});

lightThemeButtons.forEach(element => { 
element.addEventListener("click", function(){
  htmlRef.setAttribute("data-bs-theme", "light");
  let primaryElement = document.querySelector(".bg-primary-subtle");
  primaryElement.classList.add("bg-primary");
  primaryElement.classList.remove("bg-primary-subtle");
  console.log(primaryElement);
})
});

const libraryBtns = document.querySelectorAll("#library-btn");
libraryBtns.forEach(element => {
  element.addEventListener('click', function(){
  redirectPage("tittles.html");
})
});
