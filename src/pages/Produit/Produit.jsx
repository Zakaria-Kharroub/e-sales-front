"use client"

import { useState } from "react"
import Card from "../../components/Card/Card"
import Modal from "../../components/Modal/Modal"
import { FaPlus, FaSearch, FaFilter } from "react-icons/fa"
import "./Produit.css"

const Produit = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")

    // Données statiques pour les produits
    const produits = [
        {
            id: 1,
            nom: "Smartphone XYZ",
            description: "Smartphone dernière génération avec écran 6.5 pouces",
            prix: 699.99,
            categorie: "Électronique",
            stock: 25,
        },
        {
            id: 2,
            nom: "Laptop Pro",
            description: "Ordinateur portable puissant pour les professionnels",
            prix: 1299.99,
            categorie: "Électronique",
            stock: 12,
        },
        {
            id: 3,
            nom: "T-shirt Premium",
            description: "T-shirt en coton de haute qualité",
            prix: 29.99,
            categorie: "Vêtements",
            stock: 50,
        },
        {
            id: 4,
            nom: "Chaise de Bureau",
            description: "Chaise ergonomique pour le bureau",
            prix: 199.99,
            categorie: "Maison",
            stock: 8,
        },
        {
            id: 5,
            nom: "Café Premium",
            description: "Café de spécialité en grains",
            prix: 12.99,
            categorie: "Alimentation",
            stock: 30,
        },
        {
            id: 6,
            nom: "Écouteurs sans fil",
            description: "Écouteurs Bluetooth avec réduction de bruit",
            prix: 149.99,
            categorie: "Électronique",
            stock: 0,
        },
    ]

    // Données statiques pour les catégories (pour le select)
    const categories = [
        { id: 1, nom: "Électronique" },
        { id: 2, nom: "Vêtements" },
        { id: 3, nom: "Alimentation" },
        { id: 4, nom: "Maison" },
    ]

    // Filtrer les produits
    const filteredProducts = produits.filter((produit) => {
        const matchesSearch =
            produit.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
            produit.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "" || produit.categorie === selectedCategory

        return matchesSearch && matchesCategory
    })

    return (
        <div className="produit-page">
            <div className="page-header">
                <h1 className="page-title">Gestion des Produits</h1>
                <button className="action-button" data-bs-toggle="modal" data-bs-target="#addProduitModal">
                    <FaPlus />
                    <span>Ajouter un produit</span>
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

                <div className="filter-container">
                    <div className="filter-icon-container">
                        <FaFilter className="filter-icon" />
                    </div>
                    <select
                        className="filter-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">Toutes les catégories</option>
                        {categories.map((categorie) => (
                            <option key={categorie.id} value={categorie.nom}>
                                {categorie.nom}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="products-count">
                {filteredProducts.length} produit{filteredProducts.length !== 1 ? "s" : ""} trouvé
                {filteredProducts.length !== 1 ? "s" : ""}
            </div>

            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((produit) => (
                        <Card
                            key={produit.id}
                            title={produit.nom}
                            description={produit.description}
                            price={produit.prix}
                            category={produit.categorie}
                            stock={produit.stock}
                        />
                    ))
                ) : (
                    <div className="no-results">
                        <p>Aucun produit ne correspond à votre recherche.</p>
                    </div>
                )}
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
                        <div className="input-group">
                            <input type="number" step="0.01" className="form-control" id="produitPrix" />
                            <span className="input-group-text">€</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="produitStock" className="form-label">
                            Stock initial
                        </label>
                        <input type="number" className="form-control" id="produitStock" min="0" />
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

export default Produit

