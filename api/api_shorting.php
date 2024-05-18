<?php
include_once '../server/kelembabanruang.php';
include_once '../server/suhutubuh.php';
$type = $_POST['type'];
switch ($type) {
    case "ruangan":
            sortBy();
        break;
    case "tubuh":
            sortBySuhuTubuh();
        break;
    
    default:
        echo json_encode(["status" => "error"]);
        break;
}