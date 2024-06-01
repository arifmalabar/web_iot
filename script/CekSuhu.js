var suhutubuh = document.querySelector("#suhu-tubuh");
var kelembaban = document.querySelector("#kelembaban-ruang");
var suhuruang = document.querySelector("#suhu-ruangan");
var status = document.querySelector("#status");
export function showDataTubuh(tubuh) {
    var size = tubuh.length;
    if(size > 0)
    {
        let data = tubuh.slice(-1)[0];
        suhutubuh.innerHTML = `<h2>${data.suhu_tubuh}<sup>*</sup>C</h2>`;
        if(data.suhu_tubuh >= 36)
        {
            status.innerHTML = `<h2 style="color:green">Status Suhu Anda :  Normal</h2>`;   
        } else {
            status.innerHTML = `<h2 style="color:red">Status Suhu Anda :  Tinggi</h2>`;
        }
    }
}
export function showKelembabanRuang(ruangan) {
    var size = ruangan.length;
    if(size > 0)
    {
        let data = ruangan.slice(-1)[0];
        suhuruang.innerHTML = `<h2>${data.suhu}<sup>*</sup>C</h2>`;
        kelembaban.innerHTML = `<h2>${data.kelembaban}<sup>*</sup>C</h2>`
    }
}
