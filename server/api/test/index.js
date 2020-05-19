const routes = require('express').Router();

routes.get('/create', (req, res) => {
    // res.status(200).json({ message: 'Connected!' });
    return res.json({data:'comehere'})
});

module.exports = routes;