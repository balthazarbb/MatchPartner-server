const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// linkRoutes here
const authRoutes = require("./auth.routes");
router.use("/", authRoutes);
                              //or ./routes/matches.routes
const matchesRoutes = require('./matches.routes');
router.use('/api', matchesRoutes);

module.exports = router;
