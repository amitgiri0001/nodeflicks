const app = require(`./config`);
const request    = require('request');
let tags         = '';
// Api endpoint for flickr public feeds
const flickr_api_endpoint = `https://api.flickr.com/services/feeds/photos_public.gne?format=json`;

// GET all images from flickr public feeds with or without any tags
app.get('/feeds', (req, res, next)=>{
  tags = req.query.tags ? `&tags=${req.query.tags}` : '';
  request.get({url: `${flickr_api_endpoint}${tags}`}, (err, headers, body)=>{
    if (err) {
      // returns empty images array to client incase of error
      res.json({items: []});
      return;
    }
    // returns flickr api response to client
    res.json(eval(body));
  });

});

// Default function from flickr to get eval on response
function jsonFlickrFeed(json) {
  return json;
}

module.exports = app;
