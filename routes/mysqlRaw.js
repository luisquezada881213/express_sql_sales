var express = require("express");
var router = express.Router();
var query = require("../helpers/mysql/mysqlRaw/rawQuery");
var getResultStatus = require("../helpers/getResultStatus");
var resultsDataToArray = require("../helpers/resultsDataToArray");
var getQuery = require("../helpers/mysql/mysqlRaw/getQuery");

router.get("/", (_req, res, _next) => {
    res.send("This is mysql raw router");
});

router.get("/regions", async (_req, res, _next) => {
    const result = await query(getQuery.regions());
    res.status(getResultStatus(result)).json(resultsDataToArray(result));
});

router.get("/countries", async (_req, res, _next) => {
    const result = await query(getQuery.countires());
    res.status(getResultStatus(result)).json(resultsDataToArray(result));
});

router.get("/item_types", async (_req, res, _next) => {
    const result = await query(getQuery.item_types());
    res.status(getResultStatus(result)).json(resultsDataToArray(result));
});

router.get("/totals_by_country", async (req, res, _next) => {
    const { country } = req.query;
    const result = await query(getQuery.totals_by_country(country));
    res.status(getResultStatus(result)).json(result);
});

router.get("/totals_by_region", async (req, res, _next) => {
    const { region } = req.query;
    const result = await query(getQuery.totals_by_region(region));
    res.status(getResultStatus(result)).json(result);
});

router.get("/item_type_by_country", async (req, res, _next) => {
    const { country } = req.query;
    const result = await query(getQuery.item_type_by_country(country));
    res.status(getResultStatus(result)).json(result);
});

router.get("/item_type_by_region", async (req, res, _next) => {
    const { region } = req.query;
    const result = await query(getQuery.item_type_by_region(region));
    res.status(getResultStatus(result)).json(result);
});

module.exports = router;
