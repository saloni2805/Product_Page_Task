import { useEffect, useState } from "react"
import axios from "axios"

function Cart() {
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get_cart_products")
      .then((res) => {
        setCartItems(res.data.data || [])
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching cart items:", err)
        setLoading(false)
      })
  }, [])

  const handleDelete = async (id) => {
    setLoading(true)
    try {
      const res = await axios.delete(`http://localhost:5000/api/delete/${id}`)
      setCartItems(res.data.data || []) // ensure it's always an array
      alert("Data deleted successfully")
    } catch (err) {
      console.error("Error deleting cart item:", err)
    } finally {
      setLoading(false)
    }
  }

  const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0)

  if (loading)
    return <div className="p-6 text-center text-xl font-medium">Loading...</div>

  return (
    <div className="container py-5">
      <h2 className="card-title text-center mb-4">Shopping Cart</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          {cartItems.length === 0 ? (
            <p className="text-center text-muted">Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="row align-items-center border-bottom py-3"
                >
                  <div className="col-md-2 text-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid rounded"
                      style={{ maxHeight: "100px", objectFit: "contain" }}
                    />
                  </div>

                  <div className="col-md-7">
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="text-muted mb-0">Rs. {item.price}</p>
                  </div>

                  <div className="col-md-3 text-end">
                    <span className="fw-bold fs-5">
                      Rs. {parseFloat(item.price).toFixed(2)}
                    </span>
                    <button
                      className="btn btn-sm ms-2 btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <div className="mt-4 text-end">
                <h4>Total: Rs. {total.toFixed(2)}</h4>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
