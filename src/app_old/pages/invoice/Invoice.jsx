import Section from "../../components/pageLayouts/Section";
import { H1,H2,H3 } from "../../components/pageLayouts/Headings";
import GridContainer from "../../components/cardItems/GridContainer";
import GridItem from "../../components/cardItems/GridItem";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Invoice() {
    const data = {
        invoice:[
            {
                linkTo:"/dashboard/invoice/generator",

                label:"Invoice Generator",
            },
            {
                linkTo:"",

                label:440,
                currency_icon:"fa-solid:rupee-sign",
                subLabel:"Sales",
                arrow_icon:"mingcute:arrow-down-fill",
                cssClass:"text-emerald-500",
            },
            {
                linkTo:"",

                label:38594,
                currency_icon:"fa-solid:rupee-sign",
                subLabel:"Purchase",
                arrow_icon:"mingcute:arrow-up-fill",
                cssClass:"text-red-500",
            },
            {
                linkTo:"",

                label:0,
                subLabel:"Total Suppliers",
                icon:"mingcute:arrow-up-fill",
            },
            {
                linkTo:"",

                label:0,
                subLabel:"Total Customers",
                currency_icon:"fa-solid:rupee-sign",
            },
            {
                linkTo:"",
                
                label:0,
                subLabel:"Items",
                icon:"mingcute:arrow-up-fill",
                notify_icon:"icon-park-outline:dot",
            },
            // {
            //     linkTo:"/dashboard/invoice/totalbalance",
                
            //     label:"Total Balance",
            //     subLabel:"Cash + Bank Balance",
            //     icon:"mingcute:arrow-up-fill",
            // },
            // {
            //     linkTo:"",
                
            //     label:"Reports",
            //     subLabel:"Sales, Party, GST...",
            //     icon:"mingcute:arrow-up-fill",
            //     notify_icon:"icon-park-outline:dot",
            // },
        ],
    }
    return (
        <>
            <H1 className="justify-center">Invoice</H1>
            <Section>
                <GridContainer>
                    {data?.invoice.map((el,key)=>(
                        <GridItem className="relative  group" key={key} to={el?.linkTo} >
                            <div className={`
                                    text-lg 
                                    sm:w-full 
                                    w-1/2  
                                    p-2 
                                    grid
                                    grid-cols-1   
                                    `}
                                >
                                <span className="font-extrabold text-neutral-950 dark:text-neutral-50">
                                    <Icon className=" inline-block h-4 mb-1 mr-2" icon={el?.currency_icon} />
                                    {el?.label}
                                </span>
                                <span className={` font-medium ${el?.cssClass}`}>
                                    {el?.subLabel}
                                    <Icon className="inline-block ml-4" icon={el.arrow_icon} />
                                </span>
                            </div>
                            <div className="ml-auto ">

                                <Icon className=" absolute top-2 right-2 text-red-600 w-6 h-6" icon={el?.notify_icon} />
                                <Icon className="h-12 w-8  group-hover:translate-x-4 transf transition-transform" icon="iconamoon:arrow-right-2-duotone" />
                            </div>
                        </GridItem>
                    ))}
                </GridContainer>
            </Section>

            <H3>Billing History</H3>
            <Section>
                <GridContainer>
                    <GridItem className="grid grid-cols-2">
                        <label htmlFor="SALES" className="h-full items-center text-sm font-medium text-gray-900 dark:text-white">SALES</label>
                        <select id="SALES" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="Today">Today</option>
                            <option value="Week">Week</option>
                            <option defaultValue="Month">Month</option>
                            <option value="Year">Year</option>
                        </select>
                    </GridItem>
                    <GridItem className="grid grid-cols-2">
                        <label htmlFor="PURCHASES" className="h-full items-center text-sm font-medium text-gray-900 dark:text-white">PURCHASES</label>
                        <select id="PURCHASES" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="Today">Today</option>
                            <option value="Week">Week</option>
                            <option defaultValue="Month">Month</option>
                            <option value="Year">Year</option>
                        </select>
                    </GridItem>
                </GridContainer>
            </Section>

            <Section className=" overflow-auto" >
                <table>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Invoice Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Issue Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Due Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount Paid
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                INV-2023-001
                            </th>
                            <td className="px-6 py-4">
                                2023-10-05
                            </td>
                            <td className="px-6 py-4">
                                2023-10-05
                            </td>
                            <td className="px-6 py-4">
                                $450.00
                            </td>
                            <td className="px-6 py-4">
                                $00.00
                            </td>
                            <td className="px-6 py-4">
                                Unpaid
                            </td>
                            <td className="px-6 py-4">
                                action
                            </td>
                        </tr>
                    </tbody>

                </table>
            </Section>

            <Link className=" text-blue-500 mb-8  container 2xl:max-w-7xl mx-auto flex items-center justify-between border-neutral-300 dark:border-neutral-600 border-t border-b">
                <span className=" font-extrabold">View unlimited reports</span>
                <Icon className="h-12 w-8" icon="iconamoon:arrow-right-2-duotone" />
            </Link>
            <H3>Transactions</H3>
            <Section>
                <div className=" font-semibold">Aarushi</div>
                <div className="flex justify-between">
                    <span>Received Payment #1</span>
                    <span><R/> 40,000</span>
                </div>
                <div>16 Aug</div>

                <div className="font-semibold text-right border-t-2 mt-2 pt-2">
                    <Link className="text-blue-800 hover:text-blue-600">
                        <Icon className="ml-auto inline-block mx-2" icon="simple-line-icons:action-redo"/>
                        Send Receipt
                    </Link>
                </div>
            </Section>

           
        
        </>
	);
}



function R() {
  return (<>&#8377;</>)
}