angular.module('app').controller('PostsCtrl', ['$scope', 'PostsSvc',
    function ($scope, PostsSvc) {
        PostsSvc.fetch().success(function (posts) {
            $scope.posts = posts;
        });

        $scope.addPost = function () {
            if ($scope.postBody) {
                PostsSvc.create({
                    body: $scope.postBody
                }).success(function () {
                    $scope.postBody = null;
                });
            }
        };

        $scope.$on('ws:new_post', function (_, post) {
            $scope.$apply(function () {
                $scope.posts.unshift(post);
            });
        });
    }]);