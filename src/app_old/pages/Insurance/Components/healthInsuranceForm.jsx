import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HealthInsuranceForm = () => {
  const navigate = useNavigate();
  const prevData = JSON.parse(localStorage.getItem('InsuranceInfo')) || {};

  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: 'Male',
    policyType: 'Individual',
    coverageAmount: '',
    ageCategory: '25-30',
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

  const ageCategories = Array.from({ length: 8 }, (_, index) => `${25 + index * 5}-${30 + index * 5}`);

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto' }} className='w-full border-2  p-4 shadow-2xl bg-gray-10'>
      <h2 className="text-2xl font-semibold mb-4">Health Insurance Form</h2>
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
          <label htmlFor='dateOfBirth' className="block font-medium">Date of Birth:</label>
          <input
            type='date'
            id='dateOfBirth'
            name='dateOfBirth'
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor='gender' className="block font-medium">Gender:</label>
          <select
            id='gender'
            name='gender'
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Other'>Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor='policyType' className="block font-medium">Policy Type:</label>
          <select
            id='policyType'
            name='policyType'
            value={formData.policyType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value='Individual'>Individual</option>
            <option value='Family'>Family</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor='ageCategory' className="block font-medium">Age Category:</label>
          <select
            id='ageCategory'
            name='ageCategory'
            value={formData.ageCategory}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            {ageCategories.map((ageCategory) => (
              <option key={ageCategory} value={ageCategory}>
                {ageCategory}
              </option>
            ))}
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

export default HealthInsuranceForm;
