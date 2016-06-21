'use strict';

var ctx = document.getElementById('light-chart');
var chartType = 'horizontalBar';
var chartLabels = ['Side 1', 'Side 2', 'Side 3', 'Side 4'];
var chartData = [12, 19, 3, 5];
var chartDataSet = {
    labels: chartLabels,
    datasets: [{
      data: chartData,
      backgroundColor: [
        'rgba(54, 162, 235, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(54, 162, 235, 0.5)'
      ],
      borderColor: [
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
    xAxes: [{
      ticks: {
        beginAtZero: true,
      }
    }],
    yAxes: [{
      categoryPercentage: 0.35,
      barPercentage: 1
    }]
  }
};

var lightChart = new Chart(ctx, {
    type: chartType,
    data: chartDataSet,
    options: chartOptions
});
