let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry1) =>{
        console.log(entry1);
        if (entry1.isIntersecting){
            entry1.target.classList.add('show');
        } else{
            entry1.target.classList.remove('show');
        }
    });
});
let hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


//typer
var typed = new Typed(".auto", {
    strings: ["","alik","salom"],
   typeSpeed:150,
  backSpeed:150,
  loop:true
})

//typer 2


// var Typer = function(element) {
// this.element = element;
// var delim = element.dataset.delim || ",";
// var words = element.dataset.words || "override these,sample typing";
// this.words = words.split(delim).filter((v) => v); // non empty words
// this.delay = element.dataset.delay || 200;
// this.loop = element.dataset.loop || "true";
// if (this.loop === "false" ) { this.loop = 1 }
// this.deleteDelay = element.dataset.deletedelay || element.dataset.deleteDelay || 800;

// this.progress = { word: 0, char: 0, building: true, looped: 0 };
// this.typing = true;

// var colors = element.dataset.colors || "black";
// this.colors = colors.split(",");
// this.element.style.color = this.colors[0];
// this.colorIndex = 0;

// this.doTyping();
// };

// Typer.prototype.start = function() {
// if (!this.typing) {
// this.typing = true;
// this.doTyping();
// }
// };
// Typer.prototype.stop = function() {
// this.typing = false;
// };
// Typer.prototype.doTyping = function() {
// var e = this.element;
// var p = this.progress;
// var w = p.word;
// var c = p.char;
// var currentDisplay = [...this.words[w]].slice(0, c).join("");
// var atWordEnd;
// if (this.cursor) {
// this.cursor.element.style.opacity = "1";
// this.cursor.on = true;
// clearInterval(this.cursor.interval);
// this.cursor.interval = setInterval(() => this.cursor.updateBlinkState(), 400);
// }

// e.innerHTML = currentDisplay;

// if (p.building) {
// atWordEnd = p.char === this.words[w].length;
// if (atWordEnd) {
// p.building = false;
// } else {
// p.char += 1;
// }
// } else {
// if (p.char === 0) {
// p.building = true;
// p.word = (p.word + 1) % this.words.length;
// this.colorIndex = (this.colorIndex + 1) % this.colors.length;
// this.element.style.color = this.colors[this.colorIndex];
// } else {
// p.char -= 1;
// }
// }

// if (p.word === this.words.length - 1) {
// p.looped += 1;
// }

// if (!p.building && this.loop <= p.looped){
// this.typing = false;
// }

// setTimeout(() => {
// if (this.typing) { this.doTyping() };
// }, atWordEnd ? this.deleteDelay : this.delay);
// };

// var Cursor = function(element) {
// this.element = element;
// this.cursorDisplay = element.dataset.cursordisplay || element.dataset.cursorDisplay || "_";
// element.innerHTML = this.cursorDisplay;
// this.on = true;
// element.style.transition = "all 0.1s";
// this.interval = setInterval(() => this.updateBlinkState(), 400);
// }
// Cursor.prototype.updateBlinkState = function() {
// if (this.on) {
// this.element.style.opacity = "0";
// this.on = false;
// } else {
// this.element.style.opacity = "1";
// this.on = true;
// }
// }

// function TyperSetup() {
// var typers = {};
// for (let e of document.getElementsByClassName("typer")) {
// typers[e.id] = new Typer(e);
// }
// for (let e of document.getElementsByClassName("typer-stop")) {
// let owner = typers[e.dataset.owner];
// e.onclick = () => owner.stop();
// }
// for (let e of document.getElementsByClassName("typer-start")) {
// let owner = typers[e.dataset.owner];
// e.onclick = () => owner.start();
// }
// for (let e of document.getElementsByClassName("cursor")) {
// let t = new Cursor(e);
// t.owner = typers[e.dataset.owner];
// t.owner.cursor = t;
// }
// }

// TyperSetup();





// position fixed scrol an imation
/* <script src="https://code.jquery.com/jquery-3.4.1.js"></script> */

$(document).ready(function(){
   $(window).scroll(function(){
     if($(window).scrollTop() > 75){
       $(document.getElementById('top')).css({
         "position": "fixed"
       });
     }else{
       $(document.getElementById('top')).css({
         "position": "relative"
       })
     }
   })
 })




 
//copy text paste 
 function CopyToClipboard(){
    var r = document.createRange();
    r.selectNode(document.getElementById('id'));
    window.getSelection().addRange(r);
    document.execCommand('copy');
    
 }


 // scrool progrers 
 

// const scrollProgress = document.getElementById('scroll-progress');
// const height =document.documentElement.scrollHeight - document.documentElement.clientHeight;
// window.addEventListener('scroll', () => {
//   const scrollTop =document.body.scrollTop || document.documentElement.scrollTop;
//   scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
// });
