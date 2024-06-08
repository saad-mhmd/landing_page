// Check if there's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
    // console.log('Local storage is not empty, you can set it on root now');
    // console.log(localStorage.getItem("color_option"));

    document.documentElement.style.setProperty('--main-color', mainColors);

    // Remove Active Class From All Colors List Items
    document.querySelectorAll(".colors-list li").forEach(element => {
        
        element.classList.remove("active");

        // Add Active Class on Element with Data-Color === Local Storage Item
        if (element.dataset.color === mainColors) {
            // Add Active Class
            element.classList.add("active");
        }

    });


}

// Random Background Option
let backgroundOption = true;

// variable to control the Background interval
let backgroundInterval;

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

        // Set Color on Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);

        // Remove Active Class From All Children
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });

        // Add Active Class on Self
        e.target.classList.add("active");
    
    });
});

// Switch Background Random Images
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop on All Spans
randomBackEl.forEach(span => {
    
    // Click on Each Span
    span.addEventListener("click", (e) => {

        // Remove Active Class From All Children
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });

        // Add Active Class on Self
        e.target.classList.add("active");

        if (e.target.dataset.background === 'yes'){

            backgroundOption = true;

            randomizeImgs();

        } else {

            backgroundOption = false;

            clearInterval(backgroundInterval);

        }
    
    });
});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

//Get Array of Images
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// Change Background Image Url
landingPage.style.backgroundImage = 'url("imgs/02.jpg")';

// Funtion to Randomize Images
function randomizeImgs() {
    
    if (backgroundOption === true) {

        backgroundInterval = setInterval(() => {
    
            // Get Random Number (0 to 4)
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
        
            // Change Background Image Url
            landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
        
        }, 1000);
    }
}

randomizeImgs();