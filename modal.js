const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const openButton = document.querySelector('.inf-button');
function open() {
    backdrop.classList.remove('hidden');
}
function close(event) {
    if(event.target===event.currentTarget){
        backdrop.classList.add('hidden');
    }
}
openButton.addEventListener('click', open)
backdrop.addEventListener('click', close)