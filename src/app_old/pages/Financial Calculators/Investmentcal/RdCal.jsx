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

const RdCal = () => {
  const principalRef = useRef("");
  const rateRef = useRef("");
  const timeperiodRef = useRef("");
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState("");
  const [showStat, setShowStat] = useState(false);
    const pdf_ref = useRef();
    const generatePDF = useReactToPrint({
        content: () => pdf_ref.current,
        documentTitle: "Recursive Deposit",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const principle = +principalRef.current.value;
    const rate = +rateRef.current.value;
    const months = +timeperiodRef.current.value;

    console.log(principle, months, rate);

    const interestEarned =
      (principle * ((months * (months + 1)) / 24) * rate) / 100;

    const invested = principle * months;

    const totalValue = invested + interestEarned;

    setInfo({
      interestEarned: interestEarned.toFixed("2"),
      invested: invested.toFixed("2"),
      totalValue: totalValue.toFixed("2"),
    });

    setLoading(false);
    setShowStat(true);

    // await axios.post(`${MOM_ITAX_URL}/calculator/miscellaneous/recursive-deposit`, {
    //     principle: principalRef.current.value,
    //     rate: rateRef.current.value,
    //     months: timeperiodRef.current.value,

    // }).then(function (response) {
    //     console.log(response.data);
    //     setShowData(response.data.results)
    //     setLoading(false);

    // })
    //     .catch(function (error) {
    //         console.log(error);
    //         setLoading(false);
    //     });
  };

  const data = {
    labels: ["Principal", "interestEarned"],
    datasets: [
      {
        // label: '# of Votes',
        data: [info.invested, info.interestEarned],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
        <SearchResult_section title="Recursive Deposit Calculator">
        <li>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 ">
                <div>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Principal
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
                      placeholder="Principal"
                      ref={principalRef}
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
                    Months
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
                    placeholder="Months"
                    ref={timeperiodRef}
                    />
                    <div className="flex items-center bg-primary text-white  rounded-r px-4">
                    M
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
            {showStat ?(
                <>
                    <div className="m-auto p-4 bg-neutral-50 max-w-sm">
                    <Pie data={data} />
                    </div>
                    <div  className="grid gap-4 lg:p-4 place-content-center grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm  mx-4">
                            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 text-center">
                            Invested
                            </h5>
                            <h3 className="text-2xl">
                            ₹ <span className="text-xl">{info.invested}/-</span>
                            </h3>
                        </div>
                        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm  mx-4">
                            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 text-center">
                            Interest Earned
                            </h5>
                            <h3 className="text-2xl">
                            ₹ <span className="text-xl">{info.interestEarned}/-</span>
                            </h3>
                        </div>
                        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm  mx-4">
                            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 text-center">
                            Total Value
                            </h5>
                            <h3 className="text-2xl">
                            ₹ <span className="text-xl">{info.totalValue}/-</span>
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

export default RdCal;
