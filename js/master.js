// Check if there's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  // console.log('Local storage is not empty, you can set it on root now');
  // console.log(localStorage.getItem("color_option"));

  document.documentElement.style.setProperty("--main-color", mainColors);

  // Remove Active Class From All Colors List Items
  document.querySelectorAll(".colors-list li").forEach((element) => {
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

// Check if there's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check if Random Background Local Storage is not Empty
if (backgroundLocalItem !== null) {
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }

  // Remove Active class from all Spans
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });

  if (backgroundLocalItem === "true") {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}

// Toggle Spin Class On Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  // Toggle Class Fa-spin for Rotation on Self
  this.classList.toggle("fa-spin");

  //Toggle class Open on Main Settings Box
  document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop on All List Items
colorsLi.forEach((li) => {
  // Click on Each List Item
  li.addEventListener("click", (e) => {
    // Set Color on Root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    // Set Color on Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    // Remove Active Class From All Children
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // Add Active Class on Self
    e.target.classList.add("active");
  });
});

// Switch Background Random Images
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop on All Spans
randomBackEl.forEach((span) => {
  // Click on Each Span
  span.addEventListener("click", (e) => {
    // Remove Active Class From All Children
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // Add Active Class on Self
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;

      randomizeImgs();

      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;

      clearInterval(backgroundInterval);

      localStorage.setItem("background_option", false);
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
      landingPage.style.backgroundImage =
        'url("imgs/' + imgsArray[randomNumber] + '")';
    }, 1000);
  }
}

randomizeImgs();

// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  // Margin to trigger animation before the section is fully in view
  let margin = 1;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight - margin) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );

    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// Creat Popup with the Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {

    img.addEventListener('click', (e) => {

        // Create Overlay element
        let overlay = document.createElement("div");

        // Add class to overlay
        overlay.className = 'popup-overlay';

        // Append overlay to the body
        document.body.appendChild(overlay);

        // Create the Popup
        let popupBox = document.createElement("div");

        // Add Class to the Popup Box
        popupBox.className = 'popup-box';

        if ((img.alt !== null)) {
            
            // Create Heading
            let imgHeading = document.createElement("h3");

            // Create text for heading
            let imgTetx = document.createTextNode(img.alt);

            // Append the text to the heading
            imgHeading.appendChild(imgTetx);

            // Append the heading to the popup box
            popupBox.appendChild(imgHeading);
        }

        // Create the Image
        let popupImage = document.createElement("img");

        // Set image source
        popupImage.src = img.src;

        // Add Image to Popup Box
        popupBox.appendChild(popupImage);

        // Append the popop box to body
        document.body.appendChild(popupBox);

        // Create the Close Span
        let closeButton = document.createElement("span");

        // Create the Close Button Text
        let closeButtonText = document.createTextNode("X");

        // Append text to Close Button
        closeButton.appendChild(closeButtonText);

        // Add Class to Close Button
        closeButton.className = 'close-button';
        
        // Add Close Button to the Popup Box
        popupBox.appendChild(closeButton);

    });

    // Close popup
    document.addEventListener('click', function (e) {

        if (e.target.className == 'close-button') {

            // Remove the current popup
            e.target.parentNode.remove();

            // Remove Overlay
            document.querySelector('.popup-overlay').remove();
        }

    }); 

});y