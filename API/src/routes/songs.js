const { Router } = require('express');
const router = Router();

router.get('/songs', (req,res) => {
    res.send('canciones');
});

module.exports = router;