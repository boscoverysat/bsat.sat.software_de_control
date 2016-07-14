'use strict';

angular
  .module('LightChartModule', [])
  .service('LightChartService', LightChartService)
  .controller('LightChartController', LightChartController)
  .directive('lightChartSection', LightChartSection)
  ;

function LightChartService() {};

function LightChartController() {
  'use strict';

  var self = this;

  self.lightChart;
  self.ctx = document.getElementById('light-chart');
  self.chartType = 'horizontalBar';
  self.chartLabels = ['Side 1', 'Side 2', 'Side 3', 'Side 4'];
  self.chartData = [12, 19, 3, 5];
  self.chartDataSet = {
      labels: self.chartLabels,
      datasets: [{
        data: self.chartData,
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
  self.chartOptions = {
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

  self.createChart = function() {
    self.lightChart = new Chart(self.ctx, {
      type: self.chartType,
      data: self.chartDataSet,
      options: self.chartOptions
    });
  };

  self.updateChart = function(newValues) {
    if (angular.isDefined(newValues) && newValues.length > 0) {
      newValues
        .forEach(function(value, index) {
          self.lightChart.data.datasets[0].data[index] = value;
        });

      self.lightChart.update();
    }
  };

  self.createChart();

  // TESTING CODE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  self.mockData = function() {
    console.log('Running mockData');
    var newValuesArray = [];

    for (var i = 0; i < 4; i++) {
      newValuesArray.push(Math.random() * 10);
    }

    self.updateChart(newValuesArray);
  };
  // TESTING CODE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

};

function LightChartSection() {
  return {
    restrict: 'E',
    scope: {},
    controller: 'LightChartController',
    controllerAs: 'vm',
    templateUrl: 'content/components/light-chart/light-chart.html'
  };
};
