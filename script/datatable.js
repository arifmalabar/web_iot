const suhutubuh_container = document.querySelector('.suhutubuh_container');
const tabel_suhutubuh = document.querySelector('.tb_suhutubuh');
const tabel_suhuruang = document.querySelector('.tb_suhuruang');
export function showDataSuhuTubuh(params) {
  var tabel = '<thead><tr><th>No</th><th>Suhu Tubuh</th><th>Status </th><th>Waktu</th>'+
  '</tr></thead><tbody>';
  var no = 1;
  params.forEach(element => {
    var tr = '<tr><td>'+no+'</td><td>'+element['suhu_tubuh']+' C</td>';
    var status = '';
    if(element['suhu_tubuh'] >= 37)
    {
      status = '<td><small class="label bg-red">Tinggi</small></td>';
    } else if(element['suhu_tubuh'] <= 37){
      status = '<td><small class="label bg-green">Normal</small></td>'
    } else {
      status = '<td><small class="label bg-blue">St</small></td>'
    }
    tr = tr + status + '' + '<td>'+element['waktu']+'</td></tr>';
    tabel = tabel + tr;
    no++;
  });
  tabel = tabel + '</tbody>';
  tabel_suhutubuh.innerHTML = tabel;
  
}

export function showDataSuhuRuang(params) {
  var tabel = '<thead><tr> <th>No</th><th>Suhu Ruang</th>'+
    '<th>Kelembaban Ruang</th><th>Waktu</th></tr></thead><tbody>';
  var no = 1;
  params.forEach(e => {
    var tr = '<tr><td>'+no+'</td><td>'+e["suhu"]+'</td>'+
    '<td>'+e["kelembaban"]+'</td>'+
    '<td>'+e["waktu"]+'</td></tr>'
    tabel = tabel + tr;
    no++;
  });
  tabel = tabel + '</tbody></table>';
  tabel_suhuruang.innerHTML = tabel;
}