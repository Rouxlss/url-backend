const shortid = require('shortid');

urlShortenerCtrl = {};

const urlShortenerModel = require('../models/url.model.js');

urlShortenerCtrl.createUrl = (req, res) => {

    try {
        const { originalUrl } = req.body;

        if (!originalUrl) {
            return res.status(400).json({
                message: 'Please provide a valid URL'
            });
        }

        const shortUrl = `${process.env.SERVER}/${shortid.generate()}`;

        const urlShortener = new urlShortenerModel({ originalUrl, shortUrl });
        urlShortener.save();

        return res.json({ code: 200, message: 'URL has been created', url: shortUrl });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        });
    }

}

urlShortenerCtrl.redirectUrl = async (req, res) => {

    const { shortUrl } = req.params;

    if (!shortUrl) {
        return res.status(400).json({
            message: 'Please provide a valid URL'
        });
    }
    
    const urlShortener = await urlShortenerModel.findOne({ shortUrl:  `${process.env.SERVER}/${shortUrl}` });

    if (!urlShortener) {
        return res.status(404).json({
            message: 'URL not found'
        });
    }

    return res.json({ code: 200, url: urlShortener });
    // return res.redirect(urlShortener.originalUrl);

}


module.exports = urlShortenerCtrl;