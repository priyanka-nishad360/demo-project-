"use client"
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";

export default function Page() {
    const {register,watch} = useForm({
        defaultValues:{
            journalDate: new Date().toISOString().split('T')[0]
        }
    })

    return (
        <main className="bg-neutral-50 py-4 min-h-screen">
            <div className=" max-w-7xl w-[calc(100%-2rem)] mx-auto ">
                <form className=" space-y-4">
                    <ul className="
                        shadow-inner shadow-neutral-500/50 rounded-md p-2 bg-gray-200 flex justify-between
                    ">
                        <li className="label font-semibold grid grid-cols-1 place-content-center">
                            <span className="font-normal">Transaction No.</span>
                            TRFR-1
                        </li>
                        <li className="label font-semibold grid grid-cols-1 place-content-center">
                            <span className="font-normal">-</span>
                            {new Date().toISOString().split('T')[0]}
                        </li>
                    </ul>
                    <ul className=" 
                         text-xs bg-white rounded-md p-4 shadow-md grid gap-4 sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]
                         [&>li]:p-2 [&>li]:rounded-md [&>li]:shadow-md [&>li]:grid [&>li]:grid-cols-2 
                    ">
                        <li>
                            <label htmlFor="recordPurchaseIn" className="label">From</label>
                            <select
                                id="recordPurchaseIn"
                                className="select"
                                {...register("recordPurchaseIn")}
                            >
                                <option value="">--SelectAccount--</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="recordPurchaseIn" className="label">To</label>
                            <select
                                id="recordPurchaseIn"
                                className="select"
                                {...register("recordPurchaseIn")}
                            >
                                <option value="">--SelectAccount--</option>
                            </select>
                        </li>
                    </ul>
                    
                    <ul className="
                         text-xs bg-white rounded-md p-4 shadow-md grid gap-2 sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]
                         [&>li]:p-2 [&>li]:rounded-md [&>li]:shadow-md [&>li]:grid [&>li]:grid-cols-2 
                         "
                    >
                        <li>
                            <label htmlFor="enterAmount" className="label">
                                Enter Amount
                            </label>
                            <input
                                id="enterAmount"
                                className="input"
                                type="text"
                                placeholder="Enter Note"
                                {...register("enterAmount")}
                            />
                        </li>
                        <li>
                            <label htmlFor="enterNots" className="label">
                                Enter Notes
                            </label>
                            <input
                                id="enterNots"
                                className="input"
                                type="text"
                                placeholder="Enter Note"
                                {...register("enterNots")}
                            />
                        </li>
                        <li>
                            <label htmlFor="image" className="label">Image</label>
                            <button type="button" className="rounded-r py-2 px-4 bg-white text-blue-500 hover:bg-blue-300  flex gap-2 items-center justify-center rounded-md">
                                <Icon icon="material-symbols:add"/> add Image
                            </button>
                        </li>
                    </ul>
                    <div className=" divide-y text-xs bg-white text-neutral-900 rounded-md shadow-md text-center ">
                        <div className=" p-2 text-lg">Save</div>
                        <div className=" p-2 text-lg text-red-500">Cancel</div>
                    </div>
                </form>
            </div>
            <div className="grid justify-end p-2">
                <button className="btn-primary flex items-center gap-2">
                    <Icon className="text-2xl" icon="basil:add-solid"/>
                    Create
                </button>
            </div>
        </main>
    )
}
