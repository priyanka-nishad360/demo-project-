import { Component } from "ag-grid-community";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { GrDocumentPdf } from "react-icons/gr"


const Button = styled.button`
    padding:0 20px;
    outline: none;
    background-color: #2a275c;
    color: white;
    border-radius: 5px;

`

export default function BtnCellRenderer(p) {
    const navigate=useNavigate()

    const viewHandler = () => {
        navigate(`${p.data.id}`);
    }

    return (
        <Button onClick={viewHandler} > View</Button>
    )
}