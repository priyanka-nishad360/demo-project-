import GridContainer from "../../../../components/cardItems/GridContainer";

import { Link } from "react-router-dom";

import { Button } from "../../../Loan/Styles/CustomFormStyles";

export default function GSTR_1_Add_Record_Details() {
  const gstr1 = [
    {
      title: "4A, 4B, 6B, 6C-B2B ",
      overview: "invoices",
      link: "/",
    },
    {
      title: "5A-B2C  ",
      overview: "(large invoices)",
      link: "/",
    },
    {
      title: "6A Export ",
      overview: "invoices",
      link: "/",
    },
    {
      title: " 7-B2C ",
      overview: "Others",
      link: "/",
    },
    {
      title: "8A, 8B, 8C, 8D-nil ",
      overview: " related supplies",
      link: "/",
    },
    {
      title: "9B-Credit/Debit notes ",
      overview: " (registered)",
      link: "/",
    },
    {
      title: "9B-Credit/Debit notes ",
      overview: " (un-registered) ",
      link: "/",
    },
    {
      title: "11A(1), 11A(2) - Tax liability ",
      overview: "(Advances Received)",
      link: "/",
    },
    {
      title: "11B(1), 11B(2) - Adjustment of",
      overview: " (advances)",
      link: "/",
    },
    {
      title: " 12 - HSN - wise summary of",
      overview: "outward supplies",
      link: "/",
    },
    {
      title: " Document issued",
      overview: "",
      link: "/",
    },
  ];

  return (
    <>
      {/* <div className=" container 2xl:max-w-7xl mx-auto mt-4 p-4 ">
        <GridContainer>
          {gstr1.map((item, index) => (
            <Link
              to={item.upcoming ? "" : item.linkTo}
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
      </div> */}

      <div className="bg-gray-200">
        <div className="pb-10 p-8 max-w-7xl   mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {gstr1.map((item, index) => (
            <Link
              key={index}
              href={item.linkTo}
              className="flex flex-col items-center py-8 px-3 bg-white hover:shadow-lg hover:shadow-primary shadow-md rounded-lg mx-8 md:mx-0"
            >
              <span className="object-contain h-11 w-11 fill-zinc-600">
                {/* {element.icon} */}
              </span>
              <p className="heading-6  text-center mt-8 "> {item.title}</p>
              <p className="text-sm  text-center mt-1">{item.overview}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
