console.log("hello")

//MENU DROITE (temporaire)

const afficheAcceuil = document.querySelector("#afficheHome")
const afficheAbout = document.querySelector("#afficheAbout")
const afficheResume = document.querySelector("#afficheResume")
const affichePortfolio = document.querySelector("#affichePortfolio")
const afficheContact = document.querySelector("#afficheContact")

const acceuil = document.querySelector("#home")
const about = document.querySelector("#about")
const resume = document.querySelector("#resume")
const portfolio = document.querySelector("#portfolio")
const contact = document.querySelector("#contact")


afficheAcceuil.addEventListener("click", function(){
    acceuil.classList.remove("affichePage")
    portfolio.classList.add("affichePage")
    resume.classList.add("affichePage")
    about.classList.add("affichePage")
    contact.classList.add("affichePage")
    contact.classList.remove("sectionShow")
});

afficheAbout.addEventListener("click", function(){
    about.classList.remove("affichePage")
    acceuil.classList.add("affichePage")
    resume.classList.add("affichePage")
    portfolio.classList.add("affichePage")
    contact.classList.add("affichePage")
    contact.classList.remove("sectionShow")
});

afficheResume.addEventListener("click", function(){
    resume.classList.remove("affichePage")
    acceuil.classList.add("affichePage")
    portfolio.classList.add("affichePage")
    about.classList.add("affichePage")
    contact.classList.add("affichePage")
    contact.classList.remove("sectionShow")
});

affichePortfolio.addEventListener("click", function(){
    portfolio.classList.remove("affichePage")
    acceuil.classList.add("affichePage")
    resume.classList.add("affichePage")
    about.classList.add("affichePage")
    contact.classList.add("affichePage")
    contact.classList.remove("sectionShow")
});

afficheContact.addEventListener("click", function(){
    contact.classList.remove("affichePage")
    contact.classList.add("sectionShow")
    acceuil.classList.add("affichePage")
    resume.classList.add("affichePage")
    about.classList.add("affichePage")
    portfolio.classList.add("affichePage")
});


