// code to hide circles
function hideAllSVG(){
    document.querySelector("div").classList.remove("hidden");
    document.getElementById("circle1a").style.display = "none";
    document.getElementById("circle1b").style.display = "none";
    document.getElementById("circle2a").style.display = "none";
    document.getElementById("circle2b").style.display = "none";
    document.getElementById("circle3a").style.display = "none";
    document.getElementById("circle3b").style.display = "none";
    document.getElementById("circle4a").style.display = "none";
    document.getElementById("circle4b").style.display = "none";
    document.getElementById("circle5a").style.display = "none";
    document.getElementById("circle5b").style.display = "none";
}
// conditionals to determine to show circles or hide
function hideSVG1(){
    hideAllSVG()
    var style = document.getElementById("circle1a").style.display;
    if(style === "none")
        document.getElementById("circle1a").style.display = "block"; //shows circle if circle 1a has a style of non
    else
        document.getElementById("circle1a").style.display = "none"; //otherwise circle1a doesn't show
    var style = document.getElementById("circle1b").style.display;
    if(style === "none")
        document.getElementById("circle1b").style.display = "block";
    else
        document.getElementById("circle1b").style.display = "none";
}
function hideSVG2(){
    hideAllSVG()
    var style = document.getElementById("circle2a").style.display;
    if(style === "none")
        document.getElementById("circle2a").style.display = "block";
    else
        document.getElementById("circle2a").style.display = "none";
    var style = document.getElementById("circle2b").style.display;
        if(style === "none")
            document.getElementById("circle2b").style.display = "block";
        else
            document.getElementById("circle2b").style.display = "none";
}
function hideSVG3(){
    hideAllSVG()
    var style = document.getElementById("circle3a").style.display;
    if(style === "none")
        document.getElementById("circle3a").style.display = "block";
    else
        document.getElementById("circle3a").style.display = "none";
    var style = document.getElementById("circle3b").style.display;
    if(style === "none")
        document.getElementById("circle3b").style.display = "block";
    else
        document.getElementById("circle3b").style.display = "none";
}
function hideSVG4(){
    hideAllSVG()
    var style = document.getElementById("circle4a").style.display;
    if(style === "none")
        document.getElementById("circle4a").style.display = "block";
    else
        document.getElementById("circle4a").style.display = "none";
        var style = document.getElementById("circle4b").style.display;
    if(style === "none")
        document.getElementById("circle4b").style.display = "block";
    else
        document.getElementById("circle4b").style.display = "none";
}
function hideSVG5(){
    hideAllSVG()
    var style = document.getElementById("circle5a").style.display;
    if(style === "none")
        document.getElementById("circle5a").style.display = "block";
    else
        document.getElementById("circle5a").style.display = "none";
    var style = document.getElementById("circle5b").style.display;
    if(style === "none")
        document.getElementById("circle5b").style.display = "block";
    else
        document.getElementById("circle5b").style.display = "none";
}


// Get the modal. creates a var variable for each modal
var modal1a = document.getElementById("history-modal-1a");
var modal1b = document.getElementById("history-modal-1b");
var modal2a = document.getElementById("history-modal-2a");
var modal2b = document.getElementById("history-modal-2b");
var modal3a = document.getElementById("history-modal-3a");
var modal3b = document.getElementById("history-modal-3b");
var modal4a = document.getElementById("history-modal-4a");
var modal4b = document.getElementById("history-modal-4b");
var modal5a = document.getElementById("history-modal-5a");
var modal5b = document.getElementById("history-modal-5b");
// Get the button that opens the modal. creates a variable for each circle
var btn1a = document.getElementById("circle1a");
var btn1b = document.getElementById("circle1b");
var btn2a = document.getElementById("circle2a");
var btn2b = document.getElementById("circle2b");
var btn3a = document.getElementById("circle3a");
var btn3b = document.getElementById("circle3b");
var btn4a = document.getElementById("circle4a");
var btn4b = document.getElementById("circle4b");
var btn5a = document.getElementById("circle5a");
var btn5b = document.getElementById("circle5b");
// Get the <span> element that closes the modal. creates a variable for each span close button on the modals
var span1a = document.getElementById("history-close-1a");
var span1b = document.getElementById("history-close-1b");
var span2a = document.getElementById("history-close-2a");
var span2b = document.getElementById("history-close-2b");
var span3a = document.getElementById("history-close-3a");
var span3b = document.getElementById("history-close-3b");
var span4a = document.getElementById("history-close-4a");
var span4b = document.getElementById("history-close-4b");
var span5a = document.getElementById("history-close-5a");
var span5b = document.getElementById("history-close-5b");
// When the user clicks on the button, open the modal. 
btn1a.onclick = function() {
  modal1a.style.display = "block";
}
btn1b.onclick = function() {
  modal1b.style.display = "block";
 }
btn2a.onclick = function() {
    modal2a.style.display = "block";
}
btn2b.onclick = function() {
    modal2b.style.display = "block";
}
btn3a.onclick = function() {
    modal3a.style.display = "block";
}
btn3b.onclick = function() {
    modal3b.style.display = "block";
}
btn4a.onclick = function() {
    modal4a.style.display = "block";
}
btn4b.onclick = function() {
    modal4b.style.display = "block";
}
btn5a.onclick = function() {
    modal5a.style.display = "block";
}
btn5b.onclick = function() {
    modal5b.style.display = "block";
}
// // When the user clicks on <span> (x), close the modal
span1a.onclick = function() {
    modal1a.style.display = "none";
}
span1b.onclick = function() {
    modal1b.style.display = "none";
}
span2a.onclick = function() {
    modal2a.style.display = "none";
}
span2b.onclick = function() {
    modal2b.style.display = "none";
}
span3a.onclick = function() {
    modal3a.style.display = "none";
}
span3b.onclick = function() {
    modal3b.style.display = "none";
}
span4a.onclick = function() {
    modal4a.style.display = "none";
}
span4b.onclick = function() {
    modal4b.style.display = "none";
}
span5a.onclick = function() {
    modal5a.style.display = "none";
}
span5b.onclick = function() {
    modal5b.style.display = "none";
}