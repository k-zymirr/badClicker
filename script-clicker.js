let score = 0;
let clickNotMove = 0;
let clickToMove;
let posX;
let posY;
let scrollPosition = 0;
let rulesOpen = false

setInterval(() => {
    document.getElementsByClassName('buttonShowAside')[0].style.top = Math.floor(Math.random() * (window.innerHeight - 100)) + 'px';
}, 2000);


function incrementScore() {
    if (!rulesOpen) {
        console.log('click');
        score ++;
        clickNotMove ++;

        if (clickNotMove == clickToMove) {
            move();
        }
    }
}

function move() {
    clickNotMove = 0;
    clickToMove = Math.floor(Math.random() * 4) + 1;
    posX = Math.floor(Math.random() * (window.innerWidth - 200));
    posY = Math.floor(Math.random() * (window.innerHeight - 200));

    document.getElementById('patate').style.left = posX + 'px';
    document.getElementById('patate').style.top = posY + 'px';
    document.getElementById('patate').setAttribute('tabindex', '-1');
}

function toggleAside() {
    const cote = document.getElementsByClassName('cote')[0];

    if (cote.classList.contains('open')) {
        cote.classList.remove('open');
        cote.querySelector('p').textContent = '<';
    }else {
        cote.classList.add('open');
        cote.querySelector('p').textContent = '>';
    }
}

function updateScore(){
    document.getElementById('score').textContent = score;
}

let rules = document.getElementsByClassName("rules")[0];

rules.addEventListener('scroll', (event) => {
  event.preventDefault();
  const targetScroll = rules.pageYOffset || rules.scrollTop;
  scrollPosition += (targetScroll - scrollPosition) * 0.01;
  rules.scrollTo(0, scrollPosition);
});

function showRules(){
    alert('Pour fermer les règles et recommencer à jouer, clickez sur le boutton Quitter tout en bas des règles');
    rules.style.display = 'block';
    rulesOpen = true;
}

function closeRules(){
    rules.style.display = 'none';
    rulesOpen = false;
}

move();