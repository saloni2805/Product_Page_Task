const express = require("express")
const router = express.Router()
const connection = require("../config/db")

router.post("/add_to_cart", async (req, res) => {
  try {
    const { title, price, description, category, image, rating } = req.body
    const rate = rating?.rate || 0
    const count = rating?.count || 0
    const sql = `
        insert into products 
          (title, price, description, category, image, rating_rate, rating_count) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `
    const values = [title, price, description, category, image, rate, count]
    await connection.execute(sql, values)
    return res.status(201).json({ message: "Product Added Successfully" })
  } catch (err) {
    console.error("Database Insert Error:", err)
    return res.status(500).json({ message: "Internal Server Error" })
  }
})

router.get("/get_cart_products", async (req, res) => {
  try {
    const result = await connection.execute("select * from products")
    return res.status(200).json({
      messgae: "Data fetched Successfully",
      data: result[0],
      success: true,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Internal Server Error", success: false })
  }
})

router.delete("/delete/:id", async (req, res) => {
  try {
    var id = req.params.id
    const sql = `delete from products where id='${id}'`
    await connection.execute(sql)

    return res
      .status(200)
      .json({ message: "Product Deleted Successfully", success: true })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Internal Server Error", success: false })
  }
})

module.exports = router
