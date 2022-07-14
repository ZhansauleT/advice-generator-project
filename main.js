const adviceText = document.querySelector(".advice-text");
const adviceNumber = document.querySelector(".advice-id-number");
const dice = document.querySelector(".dice");

dice.addEventListener('click', () => {
  getAdvice();
});


window.onload = () => {
  getAdvice();
};


function getAdvice(){
  fetch('https://api.adviceslip.com/advice').then(response => {
    return response.json();
  }).then(adviceData => {
    const AdviceObj = adviceData.slip;
    adviceText.innerHTML = `${AdviceObj.advice}`;
    adviceNumber.innerHTML = `${AdviceObj.id}`;
  }).catch(error => {
    console.log(error);
  });
}



