import Table from "../../components/Table/Table"
import Modal from "../../components/Modal/Modal"
import "./Categorie.css"

const Categorie = () => {
    // Données statiques pour les catégories
    const categories = [
        { id: 1, nom: "Électronique", description: "Produits électroniques et gadgets" },
        { id: 2, nom: "Vêtements", description: "Vêtements et accessoires de mode" },
        { id: 3, nom: "Alimentation", description: "Produits alimentaires et boissons" },
        { id: 4, nom: "Maison", description: "Meubles et décoration d'intérieur" },
    ]

    const columns = [
        { header: "Nom", accessor: "nom" },
        { header: "Description", accessor: "description" },
    ]

    return (
        <div className="categorie-page">
            <div className="page-header">
                <h1 className="page-title">Gestion des Catégories</h1>
                <button className="action-button" data-bs-toggle="modal" data-bs-target="#addCategorieModal">
                    Ajouter une catégorie
                </button>
            </div>

            <Table columns={columns} data={categories} />

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

export default Categorie

