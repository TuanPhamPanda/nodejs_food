import mysql from "mysql2";

const db = mysql.createConnection({
    host: "db4free.net",
    user: "database_food",
    password: "database_food",
    database: "database_food"
});


db.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default db;