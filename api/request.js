var request = require('request')
  , Stream = require('stream')
  , pcParse = require('../utils/pc-pdx').parseBody
  , lastFm = require('../utils/lastFm');

  var s = new Stream;
  //var url = "http://pc-pdx.com/show-guide/";
  var url = 'http://ws.audioscrobbler.com/2.0/?method=geo.getevents&location=portland&api_key=612ed90602fd71260d9a4ab61e5518f6&format=json';

  request({
    uri: url,
  }, function(error, response, body) {

  if ( !error && response.statusCode == 200 )


    if (url.indexOf('pc-pdx') > 0 ) pcParse(body);
    if (url.indexOf('geo') > 0) lastFm.getIds(body);
    //send to a util that will extract
    //all event id's and make the new request
    //for event info
    if (url.indexOf('getinfo') > 0) lastFm.parseJson(body);
  });
