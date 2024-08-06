"use client";
import { useState } from 'react';
import ITRSteps from '../../components/ITR/ITRSteps';
import TDS from '../../components/ITR/TaxesPaid/TDS';
import SelfTaxPayments from '../../components/ITR/TaxesPaid/SelfTaxPayments';

export default function ITRTaxesPaid() {
    const [section, setSection] = useState(sectionList[0]);
    return (
        <>
            <ITRSteps
                steps={sectionList}
                active={section}
                setSection={setSection}
            />
            {section === sectionList[1] ? (
                <SelfTaxPayments />
            ) : (
                <TDS setSection={setSection} />
            )}
        </>
    );
}

const sectionList = ['TDS', 'Self Tax Payments'];
