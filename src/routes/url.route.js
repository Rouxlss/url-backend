const { Router } = require('express');
const { createUrl, redirectUrl } = require('../controllers/url.controller.js');
const router = Router();

router.route('/')
    .post(createUrl);

router.route('/:shortUrl')
    .get(redirectUrl);

module.exports = router;