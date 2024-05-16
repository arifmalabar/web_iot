<?php
include 'koneksi.php';
function inputSuhu()
{
    $suhu = $_POST['suhu'];
    $sql = mysqli_query(getKoneksi() , "INSERT INTO `tb_suhutubuh`(`suhu_tubuh`, `waktu`) VALUES ('".$suhu."', NOW())");
    return $sql;
}
function tampilkanSuhu()
{
    $data = [];
    $sql = mysqli_query(getKoneksi(), "SELECT * FROM tb_suhutubuh");
    while ($dt = mysqli_fetch_assoc($sql)) {
        array_push($data, $dt);
    }
    return $data;
}
function tampilkanSuhuKriteria($criteria)
{
    
}
