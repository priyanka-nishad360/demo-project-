import { useRouter } from "next/router";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";

const FileInput = ({ name, control, label, rules, errors, accept }) => (
  <div className="mb-4">
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <label className="block font-bold text-gray-700 mb-1" htmlFor={name}>
        {label}:
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={rules}
        render={({ field }) => (
          <>
            <input
              {...field}
              type="file"
              accept={accept}
              className="block px-4 py-2 bg-white rounded focus:outline-none focus:border-blue-500"
            />
          </>
        )}
      />
    </div>
    <div className="flex justify-end px-5">
      {errors[name] && (
        <span className="sm:w-1/2 block text-red-500 mt-1">
          {errors[name].message}
        </span>
      )}
    </div>
  </div>
);

const PersonalLoanDocuments = () => {
  const navigate = useRouter();
  const prevData = JSON.parse(localStorage.getItem("LoanInfo"));
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data = { ...prevData, ...data };
    localStorage.setItem("LoanInfo", JSON.stringify(data));
    navigate.push("/");
    toast("Loan application submitted successfully");
  };

  return (
    <div className="min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-3/4 mt-20 mx-auto  shadow-xl  p-5 rounded bg-white"
      >
        <h1 className="text-center text-2xl font-semibold m-4">
          Upload Your documents
        </h1>
        <FileInput
          name="photo"
          accept={"image/*"}
          control={control}
          label="Passport Size Photo"
          rules={{ required: "Image Card is required" }}
          errors={errors}
        />
        <FileInput
          name="aadhaarCard"
          accept={".pdf"}
          control={control}
          label="Aadhaar Card"
          rules={{ required: "Aadhaar Card is required" }}
          errors={errors}
        />
        <FileInput
          name="panCard"
          accept={"image/* , .pdf"}
          control={control}
          label="Pan Card"
          rules={{ required: "Pan Card is required" }}
          errors={errors}
        />
        <FileInput
          name="bankStatement"
          accept={".pdf"}
          control={control}
          label="Bank Statement: (3-6 months)"
          rules={{ required: "Bank Statement is required" }}
          errors={errors}
        />
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalLoanDocuments;
