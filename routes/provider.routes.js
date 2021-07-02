const express = require("express");
const router = express.Router();

const _providerController = require("../controllers/providers.js");


router.post("/provider/provider", _providerController.createProvider);
router.get("/provider/providers", _providerController.getProviders)
router.get("/provider/provider/:id", _providerController.getProvider);
router.put("/provider/provider/:id", _providerController.updateProvider);
router.delete("/provider/provider/:id", _providerController.deleteProvider);




module.exports = router;