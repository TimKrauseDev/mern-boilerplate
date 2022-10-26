// index.js

const router = require('express').Router();
const bookRoutes = require('./books');

router.use('/api/books', bookRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;