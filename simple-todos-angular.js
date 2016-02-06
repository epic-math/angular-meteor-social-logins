Items = new Mongo.Collection('items');

if (Meteor.isClient) {
 
  // This code only runs on the client
  angular.module('simple-todos',['angular-meteor', 'accounts.ui']);
 
  angular.module('simple-todos').controller('TodosListCtrl', ['$scope', '$meteor',
    function ($scope, $meteor) {
 
      $scope.items = $meteor.collection( function() {
        return Items.find({}, { sort: { createdAt: -1 } })
      });

      $scope.addItem = function (newItem) {
        $scope.items.push( {
          text: newItem,
          createdAt: new Date() }
        );
      };

    }]);
}