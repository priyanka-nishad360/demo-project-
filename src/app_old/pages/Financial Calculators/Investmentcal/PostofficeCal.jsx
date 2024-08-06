"use client";
import React, { useRef, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
const MOM_ITAX_URL = process.env.NEXT_PUBLIC_MOM_ITAX_URL;
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import SearchResult_section from "@/components/pagesComponents/pageLayout/SearchResult_section.js";
import Image from "next/image";
ChartJS.register(ArcElement, Tooltip, Legend);

const PostofficeCal = () => {
  const investmentAmountRef = useRef("");
  const interestRateRef = useRef("");
  const [showdata, setShowData] = useState("");
  const [loading, setLoading] = useState("");
  const [showStat, setShowStat] = useState(false);
  const pdf_ref = useRef();
  const generatePDF = useReactToPrint({
      content: () => pdf_ref.current,
      documentTitle: "PostOfice (MIS)",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await axios
      .post(`${MOM_ITAX_URL}/calculator/miscellaneous/post-office-mis`, {
        investmentAmount: investmentAmountRef.current.value,
        interestRate: interestRateRef.current.value,
      })
      .then(function (response) {
        // console.log(response.data);
        let a = response.data.results.monthlyIncome;
        setShowData(a.toFixed(0));
        setLoading(false);
        setShowStat(true);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };
  const data = {
    labels: ["Monthly Income"],
    datasets: [
      {
        // label: '# of Votes',
        data: [showdata],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <SearchResult_section title="Post Office (MIS) Calculator">
        <li>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 ">
                <div>
                    <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label inline-block mb-2 text-gray-700"
                    >
                    Investment Amount
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
                        placeholder="Investment Amount"
                        ref={investmentAmountRef}
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
                    Interest Rate
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
                        placeholder="Interest Rate "
                        ref={interestRateRef}
                    />
                    <div className="flex items-center bg-primary text-white  rounded-r px-4">
                        %
                    </div>
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
            {showdata ? (
                <>
                    <div className="m-auto p-4 bg-neutral-50 max-w-sm">
                        <Pie data={data} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 mt-5 gap-2">
                        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm  mx-4">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 text-center">
                            Monthly Income
                        </h5>
                        <h3 className="text-2xl">
                            ₹ <span className="text-xl">{showdata}/-</span>
                        </h3>
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

export default PostofficeCal;
