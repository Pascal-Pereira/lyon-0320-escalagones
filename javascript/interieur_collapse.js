// Selectionner Salle de bloc : .listing_block h3 et l'ul assoicé 

const titreSalleBloc = document.querySelector('.listing_block h3');

const ulSalleBloc = document.querySelector('.ulbloc');


// Selectionner Salle de voies : .listing_voies h3 et l'ul assoicé 


const titreSalleVoie = document.querySelector('.listing_voies h3');

const ulSalleVoie = document.querySelector('.ulvoie');


// Evenement : 

titreSalleBloc.addEventListener('mouseover', function(){
    ulSalleBloc.classList.remove('ulbloc')
    ulSalleVoie.classList.add('ulvoie')
})


titreSalleVoie.addEventListener('mouseover', function(){
    ulSalleVoie.classList.remove('ulvoie')
    ulSalleBloc.classList.add('ulbloc')
})