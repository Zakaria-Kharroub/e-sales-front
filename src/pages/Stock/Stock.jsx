"use client"

import { useState } from "react"
import Modal from "../../components/Modal/Modal"
import { FaPlus, FaSearch, FaArrowUp, FaArrowDown, FaEdit, FaTrash } from "react-icons/fa"
import "./Stock.css"

const Stock = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [sortField, setSortField] = useState("produit")
    const [sortDirection, setSortDirection] = useState("asc")

    // Données statiques pour les stocks
    const stocks = [
        { id: 1, produit: "Smartphone XYZ", quantite: 25, seuil: 10, derniereMaj: "2023-05-15" },
        { id: 2, produit: "Laptop Pro", quantite: 12, seuil: 5, derniereMaj: "2023-05-10" },
        { id: 3, produit: "T-shirt Premium", quantite: 50, seuil: 20, derniereMaj: "2023-05-12" },
        { id: 4, produit: "Chaise de Bureau", quantite: 8, seuil: 5, derniereMaj: "2023-05-08" },
        { id: 5, produit: "Café Premium", quantite: 30, seuil: 15, derniereMaj: "2023-05-14" },
        { id: 6, produit: "Écouteurs sans fil", quantite: 0, seuil: 10, derniereMaj: "2023-05-01" },
    ]

    const columns = [
        { header: "Produit", accessor: "produit", sortable: true },
        {
            header: "Quantité",
            accessor: "quantite",
            sortable: true,
            render: (quantite, row) => {
                let statusClass = "status-active"
                if (quantite === 0) {
                    statusClass = "status-inactive"
                } else if (quantite < row.seuil) {
                    statusClass = "status-warning"
                }
                return <span className={`quantity-badge ${statusClass}`}>{quantite}</span>
            },
        },
        { header: "Seuil d'alerte", accessor: "seuil" },
        { header: "Dernière mise à jour", accessor: "derniereMaj" },
    ]

    // Produits pour le select
    const produits = [
        { id: 1, nom: "Smartphone XYZ" },
        { id: 2, nom: "Laptop Pro" },
        { id: 3, nom: "T-shirt Premium" },
        { id: 4, nom: "Chaise de Bureau" },
        { id: 5, nom: "Café Premium" },
        { id: 6, nom: "Écouteurs sans fil" },
    ]

    // Trier les stocks
    const sortedStocks = [...stocks].sort((a, b) => {
        if (sortDirection === "asc") {
            return a[sortField] > b[sortField] ? 1 : -1
        } else {
            return a[sortField] < b[sortField] ? 1 : -1
        }
    })

    // Filtrer les stocks
    const filteredStocks = sortedStocks.filter((stock) => stock.produit.toLowerCase().includes(searchTerm.toLowerCase()))

    // Gérer le tri
    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc")
        } else {
            setSortField(field)
            setSortDirection("asc")
        }
    }

    return (
        <div className="stock-page">
            <div className="page-header">
                <h1 className="page-title">Gestion des Stocks</h1>
                <button className="action-button" data-bs-toggle="modal" data-bs-target="#addStockModal">
                    <FaPlus />
                    <span>Ajouter du stock</span>
                </button>
            </div>

            <div className="filters-container">
                <div className="search-container">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Rechercher un produit..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="stock-summary">
                <div className="summary-card">
                    <div className="summary-title">Total des produits</div>
                    <div className="summary-value">{stocks.length}</div>
                </div>
                <div className="summary-card">
                    <div className="summary-title">Produits en stock</div>
                    <div className="summary-value">{stocks.filter((s) => s.quantite > 0).length}</div>
                </div>
                <div className="summary-card">
                    <div className="summary-title">Produits en rupture</div>
                    <div className="summary-value">{stocks.filter((s) => s.quantite === 0).length}</div>
                </div>
                <div className="summary-card">
                    <div className="summary-title">Stock faible</div>
                    <div className="summary-value">{stocks.filter((s) => s.quantite > 0 && s.quantite < s.seuil).length}</div>
                </div>
            </div>

            <div className="stocks-count">
                {filteredStocks.length} produit{filteredStocks.length !== 1 ? "s" : ""} trouvé
                {filteredStocks.length !== 1 ? "s" : ""}
            </div>

            <div className="table-container fade-in">
                <table className="data-table">
                    <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} onClick={() => column.sortable && handleSort(column.accessor)}>
                                {column.header}
                                {column.sortable && sortField === column.accessor && (
                                    <span className="sort-icon">{sortDirection === "asc" ? <FaArrowUp /> : <FaArrowDown />}</span>
                                )}
                            </th>
                        ))}
                        <th style={{ width: "120px" }}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredStocks.map((stock, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex}>
                                    {column.render ? column.render(stock[column.accessor], stock) : stock[column.accessor]}
                                </td>
                            ))}
                            <td>
                                <div className="table-actions">
                                    <button className="table-btn edit" title="Modifier">
                                        <FaEdit />
                                    </button>
                                    <button className="table-btn delete" title="Supprimer">
                                        <FaTrash />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <Modal id="addStockModal" title="Ajouter du stock">
                <form>
                    <div className="mb-3">
                        <label htmlFor="stockProduit" className="form-label">
                            Produit
                        </label>
                        <select className="form-select" id="stockProduit">
                            <option value="">Sélectionner un produit</option>
                            {produits.map((produit) => (
                                <option key={produit.id} value={produit.id}>
                                    {produit.nom}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="stockQuantite" className="form-label">
                            Quantité
                        </label>
                        <input type="number" className="form-control" id="stockQuantite" min="1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="stockSeuil" className="form-label">
                            Seuil d'alerte
                        </label>
                        <input type="number" className="form-control" id="stockSeuil" min="0" />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                            Annuler
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Enregistrer
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default Stock

