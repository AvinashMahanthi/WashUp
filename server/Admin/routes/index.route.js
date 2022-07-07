const router = require("express").Router();

router.get("/admin/", (req, res, next) => {
  res.send("Admin Index Router");
});

module.exports = router;
