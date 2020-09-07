import { playArea, playCard, getGrabbedCard } from './gameutil.js'

document.addEventListener('DOMContentLoaded', (event) => {

    //User a counter to avoid children elements triggering 
    //the dragleave function and removing classes.
    let counter = 0;

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnValue = false;
        }
    }

    function handleDragEnter(e) {
        counter++;
        this.classList.add("highlight");
    }

    function handleDragLeave(e) {
        counter--;
        if (counter === 0) {
            this.classList.remove("highlight");
        }
    }

    function handleDrop(e) {
        e.preventDefault();
        playCard(getGrabbedCard(e));
    }

    function handleDragEnd(e) {
        counter = 0;
        this.classList.remove("highlight");

    }

    playArea.addEventListener("dragenter", handleDragEnter, false);
    playArea.addEventListener("dragleave", handleDragLeave, false);
    playArea.addEventListener("dragover", handleDragOver, false);
    playArea.addEventListener("drop", handleDrop, false);
    playArea.addEventListener("dragend", handleDragEnd, false);
});