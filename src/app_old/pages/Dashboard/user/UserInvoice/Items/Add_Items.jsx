import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add_Items = () => {
  const formArray = [1, 2];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [state, setState] = useState({
    gstin_no: "",
    partyname: "",
    pan: "",
    varsity: "",
    session: "",
    address: "",
    district: "",
    thana: "",
    post: "",
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const next = () => {
    if (formNo === 1 && state.gstin_no && state.partyname && state.pan) {
      setFormNo(formNo + 1);
    } else if (
      formNo === 2 &&
      state.varsity &&
      state.session &&
      state.address
    ) {
      setFormNo(formNo + 1);
    } else {
      toast.error("Please fillup all input field");
    }
  };
  const pre = () => {
    setFormNo(formNo - 1);
  };
  const finalSubmit = () => {
    if (state.varsity && state.session && state.address) {
      toast.success("form submit success");
    } else {
      toast.error("Please fillup all input field");
    }
  };

  return (
    <>
      <h6 className="font-semibold text-lg mx-4">Add Iteam</h6>
      <div className=" flex justify-center items-center">
        <div className="p-5">
          <div className="flex justify-center items-center mb-8">
            {formArray.map((v, i) => (
              <>
                <div
                  className={`w-[35px] my-3 text-white rounded-full ${
                    formNo - 1 === i ||
                    formNo - 1 === i + 1 ||
                    formNo === formArray.length
                      ? "bg-blue-500"
                      : "bg-slate-400"
                  } h-[35px] flex justify-center items-center`}
                >
                  {v}
                </div>
                {i !== formArray.length - 1 && (
                  <div
                    className={`w-[85px] h-[2px] ${
                      formNo === i + 2 || formNo === formArray.length
                        ? "bg-blue-500"
                        : "bg-slate-400"
                    }`}
                  ></div>
                )}
              </>
            ))}
          </div>
          {formNo === 1 && (
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col mb-2">
                <label htmlFor="name">Item Name</label>
                <input
                  value={state.gstin_no}
                  onChange={inputHandle}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="text"
                  name="gstin_no"
                  placeholder="Item Name"
                  id="gstin_no"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="dept">Price</label>
                <input
                  value={state.partyname}
                  onChange={inputHandle}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="text"
                  name="partyname"
                  placeholder="Price"
                  id="partyname"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="batch">Opening Stock</label>
                <input
                  value={state.pan}
                  onChange={inputHandle}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="text"
                  name="pan"
                  placeholder="Opening Stock"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="batch">Opening Stock</label>
                <input
                  value={state.bankname}
                  onChange={inputHandle}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="text"
                  name="bankname"
                  placeholder="Opening Stock"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="batch">Unit</label>

                <select
                  value={state.Type}
                  onChange={inputHandle}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  name="type"
                >
                  <option value="select">select option </option>
                </select>
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="batch">Purchase Price</label>
                <input
                  value={state.bankacnum}
                  onChange={inputHandle}
                  className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                  type="number"
                  name="bankaccno"
                  placeholder="Purchase Price"
                />
              </div>
              <div className="mt-4 flex justify-center items-center">
                <button
                  onClick={next}
                  className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {formNo === 2 && (
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col mb-2">
                <label className="text-slate-500" htmlFor="varsity">
                  CGST
                </label>
                <input
                  value={state.varsity}
                  onChange={inputHandle}
                  className="p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md"
                  type="text"
                  name="varsity"
                  placeholder="CGST"
                  id="varsity"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label className="text-slate-500" htmlFor="session">
                  SGST
                </label>
                <input
                  value={state.session}
                  onChange={inputHandle}
                  className="p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md"
                  type="text"
                  name="session"
                  placeholder="SGST"
                  id="session"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label className="text-slate-500" htmlFor="address">
                  User Id
                </label>
                <input
                  value={state.address}
                  onChange={inputHandle}
                  row="10"
                  className="p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md"
                  type="text"
                  name="address"
                  placeholder="User Id"
                ></input>
              </div>
              <div className="flex flex-col mb-2">
                <label className="text-slate-500" htmlFor="address">
                  Hsn Codr
                </label>
                <input
                  value={state.address}
                  onChange={inputHandle}
                  row="10"
                  className="p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md"
                  type="number"
                  name="address"
                  placeholder="Hsn Code"
                ></input>
              </div>
              <div className="flex flex-col mb-2">
                <label className="text-slate-500" htmlFor="address">
                  IGST
                </label>
                <input
                  value={state.address}
                  onChange={inputHandle}
                  row="10"
                  className="p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md"
                  type="text"
                  name="address"
                  placeholder="IGST"
                ></input>
              </div>
              <br />
              <div className=" mb-2">
                <input type="checkbox" id="" name="" value="" />
                <label for="vehicle1"> (Check if True)</label>
                <br />
              </div>
              <br />
              <div className=" mb-2 ">
                <textarea
                  value={state.address}
                  onChange={inputHandle}
                  row="10"
                  className="p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md"
                  type="text"
                  name="address"
                ></textarea>
              </div>

              <div className="mt-4 gap-3 flex justify-center items-center">
                <button
                  onClick={pre}
                  className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
                >
                  Previous
                </button>
                <button
                  onClick={finalSubmit}
                  className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Add_Items;
