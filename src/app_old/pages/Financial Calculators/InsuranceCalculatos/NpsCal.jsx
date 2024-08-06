"use client";
import React, { useRef, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";
const MOM_ITAX_URL = process.env.NEXT_PUBLIC_MOM_ITAX_URL;
import uuid from "react-uuid";
// import ReactHTMLTableToExcel from '@react-html-table-to-excel';
import { useReactToPrint } from "react-to-print";
import SearchResult_section from "@/components/pagesComponents/pageLayout/SearchResult_section.js";
import Image from "next/image";
ChartJS.register(ArcElement, Tooltip, Legend);

const NpsCal = () => {
  const monthlyinvestmentRef = useRef(0);
  const roiRef = useRef(0);
  const ageRef = useRef(0);
  const [showdata, setShowData] = useState("");
  const [showTableData, setShowTableData] = useState([]);
  const [showStat, setShowStat] = useState(false);
  const [loading, setLoading] = useState("");
  const pdf_ref = useRef();
  const generatePDF = useReactToPrint({
      content: () => pdf_ref.current,
      documentTitle: "NPS",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await axios
      .post(`${MOM_ITAX_URL}/calculator/miscellaneous/nps-returns`, {
        monthlyInvestment: monthlyinvestmentRef.current.value,
        rate: roiRef.current.value,
        currentAge: ageRef.current.value,
      })
      .then(function (response) {
        console.log(response.data);
        setShowData(response.data.results);
        setShowTableData(response.data.results.yearlyGain);
        setLoading(false);
        setShowStat(true);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };

  const data = {
    labels: ["Total", "Invested", "Gain"],
    datasets: [
      {
        // label: '# of Votes',
        data: [showdata.total, showdata.invested, showdata.gain],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <SearchResult_section title="NPS Calculator">
        <li>
          <form action="" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 ">
                    <div className="mb-3 xl:w-75 mx-2">
                        <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label inline-block mb-2 text-gray-700"
                        >
                        Monthly Investment
                        </label>
                        <div className="flex">
                        <input
                            type="number"
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
                            placeholder="Investment Amount                                                "
                            ref={monthlyinvestmentRef}
                        />
                        <div className="flex items-center bg-primary text-white  rounded-r px-4">
                            ₹
                        </div>
                        </div>
                    </div>
                    <div className="mb-3 xl:w-75 mx-2">
                        <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label inline-block mb-2 text-gray-700"
                        >
                        Rate Of Interest (P.A.)
                        </label>
                        <div className="flex">
                        <input
                            type="number"
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
                </div>
                <div className="mb-3 xl:w-75 mx-2">
                    <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label inline-block mb-2 text-gray-700"
                    >
                    Current Age
                    </label>
                    <div className="flex">
                    <input
                        type="number"
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
                        placeholder="Current Age"
                        ref={ageRef}
                    />
                    <div className="flex items-center bg-primary text-white  rounded-r px-4">
                        Y
                    </div>
                    </div>
                </div>
              <div className="grid gap-4 lg:p-4 place-content-center grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] xl:grid-cols-2 lg:grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))]">
                <button
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

        <li className="lg:col-span-2 space-y-4 bg-gray-200 p-4" ref={pdf_ref}>
          {showStat ? (
            <>
              <div className="m-auto max-w-sm  p-4 bg-neutral-50">
                <Pie data={data} />
              </div>
              <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 place-content-center">
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm  mx-4">
                  <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 text-center">
                    Total
                  </h5>
                  <h3 className="text-2xl">
                    Rs.<span className="text-xl">{showdata.total}/-</span>
                  </h3>
                </div>
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm  mx-4">
                  <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 text-center">
                    Invested
                  </h5>
                  <h3 className="text-2xl">
                    Rs.<span className="text-xl">{showdata.invested}/-</span>
                  </h3>
                </div>
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm  mx-4">
                  <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 text-center">
                    Gain
                  </h5>
                  <h3 className="text-2xl">
                    Rs.<span className="text-xl">{showdata.gain}/-</span>
                  </h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-2 p-2 bg-neutral-50">
                <div className="flex flex-col">
                  {/* <ReactHTMLTableToExcel
                                id="test-table-xls-button"
                                className="download-table-xls-button"
                                table="table-to-xls"
                                filename="tablexls"
                                sheet="tablexls"
                                buttonText="Download as XLS" /> */}
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <h6 className="text-primary mt-5">Yearly Gain</h6>

                        <table id="table-to-xls" className="min-w-full">
                          <thead className="border-b">
                            <tr>
                              <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                              >
                                year
                              </th>
                              <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                              >
                                Investment Amount
                              </th>
                              <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                              >
                                Interest Earned
                              </th>
                              <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                              >
                                Maturity Amount
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {showTableData.map((currdata, k) => {
                              return (
                                <>
                                  <tr className="border-b" key={uuid()}>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {currdata.year}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {currdata.investment_amount}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {currdata.interest_earned}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {currdata.maturity_amount}
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                          </tbody>
                        </table>
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
    </>
  );
};

export default NpsCal;
