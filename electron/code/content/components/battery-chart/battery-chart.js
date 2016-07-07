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

  self.batteryChart = new Chart(self.ctx, {
      type: self.chartType,
      data: self.chartDataSet,
      options: self.chartOptions
  });


}

function BatteryChartSection() {
  return {
    restrict: 'E',
    scope: {},
    controller: 'BatteryChartController',
    controllerAs: 'vm',
    templateUrl: 'components/battery-chart/battery-chart.html'
  }
}
