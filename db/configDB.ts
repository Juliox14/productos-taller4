import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "localhost",
    user: "Julian",
    password: "12345678",
    database: "productos",
}
);

export default connection;