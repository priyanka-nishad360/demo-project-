import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { json, useNavigate } from 'react-router-dom';
import {
  Form,
  Title,
  FlexContainer,
  Select,
  Button,
  Input,
  ErrorMessage,
} from '../Styles/CustomFormStyles'; // Make sure to import your styled components
import { useState } from 'react';

const InputField = ({
  name,
  control,
  rules,
  type = 'text',
  label,
  errors,
  placeholder,
}) => (
  <div className="mb-4 w-full">
    <label className="block font-bold text-gray-700 py-1" htmlFor={name}>
      {label}
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
          />
          {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
        </>
      )}
    />
  </div>
);

const LoanBankDetails = () => {
  const [loaninfo, setLoanInfo] = useState(JSON.parse(localStorage.getItem('loanInfo')) || {});
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gender: 'male',
      salaried: 'salery',
    },
  });

  const onSubmit = (data) => {
    console.log('data', data);

    const updateData = {
      ...loaninfo,
      ...data,
    }
    localStorage.setItem('loanInfo', JSON.stringify(updateData));
    let loanType = loaninfo.loanType;
    const type = loanType.split(' ')[0].toLowerCase();
    console.log(updateData)
    console.log(loanType)
    navigate(`/loan/${type}LoanDocuments_upload`);
  };

  return (
      <form className='md:w-2/3 mx-auto mt-20 min-h-screen' onSubmit={handleSubmit(onSubmit)}>
        <Title>Bank Details</Title>
        <FlexContainer>
          <InputField
            name="accountNumber"
            type='number'
            control={control}
            rules={{
              required: 'Account Number is required',
              pattern: {
                value: /^\d{8,12}$/i,
                message: 'Invalid bank account number',
              },
            }}
            label="Account"
            placeholder="Enter your Account Number"
            errors={errors}
          />
          <InputField
            name="accountHolderName"
            control={control}
            rules={{
              required: 'Name is required',
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: 'Invalid name',
              },
            }}
            label="Account Holder Name"
            placeholder="Enter your Account Name"
            errors={errors}
          />
        </FlexContainer>
        <FlexContainer>
          <InputField
            name="IFSC"
            control={control}
            rules={{ required: "IFSC code is required" }}
            label="IFSC"
            placeholder="Enter valid IFSC code"
            errors={errors}
          />
          <div className='w-full'>
            <label className="block font-bold text-gray-700 py-1" htmlFor='bankName'>Bank Name</label>
            <Select id="bankName">
              <option value="SBI">State Bank Of India</option>
              <option value="BAJAJ">Bajaj Finance</option>
              <option value="IDFC">IDFC First Bank</option>
              <option value="AXIS">AXIS Bank</option>
              <option value="PNB">Punjab National Bank</option>
            </Select>
          </div>
        </FlexContainer>
        <div className="flex justify-center mt-10">
          <Button type="submit">Proceed</Button>
        </div>
      </form>
  );
}

export default LoanBankDetails;
