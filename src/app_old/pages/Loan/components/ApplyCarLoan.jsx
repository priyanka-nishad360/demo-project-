import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import {
  Form,
  Title,
  FlexContainer,
  Select,
  Button,
  Input,
  ErrorMessage,
  CancelButton,
} from "../Styles/CustomFormStyles";
import { useNavigate } from "react-router-dom";

const InputField = ({
  name,
  control,
  rules,
  type = "text",
  label,
  errors,
  placeholder,
}) => (
  <div className="mb-4 w-full">
    <label className="block font-bold text-gray-700" htmlFor={name}>
      {label}:
    </label>
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field }) => (
        <>
          <Input
            {...field}
            type={type}
            placeholder={placeholder}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
          {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
        </>
      )}
    />
  </div>
);

const ApplyCarLoan = () => {
  const navigate = useNavigate();
  const [loanInfo, setLoanInfo] = useState(
    JSON.parse(localStorage.getItem("loanInfo")) || {}
  );

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      middleName: "",
      Gender: "Male",
      occupation: "Salaried",
    },
  });

  const onSubmit = (data) => {
    data = { ...loanInfo, ...data };
    localStorage.setItem("loanInfo", JSON.stringify(data));
    reset();
    navigate("/loan/apply-bank-details");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Basic Details</Title>
      <FlexContainer>
        <InputField
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          label="Name"
          placeholder="Enter your name"
          errors={errors}
        />
        <InputField
          name="middleName"
          control={control}
          label="Middle Name (Optional)"
          placeholder="Enter your middle name"
          errors={errors}
        />
      </FlexContainer>

      <FlexContainer>
        <InputField
          name="lastName"
          control={control}
          rules={{ required: "Last Name is required" }}
          label="Last Name"
          placeholder="Enter your last name"
          errors={errors}
        />
        <InputField
          name="FatherName"
          control={control}
          rules={{ required: "Father name is required" }}
          label="Father's Name"
          placeholder="Enter your father's name"
          errors={errors}
        />
      </FlexContainer>

      <FlexContainer>
        <InputField
          name="DOB"
          type="date"
          control={control}
          rules={{ required: "Date of birth is required" }}
          label="DOB"
          placeholder="Enter your date of birth"
          errors={errors}
        />
        <div className="w-full">
          <label className="block font-bold text-gray-700" htmlFor="gender">
            Gender
          </label>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Select id="gender" {...field}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            )}
          />
        </div>
      </FlexContainer>

      <FlexContainer>
        <InputField
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          label="Email"
          placeholder="Enter your email"
          errors={errors}
        />
        <InputField
          name="mobile"
          control={control}
          rules={{ required: "Mobile is required" }}
          label="Mobile"
          placeholder="Enter your mobile number"
          type="tel"
          errors={errors}
        />
      </FlexContainer>

      <FlexContainer>
        <InputField
          name="pan"
          type="text"
          control={control}
          rules={{ required: "PAN address is required" }}
          label="PAN"
          placeholder="Enter your PAN Address"
          errors={errors}
        />
        <InputField
          name="aadhaar"
          type="text"
          control={control}
          rules={{ required: "Aadhaar is required" }}
          label="Aadhaar"
          placeholder="Enter your Aadhaar"
          errors={errors}
        />
      </FlexContainer>

      <FlexContainer>
        <InputField
          name="loanAmount"
          type="number"
          control={control}
          rules={{ required: "Loan Amount is required" }}
          label="Loan Amount"
          placeholder="Enter Loan Amount"
          errors={errors}
        />
        <div className="w-full">
          <Controller
            name="occupation"
            control={control}
            rules={{ required: "Occupation is required" }}
            render={({ field }) => (
              <div className="w-full">
                <label
                  className="block font-bold text-gray-700 py-1"
                  htmlFor="occupation"
                >
                  What&apos;s your occupation
                </label>
                <Select id="occupation" {...field}>
                  <option value="Salaried">Salaried</option>
                  <option value="business">Business</option>
                  <option value="others">Others</option>
                </Select>
              </div>
            )}
          />
        </div>
      </FlexContainer>
      <br />

      <Title>Address Details</Title>

      <InputField
        name="Street"
        type="text"
        control={control}
        rules={{ required: "Street address is required" }}
        label="Street Address"
        placeholder="Enter your Street Address"
        errors={errors}
      />
      <FlexContainer>
        <InputField
          name="pincode"
          type="number"
          control={control}
          rules={{ required: "Pincode is required" }}
          label="Pincode"
          placeholder="Enter your pin code"
          errors={errors}
        />
        <InputField
          name="city"
          type="text"
          control={control}
          rules={{ required: "City is required" }}
          label="City"
          placeholder="Enter your city"
          errors={errors}
        />
      </FlexContainer>

      <FlexContainer>
        <InputField
          name="state"
          type="text"
          control={control}
          rules={{ required: "State is required" }}
          label="State"
          placeholder="Enter your state"
          errors={errors}
        />
      </FlexContainer>

      <div className="flex justify-evenly mt-4">
        <CancelButton onClick={() => reset()}>Cancel</CancelButton>
        <Button type="submit">Proceed</Button>
      </div>
    </Form>
  );
};

export default ApplyCarLoan;
