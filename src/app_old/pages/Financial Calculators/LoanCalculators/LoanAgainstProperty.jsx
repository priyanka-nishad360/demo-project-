"use client";
import React, { useContext, useRef, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";
const MOM_ITAX_URL = process.env.NEXT_PUBLIC_MOM_ITAX_URL;
import uuid from "react-uuid";
import { RiFileDownloadFill } from "react-icons/ri";
import { StoreContext } from "../../../store/store-context";
import { PDF_DOC, PDF_DOC1 } from "../../../store/actions";
import { useRouter } from "next/navigation";
import { useReactToPrint } from "react-to-print";
import SearchResult_section from "@/components/pagesComponents/pageLayout/SearchResult_section.js";
import Image from "next/image";

ChartJS.register(ArcElement, Tooltip, Legend);

const LoanAgainstProperty = () => {
  const loanamountlRef = useRef("");
  const roiRef = useRef("");
  const loanTenureRef = useRef("");
  const [showdata, setShowData] = useState("");
  const [showTableMonthData, setShowTableMonthData] = useState([]);
  const [showStat, setShowStat] = useState(false);
  const [loading, setLoading] = useState("");
  // const [state, dispatch] = useContext(StoreContext);
        const pdf_ref = useRef();
    const generatePDF = useReactToPrint({
        content: () => pdf_ref.current,
        documentTitle: "Loan Against Property",
    });

  const navigate = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await axios
      .post(`${MOM_ITAX_URL}/calculator/miscellaneous/home-loan-emi`, {
        loanAmount: loanamountlRef.current.value,
        rate: roiRef.current.value,
        loanTenure: loanTenureRef.current.value,
      })
      .then(function (response) {
        // console.log(response.data);

        const info = response.data.results;
        let total = +info.totalAmount;
        const emi = +info.emi;
        let openingBalance = +loanamountlRef.current.value;
        const loopArray = Array(+loanTenureRef.current.value * 12);
        const MonthData = [];
        for (let i = 0; i < loopArray.length; i++) {
          let interest = Math.floor(
            openingBalance * (+roiRef.current.value / 100 / 12)
          );
          let principal =
            emi -
            Math.floor(openingBalance * (+roiRef.current.value / 100 / 12));
          let closingBalance = openingBalance - principal;
          MonthData.push({
            srNo: i + 1,
            openingBalance: openingBalance,
            payment: emi,
            interest: interest,
            principal: Math.ceil(principal),
            remainingLoan:
              closingBalance > 0 && i + 1 != loopArray.length
                ? closingBalance
                : 0,
          });
          openingBalance = closingBalance;
        }

        setShowData(response.data.results);
        setShowTableMonthData(MonthData);
        setLoading(false);
        setShowStat(true);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };

  const data = {
    labels: ["Loan Amount", "EMI", "Total Interest"],
    datasets: [
      {
        // label: '# of Votes',
        data: [showdata.loanAmount, showdata.emi, showdata.totalInterest],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (

        <SearchResult_section title="Loan Against Property Calculator">
            <li>
                <form action="" onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 ">
                        <div>
                            <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label inline-block mb-2 text-gray-700"
                            >
                            Loan Amount
                            </label>
                            <div className="flex">
                            <input
                                type="text"
                                className="form-control
                                                block
                                                w-full
                                                px-3    
                                                py-1.5
                                                text-base
                                                font-normal
                                                text-gray-700
                                                bg-white bg-clip-padding
                                                border border-solid border-gray-300
                                                rounded-l
                                                transition
                                                ease-in-out
                                                m-0

                                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                            "
                                id="exampleFormControlInput1"
                                placeholder="Loan Amount                                                "
                                ref={loanamountlRef}
                            />
                            <div className="flex items-center bg-primary text-white  rounded-r px-4">
                                ₹
                            </div>
                            </div>
                        </div>
                        <div>
                            <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label inline-block mb-2 text-gray-700"
                            >
                            Rate Of Interest (P.A.)
                            </label>
                            <div className="flex">
                            <input
                                type="text"
                                className="form-control
                                                block
                                                w-full
                                                px-3
                                                py-1.5
                                                text-base
                                                font-normal
                                                text-gray-700
                                                bg-white bg-clip-padding
                                                border border-solid border-gray-300
                                                rounded-l
                                                transition
                                                ease-in-out
                                                m-0

                                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                            "
                                id="exampleFormControlInput1"
                                placeholder="Rate Of Interest"
                                ref={roiRef}
                            />
                            <div className="flex items-center bg-primary text-white  rounded-r px-4">
                                %
                            </div>
                            </div>
                        </div>
                        <div>
                            <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label inline-block mb-2 text-gray-700"
                            >
                            Time Period (In Years)
                            </label>
                            <div className="flex">
                            <input
                                type="text"
                                className="form-control
                                                block
                                                w-full
                                                px-3
                                                py-1.5
                                                text-base
                                                font-normal
                                                text-gray-700
                                                bg-white bg-clip-padding
                                                border border-solid border-gray-300
                                                rounded-l
                                                transition
                                                ease-in-out
                                                m-0

                                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                            "
                                id="exampleFormControlInput1"
                                placeholder="Time Period"
                                ref={loanTenureRef}
                            />
                            <div className="flex items-center bg-primary text-white  rounded-r px-4">
                                Y
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="grid gap-4 lg:p-4 place-content-center grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] xl:grid-cols-2 lg:grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))]">
                            <button
                                onClick={handleSubmit}
                                onKeyDown={(event) =>
                                    event.key === "Enter" ? handleSubmit() : ""
                                }
                                disabled={loading}
                                className={`btn-primary ${loading?" cursor-not-allowed ":""}`}
                            >
                                {loading ? (<span className="spinner"></span>):("Calculate")}
                                    
                            </button>
                            {showStat && (
                            <button type="button" className="btn-primary lg:col-span-2" onClick={generatePDF}>Download</button>
                            )}
                        </div>
                </form>
            </li>
          <li className="lg:col-span-2 bg-gray-200 p-4" ref={pdf_ref}>
            {showStat ? (
                <>
                <div className="m-auto max-w-sm bg-neutral-50 p-4">
                    <Pie data={data} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 mt-5 gap-2">
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm  mx-4">
                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 text-center">
                        EMI
                    </h5>
                    <h3 className="text-2xl">
                        ₹ <span className="text-xl">{showdata.emi}/-</span>
                    </h3>
                    </div>
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm  mx-4">
                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 text-center">
                        Total Interest{" "}
                    </h5>
                    <h3 className="text-2xl">
                        ₹{" "}
                        <span className="text-xl">{showdata.totalInterest}/-</span>
                    </h3>
                    </div>
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm  mx-4">
                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 text-center">
                        Total Amount{" "}
                    </h5>
                    <h3 className="text-2xl">
                        ₹ <span className="text-xl">{showdata.totalAmount}/-</span>
                    </h3>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                    <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden w-4/5 flex flex-col justify-center items-center">
                            <h6 className="text-primary mt-5">
                            Monthly Calculation
                            </h6>

                            <table className="min-w-full border border-gray-300">
                            <colgroup>
                                <col className="w-300" />
                                <col className="w-300" />
                                <col />
                            </colgroup>
                            <thead className="border-b">
                                <tr>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 border-r border-b border-gray-300  bg-primary dark:text-white w-1/6"
                                >
                                    Month
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 border-r border-b border-gray-300  bg-primary dark:text-white w-1/6"
                                >
                                    Opening Balance
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 border-r border-b border-gray-300 bg-primary dark:text-white w-1/6"
                                >
                                    EMI
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 border-r border-b border-gray-300  bg-primary dark:text-white"
                                >
                                    Interest
                                </th>

                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 border-r border-b border-gray-300  bg-primary dark:text-white w-1/6"
                                >
                                    Principal Repaid
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 border-b border-gray-300  bg-primary dark:text-white w-1/6"
                                >
                                    Closing Balance
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                {showTableMonthData.map((currdata) => {
                                return (
                                    <tr className="border-b" key={uuid()}>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-gray-300 whitespace-nowrap">
                                        {currdata.srNo}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-gray-300 whitespace-nowrap">
                                        {currdata.openingBalance}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-gray-300 whitespace-nowrap">
                                        {currdata.payment}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-gray-300 whitespace-nowrap">
                                        {currdata.interest}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-gray-300 whitespace-nowrap">
                                        {currdata.principal}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 border-r border-gray-300 whitespace-nowrap">
                                        {currdata.remainingLoan}
                                    </td>
                                    </tr>
                                );
                                })}
                            </tbody>
                            </table>
                        </div>

                        <div className="flex flex-col items-end justify-center z-50 mt-10">
                            <button
                            className=" py-4 px-5 rounded-md bg-[#2a275c] text-white flex items-center"
                            onClick={() => {
                                dispatch({
                                type: PDF_DOC1,

                                payload: {
                                    title1:
                                    "Installment or Repayment Schedule Chart",
                                    detail1: [
                                    `EMI- ${showdata.emi}`,
                                    `Total Interest- ${showdata.totalInterest}`,
                                    `Total Amount- ${showdata.totalAmount}`,
                                    ],
                                    column1: [
                                    "Month",
                                    "OpeningBalance",
                                    "EMI",
                                    "Interest",
                                    "PrincipalRepaid",
                                    "ClosingBalance",
                                    ],

                                    data1: showTableMonthData.map((currdata) => {
                                    return {
                                        Month: currdata.srNo,
                                        OpeningBalance: currdata.openingBalance,
                                        EMI: currdata.payment,
                                        Interest: currdata.interest,
                                        PrincipalRepaid: currdata.principal,
                                        ClosingBalance: currdata.remainingLoan,
                                    };
                                    }),
                                },
                                });

                                navigate.push("/pdfViewer1");
                            }}
                            >
                            <div>Download PDF</div>
                            <div className="translate-x-2">
                                <RiFileDownloadFill />
                            </div>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </>
            ):(<div className="h-full w-full grid place-items-center">
            <Image src='/financial_cal.gif' alt="how to use financial calculators" height={600} width={800} />
        </div>)}
          </li>
        </SearchResult_section>

  );
};

export default LoanAgainstProperty;
