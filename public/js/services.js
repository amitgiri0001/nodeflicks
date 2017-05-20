(function({factory, service}){

  resourceFactory.$inject = ['$resource'];
  function resourceFactory($resource) {
    // returns flickrFeeds resource factory to do crud on api
    return { flickrFeeds: $resource(`/feeds`) };
  }

  function imagesSrv() {
    // declared service instance for image gallery 
    this.images = [];
  }
  service('imagesSrv', imagesSrv);
  factory('resourceFactory', resourceFactory);
})(angular.module(moduleName));
