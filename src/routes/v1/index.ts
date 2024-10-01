import express from "express";
const router = express.Router();

// Create example route
router.get("/example", (req: express.Request, res: express.Response) => {
  res.send("Response from v1 example route");
});

module.exports = router;