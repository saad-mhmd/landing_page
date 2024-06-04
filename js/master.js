// Check if there's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");


// Toggle Spin Class On Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {

    // Toggle Class Fa-spin for Rotation on Self
    this.classList.toggle("fa-spin");

    //Toggle class Open on Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");

}

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop on All List Items
colorsLi.forEach(li => {
    
    // Click on Each List Item
    li.addEventListener("click", (e) => {

        // Set Color on Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
    
    });
});


// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

//Get Array of Images
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// Change Background Image Url
landingPage.style.backgroundImage = 'url("imgs/02.jpg")';


setInterval(() => {
    
    // Get Random Number (0 to 4)
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    // Change Background Image Url
    landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';

}, 10000);