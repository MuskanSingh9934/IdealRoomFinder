<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: *");

require 'db.php';

$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$password = $data->password;

$stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows == 1) {
  $user = $result->fetch_assoc();
  if (password_verify($password, $user["password"])) {
    echo json_encode([
      "success" => true,
      "message" => "Login successful",
      "user" => [
        "id" => $user["id"],
        "name" => $user["name"],
        "email" => $user["email"]
      ]
    ]);
  } else {
    echo json_encode(["success" => false, "message" => "Invalid password"]);
  }
} else {
  echo json_encode(["success" => false, "message" => "Email not found"]);
}
?>
