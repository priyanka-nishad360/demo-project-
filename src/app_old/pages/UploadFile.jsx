// import { useRef } from "react";
// import { useCallback } from "react";
// import { useContext, useEffect, useState } from "react"
// import useRazorpay from "react-razorpay";
// import { toast } from "react-toastify";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// import { StoreContext } from "../store/store-context.js";
// import { MainLink, NoData } from "../styles/globalStyles"
// import { MdCloudUpload, MdDelete } from "react-icons/md";
// import { AiFillFileImage } from "react-icons/ai"
// import { useAuth } from '../hooks/useAuth.js';
// import { Card, NameSection, UploadBox, Image, ProgressBox, ProgressBar } from "../styles/UploadFileStyles"

// const INDIAN_STATES = ["Andhra Pradesh",
//     "Arunachal Pradesh",
//     "Assam",
//     "Bihar",
//     "Chhattisgarh",
//     "Goa",
//     "Gujarat",
//     "Haryana",
//     "Himachal Pradesh",
//     "Jammu and Kashmir",
//     "Jharkhand",
//     "Karnataka",
//     "Kerala",
//     "Ladakh",
//     "Madhya Pradesh",
//     "Maharashtra",
//     "Manipur",
//     "Meghalaya",
//     "Mizoram",
//     "Nagaland",
//     "Odisha",
//     "Punjab",
//     "Rajasthan",
//     "Sikkim",
//     "Tamil Nadu",
//     "Telangana",
//     "Tripura",
//     "Uttarakhand",
//     "Uttar Pradesh",
//     "West Bengal",
//     "Andaman and Nicobar Islands",
//     "Chandigarh",
//     "Dadra and Nagar Haveli",
//     "Daman and Diu",
//     "Delhi",
//     "Lakshadweep",
//     "Puducherry"];

// const UploadFile = () => {
//     const { token } = useAuth();

//     const [order, setOrder] = useState({});
//     const [paymentData, setPaymentData] = useState(undefined);
//     const razRef = useRef();

//     const Razorpay = useRazorpay();

//     const [data, setData] = useState();

//     const [stateOfSupply, setStateOfSupply] = useState('');

//     const [files, setFiles] = useState([]);

//     const [loading, setLoading] = useState(false);
//     const [image, setImage] = useState(Array(25).fill({ url: '', loading: false }))// assuming maximum no. of documents asked is 25 can be changed if needed more
//     const [fileName, setFileName] = useState(Array(25))

//     useEffect(() => {
//         try {
//             const urlParams = new URLSearchParams(window.location.search);
//             if (urlParams.has("id")) {
//                 const id = urlParams.get('id')
//                 const cartInfo = JSON.parse(localStorage.getItem('cartData'))
//                 const filterData = cartInfo.filter((doc) => doc.id === id)
//                 setData(filterData[0].docs)

//             } else {
//                 const cartInfo = JSON.parse(localStorage.getItem('cartData'))
//                 let requiredDoc = []

//                 cartInfo?.map(item => item.docs).map(doc => requiredDoc.push(...doc))
//                 const filterDoc = requiredDoc.filter((value, i, self) => i === self.findIndex((item) => item.title.trim() === value.title.trim()))
//                 setData(filterDoc)

//             }

//         } catch (err) {
//             console.log(err)
//         }

//     }, []);

//     const handlePaymentError = async res => {
//         await fetch(`${BASE_URL}/payment/response`, {
//             method: 'POST',
//             headers: new Headers({
//                 'Authorization': `Basic ${token}`,
//                 'Content-Type': 'application/json',
//             }),
//             body: JSON.stringify({
//                 status: 'failed',
//                 response: {
//                     "razorpay_order_id": res.error.metadata.order_id,
//                     "razorpay_payment_id": res.error.metadata.payment_id
//                 }
//             })
//         });

//         toast(`Payment Failed: ${res.error.code}`, { type: 'error' });
//     };

//     const handlePayment = useCallback((paymentOptions) => {
//         const options = {
//             ...paymentOptions,
//             handler: async response => {
//                 // console.log(razRef.current);
//                 await fetch(`${BASE_URL}/payment/response`, {
//                     method: 'POST',
//                     headers: new Headers({
//                         'Authorization': `Basic ${token}`,
//                         'Content-Type': 'application/json',
//                     }),
//                     body: JSON.stringify({
//                         status: 'success',
//                         response: {
//                             ...response,

//                         }
//                     })
//                 });
//                 localStorage.setItem('cartData', '[]');
//                 localStorage.setItem('apiCart', '[]')
//                 toast('Payment Successfull. Go to dashboard to keep updated on your order.', {
//                     type: 'success',
//                 });
//             },
//         };

//         razRef.current = new Razorpay(options);

//         razRef.current.on("payment.failed", handlePaymentError);

//         razRef.current.open();
//     }, [Razorpay]);

// console.log("sjkashjsa",data)

//     const handleForm = async e => {
//         e.preventDefault();
//         const services = JSON.parse(localStorage.getItem('cartData')).map(({ id }) => id);
//         console.log("services",services);
//         try {
//             setLoading(true);
//             const res = await fetch(`${BASE_URL}/billpayable/create`, {
//                 method: 'POST',
//                 headers: new Headers({
//                     'Authorization': `Basic ${token}`,
//                     'Content-Type': 'application/json',
//                 }),
//                 body: JSON.stringify({
//                     services
//                 })
//             });

//             if (!res.ok) {
//                 throw new Error('Could not create order');
//             }

//             const data = await res.json();

//             setOrder(data);

//             const formData = new FormData();

//             formData.append('orderId', data.orderId);
//             formData.append('stateOfSupply', stateOfSupply);

//             files.forEach(file => {
//                 console.log(file);
//                 formData.append('document[]', file, file.originalname);
//             });

//             const res2 = await fetch(`${BASE_URL}/order/upload-documents`, {
//                 method: 'POST',
//                 headers: new Headers({
//                     'Authorization': `Basic ${token}`,
//                 }),
//                 body: formData,
//                 redirect: "follow",
//             });

//             if (!res2.ok) {
//                 throw new Error('Could not upload documents. Please try again.');
//             }

//             const paymentRes = await fetch(`${BASE_URL}/payment/initiate_payment`, {
//                 method: 'POST',
//                 headers: new Headers({
//                     'Authorization': `Basic ${token}`,
//                     'Content-Type': 'application/json',
//                 }),
//                 body: JSON.stringify({
//                     orderId: data.orderId,
//                 }),
//             });

//             if (!paymentRes.ok) {
//                 throw new Error('Could not initiate payment. Please try again.');
//             }

//             const paymentOptions = await paymentRes.json();

//             setPaymentData(paymentOptions);

//             handlePayment(paymentOptions);
//         } catch (e) {
//             console.log(e);
//             toast(e.message || 'Order could not be placed', { type: 'error' });
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleFile = (e, i) => {
//         if (e.target.files[0]) {
//             image[i] = { url: '', loading: true }
//             setImage([...image])
//         }
//         else {
//             image[i] = { url: '', loading: false }
//             setImage([...image])
//             fileName[i] = undefined
//             setFileName([...fileName])

//             files[i] = undefined
//             setFiles([...files])
//         }
//         setTimeout(() => {
//             const file = e.target.files[0];
//             fileName[i] = file?.name
//             if (!file) {
//                 return;
//             }
//             const ext = file.name.split('.').pop();

//             const newFile = new File([file], `${e.target.id.split(' ').map(v => v.toUpperCase()).join('_')}.${ext}`);

//             files[i] = newFile
//             setFiles([...files])

//             image[i] = { url: URL.createObjectURL(file), loading: false }
//             setImage([...image])
//         }, 2000)
//     };

//     const removeFileHandler = (e, i) => {
//         e.stopPropagation()
//         image[i] = undefined
//         fileName[i] = undefined
//         setImage([...image])
//         setFileName([...fileName])

//         files[i] = undefined
//         setFiles([...files])

//     }

//     return <>
//         {data && data.length > 0 ? <div className="mx-auto max-w-5xl my-10">
//             <h3 className="text-2xl font-semibold text-center my-5 border-b">
//                 Upload the following Documents...
//             </h3>
//             <div className="flex">
//                 <form className="grid gap-5 w-full" onSubmit={handleForm}>
//                     {data.map((doc, i) => {
//                         return <div className="flex flex-col" key={i} >
//                             <label htmlFor="pan" className="font-semibold text-lg">
//                                 {`Upload ${doc.title}`}
//                             </label>
//                             {doc.type === "file" ? <Card onClick={() => document.getElementById(`${doc.title}`).click()}>
//                                 <input
//                                     id={doc.title}
//                                     type={doc.type}
//                                     accept=".pdf, .jpeg, .jpg, .png "
//                                     hidden
//                                     onChange={(e) => handleFile(e, i)}
//                                     className={doc.title.split(' ')[0]}
//                                 />
//                                 <>
//                                     {image[i]?.url ?
//                                         <UploadBox>
//                                             <Image src={image[i].url} alt='image' />
//                                         </UploadBox> :
//                                         <UploadBox>
//                                             {image[i]?.loading ? <>
//                                                 <ProgressBox>
//                                                     Uploading
//                                                 </ProgressBox>
//                                                 <ProgressBar />
//                                             </> : <>
//                                                 <MdCloudUpload color="#2a275d" size={40} />
//                                                 <p>Browse files to Upload</p>
//                                             </>}
//                                         </UploadBox>
//                                     }
//                                 </>
//                                 <NameSection>
//                                     <div className="flex items-center gap-2">
//                                         <AiFillFileImage color="#fff" />
//                                         {fileName[i] ? fileName[i] : 'No File selected'}
//                                     </div>
//                                     <button type="button" className="justify-self-end" onClick={(e) => removeFileHandler(e, i)}>
//                                         <MdDelete color="#fff" />
//                                     </button>
//                                 </NameSection>
//                             </Card>
//                                 : <input
//                                     id={doc.title}
//                                     type={doc.type}
//                                     placeholder={`Enter ${doc.title}`}
//                                     className="border py-2 rounded font-medium text-sm px-3 mt-1"
//                                 />}
//                         </div >
//                     })}

//                     <div className="flex flex-col">
//                         <label htmlFor="pan" className="font-medium">State</label>
//                         <select
//                             onChange={e => setStateOfSupply(e.target.value)}
//                             className="border py-2 rounded font-medium text-sm px-3 mt-1"
//                         >
//                             <option disabled selected value> -- select an option -- </option>
//                             {
//                                 INDIAN_STATES.map(state => (
//                                     <option key={state} value={state}>
//                                         {state.toUpperCase()}
//                                     </option>
//                                 ))
//                             }
//                         </select>
//                     </div>

//                     <button
//                         type="submit"
//                         disabled={files.length < data.length || files.includes(undefined) || !stateOfSupply }
//                         // value="Submit"
//                         className="inline-block mx-auto bg-primary px-8 py-2 my-5 text-white rounded-md font-semibold cursor-pointer disabled:opacity-25">
//                         {
//                             loading ? (<span className="inline-block w-4 h-4 border-white border-b-zinc-400 border-r-zinc-400 border-2 border-solid rounded-full animate-spin"></span>)
//                                 : 'Upload'
//                         }
//                     </button>
//                 </form>
//             </div>
//         </div> : <>
//             <NoData>
//                 You have no Services in your Cart...
//                 <MainLink style={{ fontSize: '1rem' }} to="/register-startup">Add some Services</MainLink>
//             </NoData>
//         </>}
//     </>
// }

// export default UploadFile
