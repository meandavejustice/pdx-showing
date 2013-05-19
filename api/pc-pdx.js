//var dataParse = require('utils/date')

module.exports.makeReady = function(showData) {
  var show = showData,
      href = show.find('a.full-detail').attr('href'),
      id = href.slice(13),
      img = show.find('.thumb img').attr('src'),
      artistEl = show.find('.artist-list li'),
      notes = show.find('.artist-list li .artist-notes'),
      artists = [],
      venue = show.find('a.venues').text(),
      info = show.find('.third-column li:nth-child(2)').text(),
      age = show.find('.crowd').text(),
      detail = show.find('.detail').text();

  $(artistEl).each(function() {
    var art = $(this).find('a').text(),
        note = $(this).find('.artist-notes').text(),
        artist = {
          artist: art,
          notes: note
        };

    artists.push(artist);
  });

  //price and times
  var whoKnows = cleaned[0];
  var showTime = cleaned[1];
  var price = cleaned[2];


  //set up my object to be validated
  var newEv = {
     id: id,
     //showDate: showDate,
     //month: month,
     //day: day,
     //year: year,
     //showTime: showTime,
     //img: img,
     artists: artists,
     venue: venue,
     age: age,
     //price: price
  };

};









var moment = require('moment');

module.exports.hour_offset = function (depart, arrival, duration_in_minutes) {
  var depart_and_offset = moment.utc(depart);
  depart_and_offset.add('minutes', duration_in_minutes);
  return arrival.diff(depart_and_offset, 'hours');
};


/*
 * It is assumed that times come through in 24 hour format. (plus or
 * minus AM/PM)
 */
module.exports.build_datetime = function (date, time) {
  var time_arr = time.split(":");
  if (parseInt(time_arr[0], 10) <= 12 && time.indexOf("PM") > -1) {
    time_arr[0] = time_arr[0] + 12; // update offset to be 24hr time if PM and not offset already.
  }
  var time_sans_period = time_arr.join(":").replace("PM", "").replace("AM", "");
  return moment.utc(date + "T" + time_sans_period, "YYYY-MM-DDTHH:mm");
};

module.exports.format = function (date, format) {
  if (date) {
    var format = format || "DD/MM/YYYY";
    return moment.utc(date).format(format);
  }
}