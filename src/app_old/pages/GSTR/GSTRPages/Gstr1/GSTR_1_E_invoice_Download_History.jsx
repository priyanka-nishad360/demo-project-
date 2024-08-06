import Link from "next/link";
import React from "react";
import { Button } from "../../../Loan/Styles/CustomFormStyles";
import GridContainer from "../../../../components/cardItems/GridContainer";

const GSTR_1_E_invoice_Download_History = () => {
  return (
    <div className=" container 2xl:max-w-7xl mx-auto mt-4 p-4">
      <GridContainer>
        {gstr1.map((item, index) => (
          <Link
            href={item.upcoming ? "" : item.linkTo}
            key={index}
            className={`${
              item.upcoming ? "cursor-default" : ""
            } relative max-w-sm mx-auto  border border-bg_2/60 hover:border-primary rounded-3xl overflow-hidden shadow p-4 `}
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
                    Available for download
                  </h5>
                </div>
                <h2 className=" font-normal text-xl  text-txt/70">invoices</h2>
                <Link to="/">
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
  );
};

export default GSTR_1_E_invoice_Download_History;
