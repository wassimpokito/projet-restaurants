<?php
session_start();

$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];
$password = $data['password'];

// Connectez-vous à la base de données
$servername = "localhost";
$dbname = "database_name";
$db_username = "database_username";
$db_password = "database_password";

$conn = new mysqli($servername, $db_username, $db_password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $_SESSION['username'] = $username;
  echo json_encode(['success' => true]);
} else {
  echo json_encode(['success' => false]);
}

$conn->close();
?>
<?php
echo "Login page loaded";
?>
