<?php
include_once 'koneksi.php';
$basesql = "SELECT suhu, kelembaban, waktu, TIME(waktu) as jam  FROM tb_suhuruang";
function inputSuhuRuang()
{
    $suhu = $_POST['suhu'];
    $kelembaban = $_POST['kelembaban'];
    $sql = "INSERT INTO `tb_suhuruang`(`suhu`, `kelembaban`, `waktu`) VALUES ('".$suhu."','".$kelembaban."', NOW())";
    $query = mysqli_query(getKoneksi(), $sql);
    if($query)
    {
        echo json_encode(["status" => "success"]);
    }
}
function getSuhuRuang()
{
    $data = [];
    $sql = mysqli_query(getKoneksi(), $GLOBALS['basesql'] ." WHERE DATE(waktu) = DATE(NOW())");
    while ($dt = mysqli_fetch_assoc($sql)) {
        array_push($data, $dt);
    }
    echo json_encode($data);
}
function sortBy()
{
    $fullsql = $GLOBALS['basesql'];
    $kriteria = "";
    $waktu = "";
    if (isset($_POST['kriteria'])) {
        $kriteria = $_POST['kriteria'];
    }
    if(isset($_POST['waktu'])){
        $waktu = $_POST['waktu'];
    }
    if($kriteria != "" && $waktu != "") {
        $fullsql = $fullsql . " WHERE DATE(waktu) = '".$waktu."'";
        if($kriteria == "tertinggi")
        {
            $fullsql = $fullsql . " ORDER BY suhu AND kelembaban ASC";
        } else {
            $fullsql = $fullsql . " ORDER BY suhu AND kelembaban DESC";
        }
    } else {
        if ($waktu != "") {
            $fullsql = $fullsql . " WHERE DATE(waktu) = '".$waktu."'";
        } elseif($kriteria != ""){
            if($kriteria == "tertinggi")
            {
                $fullsql = $fullsql . " ORDER BY suhu AND kelembaban ASC";
            } else {
                $fullsql = $fullsql . " ORDER BY suhu AND kelembaban DESC";
            }
        } 
    }
    $data = [];
    $sql = mysqli_query(getKoneksi(), $fullsql);
    while($dt = mysqli_fetch_assoc($sql))
    {
        array_push($data, $dt);
    }
    echo json_encode($data);
}