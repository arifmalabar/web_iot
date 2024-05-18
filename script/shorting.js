import chartOption from "./chartdata.js";
import { short_suhuruang } from "./fetch/endpoint.js";
const typesort = document.querySelector('#type');
const kriteria = document.querySelector('#kriteria');
const waktu = document.querySelector('#waktu');
const btnshort = document.querySelector('.doshort');
const doShort = (e) => {
    btnshort.addEventListener('click', function (params) {
        var data = {"type" : typesort.value, "kriteria" : kriteria.value, "waktu" : waktu.value};
        console.log("Sedang mengambil data");
        fetchData(data);
    })
}
async function fetchData(params) {
    const formdata = new FormData();
    formdata.append("type", params["type"]);
    formdata.append("kriteria", params["kriteria"]);
    formdata.append("waktu", params["waktu"]);

    const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
    };

    await fetch("http://127.0.0.1/project_iot/api/api_shorting.php", requestOptions)
    .then((response) => response.json())
    .then((result) => {
        chartOption(result);
    })
    .catch((error) => console.error(error));
}

export {doShort};