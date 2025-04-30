// Selecting elements


const header = document.querySelector("header");
const main = document.querySelector("main");
const buttonRed = document.querySelector(".red-btn");
const buttonPink = document.querySelector(".pink-btn");
const buttonPurple = document.querySelector(".purple-btn");
const buttonBlue = document.querySelector(".blue-btn");


//header animation
const heading = "Heart Trail Animation";
const headingLength = heading.length;
let characterIndex = 0;

updateHeading();

const colorLinks = {
  red: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-128.png",
  pink: "https://cdn4.iconfinder.com/data/icons/twitter-29/512/166_Heart_Love_Like_Twitter-128.png",
  purple: "https://cdn4.iconfinder.com/data/icons/essentials-72/24/028_-_Heart-128.png",
  blue: "https://cdn4.iconfinder.com/data/icons/twitter-28/512/166_Heart_Love_Like_Twitter-128.png"
}

let colorIcon = "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-128.png";

main.addEventListener("mousemove", function(event){
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");
  const size = Math.floor(Math.random() * 50)
  spanEl.style.backgroundImage = `url(${colorIcon})`
  spanEl.style.left = xPos + "px";
  spanEl.style.top =  yPos + "px";
  spanEl.style.height = size + "px";
  spanEl.style.width = size + "px";
  
  main.appendChild(spanEl);
  
  setTimeout(function() {
    spanEl.remove()
  }, 3000)
  
})

//Buttons clicks

buttonRed.addEventListener("click", function() {
    colorIcon = colorLinks.red;
})

buttonPink.addEventListener("click", function() {
    colorIcon = colorLinks.pink;
})

buttonPurple.addEventListener("click", function() {
    colorIcon = colorLinks.purple;
})

buttonBlue.addEventListener("click", function() {
    colorIcon = colorLinks.blue;
})


//functions
function updateHeading() {
  header.innerHTML = `<h1>${heading.slice(0, characterIndex)}</h1>`
  
  if (characterIndex === headingLength) {
    characterIndex = 0;
  }
  
  setTimeout(updateHeading, 100);
  characterIndex++;
}

