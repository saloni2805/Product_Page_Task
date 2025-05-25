import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"

function Product_List() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getProducts = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching products:", err)
        setLoading(false)
      })
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">🛍️ Product List</h2>

      {loading ? (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status" />
          <p className="mt-2">Loading products...</p>
        </div>
      ) : (
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
              <Link
                to={`/product_details/${product.id}`}
                className="text-decoration-none"
              >
                <ProductCard product={product} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Product_List
