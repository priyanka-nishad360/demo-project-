import React from "react";
import GridContainer from "../../../../components/cardItems/GridContainer";
import Link from "next/link";
import { Button } from "../../../Loan/Styles/CustomFormStyles";

const GSTR_1_Amend_record_details = () => {
  return (
    <>
      <div className=" container 2xl:max-w-7xl mx-auto mt-4 p-4 ">
        <GridContainer>
          {gstr1.map((item, index) => (
            <Link
              href={item.upcoming ? "" : item.linkTo}
              key={index}
              className={`${
                item.upcoming ? "cursor-default" : ""
              } relative min-w-full mx-auto  border border-bg_2/60 hover:border-primary rounded-3xl overflow-hidden shadow p-4 `}
            >
              {item.upcoming ? (
                <span className=" px-2   rounded-xl absolute top-1 right-1 text-neutral-100 bg-primary">
                  UpComing
                </span>
              ) : (
                ""
              )}
              <div className="">
                <div>
                  <div>
                    <h5 className=" text-xl font-bold tracking-tight text-primary">
                      {item.title}
                    </h5>
                  </div>
                  <h2 className=" font-normal text-xl  text-txt/70">
                    {item.overview}
                  </h2>
                  <Link to={item.link}>
                    {" "}
                    <Button className=" font-normal text-txt/70">
                      Details Hare
                    </Button>{" "}
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </GridContainer>
      </div>
    </>
  );
};

export default GSTR_1_Amend_record_details;

const gstr1 = [
  {
    title: "9A - Amended B2B  ",
    overview: "invoices",
    link: "/",
  },
  {
    title: "9A - Amended B2C ",
    overview: "(large invoices)",
    link: "/",
  },
  {
    title: "9A - Amended exports",
    overview: "invoices",
    link: "/",
  },
  {
    title: " 9A - Amended Credit/Debit notes",
    overview: "(Registered)",
    link: "/",
  },
  {
    title: "9A - Amended Credit/Debit notes ",
    overview: " (Unregistered)",
    link: "/",
  },
  {
    title: "10 - Amended B2C",
    overview: "  (others))",
    link: "/",
  },
  {
    title: "11A - Amended Tax Liability",
    overview: " (advances received) ",
    link: "/",
  },
  {
    title: "11A - Amended of adjustment of",
    overview: " (advances received) ",
    link: "/",
  },
];
