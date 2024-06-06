const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const offersRouter = require("./offers/router");

router.use("/offers", offersRouter);

const companysRouter = require("./companys/router");

router.use("/companys", companysRouter);
/* ************************************************************************* */

module.exports = router;
