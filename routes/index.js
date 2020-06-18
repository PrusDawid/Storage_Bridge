'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Storage Bridge',
        categories: ['imports', 'exports', 'settings']
    });
})
router.get('/imports', (req, res) => {
    res.render('imports', {
        title: 'Imports',
        warehouses: ['Fen', 'Second', 'Third', 'Next']
    })
})
router.get('/exports', (req, res) => {
    //res.render('exports')
    res.send('exports')
})
router.get('/settings', (req, res) => {
    //res.render('settings')
    res.send('settings')
})



module.exports = router;