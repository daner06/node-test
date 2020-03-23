const router = require('express').Router({ mergeParams: true });

router
    .get('/suggestions',
        (req, res) => {
            // To do... Should return an array of results
            // Example: const results = [ 'result1', 'result2' ];
            const results = null;

            res.status(200).send(results);
        }
    );

module.exports = router;
