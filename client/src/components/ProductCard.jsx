const ProductCard = ({ product }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image}
        className="card-img-top p-3"
        style={{ height: "200px", objectFit: "contain" }}
        alt={product.title}
      />
      <div className="card-body">
        <h6 className="card-title">{product.title}</h6>
        <p className="card-text fw-bold">Rs.{product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
