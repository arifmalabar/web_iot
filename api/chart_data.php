<?php
include_once '../server/koneksi.php';
$data = [
    "jam" => [],
    "suhu_ruang" => [],
    "suhu_tubuh" =>[]
];
$sqlruang = mysqli_query(getKoneksi(), "SELECT * FROM tb_suhuruang WHERE DATE(waktu)=DATE(NOW())");
$sqltubuh = mysqli_query(getKoneksi(), "SELECT * FROM tb_suhutubuh WHERE DATE(waktu)=DATE(NOW())");
while ($a = mysqli_fetch_assoc($sqlruang)) {
    array_push($data["jam"], $a['waktu']);
    array_push($data["suhu_ruang"], $a['suhu']);
}
while ($d = mysqli_fetch_assoc($sqltubuh)) {
    array_push($data["suhu_tubuh"], $d["suhu_tubuh"]);
}
echo json_encode($data);