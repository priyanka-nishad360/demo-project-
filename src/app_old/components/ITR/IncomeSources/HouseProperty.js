import { useContext } from "react";
import { StoreContext } from "@/store/store-context";
import Actions from "@/store/actions";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";

export default function HouseProperty({ setSection }) {
  const [state, dispatch] = useContext(StoreContext);

  const calcChargableAmount = (values) => {
    let totalAmount = 0;
    const type = values.typeOfHouseProperty;
    let loanInterest = values.interestPaidOnLoanForThisHouseProperty;
    let preBuildLoanInterest =
      values.totalInterestAmountPaidDuringThePreConstructionPeriod;
    let houseTax = values.houseTaxPaidByYou;
    let rentReceived = values.estimatedAnnualRentReceivable;

    const LIMIT_1 = 30000;
    const LIMIT_2 = 200000;

    const RATE_1 = 0.2;
    const RATE_2 = 0.3;

    const SELF = "Self occupied";
    const RENT = "Rental";
    const DEEMED = "Deemed let out property";

    if (type === SELF) {
      loanInterest > LIMIT_2 ? (loanInterest = LIMIT_2) : null;
      preBuildLoanInterest = preBuildLoanInterest * RATE_1;
      preBuildLoanInterest > LIMIT_1 ? (preBuildLoanInterest = LIMIT_1) : null;
      totalAmount =
        totalAmount - (Number(loanInterest) + Number(preBuildLoanInterest));
      return totalAmount;
    } else if (type === RENT) {
      loanInterest > LIMIT_2 ? (loanInterest = LIMIT_2) : null;
      totalAmount =
        Number(rentReceived) - (Number(loanInterest) + Number(houseTax));
      totalAmount = totalAmount - totalAmount * RATE_2;
      return totalAmount;
    } else if (type === DEEMED) {
      loanInterest > LIMIT_2 ? (loanInterest = LIMIT_2) : null;
      preBuildLoanInterest = Number(preBuildLoanInterest) * RATE_1;
      preBuildLoanInterest > LIMIT_1 ? (preBuildLoanInterest = LIMIT_1) : null;
      totalAmount =
        Number(rentReceived) -
        Number(loanInterest) +
        Number(preBuildLoanInterest) +
        Number(houseTax);
      totalAmount = totalAmount - totalAmount * RATE_2;
      return totalAmount;
    } else {
      return null;
    }
  };

  const handleSubmit = (values) => {
    const headPropertyAmount = calcChargableAmount(values);
    dispatch({
      type: Actions.ITR,
      payload: {
        ...state.itr,
        incomeSources: {
          ...state.itr.incomeSources,
          houseProperty: {
            incomeChargeableUnderTheHeadHouseProperty: headPropertyAmount,
            housePropertyDetails: {
              typeOfHouseProperty: values.typeOfHouseProperty,
            },
            estimatedIncomeFromTheHouseProperty: {
              estimatedAnnualRentReceivable:
                values.estimatedAnnualRentReceivable,
              houseTaxPaidByYou: values.houseTaxPaidByYou,
            },
            interestPaidOnHousingLoanForThisHouseProperty: {
              interestPaidOnLoanForThisHouseProperty:
                values.interestPaidOnLoanForThisHouseProperty,
            },
            interestPaidDuringThePreConstructionPeriodOfHouseProperty: {
              theFinancialYearPreviousToCompletionOfConstruction:
                values.theFinancialYearPreviousToCompletionOfConstruction,
              totalInterestAmountPaidDuringThePreConstructionPeriod:
                values.totalInterestAmountPaidDuringThePreConstructionPeriod,
            },
            yourHouseAddress: {
              flat: values.flat,
              premiseName: values.premiseName,
              road: values.road,
              pincode: values.pincode,
              area: values.area,
              city: values.city,
              state: values.state,
              country: values.country,
              mobile: values.mobile,
              email: values.email,
            },
            coOwnersDetails: values.coOwnersDetails,
          },
        },
      },
    });
    setSection("Other Income");
  };

  return (
    <Formik
      initialValues={{
        typeOfHouseProperty: "",
        estimatedAnnualRentReceivable: 0,
        houseTaxPaidByYou: 0,
        interestPaidOnLoanForThisHouseProperty: 0,
        theFinancialYearPreviousToCompletionOfConstruction: 0,
        totalInterestAmountPaidDuringThePreConstructionPeriod: 0,
        flat: "",
        premiseName: "",
        road: "",
        pincode: 0,
        area: "",
        city: "",
        state: "",
        country: "",
        mobile: 0,
        email: "",
        coOwnersDetails: [
          {
            nameOfCoOwner_: "",
            panOfCoOwner_: "",
            percentageShare_: "",
          },
        ],
      }}
      validationSchema={Yup.object({
        typeOfHouseProperty: Yup.string(),
        estimatedAnnualRentReceivable: Yup.number(),
        houseTaxPaidByYou: Yup.number(),
        interestPaidOnLoanForThisHouseProperty: Yup.number(),
        theFinancialYearPreviousToCompletionOfConstruction: Yup.string(),
        totalInterestAmountPaidDuringThePreConstructionPeriod: Yup.number(),
        flat: Yup.string(),
        premiseName: Yup.string(),
        road: Yup.string(),
        pincode: Yup.number(),
        area: Yup.string(),
        city: Yup.string(),
        state: Yup.string(),
        country: Yup.string(),
        mobile: Yup.number(),
        email: Yup.string().email(),
        coOwnersDetails: Yup.array().of(
          Yup.object().shape({
            nameOfCoOwner: Yup.string(),
            panOfCoOwner: Yup.string(),
            percentageShare: Yup.string(),
          })
        ),
      })}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ values }) => (
        <>
          <Form>
            <div className="mx-auto max-w-4xl w-full px-4">
              <h3 className="border-b font-semibold mb-5">
                House Property Details
              </h3>
              <div className="md:grid md:grid-cols-2 flex flex-col gap-5">
                <div className="flex flex-col">
                  <label
                    htmlFor="typeOfHouseProperty"
                    className="text-sm font-medium"
                  >
                    Type of House Property
                  </label>
                  <Field
                    as="select"
                    name="typeOfHouseProperty"
                    id="typeOfHouseProperty"
                    className="h-12 px-3 mt-1 outline-none border border-gray-400 focus:border-primary rounded"
                  >
                    <option value="">--Select--</option>
                    <option value="Self occupied">Self occupied</option>
                    <option value="Rental">Rental</option>
                    <option value="Deemed let out property">
                      Deemed let out property
                    </option>
                  </Field>
                  <ErrorMessage name="typeOfHouseProperty" />
                </div>
              </div>
              {values.typeOfHouseProperty !== "Self occupied" && (
                <>
                  <h3 className="border-b font-semibold mb-5 mt-8">
                    Estimated Income from the House Property
                  </h3>
                  <div className="md:grid md:grid-cols-2 flex flex-col gap-5">
                    <div className="flex flex-col">
                      <label
                        htmlFor="estimatedAnnualRentReceivable"
                        className="text-sm font-medium"
                      >
                        Estimated Annual Rent Receivable
                      </label>
                      <Field
                        type="text"
                        name="estimatedAnnualRentReceivable"
                        id="estimatedAnnualRentReceivable"
                        className="h-12 px-3 mt-1 outline-none border border-gray-400 focus:border-primary rounded"
                      />
                      <ErrorMessage name="estimatedAnnualRentReceivable" />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="houseTaxPaidByYou"
                        className="text-sm font-medium"
                      >
                        House Tax paid by you
                      </label>
                      <Field
                        type="text"
                        name="houseTaxPaidByYou"
                        id="houseTaxPaidByYou"
                        className="h-12 px-3 mt-1 outline-none border border-gray-400 focus:border-primary rounded"
                      />
                      <ErrorMessage name="houseTaxPaidByYou" />
                    </div>
                  </div>
                </>
              )}
              <h3 className="border-b font-semibold mb-5 mt-8">
                Interest paid on housing loan for this house property
              </h3>
              <div className="md:grid md:grid-cols-2 flex flex-col gap-5">
                <div className="flex flex-col">
                  <label
                    htmlFor="interestPaidOnLoanForThisHouseProperty"
                    className="text-sm font-medium"
                  >
                    Interest paid on loan for this house property
                  </label>
                  <Field
                    type="number"
                    name="interestPaidOnLoanForThisHouseProperty"
                    id="interestPaidOnLoanForThisHouseProperty"
                    className="h-12 px-3 mt-1 outline-none border border-gray-400 focus:border-primary rounded"
                  />
                  <ErrorMessage name="interestPaidOnLoanForThisHouseProperty" />
                </div>
              </div>
              {values.typeOfHouseProperty !== "Rental" && (
                <>
                  <h3 className="border-b font-semibold mb-5 mt-8">
                    Interest paid during the pre-construction period of house
                    property
                  </h3>
                  <div className="md:grid md:grid-cols-2 flex flex-col gap-5">
                    <div className="flex flex-col">
                      <label
                        htmlFor="theFinancialYearPreviousToCompletionOfConstruction"
                        className="text-sm font-medium"
                      >
                        The financial year previous to completion of
                        construction
                      </label>
                      <Field
                        as="select"
                        name="theFinancialYearPreviousToCompletionOfConstruction"
                        id="theFinancialYearPreviousToCompletionOfConstruction"
                        className="h-12 px-3 mt-1 outline-none border border-gray-400 focus:border-primary rounded"
                      >
                        <option value="">--Select--</option>
                        <option value="2023-24">2023-24</option>
                        <option value="2022-23">2022-23</option>
                        <option value="2021-22">2021-22</option>
                        <option value="2020-21">2020-21</option>
                      </Field>
                      <ErrorMessage name="theFinancialYearPreviousToCompletionOfConstruction" />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="totalInterestAmountPaidDuringThePreConstructionPeriod"
                        className="text-sm font-medium"
                      >
                        Total interest amount paid during the pre-construction
                        period
                      </label>
                      <Field
                        type="text"
                        name="totalInterestAmountPaidDuringThePreConstructionPeriod"
                        id="totalInterestAmountPaidDuringThePreConstructionPeriod"
                        className="h-12 px-3 mt-1 outline-none border border-gray-400 focus:border-primary rounded"
                      />
                      <ErrorMessage name="totalInterestAmountPaidDuringThePreConstructionPeriod" />
                    </div>
                  </div>
                </>
              )}
              <h3 className="border-b font-semibold mb-5 mt-8">
                Your House Address
              </h3>
              <div className="md:grid md:grid-cols-2 flex flex-col gap-5">
                <div className="flex flex-col">
                  <label htmlFor="flat" className="text-sm font-medium">
                    Flat/Door/Block Number
                  </label>
                  <Field
                    type="text"
                    name="flat"
                    id="flat"
                    className="h-12 px-3 mt-1 outline-none border border-gray-400 focus:border-primary rounded"
                  />
                  <ErrorMessage name="flat" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="premiseName" className="text-sm font-medium">
                    Premise Name
                  </label>
                  <Field
                    type="text"
                    name="premiseName"
                    id="premiseName"
                    className="h-12 px-3 mt-1 outline-none border border-gray-400 focus:border-primary rounded"
                  />
                  <ErrorMessage name="premiseName" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="road" className="text-sm font-medium">
                    Road / Street
                  </label>
                  <Field
                    type="text"
                    name="road"
                    id="road"
                    className="h-12 px-3 mt-1 outline-none border border-gray-400 focus:border-primary rounded"
                  />
                  <ErrorMessage name="road" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="pincode" className="text-sm font-medium">
                    Pincode
                  </label>
                  <Field
                    type="number"
                    name="pincode"
                    id="pincode"
                    className="h-12 px-3 mt-1 outline-none border border-gray-400 focus:border-primary rounded"
                  />
                  <ErrorMessage name="pincode" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="area" className="text-sm font-medium">
                    Area / Locality
                  </label>
                  <Field
                    type="text"
                    name="area"
                    id="area"
                    className="h-12 px-3 mt-1 outline-none border border-gray-400 focus:border-primary rounded"
                  />
                  <ErrorMessage name="area" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="city" className="text-sm font-medium">
                    Town / City
                  </label>
                  <Field
                    type="text"
                    name="city"
                    id="city"
                    className="h-12 px-3 mt-1 outline-none border border-gray-400 focus:border-primary rounded"
                  />
                  <ErrorMessage name="city" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="state" className="text-sm font-medium">
                    State
                  </label>
                  <Field
                    as="select"
                    name="state"
                    id="state"
                    className="h-12 px-3 mt-1 outline-none border border-gray-400 focus:border-primary rounded"
                  >
                    <option value="">--Select--</option>
                    {stateList.map((item) => (
                      <option key={item} value={item.toLowerCase()}>
                        {item}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="state" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="country" className="text-sm font-medium">
                    Country
                  </label>
                  <Field
                    type="text"
                    name="country"
                    id="country"
                    className="h-12 px-3 mt-1 outline-none border border-gray-400 focus:border-primary rounded"
                  />
                  <ErrorMessage name="country" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="mobile" className="text-sm font-medium">
                    Mobile
                  </label>
                  <Field
                    type="number"
                    name="mobile"
                    id="mobile"
                    placeholder="Mobile number"
                    className="h-12 px-3 mt-1 outline-none border border-gray-400 focus:border-primary rounded"
                  />
                  <ErrorMessage name="mobile" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="h-12 px-3 mt-1 outline-none border border-gray-400 focus:border-primary rounded"
                  />
                  <ErrorMessage name="email" />
                </div>
              </div>

              {values.typeOfHouseProperty !== "Self occupied" && (
                <>
                  <h3 className="border-b font-semibold mb-5 mt-8">
                    Co-Owners Details
                  </h3>
                  <div>
                    <FieldArray
                      name="coOwnersDetails"
                      render={(arrayHelpers) => {
                        const coOwnersDetails = values.coOwnersDetails;
                        return (
                          <div>
                            {coOwnersDetails &&
                            values.typeOfHouseProperty !== "Self occupied" &&
                            coOwnersDetails.length > 0
                              ? coOwnersDetails.map((owner, index) => (
                                  <div key={index}>
                                    <button
                                      type="button"
                                      className="block font-bold my-3 bg-blue-600 rounded-md px-2 text-white ml-auto"
                                      onClick={() => arrayHelpers.remove(index)}
                                    >
                                      &#10007;
                                    </button>
                                    <div
                                      className="md:grid md:grid-cols-3 flex flex-col gap-5 mb-5"
                                      key={index}
                                    >
                                      <div className="flex flex-col col-span-1">
                                        <Field
                                          placeholder="Name Of Co-owner"
                                          className="h-12 px-3 mt-1 outline-none border border-gray-400 focus:border-primary rounded"
                                          name={`coOwnersDetails.${index}.nameOfCoOwner_`}
                                        />
                                        <ErrorMessage
                                          name={`coOwnersDetails.${index}.nameOfCoOwner_`}
                                        />
                                      </div>

                                      <div className="flex flex-col col-span-1">
                                        <Field
                                          className="h-12 px-3 mt-1 outline-none border border-gray-400 focus:border-primary rounded"
                                          placeholder="Pan Of Co-owner"
                                          name={`coOwnersDetails.${index}.panOfCoOwner_`}
                                        />
                                        <ErrorMessage
                                          name={`coOwnersDetails.${index}.panOfCoOwner_`}
                                        />
                                      </div>

                                      <div className="flex flex-col col-span-1">
                                        <Field
                                          className="h-12 px-3 mt-1 outline-none border border-gray-400 focus:border-primary rounded"
                                          placeholder="Percentage Share"
                                          name={`coOwnersDetails.${index}.percentageShare_`}
                                        />
                                        <ErrorMessage
                                          name={`coOwnersDetails.${index}.percentageShare_`}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                ))
                              : null}
                            <button
                              type="button"
                              className="block font-semibold px-5 text-blue-600 mt-3 ml-auto"
                              onClick={() =>
                                arrayHelpers.push({
                                  nameOfCoOwner_: "",
                                  panOfCoOwner_: "",
                                  percentageShare_: "",
                                })
                              }
                            >
                              Add an Owner
                            </button>
                          </div>
                        );
                      }}
                    />
                  </div>
                </>
              )}
              <button
                type="submit"
                className="block bg-primary px-8 py-3 text-white rounded-md font-semibold text-sm cursor-pointer mt-5 mx-auto"
              >
                Save
              </button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
}

const stateList = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];