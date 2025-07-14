const express = require('express');
const router = express.Router();
const accounts = require('./dataStore');

// Create account
router.post('/account', (req, res) => {
    const { account_id, limit, products } = req.body;
    if (accounts[account_id]) {
        return res.status(400).json({ message: 'Account already exists' });
    }
    accounts[account_id] = { limit, products };
    res.json({ message: 'Account created successfully', account: { account_id, limit, products } });
});

// Get account
router.get('/account/:id', (req, res) => {
    const account = accounts[req.params.id];
    if (!account) {
        return res.status(404).json({ message: 'Account not found' });
    }
    res.json({ message: 'Account retrieved successfully', account: { account_id: req.params.id, ...account } });
});

// Update account
router.put('/account/:id', (req, res) => {
    if (!accounts[req.params.id]) {
        return res.status(404).json({ message: 'Account not found' });
    }
    const { limit, products } = req.body;
    accounts[req.params.id] = { limit, products };
    res.json({ message: 'Account updated successfully', account: { account_id: req.params.id, limit, products } });
});

// Delete account
router.delete('/account/:id', (req, res) => {
    if (!accounts[req.params.id]) {
        return res.status(404).json({ message: 'Account not found' });
    }
    const deleted = accounts[req.params.id];
    delete accounts[req.params.id];
    res.json({ message: 'Account deleted successfully', account: { account_id: req.params.id, ...deleted } });
});

module.exports = router;
