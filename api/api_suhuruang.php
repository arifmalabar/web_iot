<?php
include '../server/kelembabanruang.php';
$req = $_SERVER['REQUEST_METHOD'];
switch ($req) {
    case 'POST':
            inputSuhuRuang();
        break;
    case 'GET':
            
            getSuhuRuang();
        break;
    default:
        # code...
        break;
}