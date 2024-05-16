<?php
include '../server/suhutubuh.php';
$reqmth = $_SERVER['REQUEST_METHOD'];
if($reqmth == 'POST'){
    inputSuhu();
} elseif($reqmth == "GET") {
    echo json_encode(tampilkanSuhu());
} elseif($reqmth == "PUT"){
    echo "put";
} elseif($reqmth == "DELETE"){
    echo "delete";
} else {
    echo "do nothing";
}