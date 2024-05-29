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

    await fetch(short_suhuruang, requestOptions)
    .then((response) => response.json())
    .then((result) => {
        showHasilShorting(result);
    })
    .catch((error) => console.error(error));
}
function showHasilShorting(params) {
    var waktu = [];
    var suhutubuh = [];
    var suhuruang = [];
    var kelembaban = [];
    var i = 0;
    params.forEach(element => {
        //waktu.push(element.waktu);
        waktu[i] = element.waktu;
        if(typesort.value == "ruangan"){
            suhuruang[i] = element.suhu;
            kelembaban[i] = element.kelembaban;
        } else {
            suhutubuh[i] = element.suhu_tubuh;
        }
        i++;
    });
    var areaChartData = {
        labels  : waktu,
        datasets: [
          {
            label               : 'Suhu Ruangan',
            fillColor           : 'rgba(210, 214, 222, 1)',
            strokeColor         : 'rgba(210, 214, 222, 1)',
            pointColor          : 'rgba(210, 214, 222, 1)',
            pointStrokeColor    : '#c1c7d1',
            pointHighlightFill  : '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data                : suhuruang
          },
          {
            label               : 'Suhu Tubuh',
            fillColor           : 'rgba(60,141,188,0.9)',
            strokeColor         : 'rgba(60,141,188,0.8)',
            pointColor          : '#3b8bba',
            pointStrokeColor    : 'rgba(60,141,188,1)',
            pointHighlightFill  : '#fff',
            pointHighlightStroke: 'rgba(60,141,188,1)',
            data                : suhutubuh
          }
        ]
      }
      //-------------
    //- BAR CHART -
    //-------------
    var barChartCanvas                   = $('#barChart').get(0).getContext('2d')
    var barChart                         = new Chart(barChartCanvas)
    var barChartData                     = areaChartData
    barChartData.datasets[1].fillColor   = '#00a65a'
    barChartData.datasets[1].strokeColor = '#00a65a'
    barChartData.datasets[1].pointColor  = '#00a65a'
    var barChartOptions                  = {
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero        : true,
        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines      : true,
        //String - Colour of the grid lines
        scaleGridLineColor      : 'rgba(0,0,0,.05)',
        //Number - Width of the grid lines
        scaleGridLineWidth      : 1,
        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines  : true,
        //Boolean - If there is a stroke on each bar
        barShowStroke           : true,
        //Number - Pixel width of the bar stroke
        barStrokeWidth          : 2,
        //Number - Spacing between each of the X value sets
        barValueSpacing         : 5,
        //Number - Spacing between data sets within X values
        barDatasetSpacing       : 1,
        //String - A legend template
        legendTemplate          : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
        //Boolean - whether to make the chart responsive
        responsive              : true,
        maintainAspectRatio     : true
    }
    
    barChartOptions.datasetFill = false
    barChart.Bar(barChartData, barChartOptions)
}

export {doShort};