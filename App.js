// ● Use document.querySelector() to select elements from the HTML.
// ● Use .value to get input values.
// ● Use .innerHTML or .style to update content or styles.

// 🧩 Questions:
// 1. Select a paragraph with id "message" and change its text to "Welcome!".

const para = document.querySelector('#para');
para.innerHTML = "Welcome!";












// 2. Get the value from an input with id "nameInput" and display it inside a div with id
// "result".


const button = document.querySelector('#btn');
const btn_0 = document.querySelector('#btn_0');
const input = document.querySelector('#input');
const output = document.querySelector('#output');

function handleClick() {
    output.innerHTML = input.Value;
    
}

handleClick()

function clickClear() {
    input.innerHTML = "";
    output.innerHTML = "";
    
}
clickClear()



// 3. When a button is clicked, change the background color of a section with id
// "container" to light blue.
const btn_1 = document.querySelector('#btn_1');
const container = document.querySelector('#container');
function changeColor() {
    container.style.backgroundColor = 'lightblue';
}







// 4. Select a heading (h1) with id "mainTitle" and change its color to red.


var h1 = document.querySelector('#heading');
var btn_2 = document.querySelector('#btn_2');
function changeTextColor() {
    h1.style.color = 'red';
}









// 5. Get the number from an input with id "num1" and show it inside a paragraph with id
// "output".
      const num1 = document.getElementById("num1");
      const result = document.getElementById("result");
 function showNumber() {
      
      if (num1.value === "") {
        result.textContent = "Please enter a number!";
      } else {
        result.textContent = "output: " + num1.value;
      }
    }








// 6. Select a button with class "submit-btn" and log "Button Clicked" to the console
// when it's clicked.

const btn_4 = document.querySelector('.submit-btn');

    function submitMe() {
      console.log("Button Clicked");
    }













// 7. Get values from two inputs with ids "first" and "second", add them (as numbers),
// and show the result in a span with id "sum".


const input_a = document.querySelector('#input_a');
const input_b = document.querySelector('#input_b');
const span = document.querySelector('#span');

function addValues() {
  const first = Number(input_a.value);
  const second = Number(input_b.value);

  if (input_a.value === "" || input_b.value === "") {
    span.textContent = "Please enter both numbers!";
  } else {
    span.textContent = "Sum = " + (first + second);
  }
}














// 8. Change the text of a paragraph with class "description" to "Updated
// successfully".

const description = document.querySelector('.description');
description.innerHTML = "Updated successfully"; 







// 9. Select a div with id "box" and set its width to 200px and background color to green.

const box = document.querySelector('#box');
box.style.width = '200px';
box.style.height = '200px';
box.style.borber = '2px solid black';
box.style.borberRadius = '40px';
box.style.backgroundColor = 'green';    











// 10. Get the email entered in an input with id "email" and print it in the console.

const emailInput = document.querySelector('#email');
function logEmail() {
  console.log(emailInput.value);
}












// 11. Select a paragraph and update its font size to 24px.
const paragraph = document.querySelector('#paragraph');
paragraph.style.fontSize = '24px';









// 12. On button click, get a name from input "fullName" and set the text "Hello,
// [name]" inside a div "greeting".
const nameInput = document.querySelector('#fullName');
const greetingDiv = document.querySelector('.greeting');
const greetButton = document.querySelector('#greetBtn');
function greetUser() {
  const name = nameInput.value;
  greetingDiv.innerHTML = "Hello, " + name;
}







// 13. Select an image with id "profilePic" and change its src to another image URL.

const profilePic = document.querySelector('#profilePic');
profilePic.src = 'https://wallpapers.com/images/thumbnail/man-on-cliff-instagram-profile-x9m7z436wkayz9ve.webp'; 







const highlights = document.querySelectorAll('.highlight');
const highlightBtn = document.querySelector('#highlightBtn');

function highlightText() {
  highlights.forEach(element => {
    element.style.color = 'orange';
  });
}
highlightText()







// 15. Select a checkbox with id "agree" and check whether it is checked or not, then display
// "Agreed" or "Not Agreed" in a paragraph.
const agreeCheckbox = document.querySelector('#agree');
const agreeBtn = document.querySelector('#agreeBtn');
const agreeStatus = document.querySelector('#agreeStatus'); 
function checkAgreement() {
  if (agreeCheckbox.checked) {
    agreeStatus.innerHTML = "Agreed";
  } else {
    agreeStatus.innerHTML = "Not Agreed";
  }}








// 16. Get the selected value from a dropdown (select element) with id "options" and display
// it in "selectedValue" span.
const optionsSelect = document.querySelector('#options');
const selectedValueSpan = document.querySelector('#selectedValue');
function showSelectedValue() {
  const selectedOption = optionsSelect.value;
  selectedValueSpan.innerHTML = selectedOption;
}








// 17. When a button is clicked, show the current date and time inside a paragraph with id
// "dateTime".
const dateTimePara = document.querySelector('#dateTime');
const dateTimeBtn = document.querySelector('#dateTimeBtn'); 
function showDateTime() {
  const currentDateTime = new Date();
  dateTimePara.innerHTML = currentDateTime.toString();
}







// 18. Select a paragraph with id "togglePara" and hide it (set display: none).
const togglePara = document.querySelector('#togglePara');
togglePara.style.display = 'none';  











// 19. Get a user’s age from an input with id "age" and display "Eligible" if age >= 18,
// else "Not Eligible" in a span.
const ageInput = document.querySelector('#age');
const eligibilitySpan = document.querySelector('#eligibilitySpan');
const checkBtn = document.querySelector('#checkBtn');
function checkEligibility() {
  const age = Number(ageInput.value);   

    if (age >= 18) {
        eligibilitySpan.innerHTML = "Eligible";
    } else {
        eligibilitySpan.innerHTML = "Not Eligible";
    }
}












// 20. When a button is clicked, clear the value of an input with id "searchBox".
const searchBox = document.querySelector('#searchBox');
const clearSearchBtn = document.querySelector('#clearSearchBtn');   
function clearSearch() {
  searchBox.value = '';
}





