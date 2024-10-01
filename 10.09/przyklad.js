const readline = require('readline');

// wczytywanie danych od użytkownika
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Podaj liczbę: ', (liczba) => {
    console.log(`Podałeś liczbę: ${liczba}`);
    rl.close();
});