function Invoice_Details(props) {
  const { watch } = props;
  return (
    <div>
      <div className="bg-blue-400 text-neutral-50 py-2 flex justify-center items-end uppercase">
        <h1 className="text-3xl font-semibold">{watch('invoiceTitle')}</h1>
      </div>
      <div className="text-sm border-y-4 p-2 border-4 mt-2">
        <div className="text-sm  p-2 divide-y-2 mt-2">
          <div className="flex justify-between">
            <div>Invoice No.: </div>
            <span className="font-medium">{watch('invoiceNumber')}</span>
          </div>
          <div className="flex justify-between">
            <div>Invoice Date: </div>
            <span className="font-medium">{watch('invoiceData')}</span>
          </div>
          <div className="flex justify-between">
            <div>Due Date: </div>
            <span className="font-medium">{watch('dueDate')}</span>
          </div>
          <div className="flex justify-between">
            <div>Mode of Payment: </div>
            <span className="font-medium">{watch('modeOfPayment')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function DetailsFrom_Inputs(props) {
  const { watch } = props;
  return (
    <div>
      <div className="flex justify-between flex-wrap">
        <div className=" flex-1 bg-blue-400 text-neutral-50">From:</div>
        {/* <div>{watch("bName_DetailsFrom")}</div> */}
      </div>
      <div className="[&>div]:flex [&>div]:justify-between [&>div] p-2 text-sm divide-y-2">
        <div>
          Business Name:
          <div>{watch('bName_DetailsFrom')}</div>
        </div>
        <div>
          GSTIN:
          <div>{watch('GSTIN_DetailsFrom')}</div>
        </div>
        <div>
          Pan:
          <div>{watch('pan_DetailsFrom')}</div>
        </div>
        <div>
          Address:
          <div> {watch('Address_DetailsFrom')}</div>
        </div>
        <div>
          Phone:
          <div>{watch('phone_DetailsFrom')}</div>
        </div>
        <div>
          Email:
          <div>{watch('email_DetailsFrom')}</div>
        </div>
      </div>
    </div>
  );
}
function DetailsTo_Inputs(props) {
  const { watch } = props;
  // console.log(to)
  return (
    <div className=" divide-y-2">
      <div className="flex justify-between flex-wrap">
        <div className=" flex-1 bg-blue-400 text-neutral-50">To:</div>
        {/* <div>{watch("businessName")}</div> */}
      </div>
      <div className="[&>div]:flex [&>div]:justify-between [&>div] p-2 text-sm divide-y-2">
        <div>
          Business Name:
          <div>{watch('bName_DetailsTo')}</div>
        </div>
        <div>
          GSTIN:
          <div>{watch('GSTIN_DetailsTo')}</div>
        </div>
        <div>
          Pan:
          <div>{watch('pan_DetailsTo')}</div>
        </div>
        <div>
          Address:
          <div>{watch('Address_DetailsTo')}</div>
        </div>
        <div>
          Phone:
          <div>{watch('phone_DetailsTo')}</div>
        </div>
        <div>
          Email:
          <div>{watch('email_DetailsTo')}</div>
        </div>
      </div>
    </div>
  );
}
function Items_Details(props) {
  const { invoiceItems } = props;
  return (
    <div className="p-2 min-h-60 overflow-x-scroll">
      <div className="mt-2 text-xl font-semibold">Items</div>
      <table>
        <thead>
          <tr className="[&>th]:border-x text-sm bg-blue-400 text-neutral-50 p-8">
            <th>Item Name</th>
            <th>HSN Code</th>
            <th>Purchase Price</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Opening Stock</th>
            <th>Closing Stock</th>
          </tr>
        </thead>
        <tbody>
          {invoiceItems?.map((item, index) => (
            <tr
              className="  border-y [&>td]:border-x [&>td]:px-2 text-xs"
              key={item.id}
            >
              <td>{item.item.itemName}</td>
              <td>{item.item.hsnCode}</td>
              <td>{item.item.purchasePrice}</td>
              <td>{item.quantity}</td>
              <td>{item.item.price}</td>
              <td>{item.discount}</td>
              <td>{item.item.openingStock}</td>
              <td>{item.item.closingStock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Other_Details({ watch }) {
  return (
    <div>
      <div className="p-2 grid gap-2 md:grid-cols-2 my-2 divide-y-2 md:divide-y-0">
        <div>
          <div className="bg-blue-400 text-neutral-50">Details: </div>
          {watch('details')}
        </div>
        <div>
          <div className="bg-blue-400 text-neutral-50">Extra Details: </div>
          {watch('extraDetails')}
        </div>
      </div>
      <div>
        <p>{watch('declaration')}</p>
        <div>{watch('regards')}</div>
      </div>
    </div>
  );
}
export default function InvoiceTemplate_4(props) {
  const { respInvoice, watch } = props;
  return (
    <div className="bg-neutral-50 p-2 max-w-7xl">
      <div className=" space-y-2 p-2 border-4 border-neutral-900/90">
        <Invoice_Details watch={watch} />
        <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] border-y-4 p-2 divide-x-2 border-4">
          <DetailsFrom_Inputs watch={watch} />
          <DetailsTo_Inputs watch={watch} />
        </div>
        <Items_Details invoiceItems={respInvoice.invoiceItems} />
        <Other_Details watch={watch} />
      </div>
    </div>
  );
}
