const {getItem, store, remove} = require('./controller');
const {upload, fileToField} = require('./middleware');
const express = require('express');
const router = express.Router();
router.get('/add', getItem);
router.post('/add', [upload.single('images'), fileToField], store);
router.get('/delete/:id', remove);
module.exports = router;
