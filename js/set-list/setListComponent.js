function SetListController($scope, $state, getCardSet) {
    var vm = this;
    var sets2;

    getCardSet.getPosts().then(function (res) {
        // console.log(res.data);
        vm.sets = res.data.data;
        sets2 = vm.sets;
    });

    $scope.viewSet = function (data) {
        // console.log(data);
        $state.go('set.details', {
            setId: data.id,
            myParam: data
        })
    }
}

app.component('setList', {
    templateUrl: 'js/set-list/set-list.html',
    controller: SetListController,
    controllerAs: 'vm'
})