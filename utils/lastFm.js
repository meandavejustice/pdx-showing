var LastFm = require('../api/lastFm');

module.exports.getIds = function(json) {

  json = JSON.parse(json);

  var ids = [];

  for(var i in json.events.event) {
   console.log(i, json.events.event[i].id);
   var id = json.events.event[i].id;

   ids.push(id);
  }

  console.log("getting event id's", ids);

  for (var i in ids) {
    var opts = {};
    debugger;
    var client = new LastFm(opts);
    client.queryOptions({
      type: 'getInfo',
      id: ids[i]
    });
  }


}

module.exports.parseJSON = function(json) {

  var type = typeof json;
  console.log('type', type);
  console.log("parsing info for", json);

}
