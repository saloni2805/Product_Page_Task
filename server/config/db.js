const mysql = require("mysql2/promise")

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "products_db",
  port: "3307",
})

const testConnection = async () => {
  try {
    await pool.getConnection()
    console.log("DB Connection Successfull")
  } catch (err) {
    console.log(err)
    console.log("DB Connection Failed")
  }
}

testConnection()

module.exports = pool
