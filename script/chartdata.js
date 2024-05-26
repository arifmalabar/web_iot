import {ambil_chartdata}  from "./fetch/endpoint.js";
var jam = [];
var suhu_tubuh = [];
var suhu_ruangan = [];
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

await fetch(ambil_chartdata, requestOptions)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data['jam'].length; i++) {
      jam[i] = data['jam'][i];
    }
    for (let i = 0; i < data['suhu_ruang'].length; i++) {
      suhu_ruangan[i] = data['suhu_ruang'][i];
    }
    for (let i = 0; i < data['suhu_tubuh'].length; i++) {
      suhu_tubuh[i] = data['suhu_tubuh'][i];
    }
})
.catch((error) => console.error(error));
console.log(jam);
var areaChartData = {
  labels  : jam,
  datasets: [
    {
      label               : 'Suhu Ruangan',
      fillColor           : 'rgba(210, 214, 222, 1)',
      strokeColor         : 'rgba(210, 214, 222, 1)',
      pointColor          : 'rgba(210, 214, 222, 1)',
      pointStrokeColor    : '#c1c7d1',
      pointHighlightFill  : '#fff',
      pointHighlightStroke: 'rgba(220,220,220,1)',
      data                : suhu_ruangan
    },
    {
      label               : 'Suhu Tubuh',
      fillColor           : 'rgba(60,141,188,0.9)',
      strokeColor         : 'rgba(60,141,188,0.8)',
      pointColor          : '#3b8bba',
      pointStrokeColor    : 'rgba(60,141,188,1)',
      pointHighlightFill  : '#fff',
      pointHighlightStroke: 'rgba(60,141,188,1)',
      data                : suhu_tubuh
    }
  ]
}
//-------------
  //- BAR CHART -
  //-------------
function chartOption(params) {
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
chartOption(12);


export default chartOption;