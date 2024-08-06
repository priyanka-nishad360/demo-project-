import React, { Component,useContext, useEffect } from "react";
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
import uuid from "react-uuid"
import { useNavigate } from "react-router-dom";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        color: "black",
        marginTop:"17px"
        
    },
    rowViewHeader: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        border: "1px solid grey",
        paddingTop: 8,
        paddingBottom: 8,
        textAlign: "center",
        backgroundColor: "#0070ff",
        fontWeight: "bold",
        fontSize: "18px",
        color:"white"
    },
    rowView: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        border: "1px solid grey",
        paddingTop: 8,
        paddingBottom: 8,
        textAlign: "center",
    },
    image: {
        position: "absolute",
        left: "17%",
        top: "5%",
        transform: "translate(-50%,-50%)",
        width: 40,
        height: 40,
        // opacity: 0.2,
        zIndex: -100,
        margin: "auto",
        color:"blue",
        
    },
    viewer: {
        width: window.innerWidth, //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
    },
    link: {
        color: "black",
        textDecoration: "none",
        paddingRight: "10px",
        fontSize: "10px",
    },
    footer: {
        position: "relative",
        //  bottom: "10%",
        marginTop:"20%",
        left: "7%",
        textAlign: "center",
        transform: "translate(-50%,0)",
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center"
        
       
    },
    newHeader:{
        width: "90%",
        display: "flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        alignSelf: "center",
        border: "1px solid grey",
        textAlign:"justify",
        backgroundColor:"orange",
        marginBottom:"3px",
        paddingTop:"8px",
        paddingBottom:"8px"
    }
});





const PdfViewer1 = () => {
    const [state, dispatch] = useContext(StoreContext);
    const navigate=useNavigate()

    useEffect(()=>{

        if(state.pdfDoc1.title1===''){
            navigate(-1)
        }

    },[])



    return (
        <>
            <PDFViewer style={styles.viewer}>
                <Document styles={styles.page}>
                    <Page size="A4" style={styles.page}>
                        <Image style={styles.image} src="/logo.png" />
                       
                        <Text
                            style={{
                                position: "relative",
                                textAlign: "center",
                                fontSize: "20px",
                                fontWeight: "bold",
                                marginBottom: 15,
                                color: "#2a275c",
                            }}
                        >
                            {state.pdfDoc1.title1}
                        </Text>
                       
                        <View style={styles.newHeader}>
                            {state.pdfDoc1.detail1.map((c,i) => (
                                <Text
                                    key={uuid()+i}

                                    style={{
                                        position: "relative",
                                        color:"white",
                                        width:"auto",
                                        fontSize:"14px"
                                    }}
                                >
                                    {c}
                                </Text>
                            ))}
                        </View>
                        <View style={styles.rowViewHeader}>
                            {state.pdfDoc1.column1.map((c,i) => (
                                <Text
                                    key={uuid()+i}
                                    style={{
                                        position: "relative",
                                        width: `${100 / state.pdfDoc1.column1.length}%`,
                                        fontSize:"10px"
                                    }}
                                >
                                    {c}
                                </Text>
                            ))}
                        </View>
                        {state.pdfDoc1.data1.map((rowData1) => (
                            <>
                                <View style={styles.rowView}>
                                    {state.pdfDoc1.column1.map((c) => (
                                        <Text
                                            key={uuid()}
                                            style={{
                                                width: `${100 / state.pdfDoc1.column1.length}%`,
                                                position: "relative",
                                                fontSize: "10px",
                                            }}
                                        >
                                            {rowData1[c]}
                                        </Text>
                                    ))}
                                </View>
                            </>
                        ))}
                        <View style={styles.footer}>
                            <Link style={styles.link} src="itaxeasy.com">
                                www.itaxeasy.com{"   |   "}
                            </Link>
                            <Text style={styles.link}>
                                Email : info@itaxeasy.com
                            </Text>
                        </View>
                       
                    </Page>
                    
                   
                </Document>
               
                
            </PDFViewer>
            
        </>
    );
};

export default PdfViewer1;
