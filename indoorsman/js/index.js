(function () {
    var app = angular.module("Indoorsman", ['ui.router']);
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/game');
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'indoorsman/home/home.html',
            //这里的控制器,会被路由到页面中.
            controller:'homeCtrl'
        }).state("game", {
            url: "/game",
            templateUrl: "indoorsman/game/game.html",
            controller:'gameCtrl'
        }).state("movie", {
            url: "/movie",
            templateUrl: "indoorsman/movie/movie.html",
            controller:"movieCtrl"
        }).state("animation", {
            url: "/animation",
            templateUrl: "indoorsman/animation/animation.html",
            controller:'animationCtrl'
        }).state("amusement", {
            url: "/amusement",
            templateUrl: "indoorsman/amusement/amusement.html"
        }).state("culture", {
            url: "/culture",
            templateUrl: "indoorsman/culture/culture.html"
        }).state("message", {
            url: "/message",
            templateUrl: "indoorsman/message/message.html"
        })
    });
    //导点的点击事件
    app.controller('index', function ($scope) {
        $('#navList li').bind('click', function () {
            $('#navList li').removeClass('label-default');
            $(this).addClass('label-default');
            $('#navList li a').css("color", "#ccc");
            $(this).find('a').css({'color': "red"});
        });
        $('#navList li a:eq(1)').css({'color':'red'})

    });

    app.controller('homeCtrl',function ($scope) {
        $('.carousel').carousel({interval:3000});
    });

    app.controller('gameCtrl',function ($scope) {
        $('.carousel').carousel({interval:2000});

    });
    app.controller('animationCtrl',function ($scope) {
        $('.carousel').carousel({interval:2000});

    });
    app.controller("movieCtrl",function ($scope) {

        $('#myTab a').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
        })

        $('.carousel').carousel({interval:3000});
    })

})();























