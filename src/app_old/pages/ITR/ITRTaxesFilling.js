"use client";
import { useState } from "react";
import ITRSteps from "../../components/ITR/ITRSteps";
import MoreInfo from "../../components/ITR/TaxeFiling/MoreInfo";
import EFiling from "../../components/ITR/TaxeFiling/EFiling";

export default function ITRTaxesFilling() {
  const [section, setSection] = useState(sectionList[0]);
  return (
    <>
      <ITRSteps steps={sectionList} active={section} setSection={setSection} />
      {section === sectionList[1] ? (
        <EFiling />
      ) : (
        <MoreInfo setSection={setSection} />
      )}
    </>
  );
}

const sectionList = ["Info", "E-Filing"];