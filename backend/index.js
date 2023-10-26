const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/'
const database = 'react-admin-panel'; 
const client = new MongoClient(url);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db(database); 
        console.log(`Using database: ${database}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

connectToDatabase();