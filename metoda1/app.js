const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware do parsowania danych z formularza
app.use(bodyParser.urlencoded({ extended: true }));

// Obsługa statycznych plików HTML w katalogu "public"
app.use(express.static('public'));

// Obsługa danych z formularza
app.post('/submit', (req, res) => {
    const { name, surname, email } = req.body; // Pobranie danych z formularza

    // Tworzenie strony HTML z wynikami
    res.send(`
        <!DOCTYPE html>
        <html lang="pl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Wynik</title>
        </head>
        <body>
            <h1>Dziękujemy za przesłanie danych!</h1>
            <p>Imię: ${name}</p>
            <p>Nazwisko: ${surname}</p>
            <p>Email: ${email}</p>
            <a href="/">Wróć do formularza</a>
        </body>
        </html>
    `);
});

// Uruchomienie serwera
app.listen(3000, () => {
    console.log('Serwer działa na porcie 3000');
});
