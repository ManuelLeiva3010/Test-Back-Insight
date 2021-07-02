const express = require("express");
const router = express.Router();

const _shippingController = require("../controllers/shipping.js");


router.post("/shipping/shipping", _shippingController.createShipping);
router.get("/shipping/shippings", _shippingController.getShippings)
router.get("/shipping/shipping/:id", _shippingController.getShipping);
router.put("/shipping/shipping/:id", _shippingController.updateShipping);
router.delete("/shipping/shipping/:id", _shippingController.deleteShipping);




module.exports = router;