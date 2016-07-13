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
  self.logsCorrectCounter = 1;
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
    // NOTE: Canvas element context configutarion in order to get a full width chart.
    self.ctx.canvas.width = 300;
    self.ctx.canvas.height = 300;
    self.logsChart = new Chart(self.ctx, {
      type: self.chartType,
      data: self.chartDataSet,
      options: self.chartOptions
    });
  };

  self.updateLogsChart = function() {
    console.log(self.logsChart.data);

    self.logsChart.data.datasets[0].data[0] = self.logsCorrectCounter;
    self.logsChart.data.datasets[0].data[1] = self.logsWrongCounter;
    self.logsChart.update();
  };

  self.addCorrectMessage = function(message) {
    self.logsMessagesCollection.unshift(message);
    self.logsCorrectCounter++;
    self.updateLogsChart();
  };

  self.addWrongMessage = function() {
    self.logsWrongCounter++;
    self.updateLogsChart();
  };

  // TESTING CODE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  self.messageCounter = 0;

  self.mockData = function() {
    console.log('Running mockData');
    self.messageCounter++;

    var testMessage = {
      'order': self.messageCounter,
      'timestamp': Date.now(),
      'pitch': 10,
      'row': 20,
      'yaw': 30,
      'temp': 25,
      'light': 30
    };

    if (self.messageCounter % 3 !== 0) {
      self.addCorrectMessage(testMessage);
    } else {
      self.addWrongMessage();
    }
  };
  // TESTING CODE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

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
