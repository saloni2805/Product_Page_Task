const express = require("express")
const app = express()

const PORT = 5000
const HOST = "127.0.0.1"

var cors = require("cors")
app.use(cors())

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

var userRoutes = require("./routes/userRoutes")
app.use("/api", userRoutes)

app.listen(PORT, HOST, () => {
  console.log(`Server is running on port http://${HOST}:${PORT}`)
})
