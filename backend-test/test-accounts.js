const axios = require('axios');

const BASE_URL = 'http://localhost:3000/api';

async function runTests() {
    try {
        console.log('Creating account...');
        await axios.post(`${BASE_URL}/account`, {
            account_id: '123',
            limit: 1000,
            products: ['savings', 'credit']
        });

        console.log('Retrieving account...');
        const response = await axios.get(`${BASE_URL}/account/123`);
        console.log(response.data);

        console.log('Updating account...');
        await axios.put(`${BASE_URL}/account/123`, {
            limit: 2000,
            products: ['savings', 'loan']
        });

        console.log('Deleting account...');
        await axios.delete(`${BASE_URL}/account/123`);
        console.log('All tests passed ');
    } catch (err) {
        console.error('Test failed ', err.response?.data || err.message);
    }
}

runTests();
