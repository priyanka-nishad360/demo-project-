import { Suspense, useContext, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { ITR_TYPE } from "../store/actions";
import { StoreContext } from "../store/store-context";
import { SideBar } from "../styles/sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsArrowLeftCircleFill } from "react-icons/bs";

function LoadingScreen() {
  return (
    <div className="fixed h-screen w-screen bg-white flex items-center justify-center">
      Loading...
    </div>
  );
}

export default function ITRLayout() {
  const [state, dispatch] = useContext(StoreContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  let location = useLocation();
  const navigate = useNavigate();

  const form_type = state.itr_type.form_type;

  const handleFormChange = async (value) => {
    dispatch({
      type: ITR_TYPE,
      payload: {
        form_type: value,
      },
    });
    value === "without-form-16"
      ? navigate(menu[1].link)
      : navigate(menu[0].link);
  };

  const handleToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
    return;
  };

  return (
    <div className="flex">
      <div className="flex relative bg-zinc-100 flex-col">
        <button className="z-10 md:px-6 px-2  pt-8" onClick={handleToggle}>
          {isDrawerOpen ? <BsArrowLeftCircleFill size={30} color="rgb(0, 85, 212)" /> :<GiHamburgerMenu size={30} color="rgb(0, 85, 212)" />}
        </button>
        <SideBar isOpen={isDrawerOpen}>
          <div className="flex w-full flex-col py-2 md:pt-12 pt-16">
            <select
              onChange={(e) => handleFormChange(e.target.value)}
              className="pl-10 font-semibold mx-2 py-3 rounded-md mb-3"
              name="itr1"
              value={form_type}
              id="itr1"
            >
              <option value="without-form-16">Without Form 16</option>
              <option value="form-16">Form 16</option>
            </select>
            <ul className="min-w-fit">
              {menu.map((items) => (
                <Link
                  key={items.label}
                  to={items.link}
                  className={`block ${
                    form_type === "form-16" && items.label === "Income Sources"
                      ? "hidden"
                      : ""
                  } ${
                    form_type === "without-form-16" && items.label === "Form 16"
                      ? "hidden"
                      : ""
                  }  ${
                    form_type === "without-form-16" &&
                    items.label === "Import Form 16"
                      ? "hidden"
                      : ""
                  } font-semibold p-3 border-l-8 hover:bg-zinc-200 pl-10 cursor-pointer ${
                    location.pathname === items.link
                      ? "bg-zinc-200 border-l-8 border-l-primary"
                      : "border-l-zinc-100"
                  }`}
                >
                  {items.label}
                </Link>
              ))}
            </ul>
          </div>
        </SideBar>
      </div>
      <section className="w-full py-10">
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
}

const menu = [
  {
    link: "/itr-filling/upload-form-16",
    label: "Import Form 16",
  },
  {
    link: "/itr-filling/personal-info",
    label: "Personal Information",
  },
  {
    link: "/itr-filling/form-16",
    label: "Form 16",
  },
  {
    link: "/itr-filling/income-sources",
    label: "Income Sources",
  },
  {
    link: "/itr-filling/deductions",
    label: "Deductions",
  },
  {
    link: "/itr-filling/tax-payable",
    label: "Tax Payable",
  },
  {
    link: "/itr-filling/taxes-paid",
    label: "Taxes Paid",
  },
  {
    link: "/itr-filling/taxes-filling",
    label: "Taxes Filing",
  },
];