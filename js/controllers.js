contactApp.controller('contactCtrl',function($scope,$http){$scope.loading=false;$scope.sendEmail=function(name,sender,subj,content){$scope.loading=true;$scope.statusPos=null;$scope.statusNeg=null;$http({method:'POST',url:'https://formspree.io/emmakoko1996@gmail.com',data:{email:sender,name:name,subject:subj,message:content},headers:{'Content-Type':"application/json"}}).then(function successCallback(response){$scope.statusPos="Message Sent";$scope.name="";$scope.sender="";$scope.subj="";$scope.content="";$scope.loading=false;angular.element(document.querySelectorAll('.prefix')).removeClass('active');angular.element(document.querySelectorAll('.lbl')).removeClass('active');},function errorCallback(response){$scope.statusNeg="Message not sent, try again.";$scope.loading=false;});}});