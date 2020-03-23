console.log('it works');

// Selection of MRoc's anchor link and MRoc's cards: idem pour Vertical Art

const limroc = document.querySelectorAll(".mroc");
const mrocCard = document.getElementById("mroc");


const liverticalart = document.querySelector(".verticalart");
const cardSalles = document.querySelector('.cardSalles');
const verticalartCard = cardSalles.querySelector('#verticalart');

const liclimbup = document.querySelectorAll(".climbup");
console.log(liclimbup.length)
const climbupCard = cardSalles.querySelector('#climbup')



// Function to change the style of the cards Mroc
function changeStyle(){
    mrocCard.classList.add('styleCards');
    setTimeout(function() {
        mrocCard.classList.remove('styleCards')
    },2000)
}

// Function to change the style of the card Vertical Art

function changeStyleVer() {
    console.log(event.target)
    console.log(verticalartCard)
    verticalartCard.classList.add('styleCards');
    setTimeout(function() {
        verticalartCard.classList.remove('styleCards')
    },2000)
}

// Function to change the style of the cards Climbup

function changeStyleClimbup() {

    climbupCard.classList.add('styleCards');
    setTimeout(function() {
        climbupCard.classList.remove('styleCards')
    },2000)
}



// Event and styling : 

limroc.forEach (li => { li.addEventListener('click',changeStyle)})


liverticalart.addEventListener('click',changeStyleVer);

liclimbup.forEach(li => {
    li.addEventListener('click',changeStyleClimbup);
}
)



