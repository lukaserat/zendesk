'use strict'

## User must be able to create tasks
## User must be able to modify tasks, by marking it as done or not done
## User must be able to delete the tasks
#
#

###
   [a][b][c]
   [d][e][f]
   [g][h][i]
###

angular.module 'TicTacToe', []
       .controller 'TicTacToeCtrl', ['$scope', ($scope)->


          $scope.players = ['X', 'O']
          $scope.playersMove = {X:[], O:[]}
          $scope.winningCombinations = ['abc', 'def', 'ghi', 'adg', 'beh', 'cfi']
          $scope.winnerIs = null
          $scope.xWins = 0
          $scope.oWins = 0

          $scope.init = ()->
            $scope.player = $scope.players[Math.floor(Math.random() * $scope.players.length)];

          $scope.newGame = ()->
            $scope.init()
            $('.grid .cell').removeClass('btn-primary btn-success selected').addClass 'btn-default'
            $('.grid .cell .fa').removeClass('fa-times fa-circle-o').addClass 'fa-plus'
            $scope.playersMove = {X: [], O: []}
            $scope.winnerIs = null

          $scope.buttonClick = (block, $event)->

            $event.stopPropagation() if $event.stopPropagation
            $event.preventDefault() if $event.preventDefault

            $button = $($event.currentTarget)

            if not $button.hasClass 'selected'
              # Update button with the right content

              # ..button class
              playerClass = if $scope.player is 'X' then 'btn-primary' else 'btn-success'
              $button.addClass "#{playerClass} selected"

              # ..icon
              playerIconClass = if $scope.player is 'X' then 'fa-times' else 'fa-circle-o'
              $button.find('i').removeClass('fa-plus').addClass(playerIconClass)

              # Update player's move
              $scope.playersMove[$scope.player].push block

              # Then update players game

              _.each $scope.winningCombinations, (combination)->
                if $scope.winnerIs is null
                  $scope.streak = 0
                  _.each combination.split(''), (item)->
                    if _.contains($scope.playersMove[$scope.player], item) and $scope.winnerIs is null
                      $scope.streak++
                      if $scope.streak is 3
                        $scope.winnerIs = $scope.player
                        $scope.xWins++ if $scope.winnerIs is 'X'
                        $scope.oWins++ if $scope.winnerIs is 'O'

              # Change player
              $scope.player = if $scope.player is 'X' then 'O' else 'X'

       ]
