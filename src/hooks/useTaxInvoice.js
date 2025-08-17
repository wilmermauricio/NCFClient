import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_BASE_URL } from 'src/config';

export const useTaxInvoices = ({ document, NCF }) => {

    const fetchTaxInvoices = async ({ signal }) => {
        const { data } = await axios.get(
            `${API_BASE_URL}/TaxInvoice/TaxInvoices`,
            {
                signal,
                params: { document, NCF },
                headers: { 'Content-Type': 'application/json' },
            }
        );

        console.log(data)
        return data;
    };

    const {
        data: taxInvoices = [],
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['taxInvoices', document,NCF],
        queryFn: fetchTaxInvoices
    });

    return { taxInvoices, isLoading, isError, error }
};
