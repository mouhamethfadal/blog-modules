// Load environment variables from .env file
require("dotenv").config();

// Switch to admin database first
db = db.getSiblingDB("admin");

// Authenticate as root user
db.auth(process.env.MONGO_ADMIN_USER, process.env.MONGO_ADMIN_PASS);

// Switch to blog-dev database
db = db.getSiblingDB(process.env.MONGO_DB_NAME);

// Create the user for blog-dev database
db.createUser({
  user: process.env.MONGO_APP_USER,
  pwd: process.env.MONGO_APP_PASS,
  roles: [
    {
      role: "readWrite",
      db: process.env.MONGO_DB_NAME,
    },
    {
      role: "dbAdmin",
      db: process.env.MONGO_DB_NAME,
    },
  ],
});

// Create a test collection to ensure the database is created
db.createCollection("test");
