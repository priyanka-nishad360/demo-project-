import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  emailRegex,
  panRegex,
  aadharRegex,
  phoneNumberRegex,
} from "../regexPatterns";

export default function FormComponent({ title, image }) {
  const [success, setSuccess] = useState(false);

  return (
    <div className="mx-auto py-6 max-w-3xl w-full">
      {!success ? (
        <Form title={title} setSuccess={setSuccess} image={image} />
      ) : (
        <SuccessPage success={success} setSuccess={setSuccess} />
      )}
    </div>
  );
}

const Form = ({ title, setSuccess, image }) => {
  const [loading, setloading] = useState(false);

  const handleSubmit = (data) => {
    console.log(data);
    setSuccess(true);
    formik.resetForm({});
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      pan: "",
      aadhar: "",
      mobile: "",
    },
    validationSchema: new Yup.ObjectSchema({
      name: Yup.string()
        .max(20, "Must be less than 20 characters")
        .min(3, "Atleast 3 characters are valid")
        .required("Enter your name"),
      email: Yup.string()
        .required("Enter Your Email")
        .matches(emailRegex, "Invalid email"),
      pan: Yup.string()
        .required("Enter your PAN card number")
        .matches(panRegex, "Invalid PAN card number"),
      aadhar: Yup.string()
        .required("Enter your Aadhar card number")
        .matches(aadharRegex, "Invalid Aadhar card number"),
      mobile: Yup.string()
        .required("Enter your phone number")
        .matches(phoneNumberRegex, "Invalid phone number"),
    }),
    onSubmit: (values) => handleSubmit(values),
  });

  return (
    <>
      <div className="flex flex-col gap-3 items-center justify-center">
        <img src={image} className="max-w-[150px]" alt={title} />
        <h2 className="text-3xl text-slate-900 font-bold">{title}</h2>
      </div>
      <form className="flex flex-col" onSubmit={formik.handleSubmit}>
        <div className="[&>div]:flex [&>div]:gap-6 [&_input]:py-3 [&_label]:mt-2 [&_input]:my-2 [&_input]:indent-3 [&_input]:outline-none [&_input]:rounded-md [&>div]:justify-between">
          <div className="[&>div]:flex [&>div]:w-full [&>div]:flex-col">
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className={`border focus:border-primary border-gray-400 ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-600 focus:border-red-600 text-red-600"
                    : ""
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-600">{formik.errors?.name}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className={`border focus:border-primary border-gray-400 ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-600 focus:border-red-600 text-red-600"
                    : "focus:border-primary border-gray-400"
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600">{formik.errors?.email}</div>
              ) : null}
            </div>
          </div>

          <div className="[&>div]:flex [&>div]:w-full [&>div]:flex-col">
            <div>
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                className={`border focus:border-primary border-gray-400 ${
                  formik.touched.mobile && formik.errors.mobile
                    ? "border-red-600 focus:border-red-600 text-red-600"
                    : ""
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobile}
              />
              {formik.touched.mobile && formik.errors.mobile ? (
                <div className="text-red-600">{formik.errors?.mobile}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="pan">PAN Card</label>
              <input
                type="text"
                name="pan"
                id="pan"
                className={`border focus:border-primary border-gray-400 ${
                  formik.touched?.pan && formik.errors?.pan
                    ? "border-red-600 focus:border-red-600 text-red-600"
                    : ""
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pan}
              />
              {formik.touched?.pan && formik.errors?.pan ? (
                <div className="text-red-600">{formik.errors?.pan}</div>
              ) : null}
            </div>
          </div>

          <div className="[&>div]:flex [&>div]:w-2/4 [&>div]:flex-col">
            <div>
              <label htmlFor="aadhar">Aadhar Card</label>
              <input
                type="text"
                name="aadhar"
                id="aadhar"
                className={`border focus:border-primary border-gray-400 ${
                  formik.touched.aadhar && formik.errors.aadhar
                    ? "border-red-600 focus:border-red-600 text-red-600"
                    : ""
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.aadhar}
              />
              {formik.touched.aadhar && formik.errors.aadhar ? (
                <div className="text-red-600">{formik.errors?.aadhar}</div>
              ) : null}
            </div>
            <div></div>
          </div>
        </div>

        <button
          className="p-3 bg-primary cursor-pointer px-8 rounded-md hover:opacity-90 my-3 text-white mx-auto"
          disabled={loading}
          type="submit"
        >
          {loading ? (
            <span className="flex outline-none w-4 h-4 border-2 border-t-0 border-b-0 rounded-full border-gray-400 animate-spin"></span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </>
  );
};

const SuccessPage = ({ success, setSuccess }) => {
  return (
    <div className="flex flex-col items-center gap-8 mt-6">
      <h2 className="text-4xl font-bold text-green-600">
        Your submission has been successfull
      </h2>
      <span className="text-primary font-semibold">
        Thanks! We have received your submission, And we&apos;ll contact you
        really soon..
      </span>
      <button
        onClick={() => setSuccess(!success)}
        className="bg-primary p-4 text-white rounded-md hover:opacity-95"
      >
        Submit Another
      </button>
    </div>
  );
};
