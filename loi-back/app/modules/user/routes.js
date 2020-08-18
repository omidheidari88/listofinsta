const {getItem, store, remove, update, authenticate} = require('./controller');
const express = require('express');
const router = express.Router();
router.get('/add', getItem);
router.post('/add', store);
router.post('/delete', remove);
router.post('/edit', update);
router.post('/', authenticate);

module.exports = router;
