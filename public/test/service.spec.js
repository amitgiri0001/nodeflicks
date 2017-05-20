describe('Service', function() {
  let resourceFactory, imagesSrv;

  beforeEach(angular.mock.module('nodeflicksApp'));
  beforeEach(inject(function(_resourceFactory_, _imagesSrv_){
    resourceFactory = _resourceFactory_;
    imagesSrv = _imagesSrv_;
  }));

  it('should have resource object for api calls', function() {
    expect(resourceFactory.flickrFeeds.get).toBeDefined();
  });

  it('should have declared variable for images', function() {
    expect(imagesSrv.images).toBeDefined();
  });

});
