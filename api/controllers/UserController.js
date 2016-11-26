/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var cricapi = require("node-cricapi");
var request = require('request');
// NgppjVYBlcNihBRKvsWo7KV1C5R2 
module.exports = {
  // getAll: function (req, res) {
  //   for (var i = 1; i <= 500; i++) {
  //     request({
  //       url: 'http://cricapi.com/api/playerStats?pid=1000',
  //       // apikey: 'NgppjVYBlcNihBRKvsWo7KV1C5R2',
  //       apikey: '7dn28he8h2e72',
  //       method: "POST"
  //     }, function (error, response, body) {
  //       if (!error && response.statusCode == 200) {
  //         console.log(body) // Show the HTML for the Google homepage. 
  //         console.log(response.body);
  //         var data = JSON.parse(response.body);
  //         if (data.name == "") {

  //         } else {
  //           res.json(JSON.parse(response.body));
  //         }

  //       }
  //     })
  //   }
  // },
  insertEach: function (req, res) {
    request('http://cricapi.com/api/playerStats?pid=4068', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(response);
        var data = JSON.parse(response.body);
        console.log(data) // Show the HTML for the Google homepage. 
        res.json(JSON.parse(response.body));
      }
    })
  },
  // add: function (req, res) {
  //   User.create(req.body).exec(function (err, result) {
  //     if (err) {
  //       sails.log.debug('Some error occured ' + err);
  //       return res.json(500, {
  //         error: 'Some error occured'
  //       });
  //     }
  //     sails.log.debug('Success', JSON.stringify(result));
  //     return res.json(200, {
  //       success: 'Success'
  //     });

  //   });

  // },
};
