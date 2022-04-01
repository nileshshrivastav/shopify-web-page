const target = document.querySelector('#target');
const modalStart = document.querySelector('.modal-start');
const closebtn = document.querySelector('.close')
target.addEventListener('click',function(){
    modalStart.classList.add('active');
});
closebtn.addEventListener('click',function(){
    modalStart.classList.remove('active');
})

const trigger = document.querySelector('#trigger');
const modalSell = document.querySelector('.modal-sell');
const cancelbtn = document.querySelector('.cancel')
trigger.addEventListener('click',function(){
    modalSell.classList.add('active-sell');
});
cancelbtn.addEventListener('click',function(){
    modalSell.classList.remove('active-sell');
})