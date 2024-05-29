const lbsuhuruang = document.querySelector('#suhuruang');
const lbsuhutubuh = document.querySelector("#suhutubuh");
const lbkelembaban = document.querySelector("#kelembabanruang");
export function showRecapt(data) {
    let objruang = data.ruangan[0];
    let objtubuh = data.tubuh[0];
    lbsuhutubuh.innerHTML = `${Number(objtubuh.rata_suhu).toFixed(2)}<sup style="font-size: 20px">*</sup>`;
    lbsuhuruang.innerHTML = `${Number(objruang.suhu).toFixed(2)}<sup style="font-size: 20px">*</sup>`;
    lbkelembaban.innerHTML = `${Number(objruang.kelembaban).toFixed(2)}<sup style="font-size: 20px">*</sup>`
}