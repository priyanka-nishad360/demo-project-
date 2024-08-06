import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

const FastagForm = () => {
  const { handleSubmit, control } = useForm();
  const [showHide, setShowHide] = useState(false);

  // Sample bank options (you can fetch these from an API)
  const bankOptions = [
    { label: 'Bank A', value: 'bank_a' },
    { label: 'Bank B', value: 'bank_b' },
    { label: 'Bank C', value: 'bank_c' },
  ];

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
    if (data.bank && data.vehicleNumber) {
      setShowHide(true);
    }
  };

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100 text-slate-900'>
      <div className='w-full max-w-md mb-10'>
        <h3 className='text-3xl font-semibold text-center text-blue-600 mb-6'>Fastag Recharge</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-md px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="bank" className="block text-gray-700 text-sm font-bold mb-2">
              Select Bank:
            </label>
            <Controller
              name="bank"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select {...field} className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300">
                  <option value="" disabled>
                    Select a bank
                  </option>
                  {bankOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="vehicleNumber" className="block text-gray-700 text-sm font-bold mb-2">
              Vehicle Number:
            </label>
            <Controller
              name="vehicleNumber"
              control={control}
              rules={{ required: 'Vehicle number is required' }}
              render={({ field, fieldState }) => (
                <div>
                  <input {...field} type="text" placeholder="Enter vehicle number" className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
                  {fieldState.error ?(
                    <p className="text-red-500 mt-1">{fieldState.error.message}</p>
                  ) : (
                      <p className="text-green-500 text-sm mt-1">Please enter Vehicle Number (linked to FASTag) without spaces. E.g: UP01AB1234</p>
                  ) }
                </div>
              )}
            />
          </div>
            {showHide && (
              <div className='bg-gray-300 rounded-md p-5 mb-5'>
              <h1 className='text-xl font-semibold'>Customer Details</h1>
              <div className='flex justify-between'>
                <h3>Consumer Name :</h3>
                <span className='font-semibold'>Udit kishor</span>
              </div>
              <div className='flex justify-between'>
                <h3>Fast Tag Balance:</h3>
                <span className='font-semibold'>-25.00</span>
              </div>
              <div className='flex justify-between'>
                <h3>Vehicle Model:</h3>
                <span className='font-semibold'>Others</span>
              </div>
              <div className='flex justify-between'>
                <h3>Minimum Amount for Top-up: </h3>
                <span className='font-semibold'>100.00</span>
              </div>
              <div className='flex justify-between'>
                <h3>Tag Status:</h3>
                <span className='font-semibold'>Blocked</span>
              </div>
              <div className='flex justify-between'>
                <h3>Maximum Permissible Recharge Amount: </h3>
                <span className='font-semibold'>10000.00</span>
              </div>
              </div>
            )}
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded focus:outline-none focus:ring focus:border-blue-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FastagForm;
