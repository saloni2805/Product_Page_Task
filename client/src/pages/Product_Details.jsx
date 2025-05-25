import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Product_Details = () => {
  const { id } = useParams()
  const [productDetails, setProductDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  console.log(productDetails)

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProductDetails(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching product details:", err)
        setLoading(false)
      })
  }, [id])

  const handleAddToCart = async () => {
    try {
      await axios.post("http://localhost:5000/api/add_to_cart", {
        title: productDetails.title,
        price: productDetails.price,
        image: productDetails.image,
        description: productDetails.description,
        category: productDetails.category,
        rating: {
          rate: productDetails.rating?.rate || 0,
          count: productDetails.rating?.count || 0,
        },
      })

      alert("Product added to cart!")
    } catch (err) {
      console.error("Add to cart error:", err)
      alert("Failed to add product to cart")
    }
  }

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status" />
        <p className="mt-3">Loading product details...</p>
      </div>
    )
  }

  return (
    <div className="container py-4">
      <div className="border rounded shadow-sm p-4">
        <div className="row p-4">
          <div className="col-md-6 text-center">
            <img
              src={productDetails.image}
              alt={productDetails.title}
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">{productDetails.title}</h3>
            <p className="text-muted">{productDetails.category}</p>
            <h4 className="text-success">Rs.{productDetails.price}</h4>
            <p>{productDetails.description}</p>
            <p>
              ⭐ {productDetails.rating.rate} / 5 ({productDetails.rating.count}{" "}
              reviews)
            </p>
            <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product_Details
