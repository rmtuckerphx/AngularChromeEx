myApp.controller("PageController", function ($scope) {
    $scope.message = "Hello from AngularJS";

    chrome.tabs.query({'active': true},
    function (tabs) {
        if (tabs.length > 0)
        {
            $scope.title = tabs[0].title;
            $scope.url = tabs[0].url;

            chrome.tabs.sendMessage(tabs[0].id, { 'action': 'PageInfo' }, function (response) {
                $scope.pageInfos = response;
                $scope.$apply();
            });
        }
    });
});


