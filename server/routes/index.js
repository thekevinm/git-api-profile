var express = require('express')
var router = express.Router()
const apiurl = 'http://api.github.com/users/'
const request = require('request')

/* GET home page. */
router.get('/:login', function(req, res) {

	const options = {
		url: apiurl + req.params.login,
		headers: {
			'User-Agent':req.params.login
		}
	}

	console.log(options)

  request.get(options, (err, resp, body) => {
  	res.json(JSON.parse(body))
  })
})

module.exports = router
