userApp.service('userService',['$http',function($http)
{
     userList=function()
     {
          return $http({
            method: 'GET',
            dataType: "json",
            headers: {
                'Content-Type': 'application/json'
            },
            url: 'http://jsonplaceholder.typicode.com/users'


          }).then(function(response)
          {
              return response;
          })
     };
//closure returns singleton object
return{
     usersData:userList
}


}])