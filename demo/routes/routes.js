const router = require("express").Router();

router.get("/costs", (req, res) => {
  res.status(200).json({
    costs: [
      {
        id: "nokfw23io112",
        number: 12
      }
    ]
  });
});

module.exports = router;
