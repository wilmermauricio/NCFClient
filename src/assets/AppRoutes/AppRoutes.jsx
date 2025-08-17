import { Route, Routes } from "react-router-dom";
import TaxPayerPage from "src/pages/TaxPayer";
import TaxInvoicesPage from "src/pages/TaxInvoices";

const AppRoutes = () => {

    return (<Routes>
        <Route
            path="/*"
            element={
                <TaxPayerPage />
            }
        />
        <Route
            path="/taxInvoices/:document"
            element={
                <TaxInvoicesPage />
            }
        />
    </Routes>)
}

export default AppRoutes;