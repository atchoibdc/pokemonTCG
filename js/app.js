var app = angular.module('pokemonTCGFinder', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: '<set-list></set-list>'
        })
        .state('set', {
            url: '/set',
            template: '<ui-view></ui-view>'

        })
        .state('set.details', {
            url: '/details/:setId',
            template: "<set-page></set-page>",
            params: { myParam: null }
        })
        .state('card', {
            url: '/card',
            template: '<card-page></card-page>'
        })
});

app.controller('mainController', function ($scope, getCardSet) {
    var vm = this;

    getCardSet.getPosts().then(function (res) {
        // console.log(res.data.data);
        $scope.sets = res.data.data;
    });

});

app.service('getCardSet', function ($http) {
    this.getPosts = function () {
        return $http.get("https://api.pokemontcg.io/v2/sets");
    }
});

app.service('getCardSetList', function ($http) {
    this.getPosts = function (set) {
        return $http.get("https://api.pokemontcg.io/v2/cards?orderBy=number&q=set.id:" + set);
    }
});

app.filter('reverse', function () {
    return function (items) {
        return items.reverse();
    };
});
