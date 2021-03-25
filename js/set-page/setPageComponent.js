function SetPageController($scope, $state, $stateParams, getCardSetList) {
    var vm = this;

    console.log($scope);
    // console.log($state);
    // console.log($stateParams);
    // console.log('set: ', vm.set);



    $scope.POKEMON_TYPES = {
        "data": [
            "Colorless",
            "Darkness",
            "Dragon",
            "Fairy",
            "Fighting",
            "Fire",
            "Grass",
            "Lightning",
            "Metal",
            "Psychic",
            "Water"
        ]
    };

    $scope.POKEMON_SUBTYPES = {
        "data": [
            "BREAK",
            "Baby",
            "Basic",
            "EX",
            "GX",
            "Goldenrod Game Corner",
            "Item",
            "LEGEND",
            "Level-Up",
            "MEGA",
            "Pokémon Tool",
            "Pokémon Tool F",
            "Restored",
            "Rocket's Secret Machine",
            "Special",
            "Stadium",
            "Stage 1",
            "Stage 2",
            "Supporter",
            "TAG TEAM",
            "Technical Machine",
            "V",
            "VMAX"
        ]
    };

    $scope.setDetails = $stateParams.myParam;

    getCardSetList.getPosts($stateParams.setId).then(function (res) {
        $scope.cards = res.data.data;
        // console.log($scope.cards);
    })

    console.log('global types: ', $scope.POKEMON_TYPES);
}

app.component('setPage', {
    templateUrl: 'js/set-page/set-page.html',
    controller: SetPageController,
    // controllerAs: 'vm',
    // bindings: {
    //     set: '<',
    // }
})