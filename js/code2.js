// code for showing white nav bar as you scroll
window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav');

    nav.classList.toggle('scrolling-active', window.scrollY > 50); //adds the class scrolling active to nav when scrollY>50
})
// code for twinkling stars on homepage. creates an array to put random generated coordinates  in
const stars = [];
const canvas = document.getElementById("canvas"); //activates a 2d canvas on home page
const context = canvas.getContext("2d");

function init() {
  const banner = document.getElementById("banner");
  canvas.width = banner.offsetWidth; //sets the canvas to the banner length/height
  canvas.height = banner.offsetHeight;
  for (let i = 0; i < 55; i++) { //for loop to generate x and y coordinates
    stars.push({
      x: Math.random(),
      y: Math.random(),
      size: Math.random(),
      change: 0.15,
    });
  }
}

function update() {
  for (const star of stars) {
    star.x += 0.0001;
   
    if (star.size < 0.1) { //changes star size based on stored value in array
      star.change = 0.1;
    } else if (star.size > 0.9) {
      star.change = -0.1;
    }
    star.size += star.change;
  }
}

function render() {
  const {
    width,
    height
  } = canvas;
  context.clearRect(0, 0, width, height); //pushes the stars onto the canvas
  for (const star of stars) {
    context.beginPath();
    context.arc(
      star.x * width,
      star.y * height,
      star.size * 1.8,
      0,
      2 * Math.PI,
      false
    );
    context.fillStyle = "white";
    context.fill();
  }
}

function twinkle() { //starts to flash the star in and out.
  update();
  render();
}
setInterval(twinkle, 75);
init();

render();
// code for modals on tourism page
var modalBtns = document.querySelectorAll('.modal-open'); //returns all elements that math the selector '.modal-open'

var modalClose = document.querySelectorAll('.modal-close'); //returns all elements that math the selector '.modal-close'

//each time an image with the class modal open is pressed, the function runs
modalBtns.forEach(function(btn){
    btn.onclick=function(){
        var modal = btn.getAttribute('data-modal'); //var modal equals the attribute that data-modal is set to

        document.getElementById(modal).style.display = "block"; //displays the modal as a block which makes it appear

    };
}); 
//each time the close button is pressed, the function runs
modalClose.forEach(function(btn){
    btn.onclick=function(){
        btn.closest(".modal").style.display = "none"; //sets the modal's display to none which makes it disappear
    };
});

