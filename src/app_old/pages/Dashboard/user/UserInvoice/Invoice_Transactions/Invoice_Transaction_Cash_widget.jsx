import React from "react";
import GridContainer from "../../../../../components/cardItems/GridContainer";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const TransRData = [
  {
    upcoming: false,
    title: "Total Cash In Today",
    overview: "3520",
    time: "10% + since yesterday ",
    // linkTo: "/dashboard/easy-investment/life-insurance/bajaj",
    iconName: "tdesign:money",
  },
  {
    upcoming: false,
    title: "Total Cash Out Today",
    overview: "350",
    time: "-2% since last quarter",
    // linkTo: "/dashboard/easy-investment/life-insurance/bajaj",
    iconName: "tdesign:money",
  },
  {
    upcoming: false,
    title: "View All Cash Transactions",
    overview: "₹ 103,430",
    time: "+20% since last month",
    // linkTo: "/dashboard/easy-investment/life-insurance/bajaj",
    iconName: "tdesign:money",
  },
];

const Invoice_Transaction_Cash_widget = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-between mt-2 mx-4">
          <div>
            <button className="bg-primary h-8 w-24 rounded border text-white">
              Home
            </button>
            <button className="bg-primary h-8 w-24 rounded border text-white">
              Transaction
            </button>
            <button className="bg-primary h-8 w-24 rounded border text-white">
              Report
            </button>
            <button className="bg-primary h-8 w-24 rounded border text-white">
              Setting
            </button>
          </div>
          <div className="flex">
            <h6 className="font-semibold mt-1 me-1">Date :</h6>

            <input
              type="date"
              className="border border-slate-300 rounded h-8 w-40 p-2"
              name=""
              id=""
            />
            <h6 className="mx-5">to</h6>
            <input
              type="date"
              className="border border-slate-300 rounded h-8 w-40 p-2"
              name=""
              id=""
            />
          </div>
        </div>
      </div>

      <div className=" container 2xl:max-w-7xl mx-auto mt-4 p-4">
        <GridContainer>
          {TransRData.map((item, index) => (
            <Link
              to={item.upcoming ? "" : item.linkTo}
              key={index}
              className={`${
                item.upcoming ? "cursor-default" : ""
              } relative max-w-full mx-auto  border border-bg_2/60 hover:border-primary rounded-3xl overflow-hidden shadow p-4 `}
            >
              {item.upcoming ? (
                <span className=" px-2   rounded-xl absolute top-1 right-1 text-neutral-100 bg-primary">
                  UpComing
                </span>
              ) : (
                ""
              )}
              <div className="flex flex-row">
                <div className=" basis-9/12">
                  <div>
                    <h5 className=" text-xl font-bold tracking-tight text-primary">
                      {item.title}
                    </h5>
                  </div>
                  <h2 className=" font-normal text-xl  text-txt/70">
                    {item.overview}
                  </h2>
                  <p className=" font-normal text-txt/70">{item.time}</p>
                </div>
                <div className={` basis-1/4  grid place-content-center  `}>
                  <span>
                    <Icon
                      icon={item.iconName}
                      className="w-8 h-8 text-2xl ml-1 mr-2  bg-primary text-white rounded-2xl p-1"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </GridContainer>
        <div className="flex absolute end-0  bottom-0">
          <button className="bg-primary h-8 w-24 rounded border text-white">
            Copyright Information
          </button>
          <button className="bg-primary h-8 w-24 rounded border text-white">
            Contact Information
          </button>
          <button className="bg-primary h-8 w-24 rounded border text-white">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Invoice_Transaction_Cash_widget;
