import { BrowserRouter as Router } from "react-router-dom"
import Sidebar from "./components/Sidebar/Sidebar"
import AppRoutes from "./routes/AppRoutes"
import "./App.css"

function App() {
    return (
        <Router>
            <div className="app-container">
                <Sidebar />
                <main className="content">
                    <AppRoutes />
                </main>
            </div>
        </Router>
    )
}

export default App

