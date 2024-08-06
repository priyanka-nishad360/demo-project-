import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const DashboardItemsData = {
  sidebardata: [
    {
      access: ["superAdmin", "admin", "normal"],
      upcoming: false,
      title: "Dashboard",
      linkTo: "/dashboard",
      iconName: "material-symbols:dashboard",
      subMenu: false,
    },
    {
      access: ["superAdmin", "admin", "normal"],
      upcoming: false,
      title: "Easy GST Return",
      linkTo: "/dashboard/gstr",
      iconName: "carbon:finance",
      subMenu: false,
    },
    {
      access: ["superAdmin", "admin", "normal"],
      upcoming: false,
      title: "ITR",
      iconName: "fa6-solid:percent",
      subMenu: true,
      subMenuItems: [
        {
          upcoming: false,
          linkTo: "/itr-filling/upload-form-16",
          title: "Upload Form-16",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "/",
          title: "File Manually",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "/",
          title: "Challan Entry",
          iconName: "lets-icons:subttasks-alt-fill",
        },
      ],
    },
    {
      access: ["superAdmin", "admin", "normal"],
      upcoming: false,
      title: "Easy Investment",
      linkTo: "easy-investment",
      iconName: "mdi:finance",
      subMenu: true,
      subMenuItems: [
        {
          upcoming: false,
          linkTo: "/easy-investment/insurance",
          title: "Insurance",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "/easy-investment/mutual-fund",
          title: "Mutual Fund",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "/easy-investment/sip",
          title: "SIP",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "/easy-investment/sells-of-shares",
          title: "Sells of Share",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "/easy-investment/purchases-of-shares",
          title: "Purchase of Share",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "/easy-investment/profit",
          title: "Profit",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "/easy-investment/loss",
          title: "Loss",
          iconName: "lets-icons:subttasks-alt-fill",
        },
      ],
    },
    {
      access: ["superAdmin", "admin", "normal"],
      upcoming: false,
      title: "Invoice",
      iconName: "mdi:invoice-edit-outline",
      subMenu: true,
      subMenuItems: [
        {
          title: "Invoice",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "dashboard/invoice",
        },
        {
          title: "Parties",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/invoice/addparty",
        },
        {
          title: "Items",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/invoice/createitem",
        },
        {
          title: "Purchase",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/invoice/purchase",
        },
        {
          title: "Sales",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/invoice/sales",
        },
      ],
    },
    {
      access: ["superAdmin", "admin", "normal"],
      upcoming: false,
      title: "Finance",
      iconName: "mingcute:currency-rupee-fill",
      subMenu: true,
      subMenuItems: [
        {
          title: "Loan",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/finance/loan",
        },
        {
          title: "Payment",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/finance/payment",
        },
        {
          title: "Working Capital",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/finance/working-capital",
        },
      ],
    },
    {
      access: ["superAdmin", "admin", "normal"],
      upcoming: false,
      title: "Transactions",
      iconName: "clarity:two-way-arrows-line",
      linkTo: "/dashboard/",
      subMenu: false,
    },
    {
      access: ["superAdmin", "admin", "normal"],
      upcoming: false,
      title: "Reports",
      iconName: "tabler:report",
      subMenu: true,
      subMenuItems: [
        {
          title: "Project Report",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "dashboard/reports/project-report",
        },
      ],
    },
    {
      access: ["superAdmin", "admin", "normal"],
      upcoming: false,
      title: "Bill Payment",
      iconName: "mingcute:paper-fill",
      subMenu: true,
      subMenuItems: [
        {
          title: "Electricity Bill",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "bill-payment/electricity",
        },
        {
          title: "Mobile Recharge",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "bill-payment/mobile-recharge",
        },
        {
          title: "Gas Bill",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "bill-payment/gas-bill",
        },
      ],
    },
    {
      access: ["superAdmin", "admin", "normal"],
      upcoming: false,
      title: "Settings",
      iconName: "material-symbols:settings",
      subMenu: true,
      subMenuItems: [
        {
          title: "User Account",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "dashboard/settings/user-account",
        },
        {
          title: "Business Details",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "dashboard/settings/business-details",
        },
      ],
    },
  ],
  gstrcarddata: [
    {
      access: ["superAdmin", "admin"],
      upcoming: false,
      title: "Dashboard",
      linkTo: "/dashboard",
      iconName: "material-symbols:dashboard",
      subMenu: false,
    },
    {
      access: ["superAdmin", "admin"],
      upcoming: false,
      title: "My Account",
      iconName: "mdi:user",
      subMenu: true,
      subMenuItems: [
        {
          upcoming: false,
          linkTo: "my-account/services",
          title: "Services",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "my-account/orders",
          title: "Orders",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "my-account/payments",
          title: "Payments",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: true,
          linkTo: "my-account/apis",
          title: "APIs",
          iconName: "lets-icons:subttasks-alt-fill",
        },
      ],
    },
    {
      access: ["superAdmin", "admin"],
      upcoming: false,
      title: "Easy GST Return",
      linkTo: "gstr",
      iconName: "carbon:finance",
      subMenu: false,
    },
    {
      access: ["superAdmin", "admin"],
      upcoming: false,
      title: "ITR",
      iconName: "fa6-solid:percent",
      subMenu: true,
      subMenuItems: [
        {
          upcoming: false,
          linkTo: "/itr-filling/upload-form-16",
          title: "Upload Form-16",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "/",
          title: "File Manually",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "/",
          title: "Challan Entry",
          iconName: "lets-icons:subttasks-alt-fill",
        },
      ],
    },
    {
      access: ["superAdmin", "admin"],
      upcoming: false,
      title: "Easy Investment",
      linkTo: "easy-investment",
      iconName: "mdi:finance",
      subMenu: false,
      subMenuItems: [
        {
          upcoming: false,
          linkTo: "/easy-investment/insurance",
          title: "Insurance",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "/easy-investment/mutual-fund",
          title: "Mutual Fund",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "/easy-investment/sip",
          title: "SIP",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "/easy-investment/sells-of-shares",
          title: "Sells of Share",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "/easy-investment/purchases-of-shares",
          title: "Purchase of Share",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "/easy-investment/profit",
          title: "Profit",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "/easy-investment/loss",
          title: "Loss",
          iconName: "lets-icons:subttasks-alt-fill",
        },
      ],
    },
    {
      access: ["superAdmin", "admin"],
      upcoming: false,
      title: "Invoice",
      iconName: "mdi:invoice-edit-outline",
      subMenu: true,
      subMenuItems: [
        {
          title: "Invoice",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "dashboard/invoice",
        },
        {
          title: "Parties",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/invoice/addparty",
        },
        {
          title: "Items",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/invoice/createitem",
        },
        {
          title: "Purchase",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/invoice/purchase",
        },
        {
          title: "Sales",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/invoice/sales",
        },
      ],
    },
    {
      access: ["superAdmin", "admin"],
      upcoming: false,
      title: "Accounts",
      iconName: "fa6-solid:users",
      subMenu: true,
      subMenuItems: [
        {
          title: "Dashboard",
          iconName: "material-symbols:dashboard",
          upcoming: false,
          linkTo: "/dashboard/accounts",
        },
        {
          title: "All Parties",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/dashboard/accounts/all-parties",
        },

        {
          title: "Items",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/dashboard/accounts/items",
        },

        {
          title: "Reports",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/dashboard/accounts/reports",
        },
        {
          title: "Sales",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/dashboard/accounts/sales",
        },
        {
          title: "Purchase",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/dashboard/accounts/purchase",
        },
        {
          title: "Expense",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/dashboard/accounts/expense",
        },
        {
          title: "Cash/Bank",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/dashboard/accounts/cash-bank",
        },
      ],
    },
    {
      access: ["superAdmin", "admin"],
      upcoming: false,
      title: "Finance",
      iconName: "mingcute:currency-rupee-fill",
      subMenu: true,
      subMenuItems: [
        {
          title: "Loan",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/finance/loan",
        },
        {
          title: "Payment",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/finance/payment",
        },
        {
          title: "Working Capital",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/finance/working-capital",
        },
      ],
    },
    {
      access: ["superAdmin", "admin"],
      upcoming: false,
      title: "Transactions",
      iconName: "clarity:two-way-arrows-line",
      linkTo: "transactions",
      subMenu: false,
    },
    {
      access: ["superAdmin", "admin"],
      upcoming: false,
      title: "Reports",
      iconName: "tabler:report",
      subMenu: true,
      subMenuItems: [
        {
          title: "Project Report",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "dashboard/reports/project-report",
        },
      ],
    },
    {
      access: ["superAdmin", "admin"],
      upcoming: false,
      title: "Bill Payment",
      iconName: "mingcute:paper-fill",
      subMenu: true,
      subMenuItems: [
        {
          title: "Electricity Bill",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "bill-payment/electricity",
        },
        {
          title: "Mobile Recharge",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "bill-payment/mobile-recharge",
        },
        {
          title: "Gas Bill",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "bill-payment/gas-bill",
        },
      ],
    },
    {
      access: ["superAdmin", "admin"],
      upcoming: false,
      title: "Settings",
      iconName: "material-symbols:settings",
      subMenu: true,
      subMenuItems: [
        {
          title: "User Account",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "settings/user-account",
        },
        {
          title: "Business Details",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "settings/business-details",
        },
      ],
    },
  ],
};

function InfoDashBoard__index(prop) {
  const { active, index, handleActive } = prop;
  return (
    <li className="whitespace-nowrap ">
      {prop.subMenu ? (
        <div
          className={`
                    grid transition-grid-rows duration-300 grid-rows-[0fr_0fr] 
                    ${index == active ? "grid-rows-[0fr_1fr]" : ""}
                    focus:grid-rows-[0fr_1fr]
                    `}
        >
          <button
            onClick={() => handleActive(index)}
            className={` ${
              active == index ? "bg-neutral-50/40" : ""
            } rounded-md w-full p-2 grid grid-cols-[auto_1fr_auto]`}
          >
            <span>
              <Icon
                icon={prop.iconName}
                className="w-8 h-8 text-2xl ml-1 mr-2  bg-neutral-50 text-primary rounded-2xl p-1"
              />
            </span>
            <span className="ml-3 font-semibold text-left block">
              {prop.title}
            </span>
            <span>
              {prop.subMenu ? (
                <Icon
                  icon={
                    index == active ? "ep:arrow-up-bold" : "ep:arrow-down-bold"
                  }
                />
              ) : (
                ""
              )}
            </span>
          </button>
          <ul className="overflow-hidden bg-primary  shadow-[inset_0px_0px_3px_0px_#444] transition-colors text-neutral-50 rounded-b-lg">
            {prop.subMenuItems.map((el, i) => (
              <li key={i}>
                <Link
                  to={el.linkTo}
                  className="capitalize relative flex items-center w-full p-2  font-semibold pl-10 ml-6  hover:text-neutral-50/50 "
                >
                  {el.title}
                  <Icon
                    icon={el.iconName}
                    className="text-xl absolute left-0 top-3"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Link className="whitespace-nowrap" to={prop.linkTo}>
          <button
            onClick={() => handleActive(index)}
            className={`uppercase ${
              active == index ? "bg-neutral-50/40" : ""
            } rounded-md w-full p-2 grid grid-cols-[auto_1fr_auto]`}
          >
            <span>
              <Icon
                icon={prop.iconName}
                className="w-8 h-8 text-2xl ml-1 mr-2  bg-neutral-50 text-primary rounded-2xl p-1"
              />
            </span>
            <span className="ml-3 font-semibold text-left block">
              {prop.title}
            </span>
            <span>
              {prop.subMenu ? (
                <Icon
                  icon={
                    index == active ? "ep:arrow-up-bold" : "ep:arrow-down-bold"
                  }
                />
              ) : (
                ""
              )}
            </span>
          </button>
        </Link>
      )}
    </li>
  );
}

function SidebarToggle({ isSidebarOpen, handleSidebar }) {
  return (
    <div
      className="
			relative
			w-full 
			text-4xl font-bold lg:hidden visible
            pl-4
            mt-3
             shadow-lg
			"
    >
      <button onClick={handleSidebar}>
        <Icon className="rounded-sm" icon="pepicons-pop:menu" />
      </button>
    </div>
  );
}

export default function GSTR_sideBar(prop) {
  const { isSidebarOpen, handleSidebar } = prop;

  const [active, setActive] = useState(0);
  const handleActive = (e) => {
    if (active == e) {
      return setActive(null);
    }
    setActive(e);
  };

  return (
    <>
      <header
        className={` dashboard-side-navbar 
				z-40
				sm:transition-width
				duration-300 delay-200 
				${isSidebarOpen ? "sm:w-[16rem]" : "sm:hover:w-[16rem]"}
				lg:w-[16rem]
                sm:w-[4.5rem]
				

				sm:translate-x-0
				-translate-x-[16rem]
				overflow-hidden
				bg-primary
				text-neutral-50
			`}
      >
        <SidebarToggle {...prop} />
        <nav
          className={`
					transition-transform duration-500
					overflow-y-auto
					overflow-x-hidden
					p-2 pb-20
					h-full
					w-[16rem]
				`}
        >
          <ul className="grid gap-3">
            <InfoDashBoard__index
              {...element}
              active={active}
              handleActive={handleActive}
              index={index}
              key={index}
            />
          </ul>
        </nav>
      </header>
      <div
        onClick={handleSidebar}
        className={` ${
          isSidebarOpen ? "lg:hidden absolute inset-[0_0_0_0] z-30 " : "hidden"
        }`}
      ></div>
    </>
  );
}
