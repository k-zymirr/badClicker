const button = document.getElementsByTagName('button')[0];
const p = document.createElement('p');

button.addEventListener('mouseover', (event) => {
    if (!event.shiftKey) {
        button.style.left = Math.floor(Math.random() * (window.innerWidth - 100)) + 'px';
        button.style.top = Math.floor(Math.random() * (window.innerHeight - 100)) + 'px';
    }
});