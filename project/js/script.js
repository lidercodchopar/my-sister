const text = document.querySelector(".sec-text")
const textLoad = () =>{
    setTimeout(() =>{
        text.textContent = "Assalom Alaykum"
    },0);
    setTimeout(() =>{
        text.textContent = "Sizni yaxshi ko'ramiz"
    },4000);
    setTimeout(() =>{
        text.textContent = "Baxtimizga sog' bo'ling"
    },8000);
    setTimeout(() =>{
        text.textContent = "Ko'rishguncha"
    },12000);

}
textLoad();
setInterval(textLoad, 16000);