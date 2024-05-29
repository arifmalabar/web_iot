<?php
include_once '../server/koneksi.php';
$data = [
    "ruangan" => [],
    "tubuh" => []
];
$sql = mysqli_query(getKoneksi(), "SELECT DATE(waktu) AS waktu, AVG(kelembaban) AS kelembaban, AVG(suhu) AS suhu  FROM `tb_suhuruang` WHERE DATE(waktu) = DATE(NOW())");
$sqlt = mysqli_query(getKoneksi(), "SELECT DATE(waktu) AS waktu, AVG(suhu_tubuh) AS rata_suhu FROM tb_suhutubuh WHERE DATE(waktu)= DATE(NOW())");
while ($a = mysqli_fetch_assoc($sql)) {
    array_push($data["ruangan"], $a);
}
while ($b = mysqli_fetch_assoc($sqlt)) {
    array_push($data["tubuh"], $b);
}
echo json_encode($data);