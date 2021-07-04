require('dotenv')
const _ = require('lodash');
const express = require('express');
const router = express.Router();

const resp = require('../resp');

router.use('/', express.static(process.cwd() + '/assets/images/'));

router.post('/upload', (req, res) => {
    const file = req.files.file;
    if (_.isEmpty(file))
        return resp.error(res, 'Provide file to upload');

    const allowedExts = ['png', 'jpg', 'JPG', 'jpeg', 'JPEG', 'gif', 'mp4', 'webm', 'mpeg'];

    let ext = file.name.replace(' ', '_').split('.').reverse()[0];
    if (!allowedExts.includes(ext))
        return resp.error(res, 'Invalid file type provided');

    let fileName = '/file_' + Date.now() + '.' + ext;
    let dest_url = process.cwd() + '/assets/images' + fileName;
    file.mv(dest_url);

    const URL = process.env.URL;
    const PORT = process.env.PORT;

    const file_url = `http://${URL}:${PORT}/file${fileName}`;
    return resp.success(res, { file_url });
});

module.exports = router;