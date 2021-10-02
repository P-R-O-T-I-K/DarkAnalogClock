const deg = 6;

const secondHand = document.querySelector('.sec');
const minsHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');

setInterval(() => {
    const now = new Date();

    const hours = now.getHours() * 30 ;
    const mins = now.getMinutes() * deg ;
    const seconds = now.getSeconds() * deg ;

    const hoursDegree = (hours) + (mins / 12);


    hourHand.style.transform = `rotateZ(${hoursDegree}deg)`;
    minsHand.style.transform = `rotate(${mins}deg)`;
    secondHand.style.transform = `rotate(${seconds}deg)`;


}, 1000);


// Toggle Function goes here 

function toggleFunction() {
    const element = document.body;
    element.classList.toggle("light-mode");
}
