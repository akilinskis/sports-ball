// Description:
//   A Hubot script that corrects sportsball names
//
// Dependencies:
//   "<module name>": "<module version>"
//
// Configuration:
//   LIST_OF_ENV_VARS_TO_SET
//
// Commands:
//   <sports name> - a suggested correction for that sport's name
//
// Notes:
//   <optional notes required for the script>
//
// Author:
//   akilinskis
module.exports = function (robot) {
  robot.hear(/ultimate/i, function (res) {
    res.send(correctionString("flatball"));
  });

  robot.hear(/soccer/i, function (res) {
    res.send(correctionString("kicky balls"));
  });

  robot.hear(/football/i, function (res) {
    res.send(correctionString("hand-egg"));
  });

  robot.hear(/sumo/i, function (res) {
    res.send(correctionString("man slap"));
  });

  robot.hear(/beach v(olley)?ball/i, function (res) {
    res.send(correctionString("beach ball slap"));
  });

  robot.hear(/rocket league/i, function (res) {
    res.send(correctionString("boosty cars"));
  });

  robot.hear(/basketball/i, function (res) {
    res.send(correctionString("shooty hoops"));
  });

  robot.hear(/rugby/i, function (res) {
    res.send(correctionString("lifty shorts"));
  });

  robot.hear(/baseball/i, function (res) {
    res.send(correctionString("slappy bats"));
  });

  robot.hear(/hockey/i, function (res) {
    res.send(correctionString("slappy pucks"));
  });

  robot.hear(/screamo/i, function (res) {
    res.send(correctionString("screamy mics"));
  });

  robot.hear(/fencing/i, function (res) {
    res.send(correctionString("pointy sticks"));
  });

  robot.hear(/curling/i, function (res) {
    res.send(correctionString("sweepy stones"));
  });

  robot.hear(/badminton/i, function (res) {
    res.send(correctionString("[REDACTED - NSFW]"));
  });
  
  robot.hear(/tennis/i, function (res) {
    res.send(correctionString("fuzzy balls"));
  });
  
  robot.hear(/surfing/i, function (res) {
    res.send(correctionString("ridey waves"));
  });
  
  robot.hear(/biking/i, function (res) {
    res.send(correctionString("spinny gears"));
  });
  
  robot.hear(/whirlyball/i, function (res) {
    res.send(correctionString("slingy cars", true));
  });
  
  robot.hear(/fishing/i, function (res) {
    res.send(correctionString("sitty boats"));
  });
  
  robot.hear(/broomball/i, function (res) {
    res.send(correctionString("icy shoes"));
  });
  
  robot.hear(/figure skating/i, function (res) {
    res.send(correctionString("artsy knives"));
  });
  
  robot.hear(/speed skating/i, function (res) {
    res.send(correctionString("speedy knives"));
  });
  
  robot.hear(/luge/i, function (res) {
    res.send(correctionString("slidey sleds"));
  });
  
  robot.hear(/skeleton/i, function (res) {
    res.send(correctionString("extreme slidey sleds"));
  });
  
  robot.hear(/ultra( )?marathon/i, function (res) {
    res.send(correctionString("forever runs"));
  });
};

var correctionString = function(sport, alsoOkay) {
  var returnString = "I'm sorry, did you mean to say " + sport + "?";
  if (alsoOkay) {
    returnString += " Actually, that one is named properly as-is.";
  }

  return returnString;
};
