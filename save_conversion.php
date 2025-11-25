<?php
$conn = new mysqli("localhost", "root", "", "currency_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$amount = $_POST['amount'];
$from   = $_POST['from'];
$to     = $_POST['to'];
$result = $_POST['result'];

$sql = "INSERT INTO conversions (amount, from_currency, to_currency, result)
        VALUES ('$amount', '$from', '$to', '$result')";

if ($conn->query($sql) === TRUE) {
    echo "Saved successfully";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
