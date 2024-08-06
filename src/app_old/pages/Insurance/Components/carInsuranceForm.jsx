import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 


const CarInsuranceForm = () => {
  const navigate = useNavigate();
  const prevData = JSON.parse(localStorage.getItem('InsuranceInfo')) || {};

  const [formData, setFormData] = useState({
    name: prevData.name || '',
    carModel: prevData.bikeModel || '',
    vehicleNumber: prevData.vehicleNumber || '',
    insuranceType: prevData.insuranceType || 'Comprehensive',
  }); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Merge previous data with new form data
    const updatedData = { ...prevData, ...formData };

    // Save the updated data to local storage
    localStorage.setItem('InsuranceInfo', JSON.stringify(updatedData));
    navigate('/select_insurance_provider');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto' }} className='w-full border-2  p-4 shadow-2xl bg-gray-10'>
      <h2 className="text-2xl font-semibold mb-4">Car Insurance Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor='fullName' className="block font-medium">Full Name:</label>
          <input
            type='text'
            id='fullName'
            name='fullName'
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor='carModel' className="block font-medium">Car Model:</label>
          <input
            type='text'
            id='carModel'
            name='carModel'
            value={formData.carModel}
            onChange={handleChange}
            required
            placeholder="Toyota Camry"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor='vehicleNumber' className="block font-medium">Vehicle Number:</label>
          <input
            type='text'
            id='vehicleNumber'
            name='vehicleNumber'
            value={formData.vehicleNumber}
            onChange={handleChange}
            required
            placeholder="MHXX-XX-XXXX"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor='insuranceType' className="block font-medium">Insurance Type:</label>
          <select
            id='insuranceType'
            name='insuranceType'
            value={formData.insuranceType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value='Comprehensive'>Comprehensive</option>
            <option value='Third Party'>Third Party</option>
          </select>
        </div>
        <div>
          <button type='submit' className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarInsuranceForm;
