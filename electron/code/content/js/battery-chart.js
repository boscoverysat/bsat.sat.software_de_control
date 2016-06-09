'use strict';

var ctx = document.getElementById('battery-chart');
var lightChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Batt 1', 'Batt 2'],
        datasets: [{
            data: [3.7, 3.9],
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
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }]
      }
    }
});
