"use client"

import { useState } from "react"
import Table from "../../components/Table/Table"
import Modal from "../../components/Modal/Modal"
import { FaPlus, FaSearch } from "react-icons/fa"
import "./Categorie.css"

const Categorie = () => {
    const [searchTerm, setSearchTerm] = useState("")

    // Données statiques pour les catégories
    const categories = [
        { id: 1, nom: "Électronique", description: "Produits électroniques et gadgets", status: "active" },
        { id: 2, nom: "Vêtements", description: "Vêtements et accessoires de mode", status: "active" },
        { id: 3, nom: "Alimentation", description: "Produits alimentaires et boissons", status: "active" },
        { id: 4, nom: "Maison", description: "Meubles et décoration d'intérieur", status: "active" },
        { id: 5, nom: "Jardin", description: "Outils et accessoires de jardinage", status: "inactive" },
    ]

    const columns = [
        { header: "Nom", accessor: "nom" },
        { header: "Description", accessor: "description" },
        {
            header: "Statut",
            accessor: "status",
            render: (status) => (
                <span className={`status-badge ${status === "active" ? "status-active" : "status-inactive"}`}>
          {status === "active" ? "Actif" : "Inactif"}
        </span>
            ),
        },
    ]

    // Filtrer les catégories
    const filteredCategories = categories.filter(
        (categorie) =>
            categorie.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
            categorie.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return (
        <div className="categorie-page">
            <div className="page-header">
                <h1 className="page-title">Gestion des Catégories</h1>
                <button className="action-button" data-bs-toggle="modal" data-bs-target="#addCategorieModal">
                    <FaPlus />
                    <span>Ajouter une catégorie</span>
                </button>
            </div>

            <div className="filters-container">
                <div className="search-container">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Rechercher une catégorie..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="categories-count">
                {filteredCategories.length} catégorie{filteredCategories.length !== 1 ? "s" : ""} trouvée
                {filteredCategories.length !== 1 ? "s" : ""}
            </div>

            <Table
                columns={columns.map((col) => ({
                    ...col,
                    cell: col.render ? (row) => col.render(row[col.accessor]) : undefined,
                }))}
                data={filteredCategories}
            />

            <Modal id="addCategorieModal" title="Ajouter une catégorie">
                <form>
                    <div className="mb-3">
                        <label htmlFor="categorieName" className="form-label">
                            Nom
                        </label>
                        <input type="text" className="form-control" id="categorieName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="categorieDescription" className="form-label">
                            Description
                        </label>
                        <textarea className="form-control" id="categorieDescription" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="categorieStatus" className="form-label">
                            Statut
                        </label>
                        <select className="form-select" id="categorieStatus">
                            <option value="active">Actif</option>
                            <option value="inactive">Inactif</option>
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

export default Categorie

