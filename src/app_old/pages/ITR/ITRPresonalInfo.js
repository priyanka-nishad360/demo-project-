"use client";
import { useState } from 'react';
import ITRSteps from '../../components/ITR/ITRSteps';
import PersonalInfo from '../../components/ITR/PersonalInfo/PersonalInfo';
import Address from '../../components/ITR/PersonalInfo/Address';
import BankDetails from '../../components/ITR/PersonalInfo/BankDetails';

export default function ITRPresonalInfo({ userProfile }) {
    const [section, setSection] = useState(sectionList[0]);
    function activeTab() {
        if (section === sectionList[1]) {
            return  <BankDetails setSection={setSection} />
        } else if (section === sectionList[2]) {
            return <Address setSection={setSection} />
        } else {
        return <PersonalInfo setSection={setSection} userProfile={userProfile}/>
        }
    }
    return (
        <>
            <ITRSteps
                steps={sectionList}
                active={section}
                setSection={setSection}
            />
            {/* {section === sectionList[1] ? (
                <Address />
            ) : (
                <PersonalInfo setSection={setSection} />
            )} */}
            { activeTab() }
        </>
    );
}

const sectionList = ['Personal Information', 'Bank Details', 'Address'];
