import React, { useState } from 'react';
import { RiMotorbikeFill } from 'react-icons/ri';
import { AiFillCar } from 'react-icons/ai';
import { MdHealthAndSafety } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const insuranceTypesData = [
    {
        name: 'Bike Insurance',
        logo: RiMotorbikeFill,
        link:"/bike_insurance_form"
    },
    {
        name: 'Car Insurance',
        logo: AiFillCar,
        link:"/car_insurance_form"
    },
    {
        name: 'Health Insurance',
        logo: MdHealthAndSafety,
        link:"/health_insurance_form"
    }
];

function Insurance() {
    const handleInsuranceTypeClick = (insuranceType) => {
        let data = {
            insuranceCategory: insuranceType,
        };        
        localStorage.setItem('InsuranceInfo', JSON.stringify(data));
    };

    useEffect(() => {
        let data = {};
        localStorage.setItem('InsuranceInfo', JSON.stringify(data));
    }, []);

    return (
        <div className='container min-h-screen p-2 mx-auto mb-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                {insuranceTypesData.map((insuranceType) => (
                    <div key={insuranceType.name}>
                        <Link
                            to={insuranceType.link}  // Use the updated link
                            onClick={() => handleInsuranceTypeClick(insuranceType.name)}
                            className='flex w-3/4 m-auto mt-10 flex-col items-center justify-center p-4 border rounded-lg shadow-md hover:bg-blue-100'
                        >
                            {React.createElement(insuranceType.logo, { size: 32 })}
                            <p className='mt-2'>{insuranceType.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Insurance;
