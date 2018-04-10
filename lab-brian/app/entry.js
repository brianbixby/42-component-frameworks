'use strict';

require('./style/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', CowsayController]);
// dependency injextion, array of dependencies fro controller,
//  controller has its own scope and controllers scope are independent of each other

// dependencies need to be passed as arguments in order
function CowsayController($log) {
  $log.debug('CowsayController');

  this.title = 'Welcome to cow land';
  this.history = [];

  cowsay.list((err, cowfiles) => {
    this.cowfiles = cowfiles;
    this.current = this.cowfiles[0];
  });
  // 2 additional properties as part of controller

  this.update = function(input) {
    $log.debug('cowsayCtrl.update()');
    return cowsay.say({ text: input || 'moo', f: this.current });
  };

  this.speak = function(input) {
    $log.debug('cowsayCtrl.speak()');
    this.spoken = this.update(input);
    this.history.push(this.spoken);
  };

  this.undo = function() {
    $log.debug('cowsayCtrl.undo()');
    this.history.pop();
    this.spoken = this.history[this.history.length - 1] || '';
  }

}

cowsayApp.controller('NavController', ['$log', NavController ]);

function NavController($log) {
  $log.debug('NavController');

  this.routes = [
    {
    name: 'home',
    url: '/home',
    },
    {
      name: 'about',
      url: '/about-us',
    },
  ]
};