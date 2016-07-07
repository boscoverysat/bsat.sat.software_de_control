'use strict';

angular
  .module('CubeModule', [])
  .service('CubeService', CubeService)
  .controller('CubeController', CubeController)
  .directive('cubeSection', CubeSection)
  ;

function CubeService() {}

function CubeController() {
  var self = this;

  self.xSatPosition = 0;
  self.ySatPosition = 0;
  self.zSatPosition = 0;
  self.transform = 'rotateX(' + self.xSatPosition + 'deg) rotateY(' + self.ySatPosition + 'deg) rotateZ(' + self.zSatPosition + 'deg)';

  self.setXScreenPosition = function(newPosition) {
    self.xSatPosition = newPosition;
  }

  self.setYScreenPosition = function(newPosition) {
    self.ySatPosition = newPosition;
  }

  self.setZScreenPosition = function(newPosition) {
    self.zSatPosition = newPosition;
  }

  self.updatePosition = function() {
    self.transform = 'rotateX(' + self.xSatPosition + 'deg) rotateY(' + self.ySatPosition + 'deg) rotateZ(' + self.zSatPosition + 'deg)';
    console.log('New transform: ' + self.transform);
  }

  // TESTING CODE

  self.increaseXScreenPosition = function() {
    console.log('Increasing X');
    self.xSatPosition++;
    self.updatePosition();
  }

  self.decreaseXScreenPosition = function() {
    console.log('Decreasing X');
    self.xSatPosition--;
    self.updatePosition();
  }

  self.increaseYScreenPosition = function() {
    self.zSatPosition++;
    self.updatePosition();
  }

  self.decreaseYScreenPosition = function() {
    self.zSatPosition--;
    self.updatePosition();
  }

  self.increaseZScreenPosition = function() {
    self.ySatPosition++;
    self.updatePosition();
  }

  self.decreaseZScreenPosition = function() {
    self.ySatPosition--;
    self.updatePosition();
  }

}

function CubeSection() {
  return {
    restrict: 'E',
    scope: {},
    controller: 'CubeController',
    controllerAs: 'vm',
    templateUrl: 'components/cube/cube.html'
  }
}
