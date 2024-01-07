/* billedeanimation */

document.addEventListener('DOMContentLoaded', function () {
    const animatedImg = document.querySelector('#animatedImg');

    animatedImg.addEventListener('mousedown', function () {
        // Add the hideAnimation class on mousedown
        animatedImg.classList.add('hideAnimation');

        // Remove the hideAnimation class after the animation completes
        setTimeout(function () {
            animatedImg.classList.remove('hideAnimation');
        }, 500);
    });
});

/* øvelse */

const numberToGuess = 10;
let myGuess;
let guessesLeft = 5;
document.querySelector("#guesses").textContent = guessesLeft;
document.querySelector("button").addEventListener("click", checkguess)

function checkguess() {
    myGuess = document.querySelector("input").value;
    if (numberToGuess == myGuess) {
            console.log("rigtigt!");
            document.querySelector("#message").textContent = "Rigtigt!";
            document.querySelector("#scene").classList.add("winder");
         } else if (numberToGuess > myGuess) {
            console.log("det tal jeg tænker på er større");
            document.querySelector("#message").textContent = "Det tal jeg tænker på er større";
         } else { 
            console.log("det tal jeg tænker på er mindre");
            document.querySelector("#message").textContent = "Det tal jeg tænker på er mindre";
         }
        guessesLeft = guessesLeft - 1;
        document.querySelector("#guesses").textContent = guessesLeft;
}


/* sten,saks,papir */

let spillerPoint = 0;
let computerPoint = 0;

function træfValg(spillerValg) {
    const valgmuligheder = ['sten', 'papir', 'saks'];
    const computerValg = valgmuligheder[Math.floor(Math.random() * 3)];

    let spillerResultat;
    if (spillerValg === computerValg) {
        spillerResultat = "Det er uafgjort!";
    } else if (
        (spillerValg === 'sten' && computerValg === 'saks') ||
        (spillerValg === 'papir' && computerValg === 'sten') ||
        (spillerValg === 'saks' && computerValg === 'papir')
    ) {
        spillerResultat = "Du vinder!";
        spillerPoint++;
        document.querySelector('#resultat').classList.add('vind');
        document.querySelector('#resultat').classList.remove('tab');
    } else {
        spillerResultat = "Du taber!";
        computerPoint++;
        document.querySelector('#resultat').classList.add('tab');
        document.querySelector('#resultat').classList.remove('vind');
    }

    document.querySelector('#valg').innerHTML = `Spiller valgte: ${spillerValg}<br>Computer valgte: ${computerValg}`;
    document.querySelector('#resultat').textContent = spillerResultat;
    document.querySelector('#pointtavle').textContent = `Point: Spiller ${spillerPoint} - Computer ${computerPoint}`;
}