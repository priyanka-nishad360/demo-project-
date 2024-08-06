"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import Checkbox from "../../../components/Checkbox";
const calculateTax = (income) => {
  const RATE_1 = 0.0;
  const RATE_2 = 0.05;
  const RATE_3 = 0.1;
  const RATE_4 = 0.15;
  const RATE_5 = 0.2;
  const RATE_6 = 0.25;
  const RATE_7 = 0.3;
  // const CESS = 0.04;

  const LIMIT_1 = 250000;
  const LIMIT_2 = 500000;
  const LIMIT_3 = 750000;
  const LIMIT_4 = 1000000;
  const LIMIT_5 = 1250000;
  const LIMIT_6 = 1500000;

  let tax = 0;
  if (income <= LIMIT_1) {
    tax = RATE_1 * income;
  } else if (income <= LIMIT_2) {
    tax = RATE_2 * (income - LIMIT_1);
  } else if (income <= LIMIT_3) {
    tax = RATE_3 * (income - LIMIT_2) + calculateTax(LIMIT_2);
  } else if (income <= LIMIT_4) {
    tax = RATE_4 * (income - LIMIT_3) + calculateTax(LIMIT_3);
  } else if (income <= LIMIT_5) {
    tax = RATE_5 * (income - LIMIT_4) + calculateTax(LIMIT_4);
  } else if (income <= LIMIT_6) {
    tax = RATE_6 * (income - LIMIT_5) + calculateTax(LIMIT_5);
  } else {
    tax = RATE_7 * (income - LIMIT_6) + calculateTax(LIMIT_6);
  }

  // tax + CESS * tax;
  return tax;
};

const initialValues = {
  financial_year: "",
  pan: "",
  filing_category: "",
  residential_status: "",
  basic_salary: "",
  hra_received: null,
  rent_paid: null,
  other_allowances: null,
  address: {
    city: "",
  },
  interest_paid_on_let_out_hp_loan: null,
  rent_received: null,
  property_tax_paid: null,
  interest_paid_on_self_occupied_hp_loan: null,
  capital_gains_by_quarter: [
    ["stcg_15", "stcg_30", "stcg_slab", "ltcg_10", "ltcg_20"],
    ["150000", 0, 0, "-15000", 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  savings_interest: null,
  fd_interest: null,
  dividend_income: null,
  other_income: null,
  regular_business_turnover: null,
  regular_business_profit: null,
  speculative_business_turnover: null,
  speculative_business_profit: null,
  elss: "",
  tax_credits: [
    ["type", "date_of_deposit", "amount"],
    ["TDS", "01/04/2020", null],
    ["TCS", "01/04/2020", null],
    ["Advance Tax", "15/06/2020", 35000],
  ],
};
// sum function
const calculateSum = (obj) => {
  let sum = 0;
  for (let key in obj) {
    sum += Number(obj[key]);
  }
  return sum;
};
export default function AdvanceTaxCalc() {
  const [select, setSelect] = useState("");
  const [secetion115Bac, setSection115Bac] = useState("no");
  const [showHide1, setShowHide1] = useState(false);
  const [showHide2, setShowHide2] = useState(false);
  const [showHide3, setShowHide3] = useState(false);
  const [showHide4, setShowHide4] = useState(false);
  const [panNumber, setPanNumber] = useState("");
  const [calculatedTax, setCalculatedTax] = useState(undefined);
  const [isLetoutSelected, setIsLetoutSelected] = useState(false);
  // unchecked letout interest state
  const [uncheckedLetoutAmount, setUncheckedoutAmount] = useState(0);
  // checked letout interest
  const [checkedLetoutAmount, setCheckedoutAmount] = useState({
    value1: "",
    value2: "",
    value3: "",
    value4: "",
  });
  // income from other sources state
  const [incomeFromOtherSource, setIncomeFromOtherSource] = useState({
    value1: "",
    value2: "",
    value3: "",
  });
  // DEDUCTION STATE  part one1
  const [deductions, setDeductions] = useState({
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
    value6: "",
    value7: "",
    value8: "",
    value9: "",
    value10: "",
    value11: "",
    value12: "",
    value13: "",
  });
  // deduction state part 2
  const [deductions2, setDeductions2] = useState({
    value14: "",
    value15: "",
    value16: "",
    value17: "",
    value18: "",
    value19: "",
    value20: "",
    value21: "",
    value22: "",
  });
  // nps ammount state
  const [npsAmount, setNpsAmount] = useState({
    value1: "",
    value2: "",
  });

  // 80DD amount check state
  const [amount80DD, setAmount80DD] = useState(0);
  // 80U amount check state
  const [amount80U, setAmount80U] = useState(0);
  // severe disability check 1
  const [severe_disabilityCheck1, setsevere_DisabilityCheck1] = useState(false);
  // severe disability check 1
  const [severe_disabilityCheck2, setsevere_DisabilityCheck2] = useState(false);

  // stcg and ltcg states
  const [stcg1, setStcg1] = useState({
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    vlaue5: 0,
  });
  const [stcg2, setStcg2] = useState({
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    vlaue5: 0,
  });
  const [ltcg1, setLtcg1] = useState({
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    vlaue5: 0,
  });
  const [ltcg2, setLtcg2] = useState({
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    vlaue5: 0,
  });
  const [ltcg3, setLtcg3] = useState({
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    vlaue5: 0,
  });

  // NET ANNUAL INCOME CONSTANT
  const NET_ANNUAL_INCOME =
    checkedLetoutAmount.value1 -
    (checkedLetoutAmount.value2 + checkedLetoutAmount.value3);
  // STANDAR DETUCTION OF 30% CONSTANT
  const STANDARD_DETUCTION =
    NET_ANNUAL_INCOME && Math.floor((NET_ANNUAL_INCOME * 30) / 100);

  // LET OUT INCOME CONSTANT
  const LET_OUT_INCOME =
    NET_ANNUAL_INCOME - (STANDARD_DETUCTION + checkedLetoutAmount.value4);
  // income from house property constant
  let INCOME_FROM_HOUSE_PROERTY =
    uncheckedLetoutAmount > 0 ? uncheckedLetoutAmount : LET_OUT_INCOME;

  // total of duduction part one
  const TOTAL_DEDUCTION_PART1 =
    calculateSum(npsAmount) +
    (calculateSum(deductions) > 150000 ? 150000 : calculateSum(deductions));

  // Deduction part two calulation
  const TOTAL_DEDUCTION =
    TOTAL_DEDUCTION_PART1 + amount80DD + amount80U + calculateSum(deductions2);
  //Total of Capital gains
  const TOTAL_CAPITAL_GAINS =
    calculateSum(stcg1) +
    calculateSum(stcg2) +
    calculateSum(ltcg1) +
    calculateSum(ltcg2) +
    calculateSum(ltcg3);
  // console.log("total deduction amound calulate", TOTAL_DEDUCTION_PART1);

  // console.log("income from house property" , INCOME_FROM_HOUSE_PROERTY);

  const getuncheckedLetoutAmountHandler = (e) => {
    setUncheckedoutAmount(e.target.value);
  };

  const getCheckedLetoutAmountHandler = (e) => {
    INCOME_FROM_HOUSE_PROERTY = 0;
    let { name, value } = e.target;
    setCheckedoutAmount({ ...checkedLetoutAmount, [name]: Number(value) });
  };
  // income  from other source handler
  const incomeFromOtherSourceHandler = (e) => {
    let { value, name } = e.target;
    setIncomeFromOtherSource({
      ...incomeFromOtherSource,
      [name]: Number(value),
    });
  };

  // stcg handlers
  const stcgOneHandler = (e) => {
    let { value, name } = e.target;
    // console.log(e.target.value)
    setStcg1({ ...stcg1, [name]: value });
  };
  const stcgTwoHandler = (e) => {
    let { value, name } = e.target;
    // console.log(e.target.value)
    setStcg2({ ...stcg2, [name]: value });
  };

  // ltcg handlers

  const ltcgOneHandler = (e) => {
    let { name, value } = e.target;
    setLtcg1({ ...ltcg1, [name]: value });
  };
  const ltcgTwoHandler = (e) => {
    let { name, value } = e.target;
    setLtcg2({ ...ltcg2, [name]: value });
  };
  const ltcgThreeHandler = (e) => {
    let { name, value } = e.target;
    setLtcg3({ ...ltcg3, [name]: value });
  };

  // interest check handler for let out property or not
  const checkInterest = (e) => {
    if (e.target.checked) {
      setIsLetoutSelected(true);
      setUncheckedoutAmount(0);
    } else {
      setIsLetoutSelected(false);
      setCheckedoutAmount({
        value1: 0,
        value2: 0,
        value3: 0,
        value4: 0,
      });
    }
  };

  // deduction amound handler
  const deductionAmountHandler = (e) => {
    let { name, value } = e.target;
    setDeductions({ ...deductions, [name]: Number(value) });
  };
  // deduction amound handler
  const deductionAmountHandler2 = (e) => {
    let { name, value } = e.target;
    setDeductions2({ ...deductions2, [name]: Number(value) });
  };

  // nps amount handler
  const npsAmountHandler = (e) => {
    let { name, value } = e.target;
    setNpsAmount({ ...npsAmount, [name]: Number(value) });
  };

  // amound80DD handler
  const amount80DDHanlder = (e) => {
    if (e.target.checked && severe_disabilityCheck1) {
      setAmount80DD(125000);
    } else if (e.target.checked) {
      setAmount80DD(75000);
    } else {
      setAmount80DD(0);
    }
  };
  // amound80U handler
  const amount80UHanlder = (e) => {
    if (e.target.checked && severe_disabilityCheck2) {
      setAmount80U(125000);
    } else if (e.target.checked) {
      setAmount80U(75000);
    } else {
      setAmount80U(0);
    }
  };

  // severe_disabilityCheck1 handler
  const severe_disabilityCheck1Handler = (e) => {
    if (e.target.checked && amount80DD) {
      setsevere_DisabilityCheck1(true);
      setAmount80DD(125000);
    } else if (!e.target.checked && amount80DD) {
      setsevere_DisabilityCheck1(false);
      setAmount80DD(75000);
    } else {
      setsevere_DisabilityCheck1(false);
      setAmount80DD(0);
    }
  };

  // severe_disabilityCheck2 handler
  const severe_disabilityCheck2Handler = (e) => {
    if (e.target.checked && amount80U) {
      setsevere_DisabilityCheck2(true);
      setAmount80U(125000);
    } else if (!e.target.checked && amount80U) {
      setsevere_DisabilityCheck2(false);
      setAmount80U(75000);
    } else {
      setsevere_DisabilityCheck2(false);
      setAmount80DD(0);
    }
  };

  // console.log("income from other source" , incomeFromOtherSource)
  const [old_advance_tax_installments, setOld_advance_tax_installments] =
    useState();
  const [new_advance_tax_installments, setNew_advance_tax_installments] =
    useState();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      ...initialValues,
      filing_category: select,
      pan: panNumber,
    },
    enableReinitialize: true,
    validate: (values) => {
      let errors = {};
      let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
      if (!regex.test(values.pan)) {
        errors.pan = "Invalid pan number";
      }
      return errors;
    },
    onSubmit: (values) => {
      //  calulateAdvanceTaxHandler(values)
      setIsLoading(true);
      axios
        .post(
          "https://mom.itaxeasy.com/api/calculator/advance-income-tax/old-regime",
          values
        )
        .then((res) => {
          console.log("calculated tax", res.data);
          setOld_advance_tax_installments(res.data.results.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("error while making request", err.message);
        });
      axios
        .post(
          "https://mom.itaxeasy.com/api/calculator/advance-income-tax/new-regime",
          values
        )
        .then((res) => {
          setNew_advance_tax_installments(res.data.results.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("error while making request", err.message);
        });
    },
  });
  const handleResetForm = () => {
    setOld_advance_tax_installments(null);
  };

  useEffect(() => {
    const tax = calculateTax(formik.values.basic_salary);
    // .15 .3 .3 .25
    setCalculatedTax({
      inst_one: tax * 0.15,
      inst_two: tax * 0.3,
      inst_three: tax * 0.3,
      inst_four: tax * 0.25,
    });
  }, [formik.values.basic_salary]);
  // console.log("deduction amound part1", deductions);
  // console.log("deduction amound part2", deductions2);
  // console.log("nps amount", npsAmount);
  // console.log("80dd amount", amount80DD);
  // console.log("80U amount", amount80U);

  // console.log("form values", formik.values);
  // console.log("formik error", formik.errors);

  const classes =
    "[&_input]:h-10 [&_input]:px-3 [&_input]:border [&_input]:border-neutral-800 [&_input]:rounded [&_input]:w-full";
  const classes2 =
    "[&_select]:h-10 [&_select]:bg-white [&_select]:border [&_select]:border-neutral-800 [&_select]:px-2 [&_select]:rounded [&_select]:w-full [&_label]:text-lg";
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <div>
          <div className="my-8 flex justify-center">
            <div
              className={`${classes} ${classes2} w-full rounded-md border border-primary_light p-8 md:w-[950px] [&>div]:border-b [&>div]:border-b-primary_light [&_div]:flex [&_div]:items-center [&_div]:justify-between [&_div]:gap-2 [&_div]:py-1`}
              id="advancetaxdiv"
            >
              <h3 className="mb-8 w-max rounded bg-primary px-2 text-2xl font-bold text-white md:text-3xl">
                ADVANCE TAX CALCULATOR
              </h3>
              <div>
                <div>
                  <label htmlFor="pan">PAN No.</label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="pan"
                    id="pan"
                    placeholder="Pan number "
                    value={panNumber}
                    onChange={(e) => {
                      setPanNumber(e.target.value);
                    }}
                  />
                  {formik.errors.pan && (
                    <p className="absolute -bottom-3 text-red-500">
                      {formik.errors.pan}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="">Tax Payer</label>
                </div>
                <div>
                  <select
                    name="filing_category"
                    id=""
                    onChange={(e) => {
                      setSelect(e.target.value);
                    }}
                  >
                    <option value={""}>Select</option>
                    <option value={"General"}>Individual</option>
                    <option value={"HUF(Hindu undivided family)"}>
                      HUF(Hindu undivided family)
                    </option>
                    <option value={"AOP/BOI"}>AOP/BOI</option>
                    <option value={"Domestic Company"}>Domestic Company</option>
                    <option value={"Foreign Company"}>Foreign Company</option>
                    <option value={"Firms"}>Firms</option>
                    <option value={"LLP"}>LLP</option>
                    <option value={"Co-operative Society"}>
                      Co-operative Society{" "}
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="">Assessment Year</label>
                </div>
                <div>
                  <select
                    name="financial_year"
                    id=""
                    value={formik.values.financial_year}
                    onChange={formik.handleChange}
                  >
                    <option selected>Choose...</option>
                    <option value={"FY 2023-24"}>2023-24</option>
                    <option value={"FY 2022-23"}>2022-23</option>
                    <option value={"FY 2021-22"}>2021-22</option>
                    <option value={"FY 2020-21"}>2020-21</option>
                    <option value={"FY 2019-20"}>2019-20</option>
                    <option value={"FY 2018-19"}>2018-19</option>
                    <option value={"FY 2017-18"}>2017-18</option>
                    <option value={"FY 2016-17"}>2016-17</option>
                    <option value={"FY 2015-16"}>2015-16</option>
                    <option value={"FY 2014-15"}>2014-15</option>
                    <option value={"FY 2013-14"}>2013-14</option>
                    <option value={"FY 2012-13"}>2012-13</option>
                    <option value={"FY 2011-12"}>2011-12</option>
                    <option value={"FY 2010-11"}>2010-11</option>
                  </select>
                </div>
              </div>
              <form
                className="[&>div]:border-b [&>div]:border-b-primary_light"
                action=""
                onSubmit={formik.handleSubmit}
              >
                {select == "" && (
                  <>
                    <div>
                      <div>
                        <label htmlFor="">Net Taxable Income</label>
                      </div>
                      <div>
                        <input type="text" readOnly />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Income Tax</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Surcharge</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Health and Education Cess</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Total Tax Liability</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Relief</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          TDS/TCS/MAT (AMT) Credit Utilized
                        </label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Assessed Tax</label>
                      </div>
                      <div>
                        <input type="number" />
                      </div>
                    </div>
                  </>
                )}

                {select === "General" && (
                  <>
                    <div>
                      <div>
                        <label htmlFor="">
                          Whether opting for taxation under Section 115BAC?
                        </label>
                      </div>
                      <div>
                        <select
                          name=""
                          id=""
                          onChange={(e) => {
                            setSection115Bac(e.target.value);
                          }}
                        >
                          <option value="no">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Male / Female / Senior Citizen</label>
                      </div>
                      <div>
                        <select name="" id="">
                          <option value="">Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="senior_citizen">Senior Citizen</option>
                          <option value="super_senior_citizen">
                            Super Senior Citizen
                          </option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Residential Status</label>
                      </div>
                      <div>
                        <select
                          name="residential_status"
                          id=""
                          onChange={formik.handleChange}
                        >
                          <option value="">Select</option>
                          <option value="resident">Resident</option>
                          <option value="non_resident">Non Resident</option>
                          <option value="not_ordinary_resident">
                            Not Ordinary Resident
                          </option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          {secetion115Bac == "no"
                            ? "Income from Salary (Income from salary after standard deduction of Rs.50000."
                            : "Income from salary (Income from Salary before Exemptions/Deductions"}
                        </label>
                      </div>
                      <div>
                        <input
                          name="basic_salary"
                          type="text"
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Income From House Property</label>
                        <span
                          onClick={(e) => {
                            setShowHide1((prev) => !prev);
                          }}
                          role={"button"}
                          className="text-primary"
                        >
                          {showHide1 ? "Hide Details" : "Show Details"}
                        </span>
                      </div>

                      <div>
                        <input
                          value={
                            INCOME_FROM_HOUSE_PROERTY > 0
                              ? -INCOME_FROM_HOUSE_PROERTY
                              : INCOME_FROM_HOUSE_PROERTY
                          }
                          type="number"
                        />
                      </div>
                    </div>
                    {showHide1 && (
                      <>
                        <div className="flex flex-col">
                          <div className="w-full">
                            <label className="cursor-pointer">
                              <input
                                type="checkbox"
                                value={false}
                                style={{
                                  width: "20px",
                                  height: "18px",
                                }}
                                className="h-2 w-2"
                                onChange={checkInterest}
                              />{" "}
                              <span className="mx-2">
                                (a)Income from Self-occupied Property or
                                Interest Paid/Payable on Housing Loan
                              </span>
                            </label>
                          </div>
                          {/* { unchecked let out property section} */}
                          {!isLetoutSelected && (
                            <section className="flex w-full flex-col">
                              <div>
                                <div>
                                  <label htmlFor="">
                                    (a)1. Interest on Housing Loan
                                  </label>
                                </div>
                                <div>
                                  <input
                                    type="number"
                                    onChange={getuncheckedLetoutAmountHandler}
                                  />
                                </div>
                              </div>

                              <div>
                                <div>
                                  <label htmlFor="">
                                    (a)2. Income from self-occupied house
                                    property
                                  </label>
                                </div>
                                <div>
                                  <input
                                    value={
                                      uncheckedLetoutAmount
                                        ? -uncheckedLetoutAmount
                                        : ""
                                    }
                                    type="number"
                                    readOnly
                                  />
                                </div>
                              </div>
                            </section>
                          )}

                          {/* { checked let out property section} */}
                          {isLetoutSelected && (
                            <>
                              <p> b. Income from Let-out Property</p>
                              <div className="flex w-full">
                                <div>
                                  <label htmlFor="">
                                    (b)1. Annual Letable Value/Rent Received or
                                    Receivable
                                  </label>
                                </div>
                                <div>
                                  <input
                                    value={
                                      checkedLetoutAmount.value1
                                        ? checkedLetoutAmount.value1
                                        : ""
                                    }
                                    type="number"
                                    name="value1"
                                    onChange={getCheckedLetoutAmountHandler}
                                  />
                                </div>
                              </div>

                              <div className="flex w-full">
                                <div>
                                  <label htmlFor="">
                                    (b)2. Less: Municipal Taxes Paid During the
                                    Year
                                  </label>
                                </div>
                                <div>
                                  <input
                                    value={
                                      checkedLetoutAmount.value2
                                        ? checkedLetoutAmount.value2
                                        : ""
                                    }
                                    type="number"
                                    name="value2"
                                    onChange={getCheckedLetoutAmountHandler}
                                  />
                                </div>
                              </div>

                              <div className="flex w-full">
                                <div>
                                  <label htmlFor="">
                                    (b)3. Less:Unrealized Rent
                                  </label>
                                </div>
                                <div>
                                  <input
                                    value={
                                      checkedLetoutAmount.value3
                                        ? checkedLetoutAmount.value3
                                        : ""
                                    }
                                    type="number"
                                    name="value3"
                                    onChange={getCheckedLetoutAmountHandler}
                                  />
                                </div>
                              </div>

                              <div className="flex w-full">
                                <div>
                                  <label htmlFor="">
                                    (b)4. Net Annual Value (1-(2+3))
                                  </label>
                                </div>
                                <div>
                                  <input
                                    value={
                                      NET_ANNUAL_INCOME ? NET_ANNUAL_INCOME : ""
                                    }
                                    type="number"
                                    readOnly
                                  />
                                </div>
                              </div>

                              <p> c. Less: Deductions from Net Annual Value</p>

                              <div className="flex w-full">
                                <div>
                                  <label htmlFor="">
                                    (c)1. Standard Deduction @ 30% of Net Annual
                                    Value
                                  </label>
                                </div>
                                <div>
                                  <input
                                    value={STANDARD_DETUCTION}
                                    type="number"
                                    readOnly
                                  />
                                </div>
                              </div>

                              <div className="flex w-full">
                                <div>
                                  <label htmlFor="">
                                    (c)2. Interest on Housing Loan
                                  </label>
                                </div>
                                <div>
                                  <input
                                    value={
                                      checkedLetoutAmount.value4
                                        ? checkedLetoutAmount.value4
                                        : ""
                                    }
                                    type="number"
                                    name="value4"
                                    onChange={getCheckedLetoutAmountHandler}
                                  />
                                </div>
                              </div>

                              <div className="flex w-full">
                                <div>
                                  <label htmlFor="">
                                    (c)3. Income from Let-out House Property
                                  </label>
                                </div>
                                <div>
                                  <input
                                    value={
                                      LET_OUT_INCOME > 0
                                        ? -LET_OUT_INCOME
                                        : LET_OUT_INCOME
                                    }
                                    type="number"
                                    readOnly
                                  />
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </>
                    )}
                    <div>
                      <div>
                        <label htmlFor="">Capital Gains</label>
                        <span
                          onClick={(e) => {
                            setShowHide2((prev) => !prev);
                          }}
                          role={"button"}
                          className="text-primary"
                        >
                          {showHide2 ? "Hide Details" : "Show Details"}
                        </span>
                      </div>
                      <div>
                        <input
                          value={TOTAL_CAPITAL_GAINS}
                          type="text"
                          readOnly
                        />
                      </div>
                    </div>
                    {showHide2 && (
                      <>
                        <section>
                          <p>
                            {" "}
                            (a).Short Term Capital GainS (Other than covered
                            under section 111A)
                          </p>
                          <div className="flex-col">
                            <div>
                              <div>
                                <label>From 01/04/2022 to 15/06/2022</label>
                                <input
                                  name="value1"
                                  type="number"
                                  onChange={stcgOneHandler}
                                />
                              </div>
                              <div>
                                <label>From 16/06/2022 to 15/09/2022</label>
                                <input
                                  name="value2"
                                  type="number"
                                  onChange={stcgOneHandler}
                                />
                              </div>
                              <div>
                                <label>From 16/09/2022 to 15/12/2022</label>
                                <input
                                  name="value3"
                                  type="number"
                                  onChange={stcgOneHandler}
                                />
                              </div>
                            </div>

                            <div>
                              <div>
                                <label>From 16/12/2022 to 15/03/2023</label>
                                <input
                                  name="value4"
                                  type="number"
                                  onChange={stcgOneHandler}
                                />
                              </div>
                              <div>
                                <label>From 16/03/2022 to 31/03/2023</label>
                                <input
                                  name="value5"
                                  type="number"
                                  onChange={stcgOneHandler}
                                />
                              </div>
                              <div>
                                <label htmlFor="">Total</label>
                                <input
                                  value={calculateSum(stcg1)}
                                  type="number"
                                  readOnly
                                />
                              </div>
                            </div>
                          </div>

                          <p>
                            {" "}
                            (b).Short Term Capital GainS (Covered under section
                            111A)
                          </p>
                          <div>
                            <div className="flex flex-col">
                              <div>
                                <div>
                                  <label>From 01/04/2022 to 15/06/2022</label>
                                  <input
                                    type="number"
                                    name="value1"
                                    onChange={stcgTwoHandler}
                                  />
                                </div>
                                <div>
                                  <label>From 16/06/2022 to 15/09/2022</label>
                                  <input
                                    type="number"
                                    name="value2"
                                    onChange={stcgTwoHandler}
                                  />
                                </div>
                                <div>
                                  <label>From 16/09/2022 to 15/12/2022</label>
                                  <input
                                    type="number"
                                    name="value3"
                                    onChange={stcgTwoHandler}
                                  />
                                </div>
                              </div>

                              <div>
                                <div>
                                  <label>From 16/12/2022 to 15/03/2023</label>
                                  <input
                                    type="number"
                                    name="value4"
                                    onChange={stcgTwoHandler}
                                  />
                                </div>
                                <div>
                                  <label>From 16/03/2022 to 31/03/2023</label>
                                  <input
                                    type="number"
                                    name="value5"
                                    onChange={stcgTwoHandler}
                                  />
                                </div>
                                <div>
                                  <label htmlFor="">Total</label>
                                  <input
                                    value={calculateSum(stcg2)}
                                    type="number"
                                    readOnly
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <p>
                            {" "}
                            (c).Long Term Capital Gains (Charged to tax @ 20%)
                          </p>
                          <div>
                            <div className="flex-col">
                              <div>
                                <div>
                                  <label>From 01/04/2022 to 15/06/2022</label>
                                  <input
                                    type="number"
                                    name="value1"
                                    onChange={ltcgOneHandler}
                                  />
                                </div>
                                <div>
                                  <label>From 16/06/2022 to 15/09/2022</label>
                                  <input
                                    type="number"
                                    name="value2"
                                    onChange={ltcgOneHandler}
                                  />
                                </div>
                                <div>
                                  <label>From 16/09/2022 to 15/12/2022</label>
                                  <input
                                    type="number"
                                    name="value3"
                                    onChange={ltcgOneHandler}
                                  />
                                </div>
                              </div>

                              <div>
                                <div>
                                  <label>From 16/12/2022 to 15/03/2023</label>
                                  <input
                                    type="number"
                                    name="value4"
                                    onChange={ltcgOneHandler}
                                  />
                                </div>
                                <div>
                                  <label>From 16/03/2022 to 31/03/2023</label>
                                  <input
                                    type="number"
                                    name="value5"
                                    onChange={ltcgOneHandler}
                                  />
                                </div>
                                <div>
                                  <label htmlFor="">Total</label>
                                  <input
                                    value={calculateSum(ltcg1)}
                                    type="number"
                                    readOnly
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <p>
                            {" "}
                            (d).Long Term Capital Gains (Charged to tax @ 10%)
                          </p>
                          <div>
                            <div className="flex-col">
                              <div>
                                <div>
                                  <label>From 01/04/2022 to 15/06/2022</label>
                                  <input
                                    type="number"
                                    name="value1"
                                    onChange={ltcgTwoHandler}
                                  />
                                </div>
                                <div>
                                  <label>From 16/06/2022 to 15/09/2022</label>
                                  <input
                                    type="number"
                                    name="value2"
                                    onChange={ltcgTwoHandler}
                                  />
                                </div>
                                <div>
                                  <label>From 16/09/2022 to 15/12/2022</label>
                                  <input
                                    type="number"
                                    name="value3"
                                    onChange={ltcgTwoHandler}
                                  />
                                </div>
                              </div>

                              <div>
                                <div>
                                  <label>From 16/12/2022 to 15/03/2023</label>
                                  <input
                                    type="number"
                                    name="value4"
                                    onChange={ltcgTwoHandler}
                                  />
                                </div>
                                <div>
                                  <label>From 16/03/2022 to 31/03/2023</label>
                                  <input
                                    type="number"
                                    name="value5"
                                    onChange={ltcgTwoHandler}
                                  />
                                </div>
                                <div>
                                  <label htmlFor="">Total</label>
                                  <input
                                    value={calculateSum(ltcg2)}
                                    type="number"
                                    readOnly
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <p>
                            {" "}
                            (e)Long Term Capital GainS (Covered under section
                            112A)
                          </p>
                          <div>
                            <div className="flex-col">
                              <div>
                                <div>
                                  <label>From 01/04/2022 to 15/06/2022</label>
                                  <input
                                    type="number"
                                    name="value1"
                                    onChange={ltcgThreeHandler}
                                  />
                                </div>
                                <div>
                                  <label>From 16/06/2022 to 15/09/2022</label>
                                  <input
                                    type="number"
                                    name="value2"
                                    onChange={ltcgThreeHandler}
                                  />
                                </div>
                                <div>
                                  <label>From 16/09/2022 to 15/12/2022</label>
                                  <input
                                    type="number"
                                    name="value3"
                                    onChange={ltcgThreeHandler}
                                  />
                                </div>
                              </div>

                              <div>
                                <div>
                                  <label>From 16/12/2022 to 15/03/2023</label>
                                  <input
                                    type="number"
                                    name="value4"
                                    onChange={ltcgThreeHandler}
                                  />
                                </div>
                                <div>
                                  <label>From 16/03/2022 to 31/03/2023</label>
                                  <input
                                    type="number"
                                    name="value5"
                                    onChange={ltcgThreeHandler}
                                  />
                                </div>
                                <div>
                                  <label htmlFor="">Total</label>
                                  <input
                                    value={calculateSum(ltcg3)}
                                    type="number"
                                    readOnly
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </>
                    )}
                    <div>
                      <div>
                        <label htmlFor="">Income From Other Sources</label>
                        <span
                          onClick={(e) => {
                            setShowHide3((prev) => !prev);
                          }}
                          role={"button"}
                          className="text-primary"
                        >
                          {showHide3 ? "Hide Details" : "Show Details"}
                        </span>
                      </div>
                      <div>
                        <input
                          value={calculateSum(incomeFromOtherSource)}
                          type="text"
                        />
                      </div>
                    </div>
                    {showHide3 && (
                      <>
                        <div className="flex-col">
                          <div className="flex w-full">
                            <div>
                              <label htmlFor="">Interest</label>
                            </div>
                            <div>
                              <input
                                type="number"
                                value={
                                  incomeFromOtherSource.value1 > 0
                                    ? incomeFromOtherSource.value1
                                    : ""
                                }
                                name="value1"
                                onChange={incomeFromOtherSourceHandler}
                              />
                            </div>
                          </div>

                          <div className="flex w-full">
                            <div>
                              <label htmlFor="">Commission/Other Income</label>
                            </div>
                            <div>
                              <input
                                type="number"
                                value={
                                  incomeFromOtherSource.value2 > 0
                                    ? incomeFromOtherSource.value2
                                    : ""
                                }
                                name="value2"
                                onChange={incomeFromOtherSourceHandler}
                              />
                            </div>
                          </div>

                          <div className="flex w-full">
                            <div>
                              <label htmlFor="">
                                Winnings from Lottery, Crossword Puzzles, etc.
                              </label>
                            </div>
                            <div>
                              <input
                                type="number"
                                value={
                                  incomeFromOtherSource.value3 > 0
                                    ? incomeFromOtherSource.value3
                                    : ""
                                }
                                name="value3"
                                onChange={incomeFromOtherSourceHandler}
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    <div>
                      <div>
                        <label htmlFor="">
                          Profits and Gains of Business or Profession (enter
                          profit only)
                        </label>
                      </div>
                      <div>
                        <input type="number" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Agricultural Income</label>
                      </div>
                      <div>
                        <input type="number" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Deductions</label>
                        <span
                          onClick={(e) => {
                            setShowHide4((prev) => !prev);
                          }}
                          role={"button"}
                        >
                          {showHide4 ? "Hide Details" : "Show Details"}
                        </span>
                      </div>
                      <div>
                        <input
                          value={TOTAL_DEDUCTION ? TOTAL_DEDUCTION : ""}
                          type="number"
                          readOnly
                        />
                      </div>
                    </div>
                    {showHide4 && (
                      <>
                        <div
                          style={{
                            backgroundColor: "gray",
                          }}
                        >
                          <div>
                            <label htmlFor="">
                              Life Insurance premium paid
                            </label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions.value1}
                              name="value1"
                              onChange={deductionAmountHandler}
                            />
                          </div>
                          <div>
                            <label htmlFor="">Payment for annuity plan</label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions.value2}
                              name="value2"
                              onChange={deductionAmountHandler}
                            />
                          </div>
                          <div>
                            <label htmlFor="">
                              Contribution toward provident fund / PPF
                            </label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions.value3}
                              name="value3"
                              onChange={deductionAmountHandler}
                            />
                          </div>
                          <div>
                            <label htmlFor="">
                              Investment in NSC (VIII issue) + Interest
                            </label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions.value4}
                              name="value4"
                              onChange={deductionAmountHandler}
                            />
                          </div>
                          <div>
                            <label htmlFor="">Contribution toward ULIP</label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions.value5}
                              name="value5"
                              onChange={deductionAmountHandler}
                            />
                          </div>
                          <div>
                            <label htmlFor="">
                              Contribution toward notified pension fund by
                              MF/UTI
                            </label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions.value6}
                              name="value6"
                              onChange={deductionAmountHandler}
                            />
                          </div>
                          <div>
                            <label htmlFor="">
                              Re-payment of housing loan etc
                            </label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions.value7}
                              name="value7"
                              onChange={deductionAmountHandler}
                            />
                          </div>
                          <div>
                            <label htmlFor="">
                              Tuition fees paid for children
                            </label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions.value8}
                              name="value8"
                              onChange={deductionAmountHandler}
                            />
                          </div>
                          <div>
                            <label htmlFor="">
                              5 Years fixed deposit with PO or Schedule Bank
                            </label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions.value9}
                              name="value9"
                              onChange={deductionAmountHandler}
                            />
                          </div>
                          <div>
                            <label htmlFor="">Contribution toward NPF</label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions.value10}
                              name="value10"
                              onChange={deductionAmountHandler}
                            />
                          </div>
                          <div>
                            <label htmlFor="">
                              Employee&apos;s / Self-employed contribution
                              toward NPS (up to 20%) (u/s 80CCD)
                            </label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions.value11}
                              name="value11"
                              onChange={deductionAmountHandler}
                            />
                          </div>
                          <div>
                            <label htmlFor="">
                              Additional contribution towards NPS [u/s
                              80CCD(1B)]
                            </label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={npsAmount.value1}
                              name="value1"
                              onChange={npsAmountHandler}
                            />
                          </div>
                          <div>
                            <label htmlFor="">
                              Employer&apos;s contribution toward NPS (u/s
                              80CCD)
                            </label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={npsAmount.value2}
                              name="value2"
                              onChange={npsAmountHandler}
                            />
                          </div>
                          <div>
                            <label htmlFor="">
                              Deposit with Sukanya Samridhi Accounts
                            </label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions.value12}
                              name="value12"
                              onChange={deductionAmountHandler}
                            />
                          </div>
                          <div>
                            <label htmlFor="">
                              Any other deductable (u/s 80C)
                            </label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions.value13}
                              name="value13"
                              onChange={deductionAmountHandler}
                            />
                          </div>
                          <div>
                            <label htmlFor="">Total</label>
                          </div>
                          <div>
                            <input
                              value={
                                TOTAL_DEDUCTION_PART1 > 0
                                  ? TOTAL_DEDUCTION_PART1
                                  : ""
                              }
                              type="number"
                              readOnly
                            />
                          </div>

                          <div>
                            <label htmlFor="">
                              Medi-claim premium (u/s 80D)
                            </label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions2.value14}
                              name="value14"
                              onChange={deductionAmountHandler2}
                            />
                          </div>
                          <div>
                            <label htmlFor="">
                              Actual payment towards medical treatment (u/s
                              80DDB )
                            </label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions2.value15}
                              name="value15"
                              onChange={deductionAmountHandler2}
                            />
                          </div>
                          <div>
                            <label htmlFor="">
                              Interest payable on loan for residentials house
                              property (u/s 80EEA )
                            </label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions2.value16}
                              name="value16"
                              onChange={deductionAmountHandler2}
                            />
                          </div>
                          <div>
                            <label htmlFor="">
                              Interest payable on loan for purchase of electric
                              vehicles(u/s 80EEB )
                            </label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions2.value17}
                              name="value17"
                              onChange={deductionAmountHandler2}
                            />
                          </div>
                          <div>
                            <label htmlFor="">Donations (u/s 80G)</label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions2.value18}
                              name="value18"
                              onChange={deductionAmountHandler2}
                            />
                          </div>

                          <div>
                            <label htmlFor="">
                              Deduction for maintenance / medical treatment of
                              dependent (u/s 80DD)
                            </label>
                          </div>
                          <div>
                            <input value={amount80DD} type="number" readOnly />
                          </div>
                          <div>
                            <input
                              type="checkbox"
                              onChange={amount80DDHanlder}
                            />
                            <label htmlFor="">Tick if 80D is claimed</label>
                          </div>
                          <div>
                            <input
                              type="checkbox"
                              onChange={severe_disabilityCheck1Handler}
                            />
                            <label htmlFor="">Tick if severe disability</label>
                          </div>
                          <div>
                            <label htmlFor="">
                              Interest on loan for higher education (u/s 80E)
                            </label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions2.value19}
                              name="value19"
                              onChange={deductionAmountHandler2}
                            />
                          </div>
                          <div>
                            <label htmlFor="">
                              Interest on loan taken for Residential House (u/s
                              80EE)
                            </label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions2.value20}
                              name="value20"
                              onChange={deductionAmountHandler2}
                            />
                          </div>
                          <div>
                            <label htmlFor="">
                              Deduction in case of a person with disability (u/s
                              80U)
                            </label>
                          </div>

                          <div>
                            <input value={amount80U} type="number" readOnly />
                          </div>
                          <div>
                            <input
                              type="checkbox"
                              onChange={amount80UHanlder}
                            />
                            <label htmlFor="">Tick if 80U is claimed</label>
                          </div>
                          <div>
                            <input
                              type="checkbox"
                              onChange={severe_disabilityCheck2Handler}
                            />
                            <label htmlFor="">Tick if severe disability</label>
                          </div>
                          <div>
                            <label htmlFor="">
                              Interest on deposits(u/s 80TTB)
                            </label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions2.value21}
                              name="value21"
                              onChange={deductionAmountHandler2}
                            />
                          </div>
                          <div>
                            <label htmlFor="">Any other deductions</label>
                          </div>
                          <div>
                            <input
                              type="number"
                              value={deductions2.value22}
                              name="value22"
                              onChange={deductionAmountHandler2}
                            />
                          </div>
                        </div>
                      </>
                    )}
                    <div>
                      <div>
                        <label htmlFor=""> Taxable Income</label>
                      </div>
                      <div>
                        <input
                          value={formik.values.basic_salary}
                          type="number"
                          readOnly
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          Income Liable to Tax at Normal Rate ---
                        </label>
                      </div>
                      <div>
                        <div>
                          <div>
                            <input type="number" />
                          </div>
                          <div>
                            <input type="number" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          Short Term Capital Gains (Covered u/s 111A) 15%
                        </label>
                      </div>
                      <div>
                        <div>
                          <div>
                            <input type="number" />
                          </div>
                          <div>
                            <input type="number" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          Long Term Capital Gains (Covered u/s 112A) 10%
                        </label>
                      </div>
                      <div>
                        <div>
                          <div>
                            <input type="number" />
                          </div>
                          <div>
                            <input type="number" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          Long Term Capital Gains (Charged to tax @ 20%) 20%
                        </label>
                      </div>
                      <div>
                        <div>
                          <div>
                            <input type="number" />
                          </div>
                          <div>
                            <input type="number" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          Long Term Capital Gains (Charged to tax @ 10%) 10%
                        </label>
                      </div>
                      <div>
                        <div>
                          <div>
                            <input type="number" />
                          </div>
                          <div>
                            <input type="number" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          Winnings from Lottery, Crossword Puzzles, etc) 30%
                        </label>
                      </div>
                      <div>
                        <div>
                          <div>
                            <input type="number" />
                          </div>
                          <div>
                            <input type="number" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          Income Tax after relief u/s 87A
                        </label>
                      </div>
                      <div>
                        <input type="number" value={calculatedTax} />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Surcharge</label>
                      </div>
                      <div>
                        <input type="number" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Health and Education Cess</label>
                      </div>
                      <div>
                        <input type="number" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Total Tax Liability</label>
                      </div>
                      <div>
                        <input type="number" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          Relief other than relief u/s 87A
                        </label>
                      </div>
                      <div>
                        <input type="number" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          TDS/TCS/MAT (AMT) Credit Utilized
                        </label>
                      </div>
                      <div>
                        <input type="number" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Assessed Tax</label>
                      </div>
                      <div>
                        <input type="number" />
                      </div>
                    </div>
                  </>
                )}

                {select === "HUF(Hindu undivided family)" && (
                  <>
                    <div>
                      <div>
                        <label htmlFor="">
                          Whether opting for taxation under Section 115BAC?
                        </label>
                      </div>
                      <div>
                        <select name="" id="">
                          <option value="">select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Net Taxable Income</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Income Tax</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Surcharge</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Health and Education Cess</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Total Tax Liability</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Relief</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          TDS/TCS/MAT (AMT) Credit Utilized
                        </label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Assessed Tax</label>
                      </div>
                      <div>
                        <input type="number" />
                      </div>
                    </div>
                  </>
                )}
                {select === "AOP/BOI" && (
                  <>
                    <div>
                      <div>
                        <label htmlFor="">Net Taxable Income</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Income Tax</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Surcharge</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Health and Education Cess</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Total Tax Liability</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Relief</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          TDS/TCS/MAT (AMT) Credit Utilized
                        </label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Assessed Tax</label>
                      </div>
                      <div>
                        <input type="number" />
                      </div>
                    </div>
                  </>
                )}
                {select === "Domestic Company" && (
                  <>
                    <div>
                      <div>
                        <input
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          style={{
                            width: "10px",
                            height: "10px",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          Tick if, total turnover or gross receipt of the
                          company in the previous year 2017-18 does not exceed
                          400 crore rupees
                        </label>
                      </div>
                    </div>
                    <div>
                      <div>
                        <input
                          type="checkbox"
                          value=""
                          id="flexCheckDefault2"
                          style={{
                            width: "10px",
                            height: "10px",
                          }}
                        />
                      </div>
                      <div>
                        <label for="flexCheckDefault2">
                          Tick if, company opted and qualify under section 115BA
                        </label>
                      </div>
                    </div>
                    <div>
                      <div>
                        <input
                          type="checkbox"
                          value=""
                          id="flexCheckDefault3"
                          style={{
                            width: "10px",
                            height: "10px",
                          }}
                        />
                      </div>
                      <div>
                        <label for="flexCheckDefault3">
                          Tick if, company opted and qualify for section 115BAA
                        </label>
                      </div>
                    </div>
                    <div>
                      <div>
                        <input
                          type="checkbox"
                          value=""
                          id="flexCheckDefault4"
                          style={{
                            width: "10px",
                            height: "10px",
                          }}
                        />
                      </div>
                      <div>
                        <label for="flexCheckDefault4">
                          Tick if, company opted and qualify for section 115BAB
                        </label>
                      </div>
                    </div>

                    <div>
                      <div>
                        <label htmlFor="">Net Taxable Income</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Income Tax</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Surcharge</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Health and Education Cess</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Total Tax Liability</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Relief</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          TDS/TCS/MAT (AMT) Credit Utilized
                        </label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Assessed Tax</label>
                      </div>
                      <div>
                        <input type="number" />
                      </div>
                    </div>
                  </>
                )}
                {select === "Foreign Company" && (
                  <>
                    <div>
                      <div>
                        <label htmlFor="">Net Taxable Income</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Income Tax</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Surcharge</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Health and Education Cess</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Total Tax Liability</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Relief</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          TDS/TCS/MAT (AMT) Credit Utilized
                        </label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Assessed Tax</label>
                      </div>
                      <div>
                        <input type="number" />
                      </div>
                    </div>
                  </>
                )}
                {select === "Firms" && (
                  <>
                    <div>
                      <div>
                        <label htmlFor="">Net Taxable Income</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Income Tax</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Surcharge</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Health and Education Cess</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Total Tax Liability</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Relief</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          TDS/TCS/MAT (AMT) Credit Utilized
                        </label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Assessed Tax</label>
                      </div>
                      <div>
                        <input type="number" />
                      </div>
                    </div>
                  </>
                )}
                {select === "LLP" && (
                  <>
                    <div>
                      <div>
                        <label htmlFor="">Net Taxable Income</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Income Tax</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Surcharge</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Health and Education Cess</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Total Tax Liability</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Relief</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          TDS/TCS/MAT (AMT) Credit Utilized
                        </label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Assessed Tax</label>
                      </div>
                      <div>
                        <input type="number" />
                      </div>
                    </div>
                  </>
                )}
                {select === "Co-operative Society" && (
                  <>
                    <div>
                      <div>
                        <label htmlFor="">
                          Co-operative society opted and qualify for section
                          115BAD
                        </label>
                      </div>
                      <div>
                        <select name="" id="">
                          <option value="">select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Net Taxable Income</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Income Tax</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Surcharge</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Health and Education Cess</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Total Tax Liability</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Relief</label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">
                          TDS/TCS/MAT (AMT) Credit Utilized
                        </label>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Assessed Tax</label>
                      </div>
                      <div>
                        <input type="number" />
                      </div>
                    </div>
                  </>
                )}
              </form>
              <section className="mt-8 flex justify-center gap-8">
                <button
                  onClick={handleResetForm}
                  className="rounded bg-red-500 p-3 px-8 text-white hover:opacity-75"
                >
                  <span>Reset</span>
                </button>

                <button
                  type="submit"
                  className="rounded bg-primary p-3 px-8 text-white hover:opacity-75"
                  onClick={formik.handleSubmit}
                >
                  <span>Calculate</span>
                </button>
              </section>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-auto w-full md:w-[950px] mt-4 p-3 border border-primary rounded-md">
          {/* Table  */}
          <div className=" text-center">Advance Tax liability</div>
          {calculatedTax && (
            <table className="[&>tr]:flex [&>tr]:justify-between [&>tr]:my-2 [&>tr]:border-b-2">
              <tr className="bg-primary rounded-md text-white">
                <th>Description</th>
                <th> Advance Tax liability</th>
              </tr>
              <tr>
                <td>Advance tax payable upto June 15, 2023 (Cumulative)</td>
                {/* <td>{calculatedTax.inst_one.toLocaleString("en")}</td> */}
                <td>0</td>
              </tr>
              <tr>
                <td>
                  Advance tax payable upto September 15, 2023 (Cumulative)
                </td>
                {/* <td>{calculatedTax.inst_two.toLocaleString("en")}</td> */}
                <td>0</td>
              </tr>
              <tr>
                <td>Advance tax payable upto December 15, 2023 (Cumulative)</td>
                {/* <td>{calculatedTax.inst_three.toLocaleString("en")}</td> */}
                <td>0</td>
              </tr>
              <tr>
                <td>Advance tax payable upto March 15, 2024 (Cumulative)</td>
                {/* <td>{calculatedTax.inst_four.toLocaleString("en")}</td> */}
                <td>0</td>
              </tr>
            </table>
          )}
        </div>
        <div className="flex flex-col mx-auto w-full md:w-[950px] mt-4 p-3 border border-primary rounded-md">
          {/* Table  */}

          <div className=" text-center">Advance Tax Installments</div>
          {calculatedTax && (
            <table className="[ [&>tr]:my-2 [&>tr]:border-b-2">
              <tr className="bg-primary rounded-md text-white">
                <th>Description</th>
                <th>
                  Installment
                  <br />
                  <span className="italic font-thin">(Old Regime)</span>
                </th>
                <th>
                  Installment
                  <br />
                  <span className="italic font-thin">(new Regime)</span>
                </th>
              </tr>
              <tr>
                <td>
                  First installment payable for the period April 1, 2022 to June
                  15, 2022
                </td>
                {/* <td>{calculatedTax.inst_one.toLocaleString("en")}</td> */}
                <td>
                  {isLoading
                    ? "Calculating..."
                    : old_advance_tax_installments
                    ? old_advance_tax_installments
                        .advance_tax_installments[0][4]
                    : "0"}
                </td>
                <td>
                  {isLoading
                    ? "Calculating..."
                    : new_advance_tax_installments
                    ? new_advance_tax_installments
                        .advance_tax_installments[0][4]
                    : "0"}
                </td>
              </tr>
              <tr>
                <td>
                  Second installment payable for the period June 16, 2022 to
                  September 15, 2022
                </td>
                {/* <td>{calculatedTax.inst_two.toLocaleString("en")}</td> */}
                <td>
                  {isLoading
                    ? "Calculating..."
                    : old_advance_tax_installments
                    ? old_advance_tax_installments
                        .advance_tax_installments[1][4]
                    : "0"}
                </td>
                <td>
                  {isLoading
                    ? "Calculating..."
                    : new_advance_tax_installments
                    ? new_advance_tax_installments
                        .advance_tax_installments[1][4]
                    : "0"}
                </td>
              </tr>
              <tr>
                <td>
                  Third installment payable for the period September 16, 2022 to
                  December 15, 2022
                </td>
                {/* <td>{calculatedTax.inst_three.toLocaleString("en")}</td> */}
                <td>
                  {isLoading
                    ? "Calculating..."
                    : old_advance_tax_installments
                    ? old_advance_tax_installments
                        .advance_tax_installments[2][4]
                    : "0"}
                </td>
                <td>
                  {isLoading
                    ? "Calculating..."
                    : new_advance_tax_installments
                    ? new_advance_tax_installments
                        .advance_tax_installments[2][4]
                    : "0"}
                </td>
              </tr>
              <tr>
                <td>
                  Fourth installment payable for the period December 16, 2022 to
                  March 15, 2023
                </td>
                {/* <td>{calculatedTax.inst_four.toLocaleString("en")}</td> */}
                <td>
                  {isLoading
                    ? "Calculating..."
                    : old_advance_tax_installments
                    ? old_advance_tax_installments
                        .advance_tax_installments[3][4]
                    : "0"}
                </td>
                <td>
                  {isLoading
                    ? "Calculating..."
                    : new_advance_tax_installments
                    ? new_advance_tax_installments
                        .advance_tax_installments[3][4]
                    : "0"}
                </td>
              </tr>
            </table>
          )}
        </div>
      </div>
      {/* <Footer /> */}

    </>
  );
}
