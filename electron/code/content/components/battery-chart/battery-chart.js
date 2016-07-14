'use strict';

angular
  .module('BatteryChartModule', [])
  .service('BatteryChartService', BatteryChartService)
  .controller('BatteryChartController', BatteryChartController)
  .directive('batteryChartSection', BatteryChartSection)
  ;

function BatteryChartService() {}

function BatteryChartController() {
  var self = this;

  self.ctx = document.getElementById('battery-chart');
  self.chartType = 'horizontalBar';
  self.chartLabels = ['Batt 1', 'Batt 2'];
  self.chartData = [3.7, 3.9];
  self.chartDataSet = {
      labels: self.chartLabels,
      datasets: [{
        data: self.chartData,
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
        categoryPercentage: 0.18,
        barPercentage: 1
      }]
    }
  };

  self.createChart = function() {
    self.batteryChart = new Chart(self.ctx, {
      type: self.chartType,
      data: self.chartDataSet,
      options: self.chartOptions
    });
  };

  self.updateChart = function(newValues) {
    if (angular.isDefined(newValues) && newValues.length > 0) {
      newValues
        .forEach(function(value, index) {
          self.batteryChart.data.datasets[0].data[index] = value;
        });

      self.batteryChart.update();
    }
  };

  self.createChart();

  // TESTING CODE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  self.mockData = function() {
    console.log('Running mockData');
    var newValuesArray = [];

    for (var i = 0; i < 2; i++) {
      newValuesArray.push(Math.random() * 10);
    }

    self.updateChart(newValuesArray);
  };
  // TESTING CODE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


}

function BatteryChartSection() {
  return {
    restrict: 'E',
    scope: {},
    controller: 'BatteryChartController',
    controllerAs: 'vm',
    templateUrl: 'content/components/battery-chart/battery-chart.html'
  }
}
