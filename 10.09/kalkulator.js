// dodawanie
function dodaj(a, b) {
    return a + b;
}

// odejmowanie
function odejmij(a, b) {
    return a - b;
}

// mnozenie
function mnoz(a, b) {
    return a * b;
}

// dzielenie
function dziel(a, b) {
    if ((a || b) == 0) {
        console.log('NIE DZIEL PRZEZ ZERO');
        return 0;
    }
    else{
        return a / b;
    }
}


// wczytywanie danych od użytkownika
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Podaj pierwszą liczbę: ', (liczba1) => {
    readline.question('Podaj drugą liczbę: ', (liczba2) => {
        readline.question('Wybierz operację (| + | - | * | / |): ', (operacja) => {
            const a = parseFloat(liczba1);
            const b = parseFloat(liczba2);
            let wynik;

            if (operacja === '+') {
                wynik = dodaj(a, b);
            } else if (operacja === '-') {
                wynik = odejmij(a, b);
            }  else if (operacja === '*') {
                wynik = mnoz(a, b);
            }  else if (operacja === '/') {
                wynik = dziel(a, b);
            }  
            else {
                console.log('Nieznana operacja!');
                readline.close();
                return;
            }

            console.log(`Wynik: ${wynik}`);
            readline.close();
        });
    });
});
