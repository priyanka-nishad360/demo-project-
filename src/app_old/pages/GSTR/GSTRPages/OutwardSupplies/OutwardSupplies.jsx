import React from "react";
import { Button } from "../../../Loan/Styles/CustomFormStyles";

const OutwardSupplies = () => {
  return (
    <>
      <div class="flex flex-row mt-5 mx-5 ">
        <div class="basis-1/2">Outward Supply</div>
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
          <thead className="text-xs text-neutral-700 uppercase bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-400">
            <tr>
              <th className="px-6 py-3">SN</th>
              <th className="px-6 py-3">Nature</th>
              <th className="px-6 py-3">Rate</th>
              <th className="px-6 py-3">Turn Over</th>
              <th className="px-6 py-3">CGST</th>
              <th className="px-6 py-3">SGST</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>
                <span className="is-small w-100pc">Intra-state supplies</span>
              </th>
              <td>
                <input
                  disabled
                  type="text"
                  className="border "
                  defaultValue={0}
                />
              </td>
              <td>
                <input
                  name="turnOver0"
                  type="text"
                  disabled
                  className="border "
                  defaultValue={0}
                />
              </td>
              <td>
                <input disabled className="border " defaultValue={0} />
              </td>
              <td>
                <input
                  disabled
                  type="text"
                  className="border "
                  defaultValue={0}
                />
              </td>
            </tr>
            <tr>
              <th>2</th>
              <th>
                <span className="is-small w-100pc">Intra-state supplies</span>
              </th>
              <td>
                <input
                  disabled
                  type="text"
                  className="border "
                  defaultValue={0}
                />
              </td>
              <td>
                <input
                  name="turnOver_0"
                  type="text"
                  className="border "
                  defaultValue={0}
                />
              </td>
              <td>
                <span className="total">0</span>
              </td>
              <td>
                <span className="total">0</span>
              </td>
            </tr>
            <tr>
              <th>3</th>
              <th>
                <span className="is-small w-100pc">Intra-state supplies</span>
              </th>
              <td>
                <input
                  disabled
                  type="text"
                  className="border "
                  defaultValue={1}
                />
              </td>
              <td>
                <input
                  name="turnOver_1"
                  type="text"
                  className="border "
                  defaultValue={0}
                />
              </td>
              <td>
                <span className="total">0</span>
              </td>
              <td>
                <span className="total">0</span>
              </td>
            </tr>
            <tr>
              <th>4</th>
              <th>
                <span className="is-small w-100pc">Intra-state supplies</span>
              </th>
              <td>
                <input
                  disabled
                  type="text"
                  className="border "
                  defaultValue={2}
                />
              </td>
              <td>
                <input
                  name="turnOver_2"
                  type="text"
                  className="border "
                  defaultValue={0}
                />
              </td>
              <td>
                <span className="total">0</span>
              </td>
              <td>
                <span className="total">0</span>
              </td>
            </tr>
            <tr>
              <th>5</th>
              <th>
                <span className="is-small w-100pc">Intra-state Supplies</span>
              </th>
              <td>
                <input
                  disabled
                  type="text"
                  className="border "
                  defaultValue={5}
                />
              </td>
              <td>
                <input
                  name="turnOver_5"
                  type="text"
                  className="border "
                  defaultValue={0}
                />
              </td>
              <td>
                <span className="total">0</span>
              </td>
              <td>
                <span className="total">0</span>
              </td>
            </tr>
            <tr>
              <th />
              <th>Total :</th>
              <td />
              <td>
                <span className="total">0</span>
              </td>
              <td>
                <span className="total">0</span>
              </td>
              <td>
                <span className="total">0</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OutwardSupplies;
