import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BankProviderCard = ({ id, title, image, desc, isSelected, onSelect }) => {
  const cardStyle = {
    border: isSelected ? '2px solid #007BFF' : '2px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
    cursor: 'pointer',
  };

  return (
    <div onClick={() => onSelect(title)} className="flex flex-col w-62 mb-5 shadow-lg shadow-md rounded-lg mx-8 items-center overflow-hidden border cursor-pointer">
      <div className="flex items-center py-5 h-48">
        <img alt="partners-logo" src={image} width={100} />
      </div>
      <div className="bg-zinc-100 w-full flex flex-col items-center px-5 my-5">
        <h3 className="font-semibold text-sm text-center py-3">{title}</h3>
        <p className="text-sm text-center">{desc}</p>
      </div>
    </div>
  );
};

const SelectInsuranceProvider = () => {
  const navigate = useNavigate();
  const [selectedProvider, setSelectedProvider] = useState(''); // State to track the selected bank provider
  const prevData = JSON.parse(localStorage.getItem('InsuranceInfo')) || {};

  // Dummy bank providers data (replace with your actual data)
  const bankProviders = [
    {
      id: 1,
      title: 'LIC',
      image: 'https://billshill.itaxeasy.com/assets/lic_logo-5d75ddcd.png',
      desc: 'Life Insurance Corporation of India is an Indian multinational public sector life insurance company.. '
    },
    {
      id: 2,
      title: 'Bajaj Capital',
      image: 'https://billshill.itaxeasy.com/assets/bajaj_capital-62d3dff3.png',
      desc: 'Bajaj Capital with over 59 years of experience is your one-stop solution for Mutual Funds...'
    },
    {
      id: 3,
      title: 'Start Health',
      image: 'https://billshill.itaxeasy.com/assets/star_health-e00473cf.jpg',
      desc: 'Star Health Insurance offers flexible insurance policies for securing you and your loved ones...'
    }, {
      id: 4,
      title: 'Start Health',
      image: 'https://billshill.itaxeasy.com/assets/star_health-e00473cf.jpg',
      desc: 'Star Health Insurance offers flexible insurance policies for securing you and your loved ones...'
    }, {
      id: 5,
      title: 'Start Health',
      image: 'https://billshill.itaxeasy.com/assets/star_health-e00473cf.jpg',
      desc: 'Star Health Insurance offers flexible insurance policies for securing you and your loved ones...'
    }, {
      id: 6,
      title: 'Start Health',
      image: 'https://billshill.itaxeasy.com/assets/star_health-e00473cf.jpg',
      desc: 'Star Health Insurance offers flexible insurance policies for securing you and your loved ones...'
    }, {
      id: 7,
      title: 'Start Health',
      image: 'https://billshill.itaxeasy.com/assets/star_health-e00473cf.jpg',
      desc: 'Star Health Insurance offers flexible insurance policies for securing you and your loved ones...'
    },
  ];

  const onSelectProvider = (provider) => {
    setSelectedProvider(provider);
    let bank = { provider: provider }
    const updatedData = { ...prevData, ...bank };
    localStorage.setItem('InsuranceInfo', JSON.stringify(updatedData));
    console.log('updatedData', updatedData);
    if(updatedData.insuranceCategory === 'Health Insurance') {
      navigate('/select_health_insurance_plan');
    } else if(updatedData.insuranceCategory === 'Car Insurance'){
      navigate('/select_car_insurance_plan');
    }else if(updatedData.insuranceCategory === 'Bike Insurance'){
      navigate('/select_bike_insurance_plan');
    }
  };

  return (
    <div className="p-4 min-h-screen flex flex-col justify-center items-center my-8">
      <h3 className="text-xl text-center text-salte-800 font-semibold mb-4">Select Insurance Provider</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {bankProviders.map((provider) => (
          <BankProviderCard
            key={provider.id}
            id={provider.id}
            title={provider.title}
            image={provider.image}
            desc={provider.desc}
            isSelected={selectedProvider && provider.id === selectedProvider.id}
            onSelect={onSelectProvider}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectInsuranceProvider;
