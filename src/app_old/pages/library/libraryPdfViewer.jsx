import React, { useContext } from "react";
import { StoreContext } from "../../store/store-context";
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

const styles = StyleSheet.create({
  doc: {
    border: "2px solid blue",
  },
  page: {
    display: "flex",
    backgroundColor: "#E4E4E4",
    flexDirection: "column",
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
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#86b1f1',
    fontSize: 14,
  },
  rowView: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    border: '1px solid #ccc',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 30,
    fontWeight: "light"
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

const PdfViewer = (state) => {
  // const [state, dispatch] = useContext(StoreContext);
  console.log("abcd", state);

  return (
    <>
      {state.libraryPdfDoc ? (
        <Document style={styles.doc}>
          <Page size="A4" style={styles.page}>
            <View style={styles.header}>
              <Image style={styles.image} src="/logo.png" />
              <Text style={styles.title}>Case Details</Text>
            </View>
            <View style={styles.rowViewHeader}>
              <Text
                style={{
                  width: `${40}%`,
                  paddingLeft:35
                }}
              >
                Lable
              </Text>
              <Text
                style={{
                  width: `${60}%`,
                  paddingLeft:20
                }}
              >
                Description
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text
                style={{
                  width: `${40}%`,
                  fontSize: "10px",
                }}
              >
                PAN
              </Text>
              <Text
                style={{
                  width: `${60}%`,
                  fontSize: "10px",
                }}
              >
                {state.libraryPdfDoc?.pan}
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text
                style={{
                  width: `${40}%`,
                  fontSize: "10px",
                }}
              >
                Section
              </Text>
              <Text
                style={{
                  width: `${60}%`,
                  fontSize: "10px",
                }}
              >
                {state.libraryPdfDoc?.section}
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text
                style={{
                  width: `${40}%`,
                  fontSize: "10px",
                }}
              >
                Sub Section
              </Text>
              <Text
                style={{
                  width: `${60}%`,
                  fontSize: "10px",
                }}
              >
                {state.libraryPdfDoc?.sub_section}
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text
                style={{
                  width: `${40}%`,
                  fontSize: "10px",
                }}
              >
                Subject
              </Text>
              <Text
                style={{
                  width: `${60}%`,
                  fontSize: "10px",
                }}
              >
                {state.libraryPdfDoc?.subject}
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text
                style={{
                  width: `${40}%`,
                  fontSize: "10px",
                }}
              >
                AO Order
              </Text>
              <Text
                style={{
                  width: `${60}%`,
                  fontSize: "10px",
                }}
              >
                {state.libraryPdfDoc?.ao_order}
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text
                style={{
                  width: `${40}%`,
                  fontSize: "10px",
                }}
              >
                ITAT No.
              </Text>
              <Text
                style={{
                  width: `${60}%`,
                  fontSize: "10px",
                }}
              >
                {state.libraryPdfDoc?.itat_no}
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text
                style={{
                  width: `${40}%`,
                  fontSize: "10px",
                }}
              >
                Judgment
              </Text>
              <Text
                style={{
                  width: `${60}%`,
                  fontSize: "10px",
                }}
              >
                {state.libraryPdfDoc?.judgment}
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text
                style={{
                  width: `${40}%`,
                  fontSize: "10px",
                }}
              >
                Appeal No.
              </Text>
              <Text
                style={{
                  width: `${60}%`,
                  fontSize: "10px",
                }}
              >
                {state.libraryPdfDoc?.appeal_no}
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text
                style={{
                  width: `${40}%`,
                  fontSize: "10px",
                }}
              >
                Respondent
              </Text>
              <Text
                style={{
                  width: `${60}%`,
                  fontSize: "10px",
                }}
              >
                {state.libraryPdfDoc?.respondent}
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text
                style={{
                  width: `${40}%`,
                  fontSize: "10px",
                }}
              >
                Appealant
              </Text>
              <Text
                style={{
                  width: `${60}%`,
                  fontSize: "10px",
                }}
              >
                {state.libraryPdfDoc?.appellant}
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text
                style={{
                  width: `${40}%`,
                  fontSize: "10px",
                }}
              >
                Appeal Filled By
              </Text>
              <Text
                style={{
                  width: `${60}%`,
                  fontSize: "10px",
                }}
              >
                {state.libraryPdfDoc?.appeal_filed_by}
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text
                style={{
                  width: `${40}%`,
                  fontSize: "10px",
                }}
              >
                Appeal Type
              </Text>
              <Text
                style={{
                  width: `${60}%`,
                  fontSize: "10px",
                }}
              >
                {state.libraryPdfDoc?.appeal_type}
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text
                style={{
                  width: `${40}%`,
                  fontSize: "10px",
                }}
              >
                Order result
              </Text>
              <Text
                style={{
                  width: `${60}%`,
                  fontSize: "10px",
                }}
              >
                {state.libraryPdfDoc?.order_result}
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text
                style={{
                  width: `${40}%`,
                  fontSize: "10px",
                }}
              >
                Tribunal Order Date
              </Text>
              <Text
                style={{
                  width: `${60}%`,
                  fontSize: "10px",
                }}
              >
                {state.libraryPdfDoc?.tribunal_order_date}
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text
                style={{
                  width: `${40}%`,
                  fontSize: "10px",
                }}
              >
                Assesment Year
              </Text>
              <Text
                style={{
                  width: `${60}%`,
                  fontSize: "10px",
                }}
              >
                {state.libraryPdfDoc?.assessment_year}
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text
                style={{
                  width: `${40}%`,
                  fontSize: "10px",
                }}
              >
                Conclusion
              </Text>
              <Text
                style={{
                  width: `${60}%`,
                  fontSize: "10px",
                }}
              >
                {state.libraryPdfDoc?.conclusion}
              </Text>
            </View>
            <View style={styles.footer}>
              <Text style={styles.link}>www.itaxeasy.com</Text>
              <Text>|&nbsp;&nbsp;</Text>
              <Text style={styles.link}>Email : info@itaxeasy.com</Text>
            </View>
          </Page>
        </Document>
      ) : (
        <div className="fixed h-screen w-screen bg-white flex items-center justify-center">
          <img src="/loading.svg" alt="loading..." style={{ width: "100px" }} />
        </div>
      )}
    </>
  );
};

export default PdfViewer;
