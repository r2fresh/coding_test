var myApp = angular.module('test',[]);
myApp.controller('testCtrl', testCtrl);
function testCtrl($scope) {


  $scope.submit = function() {

      //if($scope.kt_name.length > 3 && $scope.kt_name.length < 10) {
        //$scope.kt_name_value = $scope.kt_name;
      //} else {
    //      alert ('글자수가 맞지 않습니다.');
      //}

      //if($scope.kt_nam.length != 0) {
      //  $scope.kt_name_value = $scope.kt_name;
      //} else {
      //    alert ('문자열이 비었습니다.');
      //}

      $scope.kt_name_value = $scope.kt_name;
      $scope.kt_name_value = $scope.kt_name;
      $scope.kt_id_value = $scope.kt_id;
      $scope.kt_pwd_value = $scope.kt_pwd;
      if($scope.kt_pwd_again == $scope.kt_pwd) {
        $scope.kt_pwd_again_value = $scope.kt_pwd_again;
      } else {
        alert ('비밀번호가 같지 않습니다.');
      }

$scope.kt_pwd_again_value = $scope.kt_pwd_again;
      //if($scope.kt_pwd_again.lengh = 0) {
      //  $scope.kt_pwd_again_value = $scope.kt_pwd_again;
      //} else {
      //  alert ('비밀번호가 입력되지 않았습니다.');
      //}


      $scope.kt_email_value = $scope.kt_email;
      $scope.phone_first_value = $scope.kt_phone_first;
      $scope.phone_middle_value = $scope.kt_phone_second;
      $scope.phone_last_value = $scope.kt_phone_third;
      $scope.kt_birth_year_value = $scope.kt_birth_year;
      $scope.kt_birth_month_value = $scope.kt_birth_month;
      $scope.kt_birth_day_value = $scope.kt_birth_day;
      if($scope.kt_sex_femail) {
        $scope.kt_sex_value = "femail"
      } else {
        $scope.kt_sex_value = "mail"
      }
  };

  $scope.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}];

  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
}
