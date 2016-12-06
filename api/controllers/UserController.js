/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var cricapi = require("node-cricapi");
var request = require('request');
module.exports = {

  getAll: function (req, res) {
    var obj = {};
    var api = {
      "apikey": "NgppjVYBlcNihBRKvsWo7KV1C5R2"
    };
    api = _.assign(api, req.body);
    for (var i = 1; i <= 100; i++) {
      request({
        url: "http://cricapi.com/api/playerStats?pid=" + i,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(api)
      }, function (err, httpResponse, body) {
        console.log(body);
        if (body !== "undefined") {
          var data = JSON.parse(body);
          if (data.name == "") {} else {
            console.log(data);
            if (data.name) {
              obj.name = data.name;
            }
            if (data.cricid) {
              obj.cricid = data.i;
            }
            if (data.fullName) {
              obj.fullName = data.fullName;
            }
            if (data.born) {
              obj.born = data.born;
            }
            if (data.currentAge) {
              obj.currentAge = data.currentAge;
            }
            if (data.majorTeams) {
              obj.majorTeams = data.majorTeams;
            }
            if (data.playingRole) {
              obj.playingRole = data.playingRole;
            }
            if (data.battingStyle) {
              obj.battingStyle = data.battingStyle;
            }
            if (data.bowlingStyle) {
              obj.bowlingStyle = data.bowlingStyle;
            }
            if (data.profile) {
              obj.profile = data.profile;
            }
            if (data.country) {
              obj.country = data.country;
            }
            if (data.imageURL) {
              obj.imageURL = data.imageURL;
            }
            if (data.data) {
              if (data.data.batting) {
                obj.batting = JSON.stringify(data.data.batting);
              }
              if (data.data.bowling) {
                obj.bowling = JSON.stringify(data.data.bowling);
              }
            }
            User.create(obj).exec(function (err, result) {
              if (err) {
                sails.log.debug('Some error occured ' + err);
                return res.json(500, {
                  error: 'Some error occured'
                });
              } else if (result) {
                console.log("data for " + i);
              }
            });
          }
        }
      })
    }
  },
};
