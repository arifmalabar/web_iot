<?php
function getKoneksi()
{
    $host   = "localhost";
    $user   = "root";
    $pass   = "";
    $db     = "project_iot";
    return mysqli_connect($host, $user, $pass, $db);
}