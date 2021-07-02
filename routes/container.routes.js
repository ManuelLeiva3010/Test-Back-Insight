const express = require("express");
const _containerController = require("../controllers/container.controller");

const router = express.Router();

router.post("/container/container", _containerController.createContainer);
router.get("/container/containers", _containerController.getContainers)
router.get("/container/container/:id", _containerController.getContainer);
router.put("/container/container/:id", _containerController.updateContainer);
router.delete("/container/container/:id", _containerController.deleteContainer);

module.exports = router;