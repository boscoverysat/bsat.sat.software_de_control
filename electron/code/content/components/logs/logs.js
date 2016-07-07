angular
  .module('LogsModule', [])
  .service('LogsService', LogsService)
  .controller('LogsController', LogsController)
  .directive('logsSection', LogsSection)
  ;

function LogsService() {}

function LogsController($scope, $timeout) {
  var self = this;
  self.scope = $scope;
  self.timeout = $timeout;

  self.xPosition = 10;
  self.yPosition = 20;
  self.zPosition = 30;

  this.timeout(function() {
    console.log('Timeout working');
    self.xPosition += 1;
    self.yPosition += 0.5;
    self.zPosition += 0.3;
  }, 5000);

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
