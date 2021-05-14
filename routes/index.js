const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇

// linkRoutes here
const authRoutes = require("./auth.routes");
router.use("/", authRoutes);

const matchesRoutes = require('./routes/matches.routes');
app.use('/api', matchesRoutes);

module.exports = router;
