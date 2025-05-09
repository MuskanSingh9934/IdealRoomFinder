<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$host = "localhost";
$user = "root";
$pass = "";
$dbname = "room_mate_finder";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}

$data = json_decode(file_get_contents("php://input"), true);

$name = $data["name"];
$email = $data["email"];
$phone = $data["phone"];
$hotelName = $data["hotelName"];
$location = $data["location"];

$sql = "INSERT INTO book (name, email, phone, hotel_name, location) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $name, $email, $phone, $hotelName, $location);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "✅ Booking successful!"]);
} else {
    echo json_encode(["status" => "error", "message" => "❌ Booking failed!"]);
}

$stmt->close();
$conn->close();
?>
