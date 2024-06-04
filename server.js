const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const PORT = 3000;

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware pour gérer les sessions
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));

// Middleware pour servir les fichiers statiques
app.use(express.static('public'));

// Route pour afficher la page de login
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

// Route pour gérer la soumission du formulaire de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Remplace cette partie avec la vérification de tes utilisateurs
    if (username === 'admin' && password === 'password') {
        req.session.user = username;
        res.redirect('/dashboard');
    } else {
        res.redirect('/login');
    }
});

// Route pour le tableau de bord
app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.send(`<h1>Bienvenue ${req.session.user}</h1><a href="/logout">Logout</a>`);
    } else {
        res.redirect('/login');
    }
});

// Route pour la déconnexion
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/dashboard');
        }
        res.redirect('/login');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
