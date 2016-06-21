'use strict';

var ctx = document.getElementById('battery-chart');
var chartType = 'horizontalBar';
var chartLabels = ['Batt 1', 'Batt 2'];
var chartData = [3.7, 3.9];
var chartDataSet = {
    labels: chartLabels,
    datasets: [{
      data: chartData,
      backgroundColor: [
        'rgba(54, 162, 235, 0.5)',
        'rgba(54, 162, 235, 0.5)'
      ],
      borderColor: [
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
    xAxes: [{
      ticks: {
        beginAtZero: true,
      }
    }],
    yAxes: [{
      categoryPercentage: 0.18,
      barPercentage: 1
    }]
  }
};

var batteryChart = new Chart(ctx, {
    type: chartType,
    data: chartDataSet,
    options: chartOptions
});
