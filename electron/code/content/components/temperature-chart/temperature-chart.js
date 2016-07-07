'use strict';

angular
  .module('TemperatureChartModule', [])
  .service('TemperatureChartService', TemperatureChartService)
  .controller('TemperatureChartController', TemperatureChartController)
  .directive('temperatureChartSection', TemperatureChartSection)
  ;

function TemperatureChartService() {}

function TemperatureChartController() {
  var self = this;

  self.ctx = document.getElementById('temperature-chart');
  self.chartType = 'horizontalBar';
  self.chartLabels = ['Batt', 'Cockpit', 'Side 1', 'Side 2', 'Side 3', 'Side 4'];
  self.chartData = [12, -37, -55, -60, 5, 28];
  self.chartDataSet = {
      labels: self.chartLabels,
      datasets: [{
        data: self.chartData,
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
  self.chartOptions = {
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

  self.createChart = function() {
    self.temperatureChart = new Chart(self.ctx, {
      type: self.chartType,
      data: self.chartDataSet,
      options: self.chartOptions
    });
  };

  self.updateChart = function(newValues) {
    if (angular.isDefined(newValues) && newValues.length > 0) {
      newValues
        .forEach(function(value, index) {
          self.temperatureChart.data.datasets[0].data[index] = value;
        });

      self.temperatureChart.update();
    }
  };

  self.createChart();

  // TESTING CODE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  self.mockData = function() {
    console.log('Running mockData');
    var newValuesArray = [];

    for (var i = 0; i < 6; i++) {
      newValuesArray.push(Math.random() * 10);
    }

    self.updateChart(newValuesArray);
  };
  // TESTING CODE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
}

function TemperatureChartSection() {
  return {
    restrict: 'E',
    scope: {},
    controller: 'TemperatureChartController',
    controllerAs: 'vm',
    templateUrl: 'components/temperature-chart/temperature-chart.html'
  }
}
