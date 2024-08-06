import React from "react";
import {
  Image,
  Document,
  Page,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  viewer: {
    width: window.innerWidth / 3,
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

const imgToPdfViewer = ({ fileUrl }) => {
  if (!fileUrl) {
    return;
  } else if (!fileUrl[0]) {
    return;
  }
  return (
    <PDFViewer style={styles.viewer}>
      <Document styles={styles.page}>
        <Page style={styles.page}>
          {/* {fileUrl && <Image style={styles.img} src={fileUrl} />} */}
          {fileUrl
            ? fileUrl.map((item, i) => (
                <Image key={i} style={styles.img} src={item[0]} />
              ))
            : null}
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default imgToPdfViewer;
