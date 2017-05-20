describe('Image component', function() {
  let $controller, $componentController, imagesSrv;

  beforeEach(angular.mock.module('nodeflicksApp'));
  beforeEach(inject(function(_$componentController_){
    $componentController = _$componentController_;
  }));

  describe('Controller', function() {
    beforeEach(inject(function(_imagesSrv_){
      $controller = $componentController('imageGallery', {}, {});
      imagesSrv =  _imagesSrv_;
      imagesSrv.images.splice(0, imagesSrv.images.length);
    }));

    it('should have same value as service', function() {
      expect(imagesSrv.images).toEqual($controller.images);
    });

    it('should change value in component on service changes', function() {
      imagesSrv.images.push({mock: []});
      expect(imagesSrv.images).toEqual($controller.images);
    });
  });

});
