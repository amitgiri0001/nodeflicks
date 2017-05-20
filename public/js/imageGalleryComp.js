(function({component}){

  imageGalleryCtrl.$inject = ['imagesSrv'];

  // Image gallery controller
  function imageGalleryCtrl(imagesSrv) {
    // Direct reference service variable assignment to controller instance variable.
    this.images = imagesSrv.images;
  }

  // Grid view image gallery component
  component('imageGallery', {
    controller: imageGalleryCtrl,
    templateUrl: `templates/imageGallery.html`,
    controllerAs: `$ig`
  });
})(angular.module(moduleName));
