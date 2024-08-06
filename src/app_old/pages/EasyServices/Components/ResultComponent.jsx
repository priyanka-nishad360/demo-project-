import React from "react";
import { RiFileDownloadFill } from "react-icons/ri";
import { PdfButton, PdfIcon } from "../../../styles/globalStyles";

const ResultComponent = ({ dispatch, details, title }) => {
  return (
    <div className="min-h-screen max-w-[34rem] mx-auto p-2 md:p-5 ">
      <div className="bg-white p-8 rounded-lg shadow-md overflow-auto">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">{title}</h1>
        <table className="w-full text-left">
          <tbody>
            {details &&
              details.map((item, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <th className="py-2">{item.label}</th>
                  <td className="py-2 text-blue-500">{item.value}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* <div className="w-1/3 flex items-center mt-4">
          <PdfButton
            onClick={() => dispatch()}
            className="bg-primary px-4 py-2 text-white rounded font-semibold text-sm cursor-pointer"
          >
            PDF <RiFileDownloadFill className="ml-2" />
          </PdfButton>
        </div> */}
      </div>
    </div>
  );
};

export default ResultComponent;
