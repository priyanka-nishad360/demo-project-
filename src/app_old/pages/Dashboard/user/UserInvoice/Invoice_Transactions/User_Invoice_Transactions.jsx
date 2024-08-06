import React from "react";
import { Link } from "react-router-dom";
import GridContainer from "../../../../../components/cardItems/GridContainer";

const InvoiceTrans = [
  {
    graph: "https://preply.com/wp-content/uploads/2018/08/image2-1.png",
    text: "Receipts Widget",
    link: "/dashboard/invoicetransaction/receiptwidget",
  },
  {
    graph:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMOEBMODxMQDQ0OEBIRDREQFRYNEA8QFRkiFxURExMYHCggGBolGxMTITEhJSktLi4uGB8zOD8sNygtLisBCgoKDg0OGw8PGysdHR0wKy0tKy0tMC0tLSstNy43Ky0rLS0rLS0tLSstNzUtLS0tLS0rLS0tLS0tKy0tLTc3K//AABEIAKABOgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQIDBAUH/8QAOBAAAgECAwQHBgYDAQEBAAAAAAECERIhMXEDBFGxFDJBcpHB0QUiYYGSshMzUmKCoSNC0vBT4f/EABgBAQADAQAAAAAAAAAAAAAAAAABAwQC/8QAHxEBAAEFAAMBAQAAAAAAAAAAAAECAxExMhITQZFR/9oADAMBAAIRAxEAPwD7iDDet4/DtrSk5qOLo8a5KmLwyOXc/af4klFwcK3YOt6pJqri1l7qx4unxA9EFb18cPgxdr4MCwK3a+DF2vgwLArdr4MXa+DAsCt2vgxdr4MCwK3a+DF2vgwLArdr4MXa+DAsCt+vgxdr4MDLe94/DSaVzlK1KtOxvP5GHTpf/NfX/wDhvvGyW0STuVHVNVTTy4fFmPQV+va/++Qd0+P1Tae0ZRi5PZ4RTbpJVoseBvPfoKcoOt0IXyoq0XDXFeJjP2fGSactq0001xTzWR1tRdaqtypKsa1WVHhiEVY+OWXtSCjKTUkou3LrO1Tw+qmPbUT9q7OObdO10wj7l+PyN3sYUo4RoslbgsKcOCS+RC3bZ/8Azh2/6LtVH2dqwDljL2rs1+p4rFRdFWN1dKdvYdsXVVWTxRjLYbNqjhFpZJwqsFRdnA1TS4+DAsCt2vgxdr4MCwK3a+DF+vgwLArdr4MXa+DAsCt2vgxdr4MCwK3a+DF+vgwLArdr4MXa+DAsCt2vgxdr4MCwK3a+DF2vgwLAx3jb2W5e/NRxdtK8OOWRzbr7R/Eko0iro1TUrqrGklgqxpHP4gdkM5a+SLmcJKstfJF7kBIIuQuQEgi5C5AO35ElLlX5HJvG+SU3GNtElnXGpMUzOkVVRG3cDzumz/Z/Y6bP9n9nXrlx7IeiDzumz/Z/ZMN9lVJ2UcknStcR65T7Id0uzXyLFJSWGvkWuRw7SCLkLkBIIuQuQETyejLFJyVHoy1yAkEXIXICQRchcgJKw83zJuRWMl/b5gXBFyFyAkEXIXICSF26+QuRVSWOvkBcEXIXICQRchcgJBFyFyANVzxCilkkjPb7ZQo2m03Sqp7uFav4YdnEw3f2hGcrbZRfbdbRPO10bxoq8AOmGctfJFzOElWWKz8kcfTJtuj2aSlJKqbwTpnd8A6pomp6APP6VP8AVs/pf/Q6VP8AVs/pf/RGXfql6APP6VP9Wz+l/wDRfd95k52ycGnFvBOOKa+L4jKJtTEZdnb8jzd5/MlpHkehcq5rI87eJL8SWKyjyLbe2e5pAIuXFC5cUWqUkLrR78eYuXFEKSujiuvHmB6suzXyLFJSWGKz8i1y4ozNSQRcuKFy4oCQRcuKFy4oCJ5PRlik5KjxWTLXLigJBFy4oXLigJBFy4oXLigJKw83zJuXFFYyXFZvmBcEXLihcuKAkEXLihcuKAkhduvkLlxRVSWOKz8gLgi5cULlxQEgi5cULlxQEgi5cULlxQFdpsoypclK1qUapOklk1wZXZ7vCFHGEItK1OMVGka1oqdlcTU4919ow2tLbqSWDdKVx93B50i2B0wzlr5I86Pb35/cz0ISVZa+SPOi8+/P7mRK619WBFRUhck03X8xdyfOJlU03V/5F3J84hFWpd/b8jzd5/MlpHkejcq/I87eX/klpHkXW9sFzSoIqKlqlJC60e/HmKhP3o9+PMD1JdmvkWKyksNfIm5GZqSCLkLkBIIuQuQETyejE5qKq8EhOSo9GYb8/c/lD7kIRVOImVulw4/0/QdLhx/p+hyVFTrCr2S6+lw4/wBP0HS4cf6foclRUYPZL0NnNSVU6oQ83zMNxfufynzZvGS/t8zmVtM5jKwIuQuQSkEXIXICSF26+QuRCksdfICwIuQuQEgi5C5ASCLkLkBLMdnusIusYxi0qJpY0zoatnNu2/w2lLau5VT7O3DWiboBvBYy18kebHt78/uZ6UM5a+SPNj29+f3MiV1r6tQUAIXFC+6r/Iu5PnEoX3X8xdyfOIRVqXdTH5Hnbyv8ktI8j0e35Hnbz+ZLSPIut7YLmlKCgBapKBdaPfjzAXWj348wPUkstfIz2+aWKweWHA0l2a+Rnt81o/IxXeWynbOnxfixT4vxZIKFiKfF+LIlk8XlxZYrPJ6MidDplk9DHfup/KH3I2lk9DHfup/KH3I2Qz18y5qCgB2zlBQADo3Fe5/KfNm8FzfMw3HqfynzZvF4fN8zmdtFHMLUFDlXtDZvGsqdyfoT0+HGX0T9CfCr+S6w6aChzdPhxl9E/QdPhxl9E/QeFX8kw6aFUs9fIpsd4jOtreFK1Ti8cs18GXXbr5ETExsWoKAEBQUAAUFAABhst0hBpxik0qLN4f8Amzc59jvsJukXVutMGk6NrOlP9X8scgNIRVZYLPyR50Vnl15/cz0oZy18kedHt78/uZErrX0poKaEghcimhpusV+IsupPnEoabr+Yu5PnEIq1LttVclkedvCX4ktI8j0u35Hm7x+ZLSPIut7YLmlKaCmhILVKKaBL3o9+PMkhdaPfjzA9OUVhgs/Iz20VVaPyNZdmvkZ7fNaPyMV3n8bKds7ULUSChYi1ETWD0ZYieT0ZE6IbyiqPBZGO/RVmS60PuRvLJ6GO/dT+UPuRshnr5ly2oWokHbOi1C1EgDo3GKsyXWnzZraqPBdpnuPU/lPmzXsfzOZ20Ucw8jYL3I5dWPI0poU2HUj3Y8jQ1ztaimgpoSCENfZ6V8+5s+cjtUVjgs/I4/Z/Xn3Nnzkdy7dfIou9IlyPaurpYkm0qxby+Y/El+z6X/0V7Zd6XMkxeUr8Qn8SX7Ppf/Q/El+z6X/0QB5SYhfZbRuSTtaaeSpl8zptXBHJsuutGdhbbnMKrkYlDVcHijDY7js4OsIKNK0Swiqttu3KuLx+J0GGx3yE3bFurTwalHJ0o6rB4PDMscLwiqywWfkjzoxWOC68/uZ6UM5a+SPOj29+f3MiV1r6WrghauCJBC5Fq4I03WK/EWC6k+cShpuv5i7k+cQirUuy1VyWR528RX4ksFlHken2/I83efzJaR5F1vbBc0pauCFq4IkFqlFq4IhRV0cF148yxC60e/HmB6corDBZ+RntoqqwWT8jWXZr5Ge3zWj8jFd5/GynbO1cELVwRIKFiLVwRE4qjwWTLETyejInRDeUVR4LIx36KsyXWh9yN5ZPQx37qfyh9yNkM9fMuW1cELVwRIO2dFq4IWrgiQBvuMVZkutPmza1UeC7TPcep/KfNmvY/mcztoo5h5GwirI4Lqx5Glq4IpsOpHux5Ghrna1Fq4IWrgiQQhr7Pir54LqbPnI7VFY4LPyOP2f159zZ85Hcu3XyKLvSJcNqrLBdaXMWrgie2XelzJMLQrauCFq4IsAGyir1gsmddi4I5dl11ozsLrWpVXNhzbHcYQaaTrFUVZN8cXV4vF454nSU/GjdZX36Vp8P/JlitEIqstfJHnRjn35/cz0oZy18kedHt78/uZErrX0tFpIIXItNN1j/AJF3J84lDTdfzF3J84hFWpdlqr8jzt4j/klpHken2/I83efzJaR5F1vbBc0paLSQWqUWkKPvR78eZYhdaPfjzA9OUVhr5Ge2jitH5GsuzXyM9vmtH5GK7z+NlO2dotJBQsRaROOD0ZYieT0ZE6IbyiqPQx36Pufyh9yN5ZPQx37qfyh9yNkM9fMuW0Wkg7Z0Wi0kAb7jH3P5T5s2tVH8zPcep/KfNmvY/mcztoo5h5Gwj7ke7HkaWlNh1I92PI0Nc7WotFpIIQ19nx9+fd2fOR2qKx18jj9n9efc2fOR3Lt18ii70iXDbjLvS5k2jtl3pcyTC0ItFpIAbKPvrRnXajl2XXWjOwutalVc2GM92i53utadjaVeOHbRtGwLFbJbBY9bF/qlw1K9EhwfHrSzfzNwDLnlusEquqSxfvS9TmjPZtxVu0i9p1bnKNVg6549ZZY51pR09E547nBUpHCLTSq2qqlKquNLVThRUCcynokOD+qXqFusU6q5PKt0svH4I3AMyy/AVf8Ab65epV7pBurTbebul6m4CGHQ4cH9UvU59otmprZ2zbk0qqTom03jWXCMn8jvKPYxbuork6p/GjXKT8ScyjEM+hw4P6peo6HDg8MV70s/E3AzJiGL2Cw62f65epL3eP7vql6moISx6NH931S9TkW8bNtpLaScZONIycnWNbnRSqqWvOleyp6JzvcoOtU3VuVLpUq61oq4Vq60zqRiBnuzhtLrbqRk4v328Vg8pOmXbQ26NH931S9S2y2KhW2uLq025KvwTeGfYaDEDGWwVP8AbL9cvUS3aLwdzXxlL1NgSMOiR+P1S9THels9kouSl78rY++1jRvOUksos7TPbbFTpdX3XWNG4tOlM0+DYRiHNuq2e1TcVKidOvXlJ00dGbdEj8fql6l9jsVBUjWnBtyS0q8FoaAxDGO7RWCuS+EpeoWwX7u3/eXqbAJc63KCwSaSy96XqZ7xstns43yuUU4pusnS5pLtyqzsK7XZqatklKLpVPLDEnMjz922my2krYKTpXG5rJtYJyq1hnSh19Dhwf1S9SdlusIOsVb8E2o/TWhsMyMI7rFYq5N0rSUlWmXb8WWWwWPW+uXqaggY9Fj+76peo6LH931S9TYEYhOZeXu+97HaOKje3NtL36ZJP9WOE45VZ3dFj+76pepXZ7lCLTinFrKkpfBUeOK91YPgdAxBmWK3WOfvV70vUn8BcZfXL1NQSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=",
    text: "Payments Widget",
    link: "/dashboard/invoicetransaction/paymentwidget",
  },
  {
    graph:
      "https://image-charts.com/chart.js/2.8.0?bkg=white&c=%7Btype%3A%27line%27%2Cdata%3A%7Blabels%3A%5B%27Jan%27%2C%27Feb%27%2C%27Mar%27%2C%27Apr%27%2C%27May%27%2C%27Jun%27%2C%27Jul%27%2C%27Aug%27%5D%2Cdatasets%3A%5B%7BbackgroundColor%3A%27rgba(255%2C150%2C150%2C0.5)%27%2CborderColor%3A%27rgb(255%2C150%2C150)%27%2Cdata%3A%5B-23%2C64%2C21%2C53%2C-39%2C-30%2C28%2C-10%5D%2Clabel%3A%27Dataset%27%2Cfill%3A%27origin%27%7D%5D%7D%7D",
    text: "Cash Transactions Widget",
    link: "/dashboard/invoicetransaction/cashwidget",
  },
  {
    graph:
      "https://miro.medium.com/v2/resize:fit:793/1*sRlmmFjU2hH0e7n4vqF4QA.png",
    text: "Bank Transactions Widget",
    link: "/dashboard/invoicetransaction/bankwidget",
  },
];

const User_Invoice_Transactions = () => {
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
      <GridContainer className="mx-12 mt-10">
        {InvoiceTrans.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="relative max-w-sm mx-auto mt-5  border border-bg_2/60 hover:border-primary rounded-3xl overflow-hidden shadow "
          >
            <div className="max-w-full h-7 bg-sky-600">
              <p className="text-center text-white mx-5">{item.text}</p>
            </div>
            <div className=" p-4 min-h-50%">
              <img src={item.graph} alt="" />
            </div>
          </Link>
        ))}
      </GridContainer>
    </>
  );
};

export default User_Invoice_Transactions;
