import { useState } from "react";
import { Link } from "react-router-dom";
import Section from "../../../components/pageLayouts/Section";
const data = {
	table: {
		thead: [
			{
				title: "payments ID",
			},
			{
				title: "price",
			},
			{
				title: "date",
			},
			{
				title: "status",
			},
			{
				title: "last update",
			},
			{
				title: "details",
			},
		],
		Payments: [
            {
                payment_id: "123456",
                Price: "₹100",
                date: "12/12/2022",
                status: "paid",
                last_update: "12/12/2022",
                details: "View Details",
            },
            {
                payment_id: "123456",
                Price: "₹100",
                date: "12/12/2022",
                status: "pending",
                last_update: "12/12/2022",
                details: "View Details",
            },
            {
                payment_id: "123456",
                Price: "₹100",
                date: "12/12/2022",
                status: "paid",
                last_update: "12/12/2022",
                details: "View Details",
            },
		],
	},
    pages:14,

};
export default function Payments() {
    const [currentPage, setCurrentPage] = useState(1)

    const Previous = () => {
        if (currentPage <= 1) {
            return
        }
        else {
            setCurrentPage((prev)=>prev - 1)
        }
    }
    const handleNext = () => {
        if (currentPage >= data.pages) {
            return
        }
        else {
            setCurrentPage((prev)=>prev + 1)
        }
    }

	return(
        <Section className=" min-h-full flex flex-col">
            <div className='relative overflow-x-auto outline outline-2 outline-gray-300/50 rounded-lg '>
                <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead className="text-xs uppercase ">
                        <tr>
                            {data.table.thead.map((item, index) => (
                                <th  key={index+item.title} scope='col' className="whitespace-nowrap px-6 py-3">
                                    {item.title}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {data.table.Payments.length === 0 ? (
                        ""
                    ):(
                        <tbody>
                                {data.table.Payments.map((item, index) => (
                                    <tr key={index+item.payment_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize">
                                        <td className="px-6 py-4">{item.payment_id}</td>
                                        <td className="px-6 py-4">{item.Price}</td>
                                        <td className="px-6 py-4">{item.date}</td>
                                        <td className="px-6 py-4">
                                            <span className={` ${item.status==="pending"?" bg-red-600":" bg-green-500"} text-neutral-50 text-xs font-medium px-2.5 py-1 rounded`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">{item.last_update}</td>
                                        <td className="px-6 py-4">{item.details}</td>
                                    </tr>
                                ))}
                        </tbody>
                    )}
                </table>
                {data.table.Payments.length === 0 && (
                    <div className="text-center px-6 py-4 text-gray-500 dark:text-gray-400">
                        <h1 className="font-bold text-2xl">No Payment found</h1>
                        <p>You have not made any payments yet.</p>
                    </div>
                )}
            </div>

            <nav className="my-8 mt-auto" aria-label="orders page navigation">
                <ul className="inline-flex -space-x-px text-sm">
                    <li onClick={Previous}>
                        <Link className="flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" >Previous</Link>
                    </li>

                    <li>
                        <div aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" >{currentPage}</div>
                    </li>
                    <li className={`${currentPage < data.pages ? "" : "hidden"}`}>
                        <div aria-current="page" className=" flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" >{currentPage+1}</div>
                    </li>
                    <li className={`${currentPage+1 < data.pages ? "" : "hidden"}`}>
                        <div aria-current="page" className=" flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" >{currentPage+2}</div>
                    </li>

                    <li onClick={handleNext}>
                        <Link  className="flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" >Next</Link>
                    </li>
                </ul>
            </nav>
        </Section>
    )
}
