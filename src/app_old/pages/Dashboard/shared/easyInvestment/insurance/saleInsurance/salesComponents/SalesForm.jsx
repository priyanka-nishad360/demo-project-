import { useParams } from "react-router-dom";
import Section from "../../../../../../../components/pageLayouts/Section";
import { Icon } from "@iconify/react";
export default function SalesForm() {
	const { insurance_name } = useParams();
	console.log(insurance_name);

	switch (insurance_name) {
		case "bike-insurance":
			return <BikeInsurance />;
		case "car-insurance":
			return <CarInsurance />;
		case "health-insurance":
			return <HealthInsurance />;
		default:
			return "error";
	}
}

function BikeInsurance() {
	return (
		<Section className="p-4">
			<div className=" max-w-2xl mx-auto text-center text-2xl font-semibold mb-4 capitalize">
                <div className="">
                    <Icon className="border rounded-full p-4 border-blue-600 text-blue-600  w-20 h-20 inline-block" icon="ri:motorbike-fill"/>
                </div>
				<h2 className="border-l-4  border-primary pl-2">Now Buy fastest Two-wheeler Insurance online in India.</h2>
			</div>
            <form action="">
                <ul className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                    <li className=" col-span-2 grid gri-col-1 mt-4">
                        <label htmlFor="name" className=" capitalize">name</label>
                        <input type="text" name="name" id="name" placeholder="name" className="bg-bg_1 text-tx border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </li>
                    <li className=" sm:col-span-1 col-span-2 grid gri-col-1 mt-4">
                        <label htmlFor="email" className=" capitalize">email</label>
                        <input type="email" name="email" id="email" placeholder="email" className="bg-bg_1 text-tx border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </li>
                    <li className=" sm:col-span-1 col-span-2 grid gri-col-1 mt-4">
                        <label htmlFor="mobile" className=" capitalize">mobile</label>
                        <input type="tel" name="mobile" id="mobile" placeholder="mobile" className="bg-bg_1 text-tx border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </li>
                    <li>
                        <div>
                          <button 
                            // type="submit" 
                            type="button" 
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Proceed
                          </button>
                      </div>
                        <div>
                            <button type="button" className=" text-primary border-b-[1px] hover:border-primary">skip</button>
                        </div>
                    </li>
                </ul>
            </form>
		</Section>
	);
}
function CarInsurance() {
	return (
		<div className="p-4">
			<div className=" max-w-2xl mx-auto text-center text-2xl font-semibold mb-4 capitalize">
                <div className="">
                    <Icon className="border rounded-full p-4 border-yellow-600 text-yellow-600   w-20 h-20 inline-block" icon="maki:car"/>
                </div>
                <h2 className="border-l-4  border-primary pl-2">Now Buy fastest Car Insurance online in India.</h2>
			</div>
            <form action="">
                <ul className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                    <li className=" col-span-2 grid gri-col-1 mt-4">
                        <label htmlFor="name" className=" capitalize">name</label>
                        <input type="text" name="name" id="name" placeholder="name" className="bg-bg_1 text-tx border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </li>
                    <li className=" sm:col-span-1 col-span-2 grid gri-col-1 mt-4">
                        <label htmlFor="email" className=" capitalize">email</label>
                        <input type="email" name="email" id="email" placeholder="email" className="bg-bg_1 text-tx border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </li>
                    <li className=" sm:col-span-1 col-span-2 grid gri-col-1 mt-4">
                        <label htmlFor="mobile" className=" capitalize">mobile</label>
                        <input type="tel" name="mobile" id="mobile" placeholder="mobile" className="bg-bg_1 text-tx border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </li>
                    <li>
                        <div>
                          <button 
                            // type="submit" 
                            type="button" 
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Proceed
                          </button>
                      </div>
                        <div>
                            <button type="button" className=" text-primary border-b-[1px] hover:border-primary">skip</button>
                        </div>
                    </li>
                </ul>
            </form>
		</div>
	);
}
function HealthInsurance() {
	return (
		<div className="p-4">
			<div className="bg-bg_1 grid xl:grid-cols-2 mx-auto container">
        <form action="" className="py-8 max-w-2xl mx-auto p-4">
            <div className="text-2xl font-semibold text-primary">Tell us about yourself</div>
            <ul className="grid grid-cols-2 gap-4">
                <li className="flex gap-4 mt-4">
                  <label className="grid grid-cols-[1fr_auto]" for="male">
                    <Icon className="text-2xl" icon="mdi:face-male"/>
                      <div>
                        Male<input className="ml-2" type="radio" id="male" name="gender" value="male"/>
                    </div>
                  </label>

                  <label className="grid grid-cols-[1fr_auto]" for="female">
                    <Icon className="text-2xl" icon="mdi:face-female"/>
                      <div>
                        Female<input className="ml-2" type="radio" id="female" name="gender" value="female"/>
                    </div>
                  </label>
                </li>
                <li className=" col-span-2 grid gri-col-1 mt-4">
                    <label htmlFor="name" className=" capitalize">name</label>
                    <input type="text" name="name" id="name" placeholder="name" className="bg-bg_1 text-tx border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </li>
                <li className=" sm:col-span-1 col-span-2 grid gri-col-1 mt-4">
                    <label htmlFor="email" className=" capitalize">email</label>
                    <input type="email" name="email" id="email" placeholder="email" className="bg-bg_1 text-tx border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </li>
                <li className=" sm:col-span-1 col-span-2 grid gri-col-1 mt-4">
                    <label htmlFor="mobile" className=" capitalize">mobile</label>
                    <input type="tel" name="mobile" id="mobile" placeholder="mobile" className="bg-bg_1 text-tx border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </li>
                <li>
                    <div>
                      <button
                        // type="submit"
                        type="button"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Get started
                      </button>
                  </div>
                    {/* <div>
                        <button type="button" className=" text-primary border-b-[1px] hover:border-primary">skip</button>
                    </div> */}
                </li>
            </ul>
            <p className="mt-4 font-thin text-sm rounded-xl p-4 bg-bg_2/40">By clicking on Get Started, I hereby authorise Bajaj Capital Insurance Broking Limited. and all of its affiliates, subsidiaries, group companies and related parties to access the details such as my name, address, telephone number, e-mail address, birth date and / or anniversary date shared by me, and contact me to provide information on the various products and services offered. I understand that this consent will override my NDNC registration, if any. I also understand that at any point of time, I wish to stop receiving such communications from Bajaj Capital Insurance Broking Limited, I can withdraw such consent anytime on (to provide a contact number or email id or both)</p>
        </form>
        <div className=" bg-bg_2/40 p-4">
          <div className="p-2 border border-primary rounded-lg">HEALTH INSURANCE</div>
          <h1 className="text-4xl font-semibold py-4">Buy Health insurance plan in a few simple steps</h1>
            <ul>
              <li className="flex items-center gap-2 p-2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                <span className="text-white bg-primary rounded-full text-2xl"><Icon icon={"gg:check-o"}/></span>
                Compare Health Insurance plans
              </li>

              <li className="flex items-center gap-2 p-2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                <span className="text-white bg-primary rounded-full text-2xl"><Icon icon={"gg:check-o"}/></span>
                Instant policy Issuance
              </li>

              <li className="flex items-center gap-2 p-2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                <span className="text-white bg-primary rounded-full text-2xl"><Icon icon={"gg:check-o"}/></span>
                Free claims assistance
              </li>

              <li className="flex items-center gap-2 p-2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                <span className="text-white bg-primary rounded-full text-2xl"><Icon icon={"gg:check-o"}/></span>
                Get plan recommendation in seconds
              </li>

            </ul>
        </div>
    </div>
		</div>
	);
}
