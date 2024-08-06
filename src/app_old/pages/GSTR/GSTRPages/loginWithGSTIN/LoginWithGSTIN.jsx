import PageContainer from "../../../../components/pageLayouts/PageContainer";
import Head2 from "../../../../components/pageLayouts/Head2";

import { Icon } from "@iconify/react";
import { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../../../store/store-context";
import axios from "axios";

export default function LoginWithGSTIN() {
    
    
    
    const [currentTab,setCurrentTab] =useState(1)
    const handleTabs =(e)=>{
        setCurrentTab(e)
    }

    return (
		<PageContainer  >
            {currentTab==1?
            <LoginWithGSTIN_1 handleTabs={handleTabs} />
            :
            <LoginWithGSTIN_2 handleTabs={handleTabs}/>
            }
		</PageContainer>
	);
}


function LoginWithGSTIN_1(prop) {
    const {handleTabs}=prop
    const [formData, setFormData] = useState({
        GSTIN_number: '',
        gst_portal_username: '',
        otp: '',

        password: '',
        GSTIN_Username: '',
    });
    const [counter, setCounter] = useState(60);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    // genrateOTP
    const handle_SendOTP = async () => {
        try {
            const response = await axios.post(
                "https://api.itaxeasy.com/gst/tax-payer/generate-otp",
                {
                    gstin: formData.GSTIN_number,
                    username: formData.gst_portal_username,
                },
                {
                    headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.currentUser).token}`,
                    },
                }
            );
            alert("otp has sent");
            

        } catch (error) {
            //   console.error('Error generating OTP:', error);
            alert(response.error);
        }
    };
    const handle_Verify_otp = async () => {
        try {
            
            const response = await axios.post(
                "https://api.itaxeasy.com/gst/tax-payer/verify-otp",
                    {
                        gstin: formData.GSTIN_number,
                        username: formData.gst_portal_username,
                        otp:formData.otp,
                    },
                    {
                        headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.currentUser).token}`,
                        },
                    }
                 );
            console.log(response)
            if (response.data.success) {
                // update state
                dispatch({
                    type: 'GSTIN',
                    payload: { 
                        GSTIN_number:formData.GSTIN_number,
                        gst_portal_username:formData.gst_portal_username,
                    },
                });

                // update local Storage
                const localStore_currentUser = JSON.parse(localStorage.currentUser)
                localStore_currentUser.user.GSTIN={
                        GSTIN_number:formData.GSTIN_number,
                        gst_portal_username:formData.gst_portal_username,
                }
                localStorage.setItem("currentUser",JSON.stringify(localStore_currentUser))



                alert("GSTIN verified")
                console.log(JSON.parse(localStorage.currentUser));
            }
                
            } catch (error) {
                console.error('Error generating OTP:', error);
                alert("something went wrong")
        }
    };
   


    const [state, dispatch]= useContext(StoreContext)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        handle_Verify_otp()
    }

    return (
        <>
            <Head2>
                <span>Login with GSTIN</span>
                <button type="button" className="ml-auto hover:text-gray-500" onClick={()=>handleTabs(2)}>Skip</button>
            </Head2>
            <div>
                <div  className=' min-h-screen md:px-16 border border-gray-500 rounded-lg p-4  flex flex-col gap-2'>
                    <form  onSubmit={handleSubmit} className='grid md:grid-cols-2 gap-2  my-4'>
                        <div className="mb-6 w-full">
                            <label htmlFor="GSTIN_number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                GSTIN Number
                            </label>
                            <input 
                                onChange={handleChange} 
                                type="text" 
                                id="GSTIN_number"
                                name="GSTIN_number"
                                placeholder="GSTIN Number"
                                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            />
                        </div>
                        <div className="mb-6 w-full">
                            <label htmlFor="gst_portal_username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                GSTIN Portal Username
                            </label>
                            <input 
                                onChange={handleChange} 
                                type="text" 
                                id="gst_portal_username"
                                name="gst_portal_username"
                                placeholder="GSTIN Portal Username"
                                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            />
                        </div>

                        <div className="mb-6 w-full relative">
                            <label htmlFor="otp"className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Enter OTP
                            </label>
                            <input 
                                onChange={handleChange}
                                type="number" 
                                id="otp"
                                name="otp"
                                maxLength="6" 
                                pattern="\d{6}"
                                placeholder="otp"
                                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            />
                            <div>
                                <button 
                                
                                    onClick={handle_SendOTP}
                                    type="button"
                                    disabled={false}
                                    className=" font-thin  absolute right-0 bottom-0 top-7 text-white bg-primary  hover:bg-primary_light focus:-bg--clr-primary-400 rounded-md px-2 m-1"
                                >
                                    send OTP
                                </button>
                            </div>
                        </div>
                        <div className="mb-6 w-full">
                            <button type="submit" className="w-1/2 md:mt-7    text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                verify
                            </button>
                        </div>


                        
                        <button
                            type="button"
                            className=" w-full   text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 mr-2 mt-7 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Manage API section
                        </button>
                    </form>
                    


                    <hr className=" border-t-2 border-gray-500 my-4"/>

                    

                    <div className="flex gap-2 flex-col md:flex-row">
                        <div className="mb-6 w-full">
                            <label htmlFor="GSTIN_Username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            GSTIN Username
                            </label>
                            <input 
                                onChange={handleChange} 
                                type="text" 
                                id="GSTIN-username"
                                name="GSTIN-username"
                                placeholder="GSTIN Username"
                                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            />
                        </div>
                        <div className="mb-6 w-full">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Password
                            </label>
                            <input 
                                onChange={handleChange} 
                                type="password" 
                                id="password"
                                name="password"
                                placeholder="password"
                                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            />
                        </div>
                        
                    </div>
                    <button
                    
                        type="submit"
                        className="w-1/2    text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Login to GST
                    </button>
                </div>
                
            </div>
        </>
    )
}


function LoginWithGSTIN_2(prop) {
    const {handleTabs} = prop
    return (
		<>
			<Head2>
                <button type="button" className="flex mr-auto hover:text-gray-500" onClick={()=>handleTabs(1)}>
                    <Icon className='my-auto mr-4' icon='ion:chevron-back' />
				    <span>Return to gstr Login</span>
                </button>
			</Head2>
            <form className='grid gap-6 md:p-16 '>
                <div className='border border-gray-500 rounded-lg p-4  flex flex-col gap-2'>
                    
                    <div className="grid sm:grid-cols-2 grid-cols-1 ">
                        <div>
                            <div>
                                <span>username:- null</span>
                                <span>GSTIN:- null</span>
                            </div>
                            <div>
                                31-nov-2023
                            </div>
                        </div>
                        <div>
                            <span>Return Filing Preference</span>
                            <Select options={["select"]} />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <Select options={["2023-24"]} />
                        <Select options={["Quarter"]} />
                        <Select options={["period"]} />
                    </div>
                    <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 ">
                        <BTN>Cash</BTN>
                        <BTN>Liability</BTN>
                        <BTN>Credit</BTN>
                        <BTN>File Return</BTN>
                        <BTN>Pov Tax</BTN>
                    </div>
                </div>
            </form>
		</>
	);
}


function BTN(prop) {
    const {children,className}=prop
    return (
		<button
			type='button'
			className={` 
                text-white
                bg-blue-700
                hover:bg-blue-800
                focus:ring-4 
                focus:ring-blue-300 
                font-medium 
                rounded-lg
                text-sm 
                px-5 
                py-2.5 
                mr-2 mb-2 
                dark:bg-blue-600 
                dark:hover:bg-blue-700 
                focus:outline-none 
                dark:focus:ring-blue-800 

                
                ${className}
            `}
		>
			{children}
		</button>
	);
}

function Select(prop) {
    const {options,className }=prop
    return (
        <select class={`block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}>
            {options.map((el,key)=>(
                <option value={el} key={key}>{el}</option>
            ))}
        </select>
	);
}
