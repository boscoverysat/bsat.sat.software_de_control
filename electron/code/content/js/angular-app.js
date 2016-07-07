angular
  .module('telemetry', [
    'CubeModule',
    'LogsModule'
  ])
  // .run(appRun)
  // .config(appConfig)
  ;

// function appRun() {
//
// }

// function appConfig ($stateProvider, $urlRouterProvider) {
//   $stateProvider

    // .state('tabs-match.info', {
    //   url: '/info',
    //   params : {},
    //   views: {
    //     'logs-view': {
    //       templateUrl: 'components/logs/logs.html',
    //       controller: 'LogsController',
    //       controllerAs: 'vm'
    //     }
    //   }
    // })

    // Login Screen
    // .state('login-screen', {
    //   url: '/login-screen',
    //   templateUrl: 'components/login_screen/login_screen.html',
    //   controller: 'LoginScreenController',
    //   controllerAs: 'vm'
    // })
    // .state('tabs-match.info', {
    //   url: '/info',
    //   params : {
    //     matchId: null,
    //     competitionId: null
    //   },
    //   views: {
    //     'tab-match-info': {
    //       templateUrl: 'components/match_info_screen/match_info_screen.html',
    //       controller: 'MatchInfoScreenController',
    //       controllerAs: 'vm'
    //     }
    //   }
    // })
    ;

  // $urlRouterProvider.otherwise('/login-screen');
  // $urlRouterProvider.otherwise('/tabs-match/info');

// }
