import { FaEdit, FaTrash, FaEye } from "react-icons/fa"
import "./Card.css"

const Card = ({ title, description, price, category, stock = 25 }) => {
    // Déterminer le statut du stock
    const getStockStatus = (stockLevel) => {
        if (stockLevel <= 0) return { class: "out-of-stock", text: "Rupture" }
        if (stockLevel < 10) return { class: "low-stock", text: "Stock bas" }
        return { class: "in-stock", text: "En stock" }
    }

    const stockStatus = getStockStatus(stock)

    return (
        <div className="product-card fade-in">
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <span className="card-category">{category}</span>
                <div className={`stock-badge ${stockStatus.class}`}>{stockStatus.text}</div>
                <p className="card-description">{description}</p>
            </div>
            <div className="card-footer">
                <p className="product-price">{price.toFixed(2)} €</p>
                <div className="card-actions">
                    <button className="card-btn" title="Voir">
                        <FaEye />
                    </button>
                    <button className="card-btn" title="Modifier">
                        <FaEdit />
                    </button>
                    <button className="card-btn" title="Supprimer">
                        <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card

