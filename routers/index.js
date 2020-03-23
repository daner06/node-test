const router = require('express').Router({ mergeParams: true });

// Routing
router.use('/api/v1', require('../controllers/v1'));

module.exports = router;
