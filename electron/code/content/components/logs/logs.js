'use strict';

angular
  .module('LogsModule', [])
  .service('LogsService', LogsService)
  .controller('LogsController', LogsController)
  .directive('logsSection', LogsSection)
  ;

function LogsService() {}

function LogsController() {
  var self = this;

  self.logsMessagesCollection = [];
  self.logsCorrectCounter = 0;
  self.logsWrongCounter = 0;
  self.logsChart;
  self.ctx = document.getElementById('logs-chart').getContext('2d');
  self.chartType = 'doughnut';
  self.chartLabels = ['Correct', 'Wrong'];
  self.chartData = [self.logsCorrectCounter, self.logsWrongCounter];
  self.chartDataSet = {
      labels: self.chartLabels,
      datasets: [{
        data: self.chartData,
        backgroundColor: [
          'rgba(0, 255, 0, 0.5)',
          'rgba(255, 0, 0, 0.5)'
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)'
        ],
        borderWidth: 3
      }]
  };
  self.chartOptions = {
    cutoutPercentage: 75,
    animationSteps: 40,
    legend: {
      display: true,
      position: 'bottom'
    }
  };

  self.createChart = function() {
    // NOTE: Context configutarion in order to full width chart.
    self.ctx.canvas.width = 300;
    self.ctx.canvas.height = 300;
    self.logsChart = new Chart(self.ctx, {
      type: self.chartType,
      data: self.chartDataSet,
      options: self.chartOptions
    });
  };

  self.updateLogsChart = function() {
    self.logsChart.segments[0].value = self.logsCorrectCounter;
    self.logsChart.segments[1].value = self.logsWrongCounter;
    self.logsChart.update();
  };

  self.addCorrectMessage = function(message) {
    self.logsMessagesCollection.unshift(message);
    self.logsCorrectCounter++;
    self.logsWrongCounter = 0;
    self.updateLogsChart();
  };

  self.addWrongMessage = function() {
    self.logsWrongCounter++;
    self.updateLogsChart();
  };

  self.createChart();
}

function LogsSection() {
  return {
    restrict: 'E',
    scope: {},
    controller: 'LogsController',
    controllerAs: 'vm',
    templateUrl: 'components/logs/logs.html'
  }
}
