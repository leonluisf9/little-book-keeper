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

const htmlRef = document.querySelector("#htmlTheme")
const darkThemeButton = document.querySelector("#btnradio2");
const lightThemeButton = document.querySelector("#btnradio1");

darkThemeButton.addEventListener("click", function(){
  htmlRef.setAttribute("data-bs-theme", "dark");
});

lightThemeButton.addEventListener("click", function(){
  htmlRef.setAttribute("data-bs-theme", "light");
});
// const dropdownElementList = document.getElementById("theme-dropdown");
// console.log(dropdownElementList);

// dropdownElementList.addEventListener('click', function(event) {
//   console.log(event.target); // Output: The <button> element that was clicked
// });