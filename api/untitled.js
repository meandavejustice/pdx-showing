

module.exports.getPrice = function(detail) {
  re = new RegExp("(/[\\d\\.\\d]+)", "g");
  cleaned = detail.match(re);
  if (cleaned !== null) {
    return cleaned;
  } else {
    return err;
  }
};