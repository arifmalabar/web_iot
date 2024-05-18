<?php
include_once 'koneksi.php';
$base_sql = "SELECT id_suhutubuh, suhu_tubuh, waktu,TIME(waktu) as jam FROM tb_suhutubuh ";
function inputSuhu()
{
    $suhu = $_POST['suhu'];
    $sql = mysqli_query(getKoneksi() , "INSERT INTO `tb_suhutubuh`(`suhu_tubuh`, `waktu`) VALUES ('".$suhu."', NOW())");
    return $sql;
}
function tampilkanSuhu()
{
    $data = [];
    $sql = mysqli_query(getKoneksi(), $GLOBALS['base_sql']);
    while ($dt = mysqli_fetch_assoc($sql)) {
        array_push($data, $dt);
    }
    return $data;
}
function sortBySuhuTubuh()
{
    $fullsql = $GLOBALS['base_sql'];
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
            $fullsql = $fullsql . " ORDER BY suhu_tubuh ASC";
        } else {
            $fullsql = $fullsql . " ORDER BY suhu_tubuh DESC";
        }
    } else {
        if ($waktu != "") {
            $fullsql = $fullsql . " WHERE DATE(waktu) = '".$waktu."'";
        } elseif($kriteria != ""){
            if($kriteria == "tertinggi")
            {
                $fullsql = $fullsql . " ORDER BY suhu_tubuh ASC";
            } else {
                $fullsql = $fullsql . " ORDER BY suhu_tubuh DESC";
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
