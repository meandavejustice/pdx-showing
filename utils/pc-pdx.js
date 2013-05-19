var cheerio = require('cheerio');

module.exports.parseBody = function(body) {

  var $ = cheerio.load(body);

  $("#TabPublicCalendar div.show-listing").each(function() {

    var show = $(this),
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

    // var re = new RegExp("([0-9]+)/([0-9]+)/([0-9]+)"),
    //   cleaned = info.match(re),
    //   showDate = cleaned[0],
    //   month = cleaned[1],
    //   day = cleaned[2],
    //   year = cleaned[3];

    console.log("### ATTENTION ### This is a event #");
    console.log("href === ", href);
    console.log("id === ", id);
    console.log("img === ", img);
    console.log("artists === ", artists);
    console.log("venue === ", venue);
    console.log("info === ", info);
    console.log("age === ", age);
    console.log("detail === ", detail);
    //console.log("show date === ", showDate);
    // console.log("month === ", month);
    // console.log("day === ", day);
    // console.log("year === ", year);

    // //get price
    // re = new RegExp("(/[\\d\\.\\d]+)", "g");
    // cleaned = detail.match(re);
    // if (cleaned !== null) {
    //   var whoKnows = cleaned[0];
    //   var showTime = cleaned[1];
    //   var price = cleaned[2];
    // }

    //set up my object to be validated
    // var newEv = {
    //    id: id,
    //    showDate: showDate,
    //    month: month,
    //    day: day,
    //    year: year,
    //    showTime: showTime,
    //    img: img,
    //    artists: artists,
    //    venue: venue,
    //    age: age,
    //    price: price
    // };

    //console.log(newEv);
  });
}
