import { Link, useLocation } from "react-router-dom"
import { FaBox, FaTags, FaWarehouse } from "react-icons/fa"
import "./Sidebar.css"

const Sidebar = () => {
    const location = useLocation()

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2>StockManager</h2>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li>
                        <Link
                            to="/produit"
                            className={location.pathname === "/produit" || location.pathname === "/" ? "active" : ""}
                        >
                            <FaBox className="nav-icon" />
                            <span>Produits</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/categorie" className={location.pathname === "/categorie" ? "active" : ""}>
                            <FaTags className="nav-icon" />
                            <span>Catégories</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/stock" className={location.pathname === "/stock" ? "active" : ""}>
                            <FaWarehouse className="nav-icon" />
                            <span>Stock</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="sidebar-footer">
                <p>© 2025 StockManager</p>
            </div>
        </aside>
    )
}

export default Sidebar

