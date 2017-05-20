(function({component}){

  searchBoxCtrl.$inject = ['resourceFactory', 'imagesSrv'];

  function searchBoxCtrl(resourceFactory, imagesSrv) {
    let vm = this;

    // Init to be called on page load
    // loads images without tags
    vm.onInit = function () {
      getFlickrFeeds();
    }

    // Calls on tag search with tags from user
    // loads images with tags
    vm.search = function (tags) {
      getFlickrFeeds(tags);
    }

    function getFlickrFeeds(tags) {
      // clears service without loosing referance
      imagesSrv.images.splice(0, imagesSrv.images.length);
      // calls api to get data and place it inside service object
      resourceFactory.flickrFeeds.get({tags}).$promise.then(({items}) => { imagesSrv.images.push(...items);});
    }
  }

  // Searchbox component
  component('searchBox', {
    controller: searchBoxCtrl,
    templateUrl: `templates/searchBox.html`,
    controllerAs: `$sb`
  });
})(angular.module(moduleName));
