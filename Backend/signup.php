<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: *");

require 'db.php';
$fdata = json_decode(file_get_contents("php://input"));

$name = $data->name;
$email = $data->email;
$password = password_hash($data->password, PASSWORD_BCRYPT);
                                                         
$check = $conn->prepare("SELECT * FROM users WHERE email = ?");
$check->bind_param("s", $email);
    
$check->execute();
$result = $check->get_result();

if($result->num_rows > 0) {
 echo json_encode(["success" => false, "message" => "Email already exists"]);
 exit;
}

$stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $password);

if ($stmt->execute()) {
  echo json_encode(["success" => true, "message" => "Signup successful"]);
}else{
  echo json_encode(["success" => false, "message" => "Signup failed"]);
}

?>
