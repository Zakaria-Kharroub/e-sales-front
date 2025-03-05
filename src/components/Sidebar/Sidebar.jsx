"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaBox, FaTags, FaWarehouse, FaChartBar, FaUserCog, FaBars, FaTimes } from "react-icons/fa"
import "./Sidebar.css"

const Sidebar = () => {
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button className="sidebar-toggle d-lg-none" onClick={toggleSidebar}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="sidebar-header">
                    <div className="logo">S</div>
                    <h2>StockManager</h2>
                </div>

                <nav className="sidebar-nav">
                    <div className="sidebar-section">
                        <div className="sidebar-section-title">Gestion</div>
                        <ul>
                            <li>
                                <Link
                                    to="/produit"
                                    className={location.pathname === "/produit" || location.pathname === "/" ? "active" : ""}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <FaBox className="nav-icon" />
                                    <span>Produits</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/categorie"
                                    className={location.pathname === "/categorie" ? "active" : ""}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <FaTags className="nav-icon" />
                                    <span>Catégories</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/stock"
                                    className={location.pathname === "/stock" ? "active" : ""}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <FaWarehouse className="nav-icon" />
                                    <span>Stock</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar-section">
                        <div className="sidebar-section-title">Analyse</div>
                        <ul>
                            <li>
                                <Link to="#" className={location.pathname === "/statistiques" ? "active" : ""}>
                                    <FaChartBar className="nav-icon" />
                                    <span>Statistiques</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar-section">
                        <div className="sidebar-section-title">Paramètres</div>
                        <ul>
                            <li>
                                <Link to="#" className={location.pathname === "/parametres" ? "active" : ""}>
                                    <FaUserCog className="nav-icon" />
                                    <span>Paramètres</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="sidebar-footer">
                    <p>© 2025 StockManager</p>
                </div>
            </aside>
        </>
    )
}

export default Sidebar

