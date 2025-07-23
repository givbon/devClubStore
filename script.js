const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const itens = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');
const list = document.querySelector('.list');

let active = 0;
const total = itens.length;
let timer;

function update(direction) {
    document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.dot.active').classList.remove('active');

    [0, 1, 2]

    if(direction > 0) {
        active = active + 1
        if (active === total)
            active = 0;
        itens[active].classList.add('active');
        dots[active].classList.add('active');
    } else if (direction < 0){
        active = active - 1
        if (active < 0)
            active = total - 1;
        itens[active].classList.add('active');
        dots[active].classList.add('active');
    }

    numberIndicator.textContent = `0${active + 1}`;
}

setInterval(() => {
    console.log('Interval triggered');
    update(1);
}, 5000)

prevButton.addEventListener('click', function(){
    console.log('Prev button clicked')
    update(-1) 
})

nextButton.addEventListener('click', function(){
    console.log('Next button clicked')
    update(+1) 
})

