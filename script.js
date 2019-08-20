// ------------ Lightning Exercise 1 -----------//
// In your HTML, create three header elements (and h1, an h2, and an h3) and give them each a unique id
// In your JavaScript file, select each element by its id.
// Log each element to the console to make sure you selected it correctly.

const firstHeader = document.querySelector("#hOne")
firstHeader.addEventListener("click", function () {
    console.log("clicked first header")
    firstHeader.classList.add("red-text")
})

const secondHeader = document.querySelector("#hTwo")
secondHeader.addEventListener("click", function () {
    console.log("clicked second header")
})

const thirdHeader = document.querySelector("#hThree")
thirdHeader.addEventListener("click", function () {
    console.log("clicked third header")
})

//                                  Click Events

const darkMode = document.querySelector("#dark-mode")
darkMode.addEventListener("click", function () {
    console.log("clicked dark mode button")
    // add queryselectors and classes, etc. here
})

// ------------------- Lightning Exercise 2 -----------//
// Add a click event listener to each heading element you just created.
// Inside the event listener's callback function, you should log a string about which element they clicked on to the console
// Create a CSS file and link it to your HTML file
// Inside the event listener for your h1 element, add a line of code that will change the text color of the h1 element to red when you click on it


// looping through for classes, listeners, etc.
// i.e. functions outside the event listeners
// function widenInput(){
// add a class
// }
// firstNameInput.addEventListener("keypress",widenInput) 
// the function was referenced, not called

// eventObject.target works like document query selector to reference whatever field was just used



//---------------------- Lightning Exercise 4------------------------//
// Add a textarea element and a button with the text "Submit" to your HTML file
// Give the button an id
// Add a click event listener to the submit button
// When clicked, it should log the value of the textarea to the console

const submitButton = document.querySelector("#submitButton")
submitButton.addEventListener("click", function () {
    console.log(message.value)
})


// PRACTICES
// 1. mirror, mirror
// Create an input field in your DOM. Give it an id of message.
// Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// Give each article a different border color.
// Write an event listener that listens for the keyup event on the input field.
// The event handler function should update the textContent property of both sections.

const mirrorInput = document.querySelector("#mirror-input")
mirrorInput.addEventListener("keyup", function () {
    mirrorContentValue = document.querySelector("#mirror-input").value;
    const mirrorArticleContent = document.querySelectorAll(".mirrorArticleContent")
    // console.log(mirrorArticleContent)
    mirrorArticleContent[0].textContent = mirrorInput.value
    mirrorArticleContent[1].textContent = mirrorInput.value
})


// 2. Wonder Powers Activate

// document.querySelector("#activate-flight").addEventListener("click", function flightHandlerFunction() {
//     document.querySelector("#flight").classList.remove("disabled");
//     document.querySelector("#flight").classList.add("enabled");
// })

// document.querySelector("#activate-mindreading").addEventListener("click", function mindreadHandlerFunction() {
//     document.querySelector("#mindreading").classList.remove("disabled");
//     document.querySelector("#mindreading").classList.add("enabled")
// })

// document.querySelector("#activate-xray").addEventListener("click", function xrayHandlerFunction() {
//     document.querySelector("#xray").classList.remove("disabled");
//     document.querySelector("#xray").classList.add("enabled")
// })


document.querySelector("#activate-all").addEventListener("click", function activateAll() {
    const allPowers = document.querySelectorAll(".power")
    for (i = 0; i < allPowers.length; i++) {
        allPowers[i].classList.remove("disabled");
        allPowers[i].classList.remove("enabled");
        allPowers[i].classList.remove("allPowersDisabled");
        allPowers[i].classList.add("allPowersEnabled")
    }
})

document.querySelector("#deactivate-all").addEventListener("click", function deactivateAll() {
    const allPowers = document.querySelectorAll(".power")
    for (i = 0; i < allPowers.length; i++) {
        allPowers[i].classList.remove("disabled");
        allPowers[i].classList.remove("enabled");
        allPowers[i].classList.remove("allPowersEnabled");
        allPowers[i].classList.add("allPowersDisabled")
    }
})

// one function for all buttons

allButtons = document.querySelectorAll(".superHeroButton")
for (i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function () {
        document.querySelector(`#${event.target.id.split("-")[1]}`).classList.remove("disabled");
        document.querySelector(`#${event.target.id.split("-")[1]}`).classList.add("enabled");

    })
}