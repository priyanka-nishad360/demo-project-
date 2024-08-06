import { useEffect, useState } from "react"
import { toast } from "react-toastify";

import { useForm } from "react-hook-form"
import axios from "axios"
import { emailRegex,panRegex,aadharRegex,phoneNumberRegex  } from "../../components/regexPatterns"
import { Icon } from "@iconify/react"
import { H2 } from "../../components/pageLayouts/Headings";
import { useAuth } from "../../hooks/useAuth";

const Form1 = (prop) => {
    const { userForm, } = prop
    const {register,setValue,formState} = userForm;
    const {errors}=formState

    return (
    <>
        <H2 className="justify-center font-semibold" >
            Edit User Profile
        </H2>
        <ul className="flex gap-2 justify-evenly sm:flex-row flex-col">
            <li className=" flex-1 relative">
                <label htmlFor="pan" >
                    Pan
                    <p className=" absolute right-0 top-0 text-blue-500 z-10">{prop.aadhaar_seeding_status==true?" Aadhaar Linked":""}</p>
                </label>
                <input id="pan" placeholder="pan" type="text" autoComplete="on"  className={FormStyle.input}
                    {...register("pan",
                        {
                            required:"PAN Number is required",
                            pattern: {
                                value: panRegex,
                                message: "Please enter a valid PAN",
                            },
                            onChange:(e)=>{
                                setValue("pan",(e.target.value.slice(0, 10)).toUpperCase())
                            }
                        }
                    )}
                />
                
                    <p className=" -text--clr-accent-250 h-4 text-xs italic">{errors.pan && errors.pan.message}</p>
            </li>
        </ul>
        <ul className="flex gap-2 justify-evenly sm:flex-row flex-col">
            <li className=" flex-1">
                <label htmlFor="aadhaar" >Aadhaar</label>
                <input id="aadhaar" placeholder="Aadhaar"  type="text" autoComplete="aadhaar" className={FormStyle.input}
                    {...register("aadhaar",{
                            required:"Aadhaar ID is required",
                            onChange:(e)=>{
                                setValue("aadhaar",(e.target.value.slice(0, 12)).toUpperCase())
                            },
                            pattern: {
                                value: aadharRegex,
                                message: "Please enter a valid Aadhaar",
                            },
                        }
                    )}
                />
                <p className=" -text--clr-accent-250 h-4 text-xs italic">{errors.aadhaar && errors.aadhaar.message}</p>
            </li>
            <li className=" flex-1">
                <label htmlFor="phone" >Phone</label>
                <input id="phone" placeholder="Phone" type="text" autoComplete="on" className={FormStyle.input}
                    {...register("phone",{
                            required:"First name is required",
                            pattern: {
                                value: phoneNumberRegex,
                                message: "Please enter a valid Aadhaar",
                            },
                        }
                    )}
                />
                <p className=" -text--clr-accent-250 h-4 text-xs italic">{errors.phone && errors.phone.message}</p>
            </li>
        </ul>
        
        <ul className="sm:mt-4 flex gap-2 justify-evenly sm:flex-row flex-col">
            <li className=" flex-1">
                <label htmlFor="firstName" fontWeight={"normal"}>First Name</label>
                <input id="firstName" placeholder="First Name" type="text" autoComplete="on" className={FormStyle.input}
                    {...register("firstName",{
                        required:"First name is required"
                        }
                    )}
                />
                <p className=" -text--clr-accent-250 h-4 text-xs italic">{errors.firstName && errors.firstName.message}</p>
            </li>

            <li className=" flex-1">
                <label htmlFor="middleName" fontWeight={"normal"}>Middle Name</label>
                <input id="middleName" placeholder="Middle Name" type="text" autoComplete="on" className={FormStyle.input}
                    {...register("middleName",)}
                />
                <p className=" -text--clr-accent-250 h-4 text-xs italic">{errors.middleName && errors.middleName.message}</p>
            </li>

            <li className=" flex-1">
                <label htmlFor="lastName" fontWeight={"normal"}>Last Name</label>
                <input id="lastName" placeholder="Last Name" type="text" autoComplete="on" className={FormStyle.input} 
                    {...register("lastName",)}
                />
                <p className=" -text--clr-accent-250 h-4 text-xs italic">{errors.lastName && errors.lastName.message}</p>
            </li>

        </ul>
    </>
    )
}

const Form2 = (prop) => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const { email, address, pin, userForm} = prop

    const {register,formState} = userForm;
    const {errors}=formState

    return (
    <>
        <H2 className="justify-center font-semibold" >
            User Details
        </H2>
        <ul className="grid gap-y-2 gap-x-2 justify-evenly sm:grid-cols-2 ">
            <li>
                <label htmlFor="email" fontWeight={"normal"}>Email address</label>
                <input placeholder="your-email@example.com" type="email" autoComplete="email" className={FormStyle.input} 
                    {...register("email",{
                        required:"email is required",
                        pattern: {
                            value: emailRegex,
                            message: "Please enter a valid email",
                        },
                    })}
                />
                <p className="250 h-4 text-xs italic">We&apos;ll never share your email.</p>
                <p className=" -text--clr-accent-250 h-4 text-xs italic">{errors.email && errors.email.message}</p>
            </li>

            <li>
                <label htmlFor="address" >
                Address
                </label>
                <input type="text" name="address" id="address" autoComplete="address" className={FormStyle.input} 
                    {...register("address",{
                        required:"address is required",
                    })}
                />
            <p className=" -text--clr-accent-250 h-4 text-xs italic">{errors.address && errors.address.message}</p>
            </li>

            <li>
                <label htmlFor="city" >
                City
                </label>
                <input type="text" name="city" id="city" autoComplete="on" className={FormStyle.input}
                    {...register("city",{
                    })}
                />
            </li>

            <li>
                <label htmlFor="pin" >
                Pin/ZIP 
                </label>
                <input type="text" name="pin" id="pin" autoComplete="on" className={FormStyle.input} 
                    {...register("pin",{
                    })}
                />
            </li>
        </ul>
    </>
    )
}

const Form3 = (prop) => {
    // const { verified, createdAt, userType, id,  firstName, lastName, email, phone, address, pin, aadhaar, pan, } = prop
    const {verified, createdAt, userType, id,userForm,watch} = prop
    // const {register} = userForm;
    const previewData = {
        pan:watch("pan"),
        aadhaar:watch("aadhaar"),
        firstName:watch("firstName"),
        middleName:watch("middleName"),
        lastName:watch("lastName"),
        phone:watch("phone"),
        email:watch("email"),
        address:watch("address"),
        city:watch("city"),
        pin:watch("pin"),
    }
    return (
    <>
        <H2 className="justify-center font-semibold" >
            Final Preview
        </H2>
        <div className="grid grid-cols-1 gap-y-4 gap-x-4 p-8">
            <div className=" my-8 mx-auto grid grid-cols-[1fr,2fr] place-items-center max-w-md py-6 p-4 bg-gray-100 border border-gray-200 rounded-lg shadow-inner dark:shadow-gray-700 dark:bg-gray-800 dark:border-gray-700">
                <span className="grid place-items-center"><Icon icon="lets-icons:user-box-duotone" className=" text-9xl"/></span>
                <ul>
                    <li className="flex gap-2 mt-4"> 
                        <span className="font-bold flex items-end md:mb-0 text-md  dark:text-white capitalize">Pan Number: </span>
                        <span className=" border-b border-neutral-500 border-dashed text-sm">{previewData.pan}</span>
                    </li>
                    <li className="flex gap-2 mt-4"> 
                        <span className="font-bold flex items-end md:mb-0 text-md  dark:text-white capitalize">Name: </span>
                        <span className=" border-b border-neutral-500 border-dashed text-sm">{previewData.firstName}</span>
                        <span className=" border-b border-neutral-500 border-dashed text-sm">{previewData.middleName}</span>
                        <span className=" border-b border-neutral-500 border-dashed text-sm">{previewData.lastName}</span>

                    </li>
                    <li className="flex gap-2 mt-4"> 
                        <span className="font-bold flex items-end md:mb-0 text-md  dark:text-white capitalize">Email: </span>
                        <span className=" border-b border-neutral-500 border-dashed text-sm">{previewData.email}</span>
                   </li>
                </ul>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                {Object.entries(previewData).map(([key, value]) => (
                    <li className="mt-4 grid lg:grid-cols-[1fr,2fr] grid-cols-1" key={key}>
                        <span className="font-bold flex items-end md:mb-0 mb-2 text-md  dark:text-white capitalize">{` ${key}`}:</span>
                        <span className=" border-b border-neutral-500  text-sm border-dashed py-1">{value}</span>
                    </li>
                ))
                }
            </ul>
        </div>
    </>
    )
}


// gst state code input options
const gstStateCodes = [
    { state: "Jammu and Kashmir", code: "01" },
    { state: "Himachal Pradesh", code: "02" },
    { state: "Punjab", code: "03" },
    { state: "Chandigarh", code: "04" },
    { state: "Uttarakhand", code: "05" },
    { state: "Haryana", code: "06" },
    { state: "Delhi", code: "07" },
    { state: "Rajasthan", code: "08" },
    { state: "Uttar Pradesh", code: "09" },
    { state: "Bihar", code: "10" },
    { state: "Sikkim", code: "11" },
    { state: "Arunachal Pradesh", code: "12" },
    { state: "Nagaland", code: "13" },
    { state: "Manipur", code: "14" },
    { state: "Mizoram", code: "15" },
    { state: "Tripura", code: "16" },
    { state: "Meghalaya", code: "17" },
    { state: "Assam", code: "18" },
    { state: "Jharkhand", code: "20" },
    { state: "Odisha", code: "21" },
    { state: "Chhattisgarh", code: "22" },
    { state: "Madhya Pradesh", code: "23" },
    { state: "Gujarat", code: "24" },
    { state: "Dadra and Nagar Haveli and Daman and Diu", code: "26" },
    { state: "Maharashtra", code: "27" },
    { state: "Andhra Pradesh", code: "28" },
    { state: "Karnataka", code: "29" },
    { state: "Goa", code: "30" },
    { state: "Lakshadweep", code: "31" },
    { state: "Kerala", code: "32" },
    { state: "Tamil Nadu", code: "33" },
    { state: "Puducherry", code: "34" },
    { state: "West Bengal", code: "19" },
    { state: "Ladakh", code: "38" },
    { state: "Telangana", code: "36" }
];


function Steps(prop) {
    const {step}= prop
    return (
        <>
        <ol className="flex justify-center  sm:flex-row  ">
            <li className={`flex items-center p-2 mx-2 relative gap-2 border-b-2 ${step>=1?"border-blue-500":"border-gray-400"}`}>
                <span className={`${step>=1?"bg-blue-400 dark:bg-blue-900 text-neutral-100":"bg-gray-200 text-neutral-100"} w-6 h-6 rounded-full grid place-items-center`}>
                    1
                </span>
                <h3 className="  whitespace-nowrap font-medium text-xs sm:text-lg leading-tight">Edit User Profile</h3>
            </li>
            <li className={`flex items-center p-2 mx-2 relative gap-2 border-b-2 ${step>=2?"border-blue-500":"border-gray-400"}`}>
                <span className={`${step>=2?"bg-blue-400 dark:bg-blue-900 text-neutral-100":"bg-gray-200 dark:bg-neutral-800 dark:text-neutral-100"}  w-6 h-6 rounded-full grid place-items-center`}>
                    2
                </span>
                <h3 className=" whitespace-nowrap font-medium text-xs sm:text-lg leading-tight">User Details</h3>
            </li>
            <li className={`flex items-center p-2 mx-2 relative gap-2 border-b-2 ${step>=3?"border-blue-500":"border-gray-400"}`}>
                <span className={`${step>=3?"bg-blue-400 dark:bg-blue-900 text-neutral-100":"bg-gray-200 dark:bg-neutral-800 dark:text-neutral-100"}  w-6 h-6 rounded-full grid place-items-center`}>
                    3
                </span>
                <h3 className=" whitespace-nowrap font-medium text-xs sm:text-lg leading-tight">Final Review</h3>
            </li>
        </ol>
        </>
	);
}


const FormStyle = {
    input:`
        bg-neutral-100
        dark:bg-neutral-800
        appearance-none 
        border
        border-gray-300 
        rounded 
        w-full
        xl:py-3
        py-2
        px-2
        text-gray-700 
        leading-tight 
        focus:outline-none 
        focus:border-primary
    `
}


function UserProfileEditor(props) {

}
function UserProfilePreview(props) {

    return(
        <div className="bg-bg_1 mx-auto text-txt max-w-2xl shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium ">
                    {props?.firstName}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500 flex flex-wrap justify-between">
                    <span className="whitespace-nowrap overflow-auto">ID: {props?.id} </span>
                    <span>JOINED: {(props?.createdAt)?.slice(0,7)}</span>
                </p>
            </div>
            <div className="border-t border-gray-200">
                <ul>                    
                    <li className="mt-2  px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className=" text-lg capitalize font-medium text-gray-500">
                            full name:
                        </div>
                        <div className=" border-b border-dashed border-gray-500 mt-1 text-sm  sm:mt-0 sm:col-span-2">
                            {props?.firstName}  {props?.lastName}
                        </div>
                    </li>
                    <li className="mt-2  px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className=" text-lg capitalize font-medium text-gray-500">
                            aadhaar:
                        </div>
                        <div className=" border-b border-dashed border-gray-500 mt-1 text-sm  sm:mt-0 sm:col-span-2">
                            {props?.aadhaar}
                        </div>
                    </li>
                    <li className="mt-2  px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className=" text-lg capitalize font-medium text-gray-500">
                            address:
                        </div>
                        <div className=" border-b border-dashed border-gray-500 mt-1 text-sm  sm:mt-0 sm:col-span-2">
                            {props?.address}
                        </div>
                    </li>
                    <li className="mt-2  px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className=" text-lg capitalize font-medium text-gray-500">
                            createdAt:
                        </div>
                        <div className=" border-b border-dashed border-gray-500 mt-1 text-sm  sm:mt-0 sm:col-span-2">
                            {props?.createdAt}
                        </div>
                    </li>
                    <li className="mt-2  px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className=" text-lg capitalize font-medium text-gray-500">
                            email:
                        </div>
                        <div className=" border-b border-dashed border-gray-500 mt-1 text-sm  sm:mt-0 sm:col-span-2">
                            {props?.email}
                        </div>
                    </li>
                    <li className="mt-2  px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className=" text-lg capitalize font-medium text-gray-500">
                            id:
                        </div>
                        <div className=" border-b border-dashed border-gray-500 mt-1 text-sm  sm:mt-0 sm:col-span-2">
                            {props?.id}
                        </div>
                    </li>
                    <li className="mt-2  px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className=" text-lg capitalize font-medium text-gray-500">
                            pan:
                        </div>
                        <div className=" border-b border-dashed border-gray-500 mt-1 text-sm  sm:mt-0 sm:col-span-2">
                            {props?.pan}
                        </div>
                    </li>
                    <li className="mt-2  px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className=" text-lg capitalize font-medium text-gray-500">
                            phone:
                        </div>
                        <div className=" border-b border-dashed border-gray-500 mt-1 text-sm  sm:mt-0 sm:col-span-2">
                            {props?.phone}
                        </div>
                    </li>
                    <li className="mt-2  px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className=" text-lg capitalize font-medium text-gray-500">
                            pin:
                        </div>
                        <div className=" border-b border-dashed border-gray-500 mt-1 text-sm  sm:mt-0 sm:col-span-2">
                            {props?.pin}
                        </div>
                    </li>
                    <li className="mt-2  px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className=" text-lg capitalize font-medium text-gray-500">
                            userType:
                        </div>
                        <div className=" border-b border-dashed border-gray-500 mt-1 text-sm  sm:mt-0 sm:col-span-2">
                            {props?.userType}
                        </div>
                    </li>
                    <li className="mt-2  px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className=" text-lg capitalize font-medium text-gray-500">
                            verified:
                        </div>
                        <div className=" border-b border-dashed border-gray-500 mt-1 text-sm  sm:mt-0 sm:col-span-2">
                            {props?.verified}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}


function UserProfile_old() {
    const { currentUser,token } = useAuth();
    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(33.33)
    
    const userForm = useForm();
    const {register,control,handleSubmit,formState,setValue,watch} = userForm;
    const [aadhaar_seeding_status, setaadhaar_seeding_status] = useState(false)
    const [editable,setEditable]=useState(false)

    
    const handleAutoFIll = async () => {
        if (watch("pan")?.length===10) {

            const response = await axios.get(`${"https://api.itaxeasy.com"}/pan/get-pan-details?pan=${ watch("pan") }`, {
                headers: {
                "Authorization": `Bearer ${token}`
                }
            });
            setaadhaar_seeding_status(prev=>prev=response.data.data?.aadhaar_seeding_status=="Y")

            setValue("firstName", response.data.data?.first_name);
            setValue("middleName", response.data.data?.middle_name);
            setValue("lastName", response.data.data?.last_name);
            
            setValue("email", currentUser.user?.email);
            setValue("phone", currentUser.user?.phone);
            setValue("pin", currentUser.user?.pin);

        }
    };
    useEffect(()=>{
        handleAutoFIll()
    },[watch("pan")])



    const onSubmit = async (formData)=>{
        const er=true
        if (er) {
            toast("Error in submitting your form", {
				type: "error",
			});
        }else {
            toast("successfully submitted your form",{
                type: "success",
            });
        }

    }
    console.log(editable)
    return (
        <section className="my-4 mx-auto container 2xl:max-w-7xl sm:p-4">
            <div className=" mt-4 px-4 mx-auto flex justify-end container 2xl:max-w-2xl">
                <button onClick={()=>setEditable(prev=>!prev)} className=" text-2xl flex gap-2 items-center">
                    <Icon icon={editable?"material-symbols:cancel-outline":"tabler:edit"}/>
                    {editable?"Cancel":"Edit"}
                </button>
            </div>
            {editable?
                // <UserProfileEditor {...currentUser.user}/>

                <form onSubmit={handleSubmit(onSubmit)}  className="container max-w-3xl  border rounded-lg shadow-md p-6 mt-2.5 mb-2.5 mx-auto">

                    {
                        step === 1 ? 
                        <Form1 {...currentUser.user} userForm={userForm} aadhaar_seeding_status={aadhaar_seeding_status}/> : 
                        step === 2 ? 
                        <Form2 {...currentUser.user}  userForm={userForm} /> :
                        <Form3 {...currentUser.user}  userForm={userForm} watch={watch} />
                    }


                    <ul className="p-6 mt-2.5 mb-2.5 flex ">
                        <li className="flex">
                            <button onClick={() => {
                                    setStep(step - 1)
                                }}
                                type="button"
                                disabled={step === 1}
                                className={`${step === 1?"cursor-not-allowed  bg-blue-300":"bg-blue-700 hover:bg-blue-800"} text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 `}
                                >
                                Back
                            </button>
                            <button onClick={() => {
                                    setStep(step + 1);
                                        if (step === 3) {
                                            setProgress(100);
                                        } else {
                                            setProgress(progress + 33.33);
                                        }
                                    }}
                                type="button"
                                disabled={step === 3}
                                className={`${step === 3?"cursor-not-allowed  bg-blue-300":""} bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`}
                                >
                                Back
                            </button>
                        </li>
                        {step === 3 ? (
                        <li className="ml-auto">
                            <button onClick={handleSubmit} type="submit" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                >
                                Submit
                            </button>
                            
                        </li>
                        ) : null}
                    </ul>

                    <Steps step={step}/>

                </form>
            :
                <UserProfilePreview {...currentUser.user}/>
            }
        </section>

    )
}

export default function UserProfile() {
    return (
        <h1>UserProfile</h1>
    )
}