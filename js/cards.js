import { swapCards, playCard, getGrabbedCard} from './gameutil.js';

document.addEventListener('DOMContentLoaded', (event) => {

    //Used to check that obj is not the same obj being transfered via drag and drop
    function notSelf(obj) {
        return obj.target.id !== obj.dataTransfer.getData("id");
    }

    function isPlayed(card) {
        return card.target.classList.contains("played");
    }

    function handleDragStart(e) {
        if (e.target.classList.contains("played")){
            e.preventDefault();
        }
        else{
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('id', this.id);
            e.target.classList.add("active");
        }
    }

    function handleDragEnd(e) {
        let card = getGrabbedCard(e);
        card.classList.remove("active");
    }

    function handleDragOver(e) {
        e.preventDefault();
        return false;
    }

    function handleDragEnter(e) {
        if (notSelf(e)) {
            if (!isPlayed(e)) {
                e.target.classList.add("over");
            }
            else {
                e.target.parentNode.classList.add("highlight");
            }
        }
    }

    function handleDragLeave(e) {
        if (notSelf(e)) {
            e.target.classList.remove("over");
        }
    }

    function handleDrop(e) {
        e.preventDefault();

        if (notSelf(e)) {
            e.target.classList.remove("over");

            let card = getGrabbedCard(e);

            if (e.target.classList.contains("played")) {
                playCard(card);
            }
            else {
                swapCards(card, e.target);
            }
        }
        return false;
    }

    let items = document.querySelectorAll('.card');
    items.forEach(function (item) {
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragenter', handleDragEnter, false);
        item.addEventListener('dragleave', handleDragLeave, false);
        item.addEventListener('dragover', handleDragOver, false);
        item.addEventListener('dragend', handleDragEnd, false);
        item.addEventListener('drop', handleDrop, false);
    });
});