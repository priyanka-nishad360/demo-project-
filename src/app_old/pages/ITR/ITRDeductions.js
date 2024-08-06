"use client";
import { useState } from "react";
import ITRSteps from "../../components/ITR/ITRSteps.js";
import Section80Deductions from "../../components/ITR/Deductions/Section80Deductions.js";
import MoreDeductions from "../../components/ITR/Deductions/MoreDeductions.js";
import OtherDeductions from "../../components/ITR/Deductions/OtherDeductions.js";

export default function ITRDeductions() {
  const [section, setSection] = useState(sectionList[0]);
  return (
    <>
      <ITRSteps steps={sectionList} active={section} setSection={setSection} />
      {section === sectionList[1] ? (
        <MoreDeductions setSection={setSection} />
      ) : section === sectionList[2] ? (
        <OtherDeductions />
      ) : (
        <Section80Deductions setSection={setSection} />
      )}
    </>
  );
}

const sectionList = [
  "Section 80 Deductions",
  "More Deductions",
  "Other Deductions",
];