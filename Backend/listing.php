<?php
// listing.php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$host = "localhost";
$username = "root";         
$password = "";           
$dbname = "room_mate_finder";   
$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$title = $_POST['title'] ?? '';
$description = $_POST['description'] ?? '';
$rent = $_POST['rent'] ?? '';
$location = $_POST['location'] ?? '';

if(empty($title) || empty($description) || empty($rent) || empty($location)) {
    echo "All fields are required.";
    exit;
}

$stmt = $conn->prepare("INSERT INTO listing (title, description, rent, location) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssds", $title, $description, $rent, $location);

if($stmt->execute()) {
    echo "Room listing submitted successfully!";
}else {
 echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();

?>
