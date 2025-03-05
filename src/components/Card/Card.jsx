import "./Card.css"

const Card = ({ title, description, price, category }) => {
    return (
        <div className="product-card">
            <h3 className="card-title">{title}</h3>
            <span className="card-category">{category}</span>
            <p className="card-description">{description}</p>
            <p className="product-price">{price} €</p>
        </div>
    )
}

export default Card

