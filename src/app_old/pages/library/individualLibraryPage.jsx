import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Document, Page, PDFViewer } from "@react-pdf/renderer";

import styled from "styled-components";
import { css } from "styled-components";
import { useAuth } from "../../hooks/useAuth.js";

import { PdfDownloadButton } from "./PdfDownloadbtn";

export default function IndividualLibraryPage() {
  const { token } = useAuth();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [pageData, setPageData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const asynFunc = async () => {
        setLoading(true);
        const response = await fetch(
          `https://api.itaxeasy.com/library/getOne/${id}`,
          {
            method: "GET",
            headers: new Headers({
              Authorization: `Bearer ${token}`,
            }),
          }
        );

        const data = await response.json();
        console.log("data", data);
        setPageData(data);
        setLoading(false);
      };

      asynFunc();
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed h-screen w-screen bg-white flex items-center justify-center">
          <img src="/loading.svg" alt="loading..." style={{ width: "100px" }} />
        </div>
      ) : (
        <div className=" lg:w-7/12 m-auto p-1 mt-5 mb-5">
          <div
            size="A4"
            style={{ backgroundColor: "#E4E4E4" }}
            className="flex"
          >
            <div className="mx-auto w-11/12 py-8">
              <div className="flex items-center mb-8">
                <div className="w-20 opacity-50">
                  <img src="/logo.png" alt="Logo" className="w-full" />
                </div>
                <div className="flex-1 text-center">
                  <h1 className="text-3xl font-bold text-indigo-900">
                    VERIFICATION DETAILS
                  </h1>
                </div>
              </div>
              <div
                style={{ backgroundColor: "#86b1f1" }}
                className="grid grid-cols-2 gap-2 w-11/12 mx-auto font-bold text-xl p-2"
              >
                <div className="col-span-1 p-2">
                  <p className="pl-5">Label</p>
                </div>
                <div className="col-span-1 p-2">
                  <p className="pl-5">Description</p>
                </div>
              </div>
              {rowData("Pan", pageData.pan)}
              {rowData("Section", pageData.section)}
              {rowData("Sub Section", pageData.sub_section)}
              {rowData("Subject", pageData.subject)}
              {rowData("AO Order", pageData.ao_order)}
              {rowData("ITAT No. ", pageData.itat_no)}
              {rowData("Judgment. ", pageData.judgment)}
              {rowData("Appeal No. ", pageData.appeal_no)}
              {rowData("Respondent. ", pageData.respondent)}
              {rowData("Appealant. ", pageData.appellant)}
              {rowData("Appeal Filled By. ", pageData.appeal_filed_by)}
              {rowData("Appeal Type. ", pageData.appeal_type)}
              {rowData("Order result. ", pageData.order_result)}
              {rowData("Tribunal Order Date. ", pageData.tribunal_order_date)}
              {rowData("Assesment Year ", pageData.assessment_year)}
              {rowData("Conclusion. ", pageData.conclusion)}
              <div className="bottom-0 left-0 w-full py-4 text-center">
                <a
                  href="https://www.itaxeasy.com"
                  className="mr-2 text-black text-sm no-underline"
                >
                  www.itaxeasy.com
                </a>
                <span className="text-black text-sm">{" | "}</span>
                <span className="text-black text-sm">
                  Email : info@itaxeasy.com
                </span>
              </div>
            </div>
          </div>
          <br />
          <div className="flex justify-center">
            <PdfDownloadButton pageData={pageData} />
          </div>
        </div>
      )}
    </>
  );
}

function rowData(label, desc) {
  return (
    <>
      <div
        style={{ border: "1px solid #ccc" }}
        className="grid grid-cols-2 gap-2 w-11/12 mx-auto p-2 border"
      >
        <div className="col-span-1 p-2">
          <p>{label}</p>
        </div>
        <div className="col-span-1 p-2">
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
}
