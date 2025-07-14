2214199 – Backend Project

This repository contains the backend implementation for account management APIs with logging middleware and test cases, prepared as per the company instructions.

📂 Project Structure

12214199/
├── backend-test/             # Test scripts for API endpoints
│   └── test-accounts.js
├── logging-middleware/       # Custom logging middleware
│   └── logger.js
├── index.js                  # Server entry point
├── routes.js                 # API route definitions
├── dataStore.js              # In-memory data store
├── package.json              # Project metadata and dependencies
├── package-lock.json
└── .gitignore

🚀 API Endpoints

Method

Endpoint

Description

POST

/api/account

Create a new account

GET

/api/account/:id

Retrieve account by ID

PUT

/api/account/:id

Update account by ID

DELETE

/api/account/:id

Delete account by ID

🛠️ Setup & Run

1️⃣ Install dependencies

npm install

2️⃣ Start server

node index.js

Server runs at: http://localhost:3000

3️⃣ Test API manually

Use Postman, Thunder Client, or curl:

curl -X POST http://localhost:3000/api/account \
  -H "Content-Type: application/json" \
  -d '{"account_id":"123","limit":1000,"products":["savings","credit"]}'

🧪 Run Automated Tests

node backend-test/test-accounts.js

✅ If all APIs work correctly, you’ll see:

All tests passed

📜 Logging Middleware

Logs all incoming requests with HTTP method and URL.

Implemented in logging-middleware/logger.js

📂 .gitignore

node_modules/ is excluded from GitHub to keep the repository clean.

👨‍💻 Author

Govind SinghRoll Number: 12214199
