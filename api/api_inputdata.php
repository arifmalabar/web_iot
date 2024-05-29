<?php
include_once '../server/koneksi.php';
$suhu = $_POST['suhu'];
$suhu_ruang = $_POST['suhu_ruang'];
$kelembaban = $_POST['kelembaban'];
$query = mysqli_query(getKoneksi(), "INSERT INTO `tb_suhuruang`(`suhu`, `kelembaban`, `waktu`) VALUES ('".$suhu_ruang."','".$kelembaban."', NOW())");
$sqltubuh = mysqli_query(getKoneksi() , "INSERT INTO `tb_suhutubuh`(`suhu_tubuh`, `waktu`) VALUES ('".$suhu."', NOW())");
if($query && $sql)
{
    echo "success";
}