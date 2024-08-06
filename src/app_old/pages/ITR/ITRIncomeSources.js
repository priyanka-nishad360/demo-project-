"use client"
import { useState } from 'react';
import ITRSteps from '../../components/ITR/ITRSteps';
import BusinessProfession from '../../components/ITR/IncomeSources/BusinessProfession';
import Salary from '../../components/ITR/IncomeSources/Salary';
import OtherIncome from '../../components/ITR/IncomeSources/OtherIncome';
import HouseProperty from '../../components/ITR/IncomeSources/HouseProperty';
import CapitalGain from '../../components/ITR/IncomeSources/CapitalGain';

export default function ITRIncomeSources() {
    const [section, setSection] = useState(sectionList[0]);
    return (
        <>
            <ITRSteps
                steps={sectionList}
                active={section}
                setSection={setSection}
            />
            {section === sectionList[4] ? (
                <CapitalGain />
            ) : section === sectionList[3] ? (
                <BusinessProfession setSection={setSection} />
            ) : section === sectionList[2] ? (
                <OtherIncome setSection={setSection} />
            ) : section === sectionList[1] ? (
                <HouseProperty setSection={setSection} />
            ) : (
                <Salary setSection={setSection} />
            )}
        </>
    );
}

const sectionList = [
    'Salary',
    'House Property',
    'Other Income',
    'Business Profession',
    'Capital Gain',
];
