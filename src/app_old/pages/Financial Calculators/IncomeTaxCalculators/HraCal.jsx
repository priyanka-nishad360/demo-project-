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

const HraCal = () => {
  const basiclRef = useRef("");
  const hraRef = useRef("");
  const rentpaidRef = useRef("");
  const allowancesfreRef = useRef("");
  const metrocityRef = useRef("");
  const [showdata, setShowData] = useState("");
  const [loading, setLoading] = useState("");
  const pdf_ref = useRef();
  const generatePDF = useReactToPrint({
      content: () => pdf_ref.current,
      documentTitle: "HRA",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await axios
      .post(`${MOM_ITAX_URL}/calculator/miscellaneous/hra`, {
        basic: basiclRef.current.value,
        hra: hraRef.current.value,
        rentPaid: rentpaidRef.current.value,
        allowances: allowancesfreRef.current.value,
        metroCity: metrocityRef.current.value,
      })
      .then(function (response) {
        console.log(response.data.results);
        setShowData(response.data.results.hraExempted);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };
  const handleClear=()=>{
    basiclRef.current.value='';
    hraRef.current.value='';
    rentpaidRef.current.value='';
    allowancesfreRef.current.value='';
    metrocityRef.current.value='';
    setShowData('')
  }
  const data = {
    labels: ["HRA"],
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
    <SearchResult_section title="HRA Calculator">
        <li>
        <form onSubmit={handleSubmit}>
            <div className="grid gap-4 p-3 sm:grid-cols-2 lg:grid-cols-1 ">
                <div>
                    <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label inline-block mb-2 text-gray-700"
                    >
                    Basic
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
                        placeholder="Basic"
                        ref={basiclRef}
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
                    Hra
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
                        placeholder="Hra"
                        ref={hraRef}
                    />
                    <div className="flex items-center bg-primary text-white  rounded-r px-4">
                        ₹
                    </div>
                    </div>
                </div>
                
                
                <div className="">
                    <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label inline-block mb-2 text-gray-700"
                    >
                    Rent Paid
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
                        placeholder="Rent Paid"
                        ref={rentpaidRef}
                    />
                    <div className="flex items-center bg-primary text-white  rounded-r px-4">
                        ₹
                    </div>
                    </div>
                </div>
                <div className="">
                    <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label inline-block mb-2 text-gray-700"
                    >
                    Allowances
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
                        placeholder="allowances"
                        ref={allowancesfreRef}
                    />
                    <div className="flex items-center bg-primary text-white  rounded-r px-4">
                        ₹
                    </div>
                    </div>
                </div>
               
                
                <div>
                    <div className="flex flex-col">
                    <label className="form-label inline-block mb-2 text-gray-700" htmlFor="">Are You From Metro City ?</label>
                    <div className="flex ">
                        <div className="mb-3 w-full">
                        <select
                            className="form-select appearance-none
                                                        block
                                                        w-full
                                                        px-3
                                                        py-1.5
                                                        text-base
                                                        font-normal
                                                        text-gray-700
                                                        bg-white bg-clip-padding bg-no-repeat
                                                        border border-solid border-gray-300
                                                        rounded
                                                        transition
                                                        ease-in-out
                                                        m-0
                                                    
                                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            aria-label="Default select example"
                            ref={metrocityRef}
                        >
                            <option selected value="yes">
                            Yes
                            </option>
                            <option value="no">No</option>
                        </select>
                        </div>
                    </div>
                    </div>
                </div>
            
            </div>
            <div className="grid gap-4 lg:p-4 place-content-center grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] xl:grid-cols-2 lg:grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))]">
                <button
                disabled={loading}
                type="submit"
                className={`btn-primary ${loading?" cursor-not-allowed ":""}`}
                >
                    {loading ? (<span className="spinner"></span>):("Calculate")}
                </button>
                <button type="button" onClick={handleClear} className="btn-primary bg-red-500 hover:bg-red-600">Clear</button>
                {showdata && (
                <button type="button" className="btn-primary lg:col-span-2" onClick={generatePDF}>Print</button>
                )}
                {showdata && (
                <button type="button" className="btn-primary bg-green-500 hover:bg-green-600">Download</button>
                )}
            </div>
        </form>
        </li>
        <li className="lg:col-span-2 bg-gray-200 p-4" ref={pdf_ref}>
            {showdata?
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-2">
                <div className="m-auto ">
                    <Pie data={data} />
                </div>
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm  mx-4">
                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 text-center">
                    Hra Exempted
                    </h5>
                    <h3 className="text-2xl">
                    ₹ <span className="text-xl">{showdata}/-</span>
                    </h3>
                </div>
            </div>
            :(<div className="h-full w-full grid place-items-center">
            <Image src='/financial_cal.gif' alt="how to use financial calculators" height={600} width={800} />
        </div>)}
        </li>
    </SearchResult_section>
  );
};

export default HraCal;
