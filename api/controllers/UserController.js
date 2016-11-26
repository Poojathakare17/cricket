/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var cricapi = require("node-cricapi");
var request = require('request');
module.exports = {
  get: function (req, res) {
    for (var i = 1; i <= 500; i++) {
      request('http://cricapi.com/api/playerStats?pid=' + i, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body) // Show the HTML for the Google homepage. 
          console.log(response.body);
          var data = JSON.parse(response.body);
          if (data.name == "") {

          } else {
            res.json(JSON.parse(response.body));
          }

        }
      })
    }
  },
  add: function (req, res) {
    User.create(req.body).exec(function (err, result) {
      if (err) {
        sails.log.debug('Some error occured ' + err);
        return res.json(500, {
          error: 'Some error occured'
        });
      }
      sails.log.debug('Success', JSON.stringify(result));
      return res.json(200, {
        success: 'Success'
      });

    });

  },
};
