<?php
include '../server/kelembabanruang.php';

$type = $_POST['type'];
switch ($type) {
    case "ruangan":
            sortBy();
        break;
    case "tubuh":

        break;
    
    default:
        echo json_encode(["status" => "error"]);
        break;
}