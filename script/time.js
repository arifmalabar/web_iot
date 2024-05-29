var span = document.querySelector('#time');
function showTime() {
    var days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    var month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Jul', 'Ags', 'Sept', 'Okt', 'Nop', 'Des']
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth();
    var dd = d.getDate();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    span.textContent = `${days[d.getDay()]}, ${dd} ${month[d.getUTCMonth()]} ${y} ${("0" + h).substr(-2)}: ${("0" + m).substr(-2)} : ${("0" + s).substr(-2)}`
}

setInterval(showTime, 1000);
export default showTime;