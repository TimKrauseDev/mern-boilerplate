// index.js

const router = require('express').Router();
const bookRoutes = require('./books');

router.use('/api/books', bookRoutes);

// If no API routes are hit, send the React app
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = router;