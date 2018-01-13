ons.bootstrap().controller("NavigationBar", function($scope){
    $scope.openMenu = function(){
        const menu = document.getElementById("navigationbar-menu");
        menu.open();
    }
        
    $scope.loadPage = function(page){
        const menu = document.getElementById("navigationbar-menu");
        menu.close();
        content.load(page, {animation: 'fade'});
    }
});