<?php
$servername = "localhost";
$username = "root";  // Nom d'utilisateur MySQL
$password = "";  // Mot de passe MySQL
$dbname = "user_db";

// Connexion à la base de données
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connexion échouée: " . $conn->connect_error);
}

// Récupérer les données du formulaire
$user = $_POST['username'];
$pass = $_POST['password'];

// Hacher le mot de passe
$hashed_pass = password_hash($pass, PASSWORD_DEFAULT);

// Préparer et exécuter la requête d'insertion
$sql = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$sql->bind_param("ss", $user, $hashed_pass);

if ($sql->execute()) {
    echo "Inscription réussie!";
} else {
    echo "Erreur: " . $sql->error;
}

// Fermer la connexion
$conn->close();
?>
