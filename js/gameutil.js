
export const playArea = document.querySelector('#playarea');


export function swapCards(card1, card2) {
    //If the cards are next to each other swap them
    if (card1.nextElementSibling === card2) {
        card1.parentNode.insertBefore(card2, card1);
    }
    else if (card1.previousElementSibling === card2) {
        card1.parentNode.insertBefore(card1, card2);
    }
    else {
        let card2Sibling = card2.nextElementSibling;
        
        if (card2Sibling) { //Card2 is not the last card
            card2.parentNode.insertBefore(card2,card1);
            card2.parentNode.insertBefore(card1,card2Sibling);
        } else { //Card2 is the last card.
            card2.parentNode.insertBefore(card2, card1);
            card2.parentNode.appendChild(card1);
        }
    }
}

export function playCard(card) {
    card.classList.add('played');
    playArea.appendChild(card);
}

export function getGrabbedCard(ev) {
    const data = ev.dataTransfer.getData("id");
    return document.getElementById(ev.dataTransfer.getData("id"));
}