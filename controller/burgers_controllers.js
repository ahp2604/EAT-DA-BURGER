// import express
// burger.js

// create router for app
// export the router

var express = require('express')
var router = express.Router()

var burgers = require('../models/burgers.js')

router.get('/', function (req, res) {
  burgers.selectAll(function (data) {
    // sending to front end
    var burgerObj = {
      burgers: data
    }
    res.render('index', burgerObj)
  })
// response with data to index.html
})

router.post('/api/burgers', function (req, res) {
  burgers.insertOne(req.body.burger_name, function (result) {
    return res.redirect('/')
    res.json({ id: result.insertId })
  })
})

router.post('/api/burgers/:id', function (req, res) {
  burgers.updateOne(true, 'id', req.params.id, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end()
    } else {
      res.redirect('/')
    }
  })
})

module.exports = router
