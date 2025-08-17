import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

const GenericTable = ({ columns, rows, emptyMessage = 'Sin resultados' }) => {
    return (
        <Paper elevation={3}>
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            {columns.map((col, idx) => (
                                <TableCell key={idx}>{col.label}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={columns.length} align="center">
                                    {emptyMessage}
                                </TableCell>
                            </TableRow>
                        ) : (
                            rows.map((row, rowIndex) => (
                                <TableRow hover key={row.key || rowIndex}>
                                    {columns.map((col, colIndex) => (
                                        <TableCell key={colIndex}>
                                            {typeof col.render === 'function'
                                                ? col.render(row)
                                                : row[col.field]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default GenericTable;
