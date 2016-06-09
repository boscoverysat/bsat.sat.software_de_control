'use strict';

var ctx = document.getElementById('light-chart');
var lightChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Side 1', 'Side 2', 'Side 3', 'Side 4'],
        datasets: [{
            data: [12, 19, 3, 5],
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
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
});
