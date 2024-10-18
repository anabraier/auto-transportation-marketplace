const pool = require('../db');  // Assuming your db connection is in a 'db.js' file
const createTables = async () => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS carriers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        service_description TEXT
    );

    CREATE TABLE IF NOT EXISTS customers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        shipping_request TEXT
    );
    `;

    try {
        await pool.query(queryText);
        console.log("Tables created successfully");
    } catch (err) {
        console.error("Error creating tables:", err);
    } finally {
        pool.end();
    }
};

createTables();