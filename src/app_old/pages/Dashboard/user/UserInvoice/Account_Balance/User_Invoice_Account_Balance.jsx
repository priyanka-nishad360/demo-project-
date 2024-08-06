import React from "react";
import GridContainer from "../../../../../components/cardItems/GridContainer";
import { Link } from "react-router-dom";
import Section from "../../../../../components/pageLayouts/Section";
import GridItem from "../../../../../components/cardItems/GridItem";
import { Icon } from "@iconify/react";
import ChartGrid from "../../../../../components/cardItems/ChartGrid";
import { Bar, Line } from "react-chartjs-2";

const AccountsDashboardItems = {
  overview_items: [
    {
      linkTo: "",
      icon: "iconoir:hand-cash",
      title: "Total Cash In Hand",
      data: "0",
      cssClass:
        "p-3 mr-4 text-purple-500 bg-purple-100 rounded-full dark:text-purple-100 dark:bg-purple-500",
    },
    {
      linkTo: "",
      icon: "guidance:bank",
      title: "Total Cash In Bank",
      data: "0",
      cssClass:
        "p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-500",
    },
    {
      linkTo: "",
      icon: "foundation:burst-sale",
      title: "Total Sales",
      data: "0",
      cssClass:
        "p-3 mr-4 text-indigo-500 bg-indigo-100 rounded-full dark:text-indigo-100 dark:bg-indigo-500",
    },
    {
      linkTo: "",
      icon: "mdi:cash-return",
      title: "Total Purchases",
      data: "0",
      cssClass:
        "p-3 mr-4 text-pink-500 bg-pink-100 rounded-full dark:text-pink-100 dark:bg-pink-500",
    },
    {
      linkTo: "",
      icon: "game-icons:cash",
      title: "Net Profit/Loss",
      data: "0",
      cssClass:
        "p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500",
    },
  ],
};

const User_Invoice_Account_Balance = () => {
  return (
    <>
      <div className="container mt-3 ">
        <div className="flex place-content-end me-10">
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
      <Section>
        <GridContainer>
          {AccountsDashboardItems?.overview_items.map((el, key) => (
            <GridItem key={key} to={`/dashboard/invoice/${el?.linkTo}`}>
              <div className=" grid justify-center sm:w-1/2 w-1/5">
                <Icon
                  icon={el?.icon}
                  className={`
                                    rounded-xl
                                    sm:h-16 
                                    sm:w-16
                                    sm:p-3
                                    
                                    h-14 
                                    w-14 
                                    p-3
                                    ${el?.cssClass}
                                `}
                />
              </div>
              <div>
                <p
                  className={`
                                    text-lg 
                                    sm:w-full  
                                `}
                >
                  {el.title}
                </p>
                <p className="font-normal">{el.data}</p>
              </div>
            </GridItem>
          ))}
        </GridContainer>
      </Section>
      <ChartGrid className="m-8">
        <div className="rounded-md" style={{ width: "100%" }}>
          <p className="text-xl font-extrabold text-slate-400">Profit/Loss</p>
          <Bar data={profitlossdata} />
        </div>
        <div className="rounded-md" style={{ width: "100%" }}>
          <p className="text-xl font-extrabold text-slate-400">Sale/Purchase</p>
          <Line data={salePurchasedata} />
        </div>
      </ChartGrid>
    </>
  );
};

export default User_Invoice_Account_Balance;
const labels = ["January", "February", "March", "April", "May", "June"];

const profitlossdata = {
  labels: labels,
  datasets: [
    {
      label: " Loss",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 42, 20, 30, 45],
    },
    {
      label: " Profit",
      backgroundColor: "rgba(168, 85 ,247, 0.5)",
      borderColor: "rgb(255, 99, 132)",
      data: [5, 20, 52, 22, 25, 35, 50],
    },
  ],
};

const salePurchasedata = {
  labels: labels,
  datasets: [
    {
      label: " Purchase",
      borderColor: "rgba(53, 162, 235, 0.5)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      data: [0, 10, 5, 42, 20, 30, 45],
    },
    {
      label: " Sale",
      borderColor: "rgba(168, 85 ,247, 0.5)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      data: [5, 20, 52, 22, 25, 35, 50],
    },
  ],
};
