// JavaScript Document
var app = angular.module('appSimon', ['ngMaterial', 'ngMessages'])

app.controller('MainCtrl', MainCtrl);

var randonNextStep = function () {
	'use strict';
    return Math.floor(Math.random() * (4 - 1 + 1)) + 1;
};
	
	

var game = function (){
	'use strict';
		// Public number
		// counter for the user step
		var stepCounter = 0;
		
		var gameScore = 0
		
		var gameSequence = [];
		
		var userSequence = [];
		
		var gameNextStep = function  (){
			
			gameSequence.push(randonNextStep());
									
		}; //end of gameNextStep
			
		var userStep = function(buttonIndex)	{
			
			
			
			}; //end of user step
			
		var gameStart = function (){
			
			
			};
	
};// end game
	
	


function MainCtrl($scope, $mdDialog, $mdMedia) {
	'use strict';
	function ini(){
		$scope.game = new game();		
		}
	
	
	
	
	ini();
	
	}