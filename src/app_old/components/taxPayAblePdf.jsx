import React from "react";
import {
  Image,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  page: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    padding: "20px",
  },
  img: {
    objectFit: "cover",
  },
});

const TaxPayAblePdf = () => {
  return (
    // <PDFViewer style={styles.viewer}>
      <Document styles={styles.page}>
        <Page style={styles.page}>
          <View>
            <Text>
              www.itaxeasy.com
            </Text>
            <Text>Email : info@itaxeasy.com</Text>
          </View>
        </Page>
      </Document>
    // </PDFViewer>
  );
};

export default TaxPayAblePdf;