document.addEventListener("DOMContentLoaded", (event) => {

    const options = document.getElementById('options');
    const close = document.getElementsByClassName('close')[0];
    const container = document.getElementsByClassName('options-container')[0];

    function handleClick(e){
        container.classList.toggle('is-visible');
    }

    options.addEventListener("click", handleClick, false);
    close.addEventListener("click", handleClick, false);
});