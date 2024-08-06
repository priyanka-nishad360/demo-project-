import React, { useState } from 'react';
import { RiMotorbikeFill } from 'react-icons/ri';
import { AiFillCar } from 'react-icons/ai';
import { MdHealthAndSafety } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Section from '../../../../../../components/pageLayouts/Section';
const SaleInsuranceData = [
    {
        name: 'Bike Insurance',
        logo: RiMotorbikeFill,
        linkTo:"bike-insurance",
        style:"border-blue-600 text-blue-600 "
    },
    {
        name: 'Car Insurance',
        logo: AiFillCar,
        linkTo:"car-insurance",
        style:"border-yellow-600 text-yellow-600 "
    },
    {
        name: 'Health Insurance',
        logo: MdHealthAndSafety,
        linkTo:"health-insurance",
        style:"border-red-600 text-red-600 "
    }
];

export default function SaleInsurance() {
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
        <Section className='container min-h-screen p-2 mx-auto '>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mb-10'>
                {SaleInsuranceData.map((insuranceType) => (
                    <div key={insuranceType.name}>
                        <Link
                            to={insuranceType.linkTo}  // Use the updated link
                            onClick={() => handleInsuranceTypeClick(insuranceType.name)}
                            className='flex w-3/4 m-auto mt-10 flex-col items-center justify-center p-4 border rounded-lg shadow-md hover:shadow-primary/50'
                        >
                            <span className={`border rounded-full p-4 ${insuranceType.style}`}>{React.createElement(insuranceType.logo, { size: 32 })}</span>
                            <p className='mt-2'>{insuranceType.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='text-2xl border-l-4 border-l-primary pl-2 font-semibold mb-4 capitalize'>
                <h2>Renew Your Policy</h2>
            </div>
        </Section>
    );
}
