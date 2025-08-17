import { useState } from 'react';
import { Alert, Box, CircularProgress, Divider, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useTaxInvoices } from 'src/hooks/useTaxInvoice';
import SearchBar from 'src/components/SearchBar';
import GenericTable from 'src/components/GenericTable';

const TaxInvoicesPage = () => {
    const { document } = useParams();
    const [NCF, setNCF] = useState(null);
    const { taxInvoices, isLoading, isError, error } = useTaxInvoices({ document, NCF });

    const totalITBIS = taxInvoices.reduce((sum, { itbiS18 = 0 }) => sum + Number(itbiS18), 0);

const columns = [
    { label: 'RNC / Cédula', field: 'document' },
    { label: 'NCF', field: 'ncf' },
    {
        label: 'Monto',
        render: row =>
            row.key === 'total-row'
                ? row.amount
                : Number(row.amount).toLocaleString('es-DO', {
                      style: 'currency',
                      currency: 'DOP',
                      minimumFractionDigits: 2,
                  }),
    },
    {
        label: 'ITBIS 18',
        render: row =>
            row.key === 'total-row'
                ? row.itbiS18
                : Number(row.itbiS18).toLocaleString('es-DO', {
                      style: 'currency',
                      currency: 'DOP',
                      minimumFractionDigits: 2,
                  }),
    },
];


    const rows = [...taxInvoices];

    if (rows.length > 0) {
        rows.push({
            key: 'total-row',
            document: '',
            ncf: '',
            amount: 'Total ITBIS 18:',
            itbiS18: totalITBIS.toLocaleString('es-DO', {
                style: 'currency',
                currency: 'DOP',
                minimumFractionDigits: 2,
            }),
        });
    }

    return (
        <Box p={{ xs: 2, sm: 3 }}>
            <Typography
                variant="h5"
                fontWeight={600}
                gutterBottom
                sx={{
                    color: 'text.primary',
                
                    display: 'inline-block',
                    paddingBottom: '4px',
                    mb: 3,
                }}
            >
                Lista de NCF
            </Typography>

            <SearchBar
                placeholder="Buscar por NCF..."
                value={NCF || ''}
                onChange={ncf => setNCF(ncf)}
            />
            <Divider sx={{ my: 2 }} />
            <Divider sx={{ my: 2 }} />
            {isLoading && (
                <Box display="flex" flexDirection="column" alignItems="center" my={4}>
                    <CircularProgress />
                    <Typography variant="body2" mt={2}>
                        Cargando contribuyentes...
                    </Typography>
                </Box>
            )}
            {isError && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error?.response?.data || 'Ocurrió un error al cargar los contribuyentes.'}
                </Alert>
            )}
            <GenericTable rows={rows} columns={columns} />
        </Box>
    );
};

export default TaxInvoicesPage;
