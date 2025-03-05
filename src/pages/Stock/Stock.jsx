import Table from "../../components/Table/Table"
import Modal from "../../components/Modal/Modal"
import "./Stock.css"

const Stock = () => {
    // Données statiques pour les stocks
    const stocks = [
        { id: 1, produit: "Smartphone XYZ", quantite: 25 },
        { id: 2, produit: "Laptop Pro", quantite: 12 },
        { id: 3, produit: "T-shirt Premium", quantite: 50 },
        { id: 4, produit: "Chaise de Bureau", quantite: 8 },
        { id: 5, produit: "Café Premium", quantite: 30 },
        { id: 6, produit: "Écouteurs sans fil", quantite: 15 },
    ]

    const columns = [
        { header: "Produit", accessor: "produit" },
        { header: "Quantité", accessor: "quantite" },
    ]

    // Données statiques pour les produits (pour le select)
    const produits = [
        { id: 1, nom: "Smartphone XYZ" },
        { id: 2, nom: "Laptop Pro" },
        { id: 3, nom: "T-shirt Premium" },
        { id: 4, nom: "Chaise de Bureau" },
        { id: 5, nom: "Café Premium" },
        { id: 6, nom: "Écouteurs sans fil" },
    ]

    return (
        <div className="stock-page">
            <div className="page-header">
                <h1 className="page-title">Gestion des Stocks</h1>
                <button className="action-button" data-bs-toggle="modal" data-bs-target="#addStockModal">
                    Ajouter du stock
                </button>
            </div>

            <Table columns={columns} data={stocks} />

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
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
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

