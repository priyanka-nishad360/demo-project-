import PageContainer from "../../../components/pageLayouts/PageContainer";
import Head2 from "../../../components/pageLayouts/Head2";


import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


import { useContext } from "react";
import { StoreContext } from "../../../store/store-context";


export default function PermanentInformation() {
    const [respData, setRespData] = useState(null);
    const [error, setError] = useState(null);
    const [state, _] = useContext(StoreContext)

    const token = JSON.parse(localStorage.currentUser).token


    const [formData, setFormData] = useState({
        gstin: respData?.data.data.gstin || '',
        lgnm: respData?.data.data.lgnm || '',
    });
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
          ...formData,
          [id]: value,
        });
    };
    // console.log()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.itaxeasy.com/gst/search/gstin/${JSON.parse(localStorage.currentUser).user.GSTIN.GSTIN_number}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setRespData(response.data);
            } catch (error) {
                setError(error);
            }
        };
    


    fetchData();
    }, []);
    // console.log(state)
    // console.log(JSON.parse(localStorage.currentUser).user)

    return (
		<PageContainer>
			<Head2>Permanent Information</Head2>
            {respData?.data ? (
                <form className='grid gap-6'>
                    <div className='border border-gray-500 rounded-lg p-4  flex flex-col gap-2'>
                        <div className="mb-6">
                            <label htmlFor="gstin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                GSTIN (Registration Number):
                            </label>
                            <input onChange={handleChange} 
                                value={respData?.data.data.gstin} contentEditable="false"
                                type="text" id="gstin" className="shadow-md shadow-primary  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="lgnm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Legal Name (As per PAN):
                            </label>
                            <input onChange={handleChange} 
                                value={respData?.data.data.lgnm} contentEditable="false"
                                type="text" id="lgnm" className="shadow-md shadow-primary  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                PAN of Business :
                            </label>
                            <input onChange={handleChange} 
                                value={respData?.data.data.gstin.slice(2, -3)} contentEditable="false"
                                type="text" id="default-input" className="shadow-md shadow-primary  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="tradeNam" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Trade Name (Optional):
                            </label>
                            <input onChange={handleChange} 
                                value={respData?.data.data.tradeNam} contentEditable="false"
                                type="text" id="tradeNam" className="shadow-md shadow-primary  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>

                        <div className='flex flex-col gap-2 pb-2'>
                            <label htmlFor='ctb'>Status of Business:</label>
                            <select
                                id='ctb'
                                name='ctb'
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
                                <option value=''>{respData?.data.data.ctb}</option>
                            </select>
                        </div>

                        <div className='flex flex-col gap-2 pb-2'>
                            <label htmlFor='states' >State :</label>
                            <select
                                name="states" 
                                id="states"
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
                                <option value="">{respData?.data.data.pradr.addr.stcd}</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha (formerly Orissa)">Odisha (formerly Orissa)</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand (formerly Uttaranchal)">Uttarakhand (formerly Uttaranchal)</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                        </div>
                        
                        <div className='flex flex-col gap-2 pb-2'>
                            <label htmlFor='countries' >country :</label>
                            <select 
                                name="countries" 
                                id="countries"
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
                                <option value="">India</option>
                            </select>

                        </div>



                        <div className="mb-6">
                            <label htmlFor="rgdt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Registration Date :</label>
                            <input onChange={handleChange} 
                                value={respData?.data.data.rgdt} contentEditable="false"
                                type="text" id="rgdt" className="shadow-md shadow-primary  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>

                        <hr className=" border-t-1 my-4"/>

                        <div className="mb-6">
                            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Aggregate Turnover in the preceding FY : 2021-2022
                            </label>
                            <input onChange={handleChange} 
                                value={""} contentEditable="false"
                                type="text" id="default-input" className="shadow-md shadow-primary  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            <span className="flex gap-2 mt-2" >
                                    <Link className="border-b-2 border-primary_light hover:border-primary " >Auto</Link>
                                    <Link className="border-b-2 border-primary_light hover:border-primary " >From GSTIN</Link>
                            </span>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                pan Base Aggregate Turnover in me preceding FY : 2021-2022
                            </label>
                            <input onChange={handleChange} 
                                value={""} contentEditable="false"
                                type="text" id="default-input" className="shadow-md shadow-primary  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Temp
                            </label>
                            <input onChange={handleChange} 
                                value={""} contentEditable="false"
                                type="text" id="default-input" className="shadow-md shadow-primary  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Temp
                            </label>
                            <input onChange={handleChange} 
                                value={""} contentEditable="false"
                                type="text" id="default-input" className="shadow-md shadow-primary  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                            <input onChange={handleChange} 
                                value={""} contentEditable="false"
                                type="text" id="default-input" className="shadow-md shadow-primary  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>

                    </div>
                </form>
            ) : error ? (
                <div>Error fetching data: {error.message}</div>
            ) : (
                <div>Loading...</div>
            )}

		</PageContainer>
	);
}



// function Select_Option(prop) {
//     const {id,label_className ,label,options,option_className} =prop
//     return (
//         <>
//             <label htmlFor={id} className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${label_className}`}>
//                 {label}
//             </label>
//             <select id={id} className={`bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${option_className}`}>
//                 {options.map((el,key)=>(
//                     <option value={el.value}>{el.option}</option>
//                 ))}
//             </select>
//         </>
//     )
// }
