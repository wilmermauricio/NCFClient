import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_BASE_URL } from 'src/config';


export const useTaxPayers = ({ document }) => {

  const fetchTaxPayers = async ({ signal }) => {
    const { data } = await axios.get(
      `${API_BASE_URL}/TaxPayer/TaxPayer`,
      {
        signal,
        params: {document:  document },
        headers: { 'Content-Type': 'application/json' },
      }
    );

    console.log(data)

    return data;
  };

    const {
        data: taxPayers = [],
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['taxPayers', document],
        queryFn: fetchTaxPayers,
    });

    console.log({ taxPayers, isLoading, isError, error })

    return { taxPayers, isLoading, isError, error };
};
