import { FaEdit, FaTrash, FaEye } from "react-icons/fa"
import "./Table.css"

const Table = ({ columns, data, actions = true }) => {
    return (
        <div className="table-container fade-in">
            <table className="data-table">
                <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column.header}</th>
                    ))}
                    {actions && <th style={{ width: "120px" }}>Actions</th>}
                </tr>
                </thead>
                <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column, colIndex) => (
                            <td key={colIndex}>{row[column.accessor]}</td>
                        ))}
                        {actions && (
                            <td>
                                <div className="table-actions">
                                    <button className="table-btn" title="Voir">
                                        <FaEye />
                                    </button>
                                    <button className="table-btn edit" title="Modifier">
                                        <FaEdit />
                                    </button>
                                    <button className="table-btn delete" title="Supprimer">
                                        <FaTrash />
                                    </button>
                                </div>
                            </td>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table

