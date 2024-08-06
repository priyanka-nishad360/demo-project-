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

const SipCal = () => {
  const monthlyInvestmentRef = useRef("");
  const rateRef = useRef("");
  const timeperiodRef = useRef("");
  const [showdata, setShowData] = useState("");
  const [showTableData, setShowTableData] = useState([]);
  const [showTableMonthData, setShowTableMonthData] = useState([]);
  const [loading, setLoading] = useState("");
  const [showStat, setShowStat] = useState();
  const pdf_ref = useRef();
  const generatePDF = useReactToPrint({
      content: () => pdf_ref.current,
      documentTitle: "Sip",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const principal = +monthlyInvestmentRef.current.value;
    const rate = +rateRef.current.value;
    const years = +timeperiodRef.current.value;

    const monthlyRate = rate / 12 / 100;
    const interest =
      principal *
      (((1 + monthlyRate) ** (years * 12) - 1) / monthlyRate) *
      (1 + monthlyRate);

    const invested = principal * (years * 12);

    setShowData({
      invested: invested.toFixed("2"),
      total: (invested + (interest - invested)).toFixed("2"),
      gain: (interest - invested).toFixed("2"),
    });

    setLoading(false);
    setShowStat(true);
  };
  const data = {
    labels: ["Invested", "Gain"],
    datasets: [
      {
        // label: '# of Votes',
        data: [showdata.invested, showdata.gain],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <SearchResult_section title="Sip Calculator">
        <li>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 ">
                    <div>
                        <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label inline-block mb-2 text-gray-700"
                        >
                        Monthy Investment
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
                            placeholder="Invested"
                            ref={monthlyInvestmentRef}
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
                        Expected return rate (P.A.)
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
                            ref={rateRef}
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
                            ref={timeperiodRef}
                        />
                        <div className="flex items-center bg-primary text-white  rounded-r px-4">
                            Y
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
            {showStat ? (
            <>
                <div className="m-auto p-4 bg-neutral-50 max-w-sm">
                    <Pie data={data} />
                </div>
                
                <div  className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 place-content-center">
                    <div className="block p-6 rounded-lg shadow-lg bg-white">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 text-center">
                        Invested
                        </h5>
                        <h3 className="text-2xl">
                        ₹ <span className="text-xl">{showdata.invested}/-</span>
                        </h3>
                    </div>
                    <div className="block p-6 rounded-lg shadow-lg bg-white">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 text-center">
                        Gain
                        </h5>
                        <h3 className="text-2xl">
                        ₹ <span className="text-xl">{showdata.gain}/-</span>
                        </h3>
                    </div>
                    <div className="block p-6 rounded-lg shadow-lg bg-white">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 text-center">
                        Total
                        </h5>
                        <h3 className="text-2xl">
                        ₹ <span className="text-xl">{showdata.total}/-</span>
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

export default SipCal;
