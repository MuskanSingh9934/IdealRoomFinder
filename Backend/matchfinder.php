<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
$conn = new mysqli("localhost", "root", "", "room_mate_finder");

if ($conn->connect_error) {
  echo json_encode(["status" => "error", "message" => "Database connection failed"]);
  exit();
}

$user_id = intval($_POST['user_id']);
$pg_id = intval($_POST['pg_id']);
$preference = $conn->real_escape_string($_POST['preference']);
$location = $conn->real_escape_string($_POST['location']);

$sql_match = "
  SELECT * FROM roommate_preferences 
  WHERE preference = '$preference' 
  AND pg_id = $pg_id 
  AND location = '$location'
  AND user_id != $user_id 
  LIMIT 1
";
$result = $conn->query($sql_match);

if ($result && $result->num_rows > 0) {
  $row = $result->fetch_assoc();
  $mate_id = $row['user_id'];

  $sql_mate = "SELECT * FROM users WHERE id = $mate_id LIMIT 1";
  $mate_result = $conn->query($sql_mate);

  if ($mate_result && $mate_result->num_rows > 0) {
    $mate = $mate_result->fetch_assoc();

    echo json_encode([
      "status" => "matched",
      "mate" => [
        "name" => $mate['name'],
        "nature" => $mate['nature'],
        "occupation" => $mate['occupation'],
        "contact" => $mate['contact'],
        "photo" => $mate['photo'] ?? "",
        "age" => $mate['age'] ?? "",
        "hobbies" => $mate['hobbies'] ?? "",
      ]
    ]);
    exit();
  }
}

$sql_insert = "
  INSERT INTO roommate_preferences (user_id, pg_id, preference, location)
  VALUES ($user_id, $pg_id, '$preference', '$location')
";
$conn->query($sql_insert);

echo json_encode(["status" => "pending"]);
exit();
?>
