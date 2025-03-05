import Card from "../../components/Card/Card"
import Modal from "../../components/Modal/Modal"
import "./Produit.css"

const Produit = () => {
    // Données statiques pour les produits
    const produits = [
        {
            id: 1,
            nom: "Smartphone XYZ",
            description: "Smartphone dernière génération avec écran 6.5 pouces",
            prix: 699.99,
            categorie: "Électronique",
        },
        {
            id: 2,
            nom: "Laptop Pro",
            description: "Ordinateur portable puissant pour les professionnels",
            prix: 1299.99,
            categorie: "Électronique",
        },
        {
            id: 3,
            nom: "T-shirt Premium",
            description: "T-shirt en coton de haute qualité",
            prix: 29.99,
            categorie: "Vêtements",
        },
        {
            id: 4,
            nom: "Chaise de Bureau",
            description: "Chaise ergonomique pour le bureau",
            prix: 199.99,
            categorie: "Maison",
        },
        {
            id: 5,
            nom: "Café Premium",
            description: "Café de spécialité en grains",
            prix: 12.99,
            categorie: "Alimentation",
        },
        {
            id: 6,
            nom: "Écouteurs sans fil",
            description: "Écouteurs Bluetooth avec réduction de bruit",
            prix: 149.99,
            categorie: "Électronique",
        },
    ]

    // Données statiques pour les catégories (pour le select)
    const categories = [
        { id: 1, nom: "Électronique" },
        { id: 2, nom: "Vêtements" },
        { id: 3, nom: "Alimentation" },
        { id: 4, nom: "Maison" },
    ]

    return (
        <div className="produit-page">
            <div className="page-header">
                <h1 className="page-title">Gestion des Produits</h1>
                <button className="action-button" data-bs-toggle="modal" data-bs-target="#addProduitModal">
                    Ajouter un produit
                </button>
            </div>

            <div className="product-grid">
                {produits.map((produit) => (
                    <Card
                        key={produit.id}
                        title={produit.nom}
                        description={produit.description}
                        price={produit.prix}
                        category={produit.categorie}
                    />
                ))}
            </div>

            <Modal id="addProduitModal" title="Ajouter un produit">
                <form>
                    <div className="mb-3">
                        <label htmlFor="produitName" className="form-label">
                            Nom
                        </label>
                        <input type="text" className="form-control" id="produitName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="produitDescription" className="form-label">
                            Description
                        </label>
                        <textarea className="form-control" id="produitDescription" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="produitPrix" className="form-label">
                            Prix
                        </label>
                        <input type="number" step="0.01" className="form-control" id="produitPrix" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="produitCategorie" className="form-label">
                            Catégorie
                        </label>
                        <select className="form-select" id="produitCategorie">
                            <option value="">Sélectionner une catégorie</option>
                            {categories.map((categorie) => (
                                <option key={categorie.id} value={categorie.id}>
                                    {categorie.nom}
                                </option>
                            ))}
                        </select>
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

export default Produit

