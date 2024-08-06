import axios from "axios";
import { useContext, useEffect, useState } from "react";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import { StoreContext } from "../store/store-context";
import {
  AddCartButton,
  HoveringButton,
  RemoveCartButton,
} from "../styles/globalStyles";
import { useAuth } from "../hooks/useAuth";
import { useForm, Controller } from "react-hook-form";
import { CART_DETAIL } from "../store/actions";
import { useRouter } from "next/router";
import Image from "next/image";
export default function ServicesPage() {
  const navigate = useRouter();
  const Id = navigate?.asPath.split("/").at(-1);
  // const { token } = useAuth();
  const [showAbout, setShowAbout] = useState(true);
  const [alreadyInCart, setAlreadyInCart] = useState(false);
  const [prevCartData, setPrevCartData] = useState([]);
  const [apiRes, setApiRes] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // const { id } = useParams();
  // const [state, dispatch] = useContext(StoreContext);

  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    let formData = new FormData();

    for (const key in data) {
      if (data[key].length > 0) {
        formData.append("file", data[key][0], data[key][0].name);
      }
    }

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/documents/upload`,
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200 && response.data.success) {
        alert(`Documents uploaded successfully: ${response.data.message}`);
      } else {
        alert("Upload failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const servicePlan = {
    id: Id,
    serviceName: apiRes.serviceName,
    description: apiRes.description,
    price: apiRes.price,
    gst: apiRes.gst,
    imgPath: apiRes.imgUrl,
  };

  const addToCartHandler = () => {
    if (!alreadyInCart) {
      const prevData = JSON.parse(localStorage.getItem("cartData")) || [];
      const newCartData = [...prevData, servicePlan];
      localStorage.setItem("cartData", JSON.stringify(newCartData));
      dispatch({ type: CART_DETAIL, payload: newCartData });
      navigate.push("/cart");
      setAlreadyInCart(true);
    }
  };

  const removeFromCartHandler = () => {
    if (alreadyInCart) {
      const prevData = JSON.parse(localStorage.getItem("cartData")) || [];
      const newCartData = prevData.filter((item) => item.id !== Id);
      localStorage.setItem("cartData", JSON.stringify(newCartData));
      dispatch({ type: CART_DETAIL, payload: newCartData });
      setAlreadyInCart(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/services/${Id}`);
        setApiRes(response.data.data);

        const prevData = JSON.parse(localStorage.getItem("cartData")) || [];
        setPrevCartData(prevData);

        const isInCart = prevData.some((item) => item.id === Id);
        setAlreadyInCart(isInCart);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    return () => fetchData();
  }, [Id]);

  return (
    <>
      {isLoading ? (
        <>
          <div className="fixed h-screen w-screen bg-white flex items-center justify-center">
            <Image width={480} height={720}
              src="/loading.svg"
              alt="loading..."
              style={{ width: "100px" }}
            />
          </div>
        </>
      ) : (
        <div className="my-10 mx-2 md:mx-10 lg:mx-20 flex flex-col lg:flex-row gap-5 p-5 text-slate-900">
          <div className="flex flex-col lg:w-4/12 gap-3 mt-4 text-center ">
            <Image width={480} height={720} src={apiRes.imgUrl} alt="ESI" style={{ height: "200px" }} />
            <h3 className="text-2xl font-semibold">{apiRes.serviceName}</h3>
            <div className="text-xl font-semibold">
              <span>{apiRes.price}</span>
              <span className="text-xs"> Incl. GST</span>
            </div>
            <AddCartButton onClick={addToCartHandler} disabled={alreadyInCart}>
              Add To Cart
            </AddCartButton>
            <RemoveCartButton
              onClick={removeFromCartHandler}
              disabled={!alreadyInCart}
            >
              Remove from Cart
            </RemoveCartButton>
          </div>
          <div className="w-full p-5">
            <h3 className="text-2xl font-semibold text-center border-b mx-auto max-w-3xl">
              {apiRes.serviceName}{" "}
              {apiRes.serviceName === "DSC (Digital Signature Certificarion)" &&
                "Registration"}
            </h3>
            <div className="flex flex-col lg:flex-row mt-3 gap-1">
              <HoveringButton
                className="w-full lg:w-1/2 text-base rounded"
                active={showAbout}
                onClick={() => {
                  setShowAbout(true);
                }}
              >
                About
              </HoveringButton>
              <HoveringButton
                className="w-full lg:w-1/2 text-base rounded"
                active={!showAbout}
                onClick={() => {
                  setShowAbout(false);
                }}
              >
                Documents Required
              </HoveringButton>
            </div>
            {showAbout ? (
              <div className="mt-5 text-xl leading-8 p-5">
                <p className="whitespace-pre-wrap text-justify text-base mb-5">
                  {apiRes.description}
                  PF Registration, short for Provident Fund Registration, is a
                  mandatory process for organizations in India that employ a
                  certain minimum number of employees, typically 20 or more. It
                  is governed by the Employees&apos; Provident Fund and
                  Miscellaneous Provisions Act, 1952, and overseen by the
                  Employees&apos; Provident Fund Organization (EPFO), a
                  statutory body under the Ministry of Labour and Employment,
                  Government of India.
                </p>
                <p className="whitespace-pre-wrap text-justify text-base mb-5">
                  Under this scheme, both employees and employers make regular
                  contributions from the employee&apos;s basic salary and
                  dearness allowance (DA) to create a retirement savings fund.
                  This fund provides financial security to employees during
                  their retirement years and offers various benefits, including
                  lump-sum withdrawals, pension, and financial assistance in
                  emergencies.
                </p>
                <p className="whitespace-pre-wrap text-justify text-base mb-5">
                  The PF Registration process is crucial for both employers and
                  employees, ensuring compliance with government regulations and
                  providing retirement benefits to the workforce. Employers are
                  required to deposit contributions regularly and maintain
                  accurate records of transactions. The EPFO has also introduced
                  online services to simplify the registration and management of
                  PF accounts.
                </p>
              </div>
            ) : (
              <div className="mt-5 text-base leading-8 lg:ml-5 ">
                <h4 className="text-center font-medium mb-5 text-base sm:text-2xl">
                  Documents required for registration
                </h4>

                <form
                  className="flex flex-col gap-5"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {apiRes.documents.map((field, index) => (
                    <div
                      key={index}
                      className="flex justify-between flex-wrap gap-2 sm:gap-0"
                    >
                      <label>{field.title}</label>
                      <Controller
                        name={field.title.split(" ")[0]}
                        control={control}
                        defaultValue={[]}
                        render={({ field }) => (
                          <input
                            type="file"
                            accept={field.accept || ".pdf, .jpg, .jpeg, .png"}
                            onChange={(e) => {
                              const { name, files } = e.target;
                              field.onChange([...files]);
                            }}
                          />
                        )}
                      />
                    </div>
                  ))}
                  <HoveringButton className="mt-5" type="submit">
                    Upload Documents
                  </HoveringButton>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

//
