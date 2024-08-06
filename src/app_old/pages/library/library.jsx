import axios from "axios";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.js";
import { LibraryTable } from "./LibraryTable";
import CreateLibrary from "./CreateLibrary.jsx";
import { Helmet } from "react-helmet";

export default function Library() {
  const { token } = useAuth();
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState([]);
  const [section, setsection] = useState("");
  const [appeal, setAppeal] = useState("");
  const [subject, setSubject] = useState("");
  const [pan, setPan] = useState("");
  const [sub, setSub] = useState("");
  const [aoOrder, setAoOrder] = useState("");
  const [asYear, setAsYear] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [appType, setAppType] = useState("");
  const [filters, setFilters] = useState({
    pan: "",
    section: "",
    sub_section: "",
    subject: "",
    appeal_no: "",
    ao_order: "",
    appeal_type: "",
    assessment_year: "",
  });
  const [selectedFilter, setSelectedFilter] = useState("");
  // console.log(section);

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const asynFunc = async () => {
        setLoading(true);
        const response = await fetch(
          `https://api.itaxeasy.com/library/getAll`,
          {
            method: "GET",
            headers: new Headers({
              Authorization: `Bearer ${token}`,
            }),
          }
        );

        const data = await response.json();
        // console.log("all data", data);
        setPageData(data.allLibrary);
        setFilterData(data.allLibrary);

        setLoading(false);
      };
      return () => asynFunc();
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  // console.log(pageData);

  const handleSearch = (e) => {
    const val = e.target.value;
    setsection(val);

    const res = filterData.filter((el, i) =>
      el.section.toLowerCase().includes(val.toLowerCase())
    );
    setPageData(res);
  };

  const handleAppeal = (e) => {
    const app = e.target.value;
    setAppeal(app);
    const res = filterData.filter((el, i) =>
      el.appeal_no.toLowerCase().includes(app.toLowerCase())
    );
    setPageData(res);
  };

  const handleSubject = (e) => {
    const sub = e.target.value;
    setSubject(sub);
    const res = filterData.filter((el, i) =>
      el.subject.toLowerCase().includes(sub.toLowerCase())
    );
    setPageData(res);
  };

  const handleAppType = (e) => {
    const typ = e.target.value;
    setAppType(typ);
    const res = filterData.filter((el, i) =>
      el.appeal_type.toLowerCase().includes(typ.toLowerCase())
    );
    setPageData(res);
  };

  const handlePan = (e) => {
    const panNo = e.target.value;
    setPan(panNo);
    const res = filterData.filter((el, i) =>
      el.pan.toLowerCase().includes(panNo.toLowerCase())
    );
    setPageData(res);
  };

  const handleSub = (e) => {
    const subType = e.target.value;
    setSub(subType);
    const res = filterData.filter((el, i) =>
      el.sub_section.toLowerCase().includes(subType.toLowerCase())
    );
    setPageData(res);
  };

  const handleAo = (e) => {
    const ao = e.target.value;
    setAoOrder(ao);
    const res = filterData.filter((el, i) =>
      el.ao_order.toLowerCase().includes(ao.toLowerCase())
    );
    setPageData(res);
  };

  const handleAsYear = (e) => {
    const as = e.target.value;
    setAsYear(as);
    const res = filterData.filter((el, i) =>
      el.assessment_year.toLowerCase().includes(as.toLowerCase())
    );
    setPageData(res);
  };

  // const handleFilterChange = (e) => {
  //   const { name, value } = e.target;
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     [name]: value,
  //   }));
  // };

  // console.log(selectedFilter);
  return (
    <>
      {loading ? (
        <div className="fixed min-h-screen w-screen bg-white flex items-center justify-center w-4/5">
          <img src="/loading.svg" alt="loading..." style={{ width: "100px" }} />
        </div>
      ) : (
        <div className="min-h-screen p-5 w-4/5 m-auto">
          <div className="container mx-auto py-8">
            <h3 className="text-3xl font-bold text-blue-600 mb-8">E-Library</h3>

            <div className="flex flex-wrap items-end mb-4">
              <div className="w-full sm:w-1/2 pr-4 mb-4">
                <label className="text-lg font-bold" htmlFor="filter">
                  Filter by:
                </label>
                <select
                  name="filter"
                  className="w-full px-2 py-2  shadow-lg shadow-blue-500/50 rounded-lg border focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                >
                  <option value="type">Select Type</option>
                  <option value="pan">PAN</option>
                  <option value="section">Section</option>
                  <option value="sub_section">Sub Section</option>
                  <option value="subject">Subject</option>
                  <option value="appeal_no">Appeal No</option>
                  <option value="ao_order">AO Order</option>
                  <option value="appeal_type">Appeal Type</option>
                  <option value="assessment_year">Assessment Year</option>
                </select>
              </div>

              <div className="flex flex-wrap items-end mb-4 w-1/2 px-1 py-2 border rounded-xl shadow-lg shadow-blue-500/50">
                {selectedFilter == "section" && (
                  <div className="flex justify-end gap-3 items-center">
                    <label htmlFor="">SECTION :- </label>
                    <input
                      onChange={handleSearch}
                      value={section}
                      type="text"
                      placeholder="Search For Section"
                      className="px-2 py-1 rounded-lg  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:border-2 focus:outline-none"
                    />
                  </div>
                )}

                {selectedFilter == "appeal_no" && (
                  <div>
                    <label htmlFor="">APPEAL NO :- </label>
                    <input
                      type="text"
                      placeholder="Search For Appeal No"
                      className="w-auto px-2 py-1 rounded-lg focus:border-2   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      value={appeal}
                      onChange={handleAppeal}
                    />
                  </div>
                )}

                {selectedFilter == "subject" && (
                  <div>
                    <label htmlFor="">SUBJECT :- </label>
                    <input
                      type="text"
                      placeholder="Search For Subject"
                      className="w-auto px-2 py-1  rounded-lg focus:border-2   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      value={subject}
                      onChange={handleSubject}
                    />
                  </div>
                )}

                {selectedFilter == "appeal_type" && (
                  <div>
                    <label htmlFor="">APPEAL TYPE :- </label>
                    <input
                      type="text"
                      placeholder="Search For Appeal Type"
                      className="w-auto px-2 py-1  rounded-lg focus:border-2   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      value={appType}
                      onChange={handleAppType}
                    />
                  </div>
                )}

                {selectedFilter == "pan" && (
                  <div>
                    <label htmlFor="">PAN :- </label>
                    <input
                      type="text"
                      placeholder="Search For Pan"
                      className="w-auto px-2 py-1  rounded-lg focus:border-2   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      value={pan}
                      onChange={handlePan}
                    />
                  </div>
                )}

                {selectedFilter == "sub_section" && (
                  <div>
                    <label htmlFor="">SUB SECTION :- </label>
                    <input
                      type="text"
                      placeholder="Search For Sub-Section"
                      className="w-auto px-2 py-1  rounded-lg focus:border-2   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      value={sub}
                      onChange={handleSub}
                    />
                  </div>
                )}

                {selectedFilter == "ao_order" && (
                  <div>
                    <label htmlFor="">AO ORDER :- </label>
                    <input
                      type="text"
                      placeholder="Search For Ao Order"
                      className="w-auto px-2 py-1  rounded-lg focus:border-2   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      value={aoOrder}
                      onChange={handleAo}
                    />
                  </div>
                )}

                {selectedFilter == "assessment_year" && (
                  <div>
                    <label htmlFor="">Assessment Year :- </label>
                    <input
                      type="text"
                      placeholder="Search For Assessment year"
                      className="w-auto px-2 py-1  rounded-lg focus:border-2   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      value={asYear}
                      onChange={handleAsYear}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="max-h-80 overflow-y-auto  rounded-lg">
              <table className="w-full table-auto text-center">
                <thead>
                  <tr className="bg-blue-600 sticky text-center text-xs top-0 text-white  shadow-2xl ">
                    <th className="sticky top-0 w-32 text-center bg-gradient-to-b from-sky-300 to-indigo-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 hover:text-gray-600 duration-300 cursor-pointer  hover:rounded-xl shadow-2xl border rounded">ID</th>
                    <th className="sticky top-0 w-32 text-center bg-gradient-to-b from-sky-300 to-indigo-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 hover:text-gray-600 duration-300 cursor-pointer  hover:rounded-xl shadow-2xl border rounded">Pan</th>
                    <th className="sticky top-0 w-32 text-center bg-gradient-to-b from-sky-300 to-indigo-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 hover:text-gray-600 duration-300 cursor-pointer  hover:rounded-xl shadow-2xl border rounded">Section</th>
                    <th className="sticky top-0 w-32 text-center bg-gradient-to-b from-sky-300 to-indigo-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 hover:text-gray-600 duration-300 cursor-pointer  hover:rounded-xl shadow-2xl border rounded">Sub Section</th>
                    <th className="sticky top-0 w-32 text-center bg-gradient-to-b from-sky-300 to-indigo-500  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 hover:text-gray-600 duration-300 cursor-pointer  hover:rounded-xl shadow-2xl border rounded">Subject</th>
                    <th className="sticky top-0 w-32 text-center bg-gradient-to-b from-sky-300 to-indigo-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 hover:text-gray-600 duration-300 cursor-pointer  hover:rounded-xl shadow-2xl border rounded">Judgment</th>
                    <th className="sticky top-0 w-32 text-center bg-gradient-to-b from-sky-300 to-indigo-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 hover:text-gray-600 duration-300 cursor-pointer  hover:rounded-xl shadow-2xl border rounded">Appeal No</th>
                    <th className="sticky top-0 w-32 text-center bg-gradient-to-b from-sky-300 to-indigo-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 hover:text-gray-600 duration-300 cursor-pointer  hover:rounded-xl shadow-2xl border rounded">Ao Order</th>
                    <th className="sticky top-0 w-32 text-center bg-gradient-to-b from-sky-300 to-indigo-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 hover:text-gray-600 duration-300 cursor-pointer  hover:rounded-xl shadow-2xl border rounded">Appeal Type</th>
                    <th className="sticky top-0 w-32 text-center bg-gradient-to-b from-sky-300 to-indigo-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 hover:text-gray-600 duration-300 cursor-pointer  hover:rounded-xl shadow-2xl border rounded">Assessment Year</th>
                    {/* <th className="sticky top-0">Itat No</th> */}

                    <th className="sticky top-0 w-32 text-center bg-gradient-to-b from-sky-300 to-indigo-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 hover:text-gray-600 duration-300 cursor-pointer  hover:rounded-xl shadow-2xl border rounded">View</th>
                    <th className="sticky top-0 w-32 text-center bg-gradient-to-b from-sky-300 to-indigo-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 hover:text-gray-600 duration-300 cursor-pointer  hover:rounded-xl shadow-2xl border rounded">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {pageData?.map((el, i) => {
                    return <LibraryTable key={el.id} pageData={el} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      <Helmet>
        <title>Easy E-Library - Itax Easy</title>
        <meta name="description" content=" income tax library " />
      </Helmet>
    </>
  );
}
