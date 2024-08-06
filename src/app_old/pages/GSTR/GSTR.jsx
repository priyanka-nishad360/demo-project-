import { Link, useNavigate } from "react-router-dom";

import Section from "../../components/pageLayouts/Section";
import { H5 } from "../../components/pageLayouts/Headings";
import { useState } from "react";

export default function GSTR() {
  const [registrationType, setRegistrationType] = useState("");
  let navigate = useNavigate();

  function handleChange(value) {
    navigate(`${value}`);
    value = "";
  }
  return (
    <>
      <H5 className="px-2 container 2xl:max-w-7xl">Easy GST Return</H5>
      <Section>
        <form>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-2 sm:gap-4 justify-evenly">
            <li className="lg:">
              <label htmlFor="FY-year">Select F.Y. year</label>
              <select
                id="FY-year"
                className={`
									bg-gray-50 
									border border-gray-300 
									text-gray-900 text-sm 
									rounded-lg 
									dark:border-l-gray-700 
									focus:ring-blue-500 focus:border-blue-500 
									block w-full p-2.5 
									dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
									dark:focus:ring-blue-500 dark:focus:border-blue-500

									shadow-md shadow-primary
								`}
              >
                <option selected>Choose a Year</option>
                <option value="2020-21">2020-21</option>
                <option value="2021-22">2021-22</option>
                <option value="2022-23">2022-23</option>
                <option value="2023-24">2023-24</option>
              </select>
            </li>
            <li className="lg:">
              <label htmlFor="monthRange">Period Range:</label>
              <select
                id="monthRange"
                name="monthRange"
                className={`
									bg-gray-50 
									border border-gray-300 
									text-gray-900 text-sm 
									rounded-lg 
									dark:border-l-gray-700 
									focus:ring-blue-500 focus:border-blue-500 
									block w-full p-2.5 
									dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
									dark:focus:ring-blue-500 dark:focus:border-blue-500
									
									shadow-md shadow-primary
								`}
              >
                <option value="">Select Period Range</option>
                <option value="Apr-Jun">Apr-Jun</option>
                <option value="Jul-Sep">Jul-Sep</option>
                <option value="Oct-Dec">Oct-Dec</option>
                <option value="Jan-Mar">Jan-Mar</option>
              </select>
            </li>

            <li className="lg:">
              <label htmlFor="month">Month:</label>
              <select
                id="month"
                name="month"
                className={`
									bg-gray-50 
									border border-gray-300 
									text-gray-900 text-sm 
									rounded-lg 
									dark:border-l-gray-700 
									focus:ring-blue-500 focus:border-blue-500 
									block w-full p-2.5 
									dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
									dark:focus:ring-blue-500 dark:focus:border-blue-500

									shadow-md shadow-primary
								`}
              >
                <option value="">Select Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </li>

            <li className="lg:">
              <label htmlFor="registrationType">Registration Type:</label>
              <select
                id="registrationType"
                name="registrationType"
                className={`
									bg-gray-50 
									border border-gray-300 
									text-gray-900 text-sm 
									rounded-lg 
									dark:border-l-gray-700 
									focus:ring-blue-500 focus:border-blue-500 
									block w-full p-2.5 
									dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
									dark:focus:ring-blue-500 dark:focus:border-blue-500

									shadow-md shadow-primary
								`}
                onChange={(e) => setRegistrationType(e.target.value)}
              >
                <option value="">Select Registration Type</option>
                <option value="composition">Composition</option>
                <option value="regular">Regular</option>
              </select>
            </li>
            {registrationType === "composition" && (
              <li className="lg:">
                <label htmlFor="GSTR">GSTR</label>
                <select
                  id="GSTR"
                  name="GSTR"
                  className={`
									bg-gray-50 
									border border-gray-300 
									text-gray-900 text-sm 
									rounded-lg 
									dark:border-l-gray-700 
									focus:ring-blue-500 focus:border-blue-500 
									block w-full p-2.5 
									dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
									dark:focus:ring-blue-500 dark:focus:border-blue-500

									shadow-md shadow-primary
								`}
                >
                  <option value="">Select GSTR</option>
                  <option value="gstr_1">GSTR-4</option>
                  <option value="gstr_2">CMP-8</option>
                </select>
              </li>
            )}
            {registrationType === "regular" && (
              <li className="lg:">
                <label htmlFor="GSTR">GSTR</label>
                <select
                  id="GSTR"
                  name="GSTR"
                  className={`
									bg-gray-50 
									border border-gray-300 
									text-gray-900 text-sm 
									rounded-lg 
									dark:border-l-gray-700 
									focus:ring-blue-500 focus:border-blue-500 
									block w-full p-2.5 
									dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
									dark:focus:ring-blue-500 dark:focus:border-blue-500

									shadow-md shadow-primary
								`}
                  onChange={(e) => handleChange(e.target.value)}
                >
                  <option value="">Select GSTR</option>

                  <option value={"gstr1"}> GSTR-1</option>

                  <option value={"gstr2"}>GSTR-2</option>
                  <option value={"gstr2b"}>GSTR-2B</option>
                  <option value={"gstr3b"}>GSTR-3B</option>
                </select>
              </li>
            )}
          </ul>
          <GSTRButtons />
        </form>
      </Section>

      <Section className="overflow-x-auto">
        <GSTRInfo />
        <div className=" flex">
          <GSTR_Supply />
          <GSTRTable />
          <GSTR_LedgerBalance />
        </div>
      </Section>
    </>
  );
}

function GSTRButtons() {
  const buttonData = [
    {
      linkTo: "crs",
      title: "Check Return Status",
    },
    {
      linkTo: "pi",
      title: "Permanent Information",
    },
    {
      linkTo: "rd",
      title: "Registration Details",
    },
    {
      linkTo: "login",
      title: "Login",
    },
  ];
  return (
    <div className="mt-4 p-4 md:px-16 lg:px-20 gap-2 grid justify-center grid-cols-[repeat(auto-fill,minmax(180px,1fr))] rounded-md ">
      {buttonData.map((el, key) => (
        <Button key={key} {...el} className="w-full h-full" />
      ))}
    </div>
  );
}

function Button(prop) {
  return (
    <Link to={prop.linkTo}>
      <button
        type="button"
        className={`

				text-white
				bg-primary  
				hover:bg-blue-500
				font-medium
				rounded-lg
				text-sm
				p-2
				mb-2
            

				dark:bg-blue-600
				dark:hover:bg-blue-700
				
				active:bg-slate-200
				dark:active:bg-primary_light 

				scale-95
				hover:scale-100
				transition-all
            
            ${prop.className}
            `}
      >
        {prop.title}
      </button>
    </Link>
  );
}
function GSTRInfo() {
  return (
    <ul
      className={`
            grid grid-cols-4 gap-4
             font-semibold 

            bg-primary/70
			text-neutral-50
            p-2
            `}
    >
      <li>GSTR-1 filing is pending</li>
      <li>GSTR-3B filing is pending</li>
      <li>GSTR-9 filing is pending</li>
      <li>EasyInvoice</li>
    </ul>
  );
}

function GSTR_Supply() {
  return (
    <>
      <div class="border-2 w-1/4 pt-10 ">
        <a>
          <div class="flex justify-between pr-1 pl-1 mt-2">
            <Button title="Outward Supplies" linkTo="outwardsupplies" />

            <div class="text-sm text-gray-900">A</div>
          </div>
        </a>
        <a href="/gst/inward-supplies">
          <div class="flex justify-between pr-1 pl-1 mt-1">
            <Button title="Inward Supplies" linkTo="inwardsupplies" />
            <div class="text-sm text-gray-900">B</div>
          </div>
        </a>
        <div class="flex justify-between align-center pt-2 pb-2 pl-1 pr-1">
          <div class="text-sm text-gray-900">Utilized ITC Balance</div>
          <div class="text-sm text-gray-900">C</div>
        </div>
        <div class="flex justify-between align-center pt-2 pb-2 pl-1 pr-1">
          <div class="text-sm text-gray-900">
            Net Tax Liability on Outward Supply:(A-C)
          </div>
          <div class="text-sm text-gray-900">D</div>
        </div>
        <div class="flex justify-between align-center pt-2 pb-2 pl-1 pr-1 mt-1">
          <div class="text-sm text-gray-900">
            Add: Tax Liability on Inward Supply
          </div>
          <div class="text-sm text-gray-900">E</div>
        </div>
        <div class="flex justify-between align-center pt-2 pb-2 pl-1 pr-1 mt-1">
          <div class="text-sm text-gray-900">
            Total Tax Payyable in Csah: (D+E)
          </div>
          <div class="text-sm text-gray-900">F</div>
        </div>
        <div class="flex justify-between align-center pt-1 pb-2 pl-1 pr-1 mt-1">
          <div class="text-sm text-gray-900">Less: Utilized Cash Balance</div>
          <div class="text-sm text-gray-900">G</div>
        </div>
        <div class="flex justify-between align-center pt-2 pb-2 pl-1 pr-1 mt-1">
          <div class="text-sm text-gray-900">Balance GST Due: (F-G)</div>
          <div class="text-sm text-gray-900">H</div>
        </div>
      </div>
    </>
  );
}
function GSTRTable() {
  const supplyData = [
    ["", 18, 9, 9, 2],
    ["", 36, 18, 18, 4],
    ["", 36, 18, 18, 4],
    ["", 54, 27, 27, 6],
    ["", 72, 36, 36, 8],
    ["", 90, 45, 45, 10],
    ["", 108, 54, 54, 12],
    ["", 126, 63, 63, 14],
    ["", 144, 72, 72, 16],
  ];
  return (
    <>
      <table class="border-collapse border border-gray-300">
        <thead>
          <tr class="bg-blue-300">
            <th class="border border-gray-300 p-2 font-semibold">
              Supply Value
            </th>
            <th class="border border-gray-300 p-2 font-semibold">IGST</th>
            <th class="border border-gray-300 p-2 font-semibold">CGST</th>
            <th class="border border-gray-300 p-2 font-semibold">SGST</th>
            <th class="border border-gray-300 p-2 font-semibold">CESS</th>
          </tr>
        </thead>
        <tbody>
          {supplyData.map((el, key) => (
            <tr key={key} class="h-10">
              <td className="border border-gray-300 p-2">{el[0]}</td>
              <td className="border border-gray-300 p-2">{el[1]}</td>
              <td className="border border-gray-300 p-2">{el[2]}</td>
              <td className="border border-gray-300 p-2">{el[3]}</td>
              <td className="border border-gray-300 p-2">{el[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function GSTR_LedgerBalance() {
  return (
    <>
      <div className="border-2 w-1/4 pt-0">
        <h1 className="flex justify-between pt-2 pb-2 pl-1 pr-1 font-semibold">
          Ledger Balances
        </h1>
        <div className="flex justify-between pt-2 pb-2 pl-1 pr-1 mr-1 text-sm">
          <Button title="Ledger details" linkTo="/" />

          <h1>Balance</h1>
        </div>
        <div className="flex justify-between pt-2 pb-2 pl-1 pr-1 mr-1 text-sm">
          <h1>Credit Ledger</h1>
          <h1>0</h1>
        </div>
        <div className="flex justify-between pt-2 pb-2 pl-1 pr-1 mr-1 text-sm">
          <h1>Liability Ledger</h1>
          <h1>0</h1>
        </div>
        <div className="flex justify-between pt-2 pb-2 pl-1 pr-1 mr-1 text-sm">
          <h1>Cash Ledger</h1>
          <h1>0</h1>
        </div>
        <div className="flex justify-between pt-2 pb-2 pl-1 pr-1 mr-1 text-sm">
          <Button title="PMT09" linkTo="/" />

          <h1>0</h1>
        </div>
        <div className="flex justify-between pt-2 pb-2 pl-1 pr-1 mr-1 text-sm">
          <Button title="Late Fees +" linkTo="/" />

          <h1>0</h1>
        </div>
        <hr />
        <hr />
        <div className="flex text-sm justify-between items-center mt-2 pr-1 pl-1">
          <Button title="Annual Return GSTR-9" linkTo="/" />

          <Button title="GSTR-9C" linkTo="/" />
        </div>
      </div>
    </>
  );
}
