import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Parties_Index = () => {
  return (
    <div className="m-5">
      <div class="flex justify-between ">
        <div>
          <h1 className="text-2xl font-bold">Add New Party</h1>
        </div>
        <div>
          <Link to="/dashboard/invoice/party/addparty">
            <button
              type="button"
              class="text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              <Icon
                class="w-6 h-6 me-2 -mx-3"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                icon="pepicons-pop:bank"
              />
              Add Party
            </button>
          </Link>
        </div>
      </div>
      <div className="my-10">
        <h6 className="font-semibold text-xl">All Suppliers</h6>
        <Icon className="w-40 h-24 opacity-5 mx-auto" icon="ph:files-light" />
        <p className="text-center">No Record Found</p>
      </div>
      <div className="my-10">
        <h6 className="font-semibold text-xl">All Customers</h6>
        <Icon className="w-40 h-24 opacity-5 mx-auto" icon="ph:files-light" />
        <p className="text-center">No Record Found</p>
      </div>
    </div>
  );
};

export default Parties_Index;
