(function() {
  'use strict';

  /*
     [a][b][c]
     [d][e][f]
     [g][h][i]
   */
  angular.module('TicTacToe', []).controller('TicTacToeCtrl', [
    '$scope', function($scope) {
      $scope.players = ['X', 'O'];
      $scope.playersMove = {
        X: [],
        O: []
      };
      $scope.winningCombinations = ['abc', 'def', 'ghi', 'adg', 'beh', 'cfi'];
      $scope.winnerIs = null;
      $scope.xWins = 0;
      $scope.oWins = 0;
      $scope.init = function() {
        return $scope.player = $scope.players[Math.floor(Math.random() * $scope.players.length)];
      };
      $scope.newGame = function() {
        $scope.init();
        $('.grid .cell').removeClass('btn-primary btn-success selected').addClass('btn-default');
        $('.grid .cell .fa').removeClass('fa-times fa-circle-o').addClass('fa-plus');
        $scope.playersMove = {
          X: [],
          O: []
        };
        return $scope.winnerIs = null;
      };
      return $scope.buttonClick = function(block, $event) {
        var $button, playerClass, playerIconClass;
        if ($event.stopPropagation) {
          $event.stopPropagation();
        }
        if ($event.preventDefault) {
          $event.preventDefault();
        }
        $button = $($event.currentTarget);
        if (!$button.hasClass('selected')) {
          playerClass = $scope.player === 'X' ? 'btn-primary' : 'btn-success';
          $button.addClass(playerClass + " selected");
          playerIconClass = $scope.player === 'X' ? 'fa-times' : 'fa-circle-o';
          $button.find('i').removeClass('fa-plus').addClass(playerIconClass);
          $scope.playersMove[$scope.player].push(block);
          _.each($scope.winningCombinations, function(combination) {
            if ($scope.winnerIs === null) {
              $scope.streak = 0;
              return _.each(combination.split(''), function(item) {
                if (_.contains($scope.playersMove[$scope.player], item) && $scope.winnerIs === null) {
                  $scope.streak++;
                  if ($scope.streak === 3) {
                    $scope.winnerIs = $scope.player;
                    if ($scope.winnerIs === 'X') {
                      $scope.xWins++;
                    }
                    if ($scope.winnerIs === 'O') {
                      return $scope.oWins++;
                    }
                  }
                }
              });
            }
          });
          return $scope.player = $scope.player === 'X' ? 'O' : 'X';
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=app.js.map
