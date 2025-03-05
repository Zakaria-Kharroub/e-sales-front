import { Route, Routes } from "react-router-dom"
import Produit from "../pages/Produit/Produit"
import Categorie from "../pages/Categorie/Categorie"
import Stock from "../pages/Stock/Stock"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Produit />} />
            <Route path="/produit" element={<Produit />} />
            <Route path="/categorie" element={<Categorie />} />
            <Route path="/stock" element={<Stock />} />
        </Routes>
    )
}

export default AppRoutes

