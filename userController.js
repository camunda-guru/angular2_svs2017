app.controller('usercontroller',['$scope','userService',
function($scope,userService)
{
    userService. usersData().then(function(response)
    {
        console.log(response);
        $scope.users=response;
    })

}])