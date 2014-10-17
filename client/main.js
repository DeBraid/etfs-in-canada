Meteor.call("etfList", function(error, result) {
  if (error)
      console.log(error)

  Session.set("etfList", result);

  var tickers = _.map(result, function (x) {
    var ticks = x.split(' ');
      var data = {
       tick: ticks[0], 
       titles: x
      };
      return data;
    })  
  Session.set("tickers", tickers);
});

Template.etfs.helpers({
  tickers: function () {
    return Session.get("tickers");
  }
}); 

Template.whatTime.currTime = function (arg) {
  return Session.get("currentTime");
};

