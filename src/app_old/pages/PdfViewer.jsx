import React, { Component, useContext, useEffect } from "react";
import { StoreContext } from "../store/store-context";
import {
  Image,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Link,
} from "@react-pdf/renderer";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";

const styles = StyleSheet.create({
    page: {
      backgroundColor: "#E4E4E4",
    },
    header: {
    alignSelf: 'center',
    width: '90%',
    margin: '50px 0 30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  title: {
    flex: 1, 
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#2a275c',
  },
  
  image: {
    width: 70,
    opacity: 0.5,
  },
    rowViewHeader: {
      width: '90%',
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'center',
      border: '1px solid #ccc',
      paddingTop: 8,
      paddingBottom: 8,
      backgroundColor: '#719cdb',
      fontWeight: 'bold',
      fontSize: 18,
    },
    rowView: {
      width: '90%',
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'center',
      border: '1px solid #ccc',
      paddingTop: 8,
      paddingBottom: 8,
    },
    viewer: {
      width: '100vw',
      height: '100vh',
    },
    link: {
      color: 'black',
      textDecoration: 'none',
      paddingRight: 10,
      fontSize: 10,
    },
    footer: {
      position: 'absolute',
      bottom: 0, 
      left: 0, 
      width: '100%',
      textAlign: 'center',
      padding: '10px',
      display: 'flex',
      flexDirection:"row",
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

const PdfViewer = () => {
  const [state, dispatch] = useContext(StoreContext);
  const navigate = useNavigate();
  // console.log("state :", state);

  useEffect(() => {
    if (state.pdfDoc.title === "") {
      navigate(-1);
    }
  }, []);

  return (
    <>
      <PDFViewer style={styles.viewer}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.header}>
              <View style={styles.image}>
                <Image src="/logo.png" />
              </View>
              <View style={styles.title}>
                <Text>{state.pdfDoc.title}</Text>
              </View>
            </View>
            <View style={styles.rowViewHeader}>
              {state.pdfDoc.column.map((c, i) => (
                <Text
                  key={`column-${i}`} // Use a stable key based on index
                  style={{
                    position: "relative",
                    width: `${100 / state.pdfDoc.column.length}%`,
                    paddingLeft: 20,
                  }}
                >
                  {c}
                </Text>
              ))}
            </View>
            {state.pdfDoc.data.map((rowData, j) => (
              <View key={`row-${j}`} style={styles.rowView}>
                {state.pdfDoc.column.map((c, i) => (
                  <Text
                    key={`row-${j}-column-${i}`} // Use a stable key based on row and column indices
                    style={{
                      width: `${100 / state.pdfDoc.column.length}%`,
                      paddingLeft: 20,
                      fontSize: "12px",
                    }}
                  >
                    {rowData[c]}
                  </Text>
                ))}
              </View>
            ))}

            <View style={styles.footer}>
              <Link style={styles.link} src="itaxeasy.com">
                www.itaxeasy.com{"   |   "}
              </Link>
              <Text style={styles.link}>Email : info@itaxeasy.com</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};

export default PdfViewer;
