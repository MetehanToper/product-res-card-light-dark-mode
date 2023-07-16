const moonBtn=document.querySelector(`.moon`);
const sunBtn=document.querySelector(`.sun`);

const cards=document.querySelectorAll(`.card`);
const body=document.body
const header = document.querySelector('header');
const section = document.querySelector('section');
const cardText = document.querySelector('.card-text');
const stars = document.querySelectorAll('.fa-star');
const price = document.querySelector('.price');
const btn = document.querySelector('.btn');


moonBtn.addEventListener(`click`,function(){
    body.classList.add(`dark-mode`);
    header.classList.add('dark-mode');
    section.classList.add('dark-mode');
    cardText.classList.add(`dark-mode`);
    stars.classList.add(`dark-mode`);
    price.classList.add(`dark-mode`);
    btn.classList.add(`dark-mode`);

})

sunBtn.addEventListener(`click`, function(){
    body.classList.remove(`dark-mode`);
    header.classList.remove('dark-mode');
    section.classList.remove('dark-mode');
    cardText.classList.remove(`dark-mode`);
    stars.classList.remove(`dark-mode`);
    price.classList.remove(`dark-mode`);
    btn.classList.remove(`dark-mode`);

})