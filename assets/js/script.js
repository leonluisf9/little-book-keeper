// We need a funtion that pulls the answer from the pop quiz and depending on the response

const genreMapping = {
    "A": "Horror",
    "B": "Fantasy",
    "C": "Romance",
};

// Define a function to calculate the genre based on answers
function determineGenre(answers) {
    let genreCount = {
        "Horror": 0,
        "Fantasy": 0,
        "Romance": 0,
    };


    // Loop through answers and count occurrences
    for (const answer of answers) {
        console.log(answer);
        if (answer === "A") {
            genreCount["Horror"]++;
        } else if (answer === "B") {
            genreCount["Fantasy"]++;
        } else if (answer === "C") {
            genreCount["Romance"]++;
        } 
    }
        
    

    


    // Determine the genre with the highest count
    let selectedGenre = "";
    let maxCount = 0;

    for (const genre in genreCount) {
        if (genreCount[genre] > maxCount) {
            maxCount = genreCount[genre];
            selectedGenre = genre;
        }
        console.log(selectedGenre);
    
    }
    return selectedGenre;
}


// Handle form submission
const bookQuiz = document.getElementById("quizForm");
const bookQuizBtn = document.getElementById("quiz-submit");
const quizModalText = document.querySelector("#quiz-modal-body");

console.log(quizModalText);
bookQuizBtn.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the form from submitting

    const answers = [];
    const formElements = document.getElementById('quizForm').elements;

    // Gather all selected answers
    for (const element of formElements) {
        console.log(element);
        if (element.checked) {
            answers.push(element.value);
        }
    }

    // Check if all questions have been answered
    if (answers.length < 5) {
        alert("Please answer all the questions.");
        return;
    }
    console.log(answers);
    // Determine the genre based on the answers
    const genre = determineGenre(answers);

    // Display the result

    quizModalText.textContent = `Based on your answers, your suggested book genre is: ${genre}`;
    });

    //Sign In Info -- Home Page Only
    function userInfoLocalStorage() {
        const fname = document.querySelector("#first-name").value;
        const lname = document.querySelector("#last-name").value;
        localStorage.setItem('firstName', JSON.stringify(fname));
        localStorage.setItem('lastName', JSON.stringify(lname));
      }
      
      const signInBtn = document.querySelector("#sign-in-submit"); 
      if(signInBtn){
        signInBtn.addEventListener('click', function(){
        console.log(typeof(localStorage.getItem('firstName')));
        userInfoLocalStorage();
        });
      }
      
