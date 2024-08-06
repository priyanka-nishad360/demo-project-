import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PdfDownloadButton } from "./PdfDownloadbtn";

export const LibraryTable = ({ pageData }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handleSingleLibrary = () => {
    navigate(`/library/${pageData.id}`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  //
  return (
    <tr
      className={` hover:shadow-2xl ${
        pageData.index % 2 == 0 ? "bg-white" : "bg-blue-100"
      } border-slate-300`}
    >
      <td>{pageData.id}</td>
      <td>{pageData.pan}</td>
      <td>{pageData.section}</td>
      <td>{pageData.sub_section}</td>
      <td>{pageData.subject}</td>
      <td>{pageData.judgment}</td>
      <td>{pageData.appeal_no}</td>
      <td>{pageData.ao_order}</td>
      <td>{pageData.appeal_type}</td>
      <td>{pageData.assessment_year}</td>

      <td onClick={handleSingleLibrary} className="items-center w-3 ">
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="bg-blue-500  text-white px-2 py-1 rounded flex items-center hover:bg-blue-700 space-x-2"
        >
          <FaEye />
          <span>View</span>
        </button>
      </td>
      <td>
        <button
          className="bg-orange-400 text-white py-2 px-4 rounded"
        >
          <PdfDownloadButton pageData={pageData} flag={true} />
        </button>
      </td>
    </tr>
  );
};
