'use strict';

var ctx = document.getElementById('temperature-chart');
var lightChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Batt', 'Cockpit', 'Side 1', 'Side 2', 'Side 3', 'Side 4'],
        datasets: [{
            data: [12, -37, -55, -60, 5, 28],
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
