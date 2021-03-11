var express = require('express');
var router = express.Router();
var query = require('../helpers/mysql/query');
var getResultStatus = require('../helpers/getResultStatus');
var resultsDataToArray = require('../helpers/resultsDataToArray');

router.get('/', function(req, res, next) {
  res.send('This is mysql raw router')
});

router.get('/regions', async function(req, res, next) {
  const result = await query('SELECT DISTINCT REGION FROM sales')
  res.status(getResultStatus(result)).json(resultsDataToArray(result))
})

router.get('/countries', async function(req, res, next) {
  const result = await query('SELECT DISTINCT COUNTRY FROM sales')
  res.status(getResultStatus(result)).json(resultsDataToArray(result))
})

router.get('/item_types', async function(req, res, next) {
  const result = await query('SELECT DISTINCT ITEM_TYPE FROM sales')
  res.status(getResultStatus(result)).json(resultsDataToArray(result))
})

module.exports = router;
