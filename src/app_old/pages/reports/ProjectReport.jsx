import PageContainer from "../../components/pageLayouts/PageContainer";
import { H1, H2, H3 } from "../../components/pageLayouts/Headings";
import Section from "../../components/pageLayouts/Section";

import {
  InputBox,
  TextArea,
  Option,
  LabelBox,
  MultipleInputBox,
  Heading,
  Button,
  MainHeading,
} from "../../styles/projectReportStyles";
import { useContext, useState } from "react";
import { GrAdd } from "react-icons/gr";
import { useForm } from "react-hook-form";
import { StoreContext } from "../../store/store-context";
import { PDF_DOC_REPORT } from "../../store/actions";
import { useNavigate } from "react-router-dom";
import { Intro } from "../../helper/projectReportIntros";
import { AiFillDelete } from "react-icons/ai";
import uuid from "react-uuid";

import Label from "../../components/form/Label";
import { BTN } from "../../components/form/BTN";
import { Icon } from "@iconify/react";

export default function ProjectReport() {
  const [rented, setRented] = useState(false);
  const [owner, setOwner] = useState(false);
  const [pnmList, setPnmList] = useState([]);
  const [loan, setLoan] = useState(false);
  const [intro, setIntro] = useState();
  const [businessName, setBusinessName] = useState("");
  const { handleSubmit, register, setValue, getValues } = useForm();
  const [_, dispatch] = useContext(StoreContext);
  const navigate = useNavigate();

  const addPlantMachineryHandler = () => {
    setPnmList((prev) => [...prev, { id: uuid() }]);
  };
  const deleteHandler = (id) => {
    const filterList = pnmList.filter((item) => item.id !== id);
    setPnmList(filterList);
  };

  const pdfHandler = (values) => {
    try {
      dispatch({
        type: PDF_DOC_REPORT,
        payload: {
          intro,
          businessName,
          pnmList,
          owner,
          rented,
          loan,
          data: { ...values },
        },
      });
      navigate("/pdfViewer-report");
      console.log(_.pdfDocReport);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmitting = () => {
    const values = getValues();
    pdfHandler(values);
  };

  const nameChangeHandler = (e) => {
    setBusinessName(e.target.value);
    const filterIntro = Intro.filter((item) => item.name == e.target.value);
    setIntro(filterIntro[0].intro);
  };

  return (
    <>
      <H2 className="max-w-3xl mx-auto">Projects</H2>
      <H1 className="justify-center">Project Report</H1>
      <Section>
        <form
          onSubmit={handleSubmit(onSubmitting)}
          className=" max-w-4xl px-6 lg:px-12 mx-auto shadow-lg py-4"
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-8 md:gap-4">
            <li className="flex">
              <Label htmlFor="business_name">Business Name</Label>
              <Option>(required)</Option>
            </li>
            {/* <input id='business_name'
								className="input is-small"
								type='text'
								placeholder="Business Name"
						/> */}
            <li>
              <select
                onChange={(e) => nameChangeHandler(e)}
                name="businessName"
                id="business_name"
                className={InputStyles.selectInput}
              >
                <option disabled value>
                  {" "}
                  -- select an option --{" "}
                </option>
                <option value="Flour Mill">Flour Mill</option>
                <option value="Toilet Soap Manufacturing Unit">
                  Toilet Soap Manufacturing Unit
                </option>
                <option value="Tomato sauce Manufacturing Unit">
                  Tomato sauce Manufacturing Unit
                </option>
                <option value="Roasted Rice Flakes">Roasted Rice Flakes</option>
                <option value="Banana Fiber Extraction and weaving">
                  Banana Fiber Extraction and weaving
                </option>
                <option value="Computer Assembling">Computer Assembling</option>
                <option value="Light Engineering(Nuts, Bolts, Washers, Rivets etc.)">
                  Light Engineering(Nuts, Bolts, Washers, Rivets etc.)
                </option>
                <option value="Metal Based Industries: Agricultural Implements, Cutleries& Hand Tools">
                  Metal Based Industries: Agricultural Implements, Cutleries&
                  Hand Tools
                </option>
                <option value="Manufacturing of Paper Products (Paper Cups)">
                  Manufacturing of Paper Products (Paper Cups)
                </option>
                <option value="Curry and Rice Powder">
                  Curry and Rice Powder
                </option>
                <option value="Bakery Products">Bakery Products</option>
                <option value="Steel Furniture">Steel Furniture</option>
                <option value="Desiccated Coconut Powder">
                  Desiccated Coconut Powder
                </option>
                <option value="Foot Wear">Foot Wear</option>
                <option value="Wooden Furniture Manufacturing Unit">
                  Wooden Furniture Manufacturing Unit
                </option>
                <option value="Manufacturing of Paper Napkins">
                  Manufacturing of Paper Napkins
                </option>
                <option value="Pappad Manufacturing">
                  Pappad Manufacturing
                </option>
                <option value="Readymade Garments">Readymade Garments</option>
                <option value="Pickle Unit">Pickle Unit</option>
                <option value="Manufacturing of Palm Plate">
                  Manufacturing of Palm Plate
                </option>
                <option value="Note Book Manufacturing">
                  Note Book Manufacturing
                </option>
                {/* <option value="Dairy Products">Dairy Products</option>
									<option value="Detergent Power and Cakes">Detergent Power and Cakes</option>
									<option value="Sanitary Napkin Manufacturing Project">Sanitary Napkin Manufacturing Project</option>
									<option value="General Engineering Workshop">General Engineering Workshop</option>
									<option value='Rubberised Coir Mattresses'>Rubberised Coir Mattresses</option>
									<option value='Beauty Parlor'>Beauty Parlor</option> */}
              </select>
            </li>
          </ul>
          {/* <InputBox>
							<Label htmlFor="market_potential">Market Potential</Label>
							<TextArea
								className={InputStyles.input}
								id="market_potential"
								placeholder="Tell us about Market Potential of your Business..."
								{...register("market_potential")}
							/>
						</InputBox>
						<InputBox>
							<Label htmlFor="location">Location</Label>
							<TextArea
								className={InputStyles.input}
								id="location"
								placeholder="Tell us about Location of your Business..."
								{...register("location")}
							/>
						</InputBox>
						<InputBox>
							<Label htmlFor="manufacturing_process">Manufacturing Process</Label>
							<TextArea
								className={InputStyles.input}
								id="manufacturing_process"
								placeholder="Tell us about Manufacturing process of your product..."
								{...register("manufacturing_process")}
							/>
						</InputBox> */}
          <section className="my-12">
            <H3 className="justify-center">Land and Building</H3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-8">
              <li>
                <Label htmlFor="land_building">Area of Land and Building</Label>
                <input
                  className={InputStyles.input}
                  id="land_building"
                  placeholder="Area of Land and Building in sq/m"
                  {...register("land_building")}
                />
              </li>
              <li className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-2">
                <Label htmlFor="rented">
                  <input
                    type="radio"
                    id="rented"
                    name="checkOwnership"
                    checked={rented}
                    onChange={() => {
                      setRented(true);
                      setOwner(false);
                    }}
                  />
                  Do you Rent the Land/Building
                </Label>
                <Label htmlFor="ownership">
                  <input
                    type="radio"
                    id="ownership"
                    name="checkOwnership"
                    checked={owner}
                    onChange={() => {
                      setRented(false);
                      setOwner(true);
                    }}
                  />
                  Do you own the Land/Building
                </Label>
              </li>
            </ul>
            {owner && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-8">
                <li>
                  <Label htmlFor="value_of_land">Value of Land/building</Label>
                  <input
                    type="number"
                    className={InputStyles.input}
                    id="value_of_land"
                    placeholder="Value in ₹"
                    {...register("value_of_land")}
                  />
                </li>
                <li>
                  <Label htmlFor="depreciationValue">
                    Depreciation Rate of Building
                  </Label>
                  <input
                    className={InputStyles.input}
                    id="depreciationValue"
                    placeholder="Depreciation Rate of Building in %"
                    {...register("depreciationValue")}
                  />
                </li>
              </ul>
            )}
            {rented && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-8">
                <li>
                  <Label htmlFor="securityDeposit">
                    Value of Security Deposit
                  </Label>
                  <input
                    type="number"
                    className={InputStyles.input}
                    id="securityDeposit"
                    placeholder="Security Deposit in ₹"
                    {...register("securityDeposit")}
                  />
                </li>
                <li>
                  <Label htmlFor="monthlyRent">Monthly Rent</Label>
                  <input
                    type="number"
                    className={InputStyles.input}
                    id="monthlyRent"
                    placeholder="Monthly Rent in ₹"
                    {...register("monthlyRent")}
                  />
                </li>
              </ul>
            )}
            <H3 className="justify-center">Plant and Machinery</H3>
            {pnmList &&
              pnmList.length > 0 &&
              pnmList.map((item, i) => {
                return (
                  <div className="my-8" key={item.id}>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <li>
                        <Label htmlFor="name">Name</Label>
                        <input
                          type="text"
                          className={InputStyles.input}
                          id="name"
                          placeholder="Name"
                          onChange={(e) => (pnmList[i].name = e.target.value)}
                        />
                      </li>
                      <li>
                        <Label htmlFor="price">Price</Label>
                        <input
                          type="number"
                          className={InputStyles.input}
                          id="price"
                          placeholder="Price in ₹"
                          onChange={(e) => (pnmList[i].price = e.target.value)}
                        />
                      </li>
                      <li>
                        <Label htmlFor="rate">Depriciation Rate</Label>
                        <input
                          type="number"
                          className={InputStyles.input}
                          id="rate"
                          placeholder="Deprectiation rate of the Machinery in %"
                          onChange={(e) => (pnmList[i].rate = e.target.value)}
                        />
                      </li>
                    </ul>
                    <div
                      className="grid my-2 justify-center"
                      onClick={() => deleteHandler(item.id)}
                    >
                      <AiFillDelete
                        className="cursor-pointer"
                        size={20}
                        color="grey"
                      />
                    </div>
                  </div>
                );
              })}
            <div>
              <BTN
                type="button"
                onClick={addPlantMachineryHandler}
                className={`${
                  pnmList.length > 5 && "cursor-not-allowed"
                } grid grid-cols-2 gap-4 items-center`}
                disabled={pnmList.length > 5}
              >
                Add <Icon className=" h-6 w-6" icon="material-symbols:add" />
              </BTN>
            </div>
          </section>
          <section className="my-12">
            <H3 className="justify-center">Working Capital</H3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-8">
              <li>
                <Label htmlFor="rawMaterial">Raw Material</Label>
                <input
                  type="number"
                  className={InputStyles.input}
                  id="rawMaterial"
                  placeholder="Raw Material per Month "
                  {...register("rawMaterial")}
                />
              </li>
              <li>
                <Label htmlFor="wages">Wages</Label>
                <input
                  type="number"
                  className={InputStyles.input}
                  id="wages"
                  placeholder="Wages per Month"
                  {...register("wages")}
                />
              </li>
              <li>
                <Label htmlFor="electricity_charges">Electricity Charges</Label>
                <input
                  type="number"
                  className={InputStyles.input}
                  id="electricity_charges"
                  placeholder="Electricity charges per Month"
                  {...register("electricity_charges")}
                />
              </li>
              <li>
                <Label htmlFor="otherCharge">Other Charges</Label>
                <input
                  type="number"
                  className={InputStyles.input}
                  id="otherCharge"
                  placeholder="Other charges per Month"
                  {...register("otherCharge")}
                />
              </li>
            </ul>

            <H3 className="justify-center">Finance</H3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-8">
              <li>
                <Label htmlFor="promoter">Promoter&apos;s Contribution</Label>
                <input
                  type="number"
                  className={InputStyles.input}
                  id="promoter"
                  placeholder="Promoter's Contribution"
                  {...register("promoter")}
                />
              </li>
              <li>
                <input
                  type="checkbox"
                  id="loan"
                  name="checkLoan"
                  onClick={() => setLoan((prev) => !prev)}
                />
                <Label htmlFor="loan">Do you have any Loan</Label>
              </li>
            </ul>
            {loan && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-8">
                <li>
                  <Label htmlFor="amountLoan">Amount Of Loan</Label>
                  <input
                    type="number"
                    className={InputStyles.input}
                    id="amountLoan"
                    placeholder="Total Amount of Loan"
                    {...register("amountLoan")}
                  />
                </li>
                <li>
                  <Label htmlFor="interestRate">Interest rate on Loan</Label>
                  <input
                    type="number"
                    id="interestRate"
                    className={InputStyles.input}
                    placeholder="Interest Rate on Loan yearly in %"
                    {...register("interestRate")}
                  />
                </li>
              </ul>
            )}
          </section>

          <H3 className="justify-center">Turnover per Year</H3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-8">
            <li>
              <Label htmlFor="turnover">Expected Sale Turnover per Year</Label>
              <input
                type="number"
                id="turnover"
                className={InputStyles.input}
                placeholder="Total Turnover in year"
                {...register("turnover")}
              />
            </li>
          </ul>
          <div className="flex sm:justify-center">
            <BTN type="submit">Generate Pdf</BTN>
          </div>
        </form>
      </Section>
    </>
  );
}

const InputStyles = {
  input: `
		appearance-none 
		border
		border-gray-300 
		dark:border-neutral-500 
		rounded 
		w-full
		xl:py-3
		py-2
		px-2

		bg-gray-100
		text-gray-700 
		dark:bg-neutral-700 
		dark:text-neutral-100 

		leading-tight 
		focus:outline-none 
		focus:bg-white 
		focus:border-primary
		dark:focus:border-primary
	`,
  selectInput: `
		bg-neutral-100
		border
		border-neutral-300
		text-neutral-900
		text-sm
		rounded-lg
		focus:ring-blue-500
		focus:border-blue-500
		block
		w-full
		p-2.5
		dark:bg-neutral-700
		dark:border-neutral-600
		dark:placeholder-neutral-400
		dark:text-white
		dark:focus:ring-blue-500
		dark:focus:border-blue-500
	`,
};
