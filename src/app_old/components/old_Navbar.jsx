import { useContext, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth.js";
import BillShillLink from "./BillShillLink.jsx";
import { Link } from "react-router-dom";
import UserInfo from "./user/UserInfo.jsx";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { StyledLink, Itag } from "../styles/globalStyles.jsx";
import { StoreContext } from "../store/store-context.js";

const NAV_ACCESS = {
  PUBLIC_ONLY: "public-only",
};

export default function Navbar() {
  const { token, currentUser } = useAuth();
  const [hamburger, setHamburger] = useState(false);
  const [cartQuantity, setCartQuantity] = useState();
  const [state, _] = useContext(StoreContext);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartData"));
    const quantity = data && data.length > 0 ? data.length : 0;
    setCartQuantity(quantity);
  }, []);

  return (
    <>
      <nav className="sticky top-0 min-h-20 bg-white z-50 flex items-center py-3 px-5 shadow flex-wrap">
        <Link
          to="/"
          className="flex flex-shrink-0 justify-between items-center mx-auto"
        >
          <img src="logo.svg" alt="logo" className="object-contain w-14" />
        </Link>

        <ul className="hidden md:flex items-center justify-between font-bold text-sm">
          <li className="mx-5 cursor-pointer text-slate-700 hover:text-blue-600 group relative">
            <div className="flex items-center py-5">
              <span className="group-hover:hidden">{bottomArrow}</span>
              <span className="hidden group-hover:block">{rightArrow}</span>
              Our Products
            </div>
            <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-md rounded-md p-3 border">
              {ourProductsMenu.map((element, index) => {
                if (
                  element.access === NAV_ACCESS.PUBLIC_ONLY &&
                  currentUser?.userType === "admin"
                ) {
                  return;
                }

                if (element.type === "billshill") {
                  return (
                    <BillShillLink
                      key={element.menu}
                      path={element.url}
                      text={element.menu}
                      className="py-3 px-1 w-56 font-bold text-slate-700 hover:text-blue-600 flex items-center justify-between"
                    />
                  );
                }

                return (
                  <Link
                    key={element.menu}
                    to={element.url}
                    className="py-3 px-1 w-56 font-bold text-slate-700 hover:text-blue-600 flex items-center justify-between"
                  >
                    <span>{element.menu}</span>
                    {element.upcoming && (
                      <span className="text-xs px-3 py-1 rounded-full text-green-600 bg-green-50">
                        UPCOMING
                      </span>
                    )}
                  </Link>
                );
              })}
            </ul>
          </li>
          <li className="mx-5 cursor-pointer text-slate-700 hover:text-blue-600 group relative">
            <div className="flex items-center py-5">
              <span className="group-hover:hidden">{bottomArrow}</span>
              <span className="hidden group-hover:block">{rightArrow}</span>
              Easy Services
            </div>
            <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-md rounded-md py-3 border">
              {ourServicesMenu.map((element) => (
                <li
                  key={element.menu}
                  className="py-3 px-5 w-56 font-bold text-slate-700 hover:text-blue-600 group-one relative"
                >
                  <span>{element.menu}</span>
                  <ul className="absolute hidden left-56 top-0 group-one-hover:flex flex-col bg-white shadow-md rounded-md border py-3 z-50">
                    {element.subMenu.map((element) => (
                      <Link
                        key={element.menu}
                        to={element.url}
                        className="py-3 mx-5 w-56 font-bold text-slate-700 hover:text-blue-600 flex items-center justify-between"
                      >
                        <span>{element.menu}</span>
                        {element.upcoming && (
                          <span className="text-xs px-3 py-1 rounded-full text-green-600 bg-green-50">
                            UPCOMING
                          </span>
                        )}
                      </Link>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
          <li className="mx-5 cursor-pointer text-slate-700 hover:text-blue-600 group relative">
            <div className="flex items-center py-5">
              <span className="group-hover:hidden">{bottomArrow}</span>
              <span className="hidden group-hover:block">{rightArrow}</span>
              Financial Calculators
            </div>
            <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-md rounded-md py-3 border">
              {financialCalculatorMenu.map((element) => (
                <li
                  key={element.menu}
                  className="py-3 px-5 w-56 font-bold text-slate-700 hover:text-blue-600 group-one relative"
                >
                  <span>{element.menu}</span>
                  <ul className="absolute hidden left-56 top-0 group-one-hover:flex flex-col bg-white shadow-md rounded-md border py-3 z-50">
                    {element.subMenu.map((element) => (
                      <Link
                        key={element.menu}
                        to={element.url}
                        className="py-3 mx-5 w-56 font-bold text-slate-700 hover:text-blue-600 flex items-center justify-between"
                      >
                        <span>{element.menu}</span>
                        {element.upcoming && (
                          <span className="text-xs px-3 py-1 rounded-full text-green-600 bg-green-50">
                            UPCOMING
                          </span>
                        )}
                      </Link>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>

          <Link
            to="/blogs"
            className="mx-5 cursor-pointer text-slate-700 hover:text-blue-600"
          >
            Blog
          </Link>

          <Link
            to="/register-startup"
            className="mx-5 cursor-pointer text-slate-700 hover:text-blue-600"
          >
            Register a Startup
          </Link>
          <Link
            to="/apis"
            className="mx-5 cursor-pointer text-slate-700 hover:text-blue-600"
          >
            APIs
          </Link>
          <Link
            to="/Downloads"
            className="mx-5 cursor-pointer text-slate-700 hover:text-blue-600"
          >
            Downloads
          </Link>
        </ul>
        {!!token ? (
          <>
            <StyledLink
              to="/cart"
              className="hidden md:block bg-primary p-2.5 mx-3 text-white rounded-full font-semibold"
            >
              <Itag>{state.cartDetail.length + state.apiCart.length}</Itag>
              {/* {state.cartDetail.length === 0 ? <Itag>{JSON.parse(localStorage.getItem('cartData')).length}</Itag> : <Itag>{state.cartDetail.length}</Itag>} */}
              <MdOutlineLocalGroceryStore />
            </StyledLink>
            <UserInfo />
          </>
        ) : (
          <Link
            to="/login"
            className="hidden md:block bg-primary px-8 mx-5 py-3 text-white rounded-md font-semibold"
          >
            Login
          </Link>
        )}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="md:hidden w-8 h-8"
          onClick={() => setHamburger(!hamburger)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </nav>

      {/* ------------------- Hamburger Menu ------------------- */}
      <div
        id="dropdown"
        className={`${
          hamburger ? null : "hidden"
        } md:hidden fixed top-20 left-0 w-full bg-black/50 min-h-screen h-full z-40 overflow-y-scroll`}
      >
        <ul className="flex flex-col w-full bg-white shadow-md rounded-b-2xl px-5 pt-2 pb-5 mb-40">
          <li className="my-1">
            <span
              onClick={() => toggleDisplay("ourProductsSubMenu")}
              className="flex py-2 text-sm font-bold text-slate-800"
            >
              {rightArrow}
              Our Products
            </span>
            <ul id="ourProductsSubMenu" className="hidden flex-col ">
              {ourProductsMenu.map((element, index) =>
                element.type === "billshill" ? (
                  <BillShillLink
                    key={element.menu}
                    path={element.url}
                    text={element.menu}
                    className="py-2 pl-8 w-full font-semibold text-sm text-slate-700 hover:text-blue-600 flex items-center justify-between"
                  />
                ) : (
                  <Link
                    key={element.menu}
                    to={element.url}
                    onClick={() => setHamburger(false)}
                    className="py-2 pl-8 w-full font-semibold text-sm text-slate-700 hover:text-blue-600 flex items-center justify-between"
                  >
                    <span>{element.menu}</span>
                    {element.upcoming && (
                      <span className="text-xs px-3 py-1 rounded-full text-green-600 bg-green-50">
                        UPCOMING
                      </span>
                    )}
                  </Link>
                )
              )}
            </ul>
          </li>
          <li>
            <span
              onClick={() => toggleDisplay("ourServicesMenu")}
              className="flex py-2 text-sm font-bold text-slate-800"
            >
              {rightArrow}
              Easy Services
            </span>
            <ul id="ourServicesMenu" className="hidden flex-col">
              {ourServicesMenu.map((element) => (
                <li
                  onClick={() => toggleDisplay(element.menu)}
                  key={element.menu}
                  className="py-2 pl-5 w-full font-semibold text-sm text-slate-700 hover:text-blue-600"
                >
                  <span className="flex">
                    {rightArrow}
                    {element.menu}
                  </span>
                  <ul id={element.menu} className="hidden flex-col my-1">
                    {element.subMenu.map((element) => (
                      <Link
                        key={element.menu}
                        to={element.url}
                        onClick={() => setHamburger(false)}
                        className="py-2 pl-8 w-full font-semibold text-sm text-slate-700 hover:text-blue-600 flex items-center justify-between"
                      >
                        <span>{element.menu}</span>
                        {element.upcoming && (
                          <span className="text-xs px-3 py-1 ml-48 rounded-full text-green-600 bg-green-50">
                            UPCOMING
                          </span>
                        )}
                      </Link>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <span
              onClick={() => toggleDisplay("financialCalculatorMenu")}
              className="flex py-2 text-sm font-bold text-slate-800"
            >
              {rightArrow}
              Financial Calculators
            </span>
            <ul id="financialCalculatorMenu" className="hidden flex-col">
              {financialCalculatorMenu.map((element) => (
                <li
                  onClick={() => toggleDisplay(element.menu)}
                  key={element.menu}
                  className="py-2 pl-5 w-full font-semibold text-sm text-slate-700 hover:text-blue-600"
                >
                  <span className="flex">
                    {rightArrow}
                    {element.menu}
                  </span>
                  <ul id={element.menu} className="hidden flex-col my-1">
                    {element.subMenu.map((element) => (
                      <Link
                        key={element.menu}
                        to={element.url}
                        onClick={() => setHamburger(false)}
                        className="py-2 pl-8 w-full font-semibold text-sm text-slate-700 hover:text-blue-600 flex items-center justify-between"
                      >
                        <span>{element.menu}</span>
                        {element.upcoming && (
                          <span className="text-xs px-3 py-1 rounded-full text-green-600 bg-green-50">
                            UPCOMING
                          </span>
                        )}
                      </Link>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link
              to="/blogs"
              onClick={() => setHamburger(false)}
              className="flex py-2 text-sm font-bold text-slate-800"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/register-startup"
              onClick={() => setHamburger(false)}
              className="flex py-2 text-sm font-bold text-slate-800"
            >
              Register a Startup
            </Link>
          </li>
          <li>
            <Link
              to="/apis"
              onClick={() => setHamburger(false)}
              className="flex py-2 text-sm font-bold text-slate-800"
            >
              API&apos;s
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => setHamburger(false)}
              className="flex py-2 text-sm font-bold text-slate-800"
            >
              Downloads
            </Link>
          </li>

          <li className="flex items-center justify-center">
            {token ? null : (
              <Link
                to="/login"
                className="bg-primary px-8 mx-5 py-2 my-5 text-white rounded-md font-semibold"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

// ICONS
const bottomArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 mr-1"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const rightArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 mr-1"
  >
    <path
      fillRule="evenodd"
      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
      clipRule="evenodd"
    />
  </svg>
);

// MENUS
// MENUS

const ourProductsMenu = [
  {
    url: "#",
    // type: 'billshill',
    menu: "Easy GST",
    upcoming: true,
  },
  {
    // url: '/itr-filling/personal-info',
    menu: "Easy ITR",
    access: NAV_ACCESS.PUBLIC_ONLY,
    upcoming: true,
  },
  {
    url: "/library",
    menu: "Easy E-Library",
  },
  {
    url: "/",
    menu: "Fastag Recharge",
    upcoming: true,
  },
  {
    url: "#",
    menu: "Business Erp",
    upcoming: true,
  },
  {
    url: "#",
    menu: "School Erp",
    upcoming: true,
  },
  {
    url: "#",
    menu: "CRM",
    upcoming: true,
  },
  {
    url: "#",
    menu: "Easy Cloud",
    upcoming: true,
  },
];

const ourServicesMenu = [
  {
    menu: "Easy GST Links",
    subMenu: [
      {
        url: "/easyservice/searchbygstin",
        menu: "Search by GSTIN",
      },
      {
        url: "/easyservice/searchbypan",
        menu: "Search by PAN",
      },
      {
        url: "/easyservice/trackgstreturn",
        menu: "Track GST Return",
      },
    ],
  },
  {
    menu: "Easy IncomeTax Links",
    subMenu: [
      {
        url: "/services/incometaxlinks/verifypandetails",
        menu: "Verify Pan Details",
      },
      {
        url: "services/incometaxlinks/checkpanaashaarstatus", ///// Link:----- services/incometaxlinks/checkpanaashaarstatus
        menu: "Check Pan Aadhaar Status",
        // upcoming: true
      },
      {
        url: "/services/incometaxlinks/searchtan",
        menu: "Search Tan",
      },
    ],
  },
  {
    menu: "Easy Bank Links",
    subMenu: [
      {
        url: "/easyservice/ifscdetails",
        menu: "IFSC Code",
      },
      {
        url: "/easyservice/verifybankdetails",
        menu: "Verify Bank Account",
      },
      {
        url: "/easyservice/upiverify", /////// link:---- easyservice/upiverify
        menu: "UPI Verification",
      },
    ],
  },
  {
    menu: "Easy MCA",
    subMenu: [
      {
        url: "/easyservice/companydetails",
        menu: "Company Details",
      },
      {
        url: "/easyservice/companydirectordetails",
        menu: "Company Director Details",
      },
    ],
  },
  {
    menu: "Easy Aadhaar Links",
    subMenu: [
      {
        url: "/easyservice/aadhaar-verify", /// link:----- /easyservice/aadharverify
        menu: "Easy Aadhaar Verification",
        upcoming: false,
      },
      {
        url: "/easyservice/aadhaar-link-status",
        menu: "Easy Link Aadhaar Status",
        upcoming: false,
      },
    ],
  },
  {
    menu: "Easy Converter",
    subMenu: [
      {
        url: "/services/converter/image-to-pdf",
        menu: "Image to PDF",
      },
      {
        url: "/services/converter/merge-pdf",
        menu: "Merge PDF",
      },
    ],
  },
  {
    menu: "Post Office",
    subMenu: [
      {
        url: "/easyservice/pincodeinfo",
        menu: "Pincode Information",
      },
      {
        url: "/easyservice/pincodebycity",
        menu: "Pin by City",
      },
    ],
  },
];

const financialCalculatorMenu = [
  {
    menu: "Bank Calculators",
    subMenu: [
      {
        url: "/financialcal/sical",
        menu: "Simple Interest Calculator",
      },
      {
        url: "/financialcal/cical",
        menu: "Compound Interest",
      },
    ],
  },
  {
    menu: "Income Tax Calculators",
    subMenu: [
      {
        url: "/financialcal/hracal",
        menu: "HRA Calculator",
      },
      {
        url: "/financialcal/depCalc", // link:--- /financialcal/depreciatoncal
        menu: "Depreciation Calculator",
      },
      {
        url: "/financialcal/advanceTaxCal", // link:--- /financialcal/advanceTaxCal
        menu: "Advance Tax Calculator",
      },
      {
        url: "/financialcal/TaxCalculator",
        menu: "Tax Calculator",
      },
      {
        url: "/financialcal/capitalGainCalc", // link:--- /financialcal/capitalGainCalc
        menu: "Capital Gain Calculator",
      },
    ],
  },
  {
    menu: "GST Calculators",
    subMenu: [
      {
        url: "/financialcal/gstcal",
        menu: "GST Calculator",
      },
    ],
  },
  {
    menu: "Investment Calculators",
    subMenu: [
      {
        url: "/financialcal/miscal",
        menu: "Post Office MIS",
      },
      {
        url: "/financialcal/Cagr",
        menu: "CAGR Calculator",
      },
      {
        url: "/financialcal/rdcal",
        menu: "RD Calculator",
      },
      {
        url: "/financialcal/fdcal",
        menu: "FD Calculator",
      },
      {
        url: "/financialcal/lumpsumpcal",
        menu: "Lump Sum Calculator",
      },
      {
        url: "/financialcal/sipcal",
        menu: "SIP Calculator",
      },
    ],
  },
  {
    menu: "Loan Calculators",
    subMenu: [
      {
        url: "/financialcal/businesscal",
        menu: "Business Loan Calculator",
      },
      {
        url: "/financialcal/carloancal",
        menu: "Car Loan Calculator",
      },
      {
        url: "/financialcal/loanagainstcal",
        menu: "Loan Against Property",
      },
      {
        url: "/financialcal/homeloancal",
        menu: "Home Loan Calculator",
      },
      {
        url: "/financialcal/personalloancal",
        menu: "Personal Loan Calculator",
      },
    ],
  },
  {
    menu: "Insurance Calculators",
    subMenu: [
      {
        url: "/financialcal/npscal",
        menu: "NPS Calculator",
      },
    ],
  },
];
const toggleDisplay = (id) => {
  const element = document.getElementById(id);

  element.classList.contains("hidden")
    ? element.classList.replace("hidden", "flex")
    : element.classList.replace("flex", "hidden");
};
