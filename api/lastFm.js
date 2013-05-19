//'http://ws.audioscrobbler.com/2.0/?method=geo.getevents&location=portland&api_key=612ed90602fd71260d9a4ab61e5518f6&format=json',

//'http://ws.audioscrobbler.com/2.0/?method=event.getinfo&event=328799&api_key=612ed90602fd71260d9a4ab61e5518f6&format=json'

var Client = function(options) {
  this.options = options || {};
  this.endpoint = 'http://ws.audioscrobbler.com/2.0/';

  this.api_key = '612ed90602fd71260d9a4ab61e5518f6';

  this.ready = false;

};

Client.prototype.queryOptions = function (options) {
  //type will be either get events for city
  //or get info for event
  var type = this.options.type || 'getEvents';

  if (type === 'getEvents') {
    this.options.type = '?method=geo.getevents&';
    var location = this.options.location || portland;
  }

  if (type === 'getInfo') {
    this.options.type = '?method=event.getinfo&event=';
    var id = this.options.id;

  }

this.constructUrl(options);

};

//need to figure out how to handle date parameters so that we
//don't make more calls than necessary

Client.prototype.constructUrl = function (options) {
  var base = this.endpoint;
  var type = this.options.type;
  var key = this.api_key;


  var url = base + type + id + key + '&format=json';

};