'use strict';

var ctx = document.getElementById('temperature-chart');
var chartType = 'horizontalBar';
var chartLabels = ['Batt', 'Cockpit', 'Side 1', 'Side 2', 'Side 3', 'Side 4'];
var chartData = [12, -37, -55, -60, 5, 28];
var chartDataSet = {
    labels: chartLabels,
    datasets: [{
      data: chartData,
      backgroundColor: [
        'rgba(54, 162, 235, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(54, 162, 235, 0.5)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    }]
};
var chartOptions = {
  legend: {
    display: false
  },
  scales: {
    yAxes: [{
      categoryPercentage: 0.55,
      barPercentage: 1,
      ticks: {
        beginAtZero:true
      }
    }]
  }
};

var temperatureChart = new Chart(ctx, {
    type: chartType,
    data: chartDataSet,
    options: chartOptions
});




// var ctx = document.getElementById('temperature-chart');
// var temperatureChart = new Chart(ctx, {
//     type: 'horizontalBar',
//     data: {
//         labels: ['Batt', 'Cockpit', 'Side 1', 'Side 2', 'Side 3', 'Side 4'],
//         datasets: [{
//             data: [12, -37, -55, -60, 5, 28],
//             backgroundColor: [
//               'rgba(54, 162, 235, 0.5)',
//               'rgba(54, 162, 235, 0.5)',
//               'rgba(54, 162, 235, 0.5)',
//               'rgba(54, 162, 235, 0.5)',
//               'rgba(54, 162, 235, 0.5)',
//               'rgba(54, 162, 235, 0.5)'
//             ],
//             borderColor: [
//               'rgba(54, 162, 235, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(54, 162, 235, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//       legend: {
//         display: false
//       },
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero:true
//           }
//         }]
//       }
//     }
// });
