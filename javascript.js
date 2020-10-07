var utilisateur;
var random;
var number = 0;
var userSign = '';
var computerSign = '';
var userLed = '';
var computerLed = '';
var Pscore = 0;
var Cscore = 0;
function name() {
    utilisateur = prompt('Entrez votre nom');
    document.getElementById('nom_utilisateur').innerHTML = utilisateur;
}
function trade(signe) {
    if (signe == 'cisceau') {
        document.getElementById('user_choice').src = 'shears.svg';
        userSign = 'cisceau';
    } else if (signe == 'feuille') {
        document.getElementById('user_choice').src = 'tied-scroll.svg';
        userSign = 'feuille';
    } else {
        document.getElementById('user_choice').src = 'golem-head.svg';
        userSign = 'pierre';
    }
    ia_choice();
    number++;
    console.log('number: ' + number);
    document.getElementById('number').innerText = number;
    console.log('signe de l\'utilisateur: ' + userSign);
    console.log('signe de l\'ordinateur: ' + computerSign);
    comparaison();
}
function ia_choice() {
    random = Math.round(Math.random() * 3);
    if (random == 1) {
        console.log('pierre');
        document.getElementById('ia_choice').src = 'golem-head.svg';
        computerSign = 'pierre';
    }
    else if (random == 2) {
        console.log('feuille');
        document.getElementById('ia_choice').src = 'tied-scroll.svg';
        computerSign = 'feuille';
    }
    else {
        console.log('cisceau');
        document.getElementById('ia_choice').src = 'shears.svg';
        computerSign = 'cisceau';
    }
}
function comparaison() {
    switch (number) {
        case 1:
            if (number == 1) {
                userLed = 'user_led_1';
                computerLed = 'computer_led_1';
                break;
            }
        case 2:
            if (number == 2) {
                userLed = 'user_led_2';
                computerLed = 'computer_led_2';
                break;
            }
        case 3:
            if (number == 3) {
                userLed = 'user_led_3';
                computerLed = 'computer_led_3';
                break;
            }
    }
    if (userSign == computerSign) {
        alert('Egalite');
        document.getElementById(userLed).style.backgroundColor = 'blue';
        document.getElementById(computerLed).style.backgroundColor = 'blue';

    }
    else if (userSign == 'pierre' && computerSign == 'cisceau' || userSign == 'feuille' && computerSign == 'pierre' || userSign == 'cisceau' && computerSign == 'feuille') {
        alert('Winner');
        document.getElementById(userLed).style.backgroundColor = 'green';
        document.getElementById(computerLed).style.backgroundColor = 'red';
        Pscore++;
    }
    else {
        alert('Loser');
        document.getElementById(userLed).style.backgroundColor = 'red';
        document.getElementById(computerLed).style.backgroundColor = 'green';
        Cscore++;
    }
    while (number >= 3) {
        if (Pscore > Cscore) {
            console.log('tu as gagné');
            document.getElementById('number').innerHTML = Pscore + '-' + Cscore + ' ' + 'Winner';
        }
        else if (Cscore > Pscore) {
            console.log('tu as perdu');
            document.getElementById('number').innerHTML = Pscore + '-' + Cscore + ' ' + 'Loser';
        }
        else {
            console.log('Egality');
            document.getElementById('number').innerHTML = Pscore + '-' + Cscore + ' ' + 'Egality';
        }
        break;
    }
}



