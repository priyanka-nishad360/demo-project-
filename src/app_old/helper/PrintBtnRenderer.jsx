import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { GrDocumentPdf } from "react-icons/gr"
import { useContext } from "react";
import { StoreContext } from "../store/store-context";
import { LIB_PDF_DOC } from "../store/actions";
import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

import { useAuth } from "../hooks/useAuth";


const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding:0 10px;
    outline: none;
    background-color: #2a275c;
    color: white;
    border-radius: 5px;

`

const PdfIcon = styled(GrDocumentPdf)`
    color: white;
    background-color: white;
    fill: white;
`

export default function PrintBtnRenderer(p) {
    const navigate = useNavigate()
    const { token } = useAuth();

    const [state, dispatch] = useContext(StoreContext)

    const printClickHandler = async () => {

       try{
           const response = await axios.get(`${BASE_URL}/library/${p.data.id}`, {
               headers: {
                   Authorization: `Bearer ${token}`
               }
           })
           

            dispatch(
               {
                   type: LIB_PDF_DOC,
                   payload: {
                       pan: response.data.pan,
                       section: response.data.section,
                       sub_section: response.data.sub_section,
                       subject: response.data.subject,
                       ao_order: response.data.ao_order,
                       itat_no: response.data.itat_no,
                       rsa_no: response.data.rsa_no,
                       bench: response.data.bench,
                       appeal_no: response.data.appeal_no,
                       appellant: response.data.appellant,
                       respondent: response.data.respondent,
                       appeal_type: response.data.appeal_type,
                       appeal_filed_by: response.data.appeal_filed_by,
                       order_result: response.data.order_result,
                       tribunal_order_date: response.data.tribunal_order_date,
                       assessment_year: response.data.assessment_year,
                       judgment: response.data.judgment,
                       conclusion: response.data.conclusion,
                   }
               }
           )

              navigate("/lib-pdfViewer")

       }catch(err){
        console.log(err)
       }
    }

    return <Button onClick={printClickHandler}>
        <PdfIcon /> Print
    </Button>
}