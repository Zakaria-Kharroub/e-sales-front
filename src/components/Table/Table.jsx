import "./Table.css"

const Table = ({ columns, data }) => {
    return (
        <table className="data-table">
            <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={index}>{column.header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {columns.map((column, colIndex) => (
                        <td key={colIndex}>{row[column.accessor]}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Table

