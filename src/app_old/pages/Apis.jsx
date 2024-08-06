"use client";
import { useState } from "react";
import Image from "next/image";
import invoice from "../../../public/icons/home/services/invoice.png";
import gst from "../../../public/icons/home/gst.png";
import hsn from "../../../public/icons/home/hsn.png";
import sac from "../../../public/icons/home/sac.png";
import {
  Authentication,
  Bank,
  ImagePDF,
  Post_Office,
  E_KYC,
  Extraction,
  All_Apis,
  pan,
  ifsc,
  logout,
  login,
  signUp,
  pdfMerge,
  form16,
  google,
  aadhar,
  verify,
  pinCode,
  pinCity,
  compress,
} from "../icons";
import { useRouter } from "next/navigation";

export default function Apis() {
  const navigate = useRouter();
  const [section, setSection] = useState("All Apis");
  const [renderApiList, setRenderApiList] = useState(list);

  return (
    <div>
      <div className="flex items-center md:justify-center overflow-x-scroll md:overflow-auto mt-10 max-w-7xl mx-auto">
        {[{ title: "All Apis", icon: All_Apis }, ...list].map((element) => (
          <div
            key={element.title}
            onClick={() => {
              setSection(element.title);
              const newList = list.find((item) => item.title === element.title);
              setRenderApiList(newList ? [newList] : list);
            }}
            className={`h-28 w-36 flex md:items-center justify-center px-5 border-b-4 mx-3 cursor-pointer ${
              section === element.title
                ? "border-primary fill-primary text-primary"
                : "border-white fill-zinc-500 text-zinc-500"
            }`}
          >
            <div className="flex flex-col text-center items-center">
              {element.isPng === true ? (
                <Image className="w-[30px]" width={'30px'}   src={element.icon} alt="icon" />
              ) : (
                <span className="object-contain h-9 w-9">{element.icon}</span>
              )}
              <p className="font-semibold mt-5">{element.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-10 md:rounded-xl bg-gray-200 p-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {renderApiList.map((element) =>
          element.apis.map((element, index) => (
            <div
              key={index}
              onClick={() => {
                navigate.push(
                  `/apis/docs/${element.label.replace(/ /g, "").toLowerCase()}`
                );
              }}
              className="flex hover:shadow-lg hover:shadow-primary flex-col justify-start items-center py-8 px-3 bg-white shadow-md rounded-lg mx-8 md:mx-0 cursor-pointer"
            >
              {element.isPNG ? (
                <Image
                  className="w-[40px] object-cover rounded-lg"
                  src={element.icon}
                  width={'40px'}
                  alt="icon"
                  
                />
              ) : (
                <span className="object-contain h-11 w-11 fill-zinc-600">
                  {element.icon}
                </span>
              )}
              <div>
                <p className="heading-6 text-center my-8 ">{element.label}</p>
                <p className="description text-justify mt-1">
                  {element.description}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const list = [
  {
    title: "Authentication",
    icon: Authentication,
    apis: [
      {
        upcoming: false,
        icon: signUp,
        label: "SignUp",
        description:
          "API enables users to register for a service by sending a request with their information and receiving a response with status and authentication credentials.",
      },
      {
        upcoming: false,
        icon: login,
        label: "Login",
        description:
          "API allows users to log in to a system by sending a request with their credentials and receiving a response with authentication status and a session token.",
      },
      {
        upcoming: false,
        icon: signUp,
        label: "Admin SignUp",
        description:
          "API allows administrators to log in to a system by sending a request with their credentials and receiving a response with authentication status and a session token.",
      },
      {
        upcoming: false,
        icon: logout,
        label: "Logout",
        description:
          "API allows users to log out of a system by sending a request to invalidate their current session and terminate authentication.",
      },
      {
        upcoming: true,
        icon: google,
        label: "Login With Google",
        description:
          "API allows users to log in to a system using their Google credentials, enabling a secure and streamlined authentication process.",
      },
      {
        upcoming: false,
        icon: login,
        label: "Admin Login",
        description:
          " API allows administrators to create a new account by sending a request with their information and receiving a response with status and authentication credentials.",
      },
    ],
  },
  {
    title: "Extraction E-KYC",
    icon: Extraction,
    apis: [
      {
        icon: form16,
        upcoming: false,
        label: "Form-16",
        description:
          "The API uses OCR technology to convert the image data into machine-readable text and retrieve the required information, such as the employees name, PAN number, and salary details.",
      },
      {
        upcoming: false,
        icon: pan,
        label: "Pan",
        description:
          "API is used to retrieve information about an individual or entitys PAN card, including the cardholders name, date of birth, and PAN number, using the PAN number as the key identifier.",
      },
      {
        upcoming: false,
        icon: aadhar,
        label: "Aadhaar",
        description:
          "The unique identification number assigned to Indian citizens, for various purposes such as e-KYC (electronic Know Your Customer) verification, demographic data retrieval, and digital signature.",
      },
      {
        upcoming: false,
        icon: invoice,
        isPNG: true,
        label: "Invoice",
        description:
          "Revamp your invoice management with our API-powered image recognition solution. Our API offers accurate and efficient recognition of invoice data, saving you time and effort. Say goodbye to manual data entry and hello to streamlined invoice processing. Get started today!",
      },
    ],
  },
  {
    title: "Bank",
    icon: Bank,
    apis: [
      {
        upcoming: false,
        icon: ifsc,
        label: "IFSC Details",
        description:
          "The IFSC (Indian Financial System Code) Details API is used to retrieve information about a particular bank branch in India, including the banks name, address, contact details, and IFSC code, using the IFSC code as the key identifier.",
      },
      {
        upcoming: false,
        icon: verify,
        label: "Verify Accounts",
        description:
          "API provides a simple way to verify the authenticity of a users account information, typically by sending a confirmation code to their email or phone number.",
      },
    ],
  },
  {
    title: "Post Office",
    icon: Post_Office,
    apis: [
      {
        upcoming: false,
        icon: pinCode,
        label: "Pin Code Info",
        description:
          "API provides access to information about postal codes, including location, state, district, and geographical coordinates.",
      },
      {
        icon: pinCity,
        upcoming: false,
        label: "Pin Code by City",
        description:
          "Pin code API provides a solution for retrieving postal codes (known as PIN codes) based on a given city name.",
      },
    ],
  },
  {
    title: "Image/PDF",
    icon: ImagePDF,
    apis: [
      {
        upcoming: true,
        label: "PDF Merge",
        icon: pdfMerge,
        description:
          "PDF Merge APIs provide solutions for combining multiple PDF files into a single document.",
      },
      {
        upcoming: true,
        icon: ImagePDF,
        label: "IMG To PDF",
        description:
          "Image to PDF APIs convert images to PDF format, supporting various image formats with customization options for the resulting PDF.",
      },
      {
        upcoming: true,
        icon: compress,
        label: "Compress",
        description:
          "API offers a simple UI for compressing JPEG, PNG, GIF, and SVG images with bulk compression option.",
      },
    ],
  },
  {
    title: "GST",
    isPng: true,
    icon: gst,
    apis: [
      {
        upcoming: false,
        icon: hsn,
        isPNG: true,
        label: "HSN Code API",
        description:
          "Get accurate HSN code information at your fingertips with our powerful API. Streamline your GST compliance processes and stay ahead of the game. Contact us today to learn more.",
      },
      {
        upcoming: false,
        isPNG: true,
        icon: sac,
        label: "SAC Code API",
        description:
          "Integrate our API to streamline your business operations. Our user-friendly interface provides real-time information and automates processes, making it easy for you to manage your business. Plus, our API is fully compliant with GST regulations and accepts SAC codes for accurate reporting. Try it now and experience the benefits of seamless integration.",
      },
    ],
  },
];

const calculatorIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 224c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zm32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zM160 320c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zM288 192c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zM256 320c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zm32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32z" />
  </svg>
);
