import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

import StoreProvider from "./store/StoreProvider.jsx";
import AppRoutes from "./AppRoutes.jsx";
import { Helmet } from "react-helmet";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Helmet>
      <title>Itax Easy</title>
      <meta
        name="description"
        content="India's Most Trusted Accounting And Financial Platform Continuing The Legacy Of Accounting Firm N.S. Bedi And Associates Since 1972"
      />
      <meta
        name="keywords"
        content="financial Consultant ,financial center,financial Coach,financial capital,Keyword,financial,toyota financial,honda financial,financial Aid,Westlake, financial,financial advisor, financial analyst,
        finacial analyst salary,financial adviser, salary,financial advisor near me,  financial aid office,
        financial abuse, a finencial daim, a financial gain,financial broker, financial brand,financial burden,
        financial breakthrough, financial bob,bsi financial,bmw financial,bmw financial login,bank of anorial financial center, news financial calculator,
        bank of america, fincal, financial Invement Calculators, Investment banking,return on investment,        Investment banker salary sip Investment
        Investment banker salary,Sip Inverment,Invermont Calculator, Maharlika invesment funcl, Investment companies.
        ivestment banker,Investment apps, ivestment advisor,Investment analyst,investment app , investment
        about investment banking, gold good investment, businesss idea with low Investment, best earning app without mevestment, Capital Investment    "
      />
      <meta property="og:image" content="https://itaxeasy.com/logo.svg" />
    </Helmet>
    <StoreProvider>
      <AppRoutes />
    </StoreProvider>
  </React.StrictMode>
);
