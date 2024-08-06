import { PDFDownloadLink } from "@react-pdf/renderer";

import PdfViewer from "./libraryPdfViewer";

export const PdfDownloadButton = ({ pageData, flag }) => {
  const buttonStyle = {
    padding: flag ? "": "15px 40px",
    borderRadius: flag ?"" : "9px",
    backgroundColor: flag ? "" : "#2a275c", // Use a different background color when flag is false
    color: flag ? "": "white",
    fontWeight: flag ?"" : "bold",
  };

  return (
    <PDFDownloadLink
      style={buttonStyle}
      document={<PdfViewer libraryPdfDoc={pageData} />}
      fileName="library.pdf"
    >
      {({ blob, url, loading, error }) => (loading ? "Loading document..." : "Download PDF")}
    </PDFDownloadLink>
  );
};

  