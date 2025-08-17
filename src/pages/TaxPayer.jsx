import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTaxPayers } from 'src/hooks/useTaxPayer';
import SearchBar from 'src/components/SearchBar';
import GenericTable from 'src/components/GenericTable';
import { Box, Alert, CircularProgress, Typography, Divider } from '@mui/material';

const TaxPayerPage = () => {
    const [document, setDocument] = useState('');
    const { taxPayers, isLoading, isError, error } = useTaxPayers({ document });
    const navigate = useNavigate();

    const columns = [
        { label: 'RNC / Cédula', field: 'document' },
        { label: 'Nombre', field: 'name' },
        { label: 'Tipo', render: row => row.type ?? '—' },
        { label: 'Estatus', field: 'status' },
        {
            label: 'Acciones',
            render: row => (
                <span style={{ color: '#1976d2', cursor: 'pointer' }} onClick={() => navigate(`/TaxInvoices/${row.document}`)}>
                    Ver NCF
                </span>
            ),
        },
    ];

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
                Lista de Contribuyentes
            </Typography>
            <SearchBar
                placeholder="Buscar por documento..."
                value={document}
                onChange={setDocument}
            />
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
            <GenericTable rows={taxPayers} columns={columns} />
        </Box>
    );
};

export default TaxPayerPage;
