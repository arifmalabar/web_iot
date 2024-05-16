const typesort = document.querySelector('#type');
const kriteria = document.querySelector('#kriteria');
const waktu = document.querySelector('#waktu');
const btnshort = document.querySelector('.doshort');
const doShort = (e) => {
    btnshort.addEventListener('click', function (params) {
        var data = {"type" : typesort.value, "kriteria" : kriteria.value, "waktu" : waktu.value};
        console.log(data["type"]);
    })
}

export {doShort};