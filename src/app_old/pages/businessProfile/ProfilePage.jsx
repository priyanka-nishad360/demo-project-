import styled from "styled-components"
import { AiTwotoneEdit } from "react-icons/ai"
import { useState } from "react"

const Card = styled.div`
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    min-width: 350px;
    max-width: 350px;
    height: 200px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
`
const InfoWindow = styled.form`
width: 100%;
padding:0 2.5rem 2.5rem 2.5rem;
display: flex;
flex-direction: column;
gap: 1.25rem;

`
const EditIcon = styled(AiTwotoneEdit)`
background-color: #2a275d;
min-width: 25px;
height: 25px;
color: white;
border-radius: 50%;
padding: 3px;
cursor: pointer;
`

const Label = styled.label`
font-size: 1.1rem;
font-weight: 600;
color: #2a275d;
`
const Info = styled.p`
    border-bottom: 1.5px solid #2a275d;
    width: max-content;
`
const Input = styled.input`
border: 1px solid grey;
outline: none;
padding:5px 10px;
border-radius: 5px;
width: 70%;
&:hover{
    border:1px solid #2a275d
}
`
const SaveButton = styled.button`
padding: 5px 10px;
color: white;
background-color: #2a275d;
border-radius: 5px;
    
`
const CancelButton = styled.button`
padding: 5px 10px;
color: #2a275d;
background-color: #f5f5f5;
border-radius: 5px;

`


export default function ProfilePage() {

    const [data, setData] = useState({
        businessName: "iTaxEasy",
        pan: "ABCTY1234D",
        tan: "PDES03028F",
        msme: "DL05A0000051",
        gst: "22AAAAA0000A1Z5",
        accNo: "12345678987",
        accDetails: "",
        incorporation: ""
    })
    const [prevData, setPrevData] = useState({
        businessName: "iTaxEasy",
        pan: "ABCTY1234D",
        tan: "PDES03028F",
        msme: "DL05A0000051",
        gst: "22AAAAA0000A1Z5",
        accNo: "12345678987",
        accDetails: "",
        incorporation: ""
    })

    const [showInput, setShowInput] = useState(false)

    const cancelHandler=()=>{
        setData({...prevData})
        setShowInput(false)
    }

    const saveHandler=(e)=>{
        e.preventDefault()
        setPrevData({...data})
        setShowInput(false)
    }

    return <>
        <h1 className="text-center mt-7 mb-7 text-2xl font-semibold text-[#2a275d]-900">Business Profile</h1>
        <div className="w-11/12 m-auto flex max-sm:flex-col gap-5">
            <Card>
                <div className="flex flex-col justify-between">
                    <div>
                        <p className="font-semibold text-xl">Pan Number</p>
                        <p className="text-sm">ABCTY1234D</p>
                    </div>
                    <div>
                        <p className="font-semibold text-xl">Name</p>
                        <p className="text-sm">Ankit Singh</p>
                    </div>
                    <div>
                        <p className="font-semibold text-xl">DOB</p>
                        <p className="text-sm">XXXX XX XX</p>
                    </div>
                </div>
                <div>
                    <img className="h-full" src='./Profileuser.png' alt='profileuser' />
                </div>
            </Card>
            <InfoWindow>
                <div className="flex items-center gap-2 font-semibold text-xl">Business Profile Information <EditIcon onClick={()=>setShowInput(true)} /> </div>
                <div className="w-full flex flex-col gap-1">
                    <Label>Business Legal Name :</Label>
                    {showInput  ? <Input value={data.businessName} onChange={(e) => { setData((prev) => ({ ...prev, businessName: e.target.value })) }} placeholder='Enter your Business Legal Name' /> : <Info>{data.businessName || "Not Defined"}</Info>}
                </div>
                <div className="flex  max-sm:flex-col gap-5">
                    <div className="w-full flex flex-col gap-1">
                        <Label>Company Pan Number :</Label>
                        {showInput  ? <Input value={data.pan} onChange={(e) => { setData((prev) => ({ ...prev, pan: e.target.value })) }} placeholder='Company Pan Number' /> : <Info>{data.pan || "Not Defined"}</Info>}
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <Label>Company Tan Number :</Label>
                        {showInput  ? <Input value={data.tan} onChange={(e) => { setData((prev) => ({ ...prev, tan: e.target.value })) }} placeholder='Company Tan Number' /> : <Info>{data.tan || "Not Defined"}</Info>}
                    </div>
                </div>
                <div className="flex  max-sm:flex-col gap-5">
                    <div className="w-full flex flex-col gap-1">
                        <Label>MSME Number :</Label>
                        {showInput  ? <Input value={data.msme} onChange={(e) => { setData((prev) => ({ ...prev, msme: e.target.value })) }} placeholder='Enter MSME Number' /> : <Info>{data.msme || "Not Defined"}</Info>}
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <Label>GST Number :</Label>
                        {showInput  ? <Input value={data.gst} onChange={(e) => { setData((prev) => ({ ...prev, gst: e.target.value })) }} placeholder='Enter GST No.' /> : <Info>{data.gst || "Not Defined"}</Info>}
                    </div>
                </div>
                <div className="flex  max-sm:flex-col gap-5">
                    <div className="w-full flex flex-col gap-1">
                        <Label>Bank Account Number :</Label>
                        {showInput ? <Input value={data.accNo} onChange={(e) => { setData((prev) => ({ ...prev, accNo: e.target.value })) }} placeholder='Enter Bank Account No.' /> : <Info>{data.accNo || "Not Defined"}</Info>}
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <Label>Bank Account Details :</Label>
                        {showInput  ? <Input value={data.accDetails} onChange={(e) => { setData((prev) => ({ ...prev, accDetails: e.target.value })) }} placeholder='Enter Company Details' /> : <Info>{data.accDetails || "Not Defined"}</Info>}
                    </div>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <Label>Incorporation Certification Details :</Label>
                    {showInput ? <Input value={data.incorporation} onChange={(e) => { setData((prev) => ({ ...prev, incorporation: e.target.value })) }} placeholder='Company Tan Number' /> : <Info>{data.incorporation||"Not Defined"}</Info>}
                </div>
                {showInput && <div className="flex gap-2 mb-5 justify-end">
                    <CancelButton onClick={cancelHandler} type="button">Cancel</CancelButton>
                    <SaveButton onClick={saveHandler} type="submit">Save</SaveButton>
                </div>}
            </InfoWindow>
        </div>
    </>
}