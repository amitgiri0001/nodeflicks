describe('Search component', function() {
  let $controller, $componentController, imagesSrv, $httpBackend;
  const api_end_point = /\/feeds\??.*/;

  beforeEach(angular.mock.module('nodeflicksApp'));
  beforeEach(inject(function(_$componentController_){
    $componentController = _$componentController_;
  }));

  describe('Controller', function() {
    const api_response = {
      items: [{ title: 'an image'}]
    };

    beforeEach(inject(function(_imagesSrv_){
      $controller = $componentController('searchBox', {}, {});
      imagesSrv =  _imagesSrv_;
    }));

    beforeEach(inject((_$httpBackend_)=>{
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET(api_end_point)
      .respond(api_response);
    }));

    it('should call onInit to get images with no tags from api', function() {
      $controller.onInit();
      $httpBackend.flush();
      expect(imagesSrv.images).toEqual(api_response.items);
    });

    it('should call search to get images with tags from api', function() {
      $controller.search('cats');
      $httpBackend.flush();
      expect(imagesSrv.images).toEqual(api_response.items);
    });

    it('should clear service variable before upating it with new data from api', function() {
      imagesSrv.images.push({shoouldGetRenoved: {}});
      $controller.search();
      $httpBackend.flush();
      expect(imagesSrv.images[0].shoouldGetRenoved).toBeUndefined();
    });


  });

});
