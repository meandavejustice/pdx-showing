

module.exports.cleanDate = function (info) {
  var re = new RegExp("([0-9]+)/([0-9]+)/([0-9]+)"),
      cleaned = info.match(re),
      showDate = cleaned[0],
      month = cleaned[1],
      day = cleaned[2],
      year = cleaned[3];

  return(cleaned);
},

    //separate this out!
    //probably should revist this...
module.exports.getPrice = function  (detail) {
  var re = new RegExp("(/[\\d\\.\\d]+)", "g"),
      cleaned = detail.match(re);
      // showTime = cleaned[1],
      // price = cleaned[2];

  return cleaned;
};
