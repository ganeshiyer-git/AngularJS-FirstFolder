var app = angular.module('myapp',[]);
app.controller('todoCtrl',function($scope){
    $scope.todos = [
        {'title':'Do assignment', 'done' : false}
    ];
 
    $scope.addtodo = function (){
        $scope.todos.push({'title':$scope.newtodo,'done':false})
        $scope.newtodo=''
    };
    $scope.completed = function(){
        $scope.todos=$scope.todos.filter(function(task){
            return !task.done
        })
    };
});