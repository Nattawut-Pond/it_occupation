const mysql = require('mysql2');


exports.databaseConnection = () => {

   try {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'it_occupation'
    });
    return connection;
   } catch (error) {
        console.log(error.message);
   }

};