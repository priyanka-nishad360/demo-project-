import React from "react";
import { Button } from "../../../Loan/Styles/CustomFormStyles";

const InwardSupplies = () => {
  return (
    <>
      <div class="flex flex-row mt-5 ">
        <div class="basis-1/2">Inward Supply</div>
        <div class="basis-1/4 ">
          <button
            className="text-white
				bg-primary  
				hover:bg-blue-500
				font-medium
				rounded-lg
				text-sm
				p-2
				mb-2
                right-2

				dark:bg-blue-600
				dark:hover:bg-blue-700
				
				active:bg-slate-200
				dark:active:bg-primary_light 

				scale-95
				hover:scale-100
				transition-all"
          >
            Display Form
          </button>
        </div>
        <div class="basis-1/4">
          <span>Period: </span>
          <select name="" id="" className="border shadow p-1">
            <option>Monthly</option>
            <option>Quaterly</option>
            <option>Yearly</option>
          </select>
        </div>
      </div>
      <div className="my-4 max-w-6xl mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-400">
          <thead className="text-xs text-neutral-700 uppercase bg-slate-300 dark:bg-neutral-700 dark:text-neutral-400">
            <tr>
              <th className="px-6 py-3"> Inward Supplies Details</th>
              <th className="px-6 py-3">IGST</th>
              <th className="px-6 py-3">CGST</th>
              <th className="px-6 py-3">SGST</th>
              <th className="px-6 py-3">CESS</th>
              <th className="px-6 py-3">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <th>
                <a href="/gst/taxable-supplies">
                  <Button className="button-primary min-w-full">
                    Taxable Supplies
                  </Button>
                </a>
              </th>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
            </tr>
            <tr className="bg-white">
              <th>
                <a href="/gst/taxable-supplies">
                  <Button className="button-primary min-w-full">
                    Non-Taxable Supplies
                  </Button>
                </a>
              </th>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
            </tr>
            <tr className="bg-white">
              <th>
                <a href="/gst/taxable-supplies">
                  <Button className="button-primary min-w-full">
                    Debit/Credit Notes
                  </Button>
                </a>
              </th>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
            </tr>
            <tr className="bg-white">
              <th>
                <a href="/gst/taxable-supplies">
                  <Button className="button-primary min-w-full">
                    ISD/TDS/TCS Credits
                  </Button>
                </a>
              </th>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
            </tr>
            <tr className="bg-white">
              <th>
                <a href="/gst/taxable-supplies">
                  <Button className="button-primary min-w-full">
                    HSN Wise Inward Summary
                  </Button>
                </a>
              </th>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
            </tr>
            <tr>
              <th>Total inward and ITC (1 + 2 + 3 + 4):</th>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Provisional Input Tax Credit Balance</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Ledger Balances</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table className="w-full text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-400">
          <thead className="text-xs text-neutral-700 uppercase bg-slate-300 dark:bg-neutral-700 dark:text-neutral-400">
            <tr>
              <th className="px-6 py-3">Inward Supplies Details</th>
              <th className="px-6 py-3">Supply Values</th>
              <th className="px-6 py-3">IGST</th>
              <th className="px-6 py-3">CGST</th>
              <th className="px-6 py-3">SGST</th>
              <th className="px-6 py-3">CESS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <th>
                <a href="/gst/taxable-supplies">
                  <Button className="button-primary min-w-full">
                    Inward Attract Reverse Charge
                  </Button>
                </a>
              </th>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
            </tr>
            <tr className="bg-white">
              <th>
                <a href="/gst/taxable-supplies">
                  <Button className="button-primary min-w-full">
                    Advances Paid
                  </Button>
                </a>
              </th>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
            </tr>
            <tr className="bg-white">
              <th>
                <a href="/gst/taxable-supplies">
                  <Button className="button-primary min-w-full">
                    Advances Adjusted
                  </Button>
                </a>
              </th>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
            </tr>
            <tr className="bg-white">
              <th>
                <a href="/gst/taxable-supplies">
                  <Button className="button-primary min-w-full">
                    Reversal of Credit
                  </Button>
                </a>
              </th>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
            </tr>
            <tr className="bg-white">
              <th>
                <a href="/gst/taxable-supplies">
                  <Button className="button-primary min-w-full">
                    Mismatch Adjustments
                  </Button>
                </a>
              </th>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
              <td>
                <input type="text" className="border " />
              </td>
            </tr>
            <tr>
              <th>Total Liability on Inward (a + b + c + d + e):</th>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InwardSupplies;
