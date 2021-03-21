var express = require('express');
var router = express.Router();
var find = require('../helpers/mysql/mysqlSequelize/sequelizeQuery');
var getResultStatus = require('../helpers/getResultStatus');
var resultsDataToArray = require('../helpers/resultsDataToArray');
var getModelAndAttributes = require('../helpers/mysql/mysqlSequelize/getModelAndAttributes');

router.get('/', function(req, res, next) {
  res.send('This is mysql sequelize router')
});

router.get('/regions', async function(req, res, next) {
  const {model, attributes} = getModelAndAttributes.regions();
  const result = await find(model, attributes)
  res.status(getResultStatus(result)).json(resultsDataToArray(result))
})

router.get('/countries', async function(req, res, next) {
  const {model, attributes} = getModelAndAttributes.countries();
  const result = await find(model, attributes)
  res.status(getResultStatus(result)).json(resultsDataToArray(result))
})

router.get('/item_types', async function(req, res, next) {
  const {model, attributes} = getModelAndAttributes.item_types();
  const result = await find(model, attributes)
  res.status(getResultStatus(result)).json(resultsDataToArray(result))
})

router.get('/totals_by_country', async function(req, res, next) {
  const { country } = req.query
  const {model, attributes} = getModelAndAttributes.totals_by_country(country);
  const result = await find(model, attributes)
  res.status(getResultStatus(result)).json(result)
})

router.get('/totals_by_region', async function(req, res, next) {
  const { region } = req.query
  const {model, attributes} = getModelAndAttributes.totals_by_region(region);
  const result = await find(model, attributes)
  res.status(getResultStatus(result)).json(result)
})

router.get('/item_type_by_country', async function(req, res, next) {
  const { country } = req.query
  const {model, attributes} = getModelAndAttributes.item_type_by_country(country);
  const result = await find(model, attributes)
  res.status(getResultStatus(result)).json(result)
})

router.get('/item_type_by_region', async function(req, res, next) {
  const { region } = req.query
  const {model, attributes} = getModelAndAttributes.item_type_by_region(region);
  const result = await find(model, attributes)
  res.status(getResultStatus(result)).json(result)
})

module.exports = router;
