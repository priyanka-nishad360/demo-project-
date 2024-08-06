import { useState } from "react";
import SideBar from "../SideBar";
import { useContext } from "react";
import { StoreContext } from "../../store/store-context";
const DashboardSidebarItemsData = {
  normal: [
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
          upcoming: true,
          linkTo: "/",
          title: "File Manually",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: true,
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
      linkTo: "",
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
          linkTo: "/dashboard/invoice",
        },
        {
          title: "Parties",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/dashboard/invoice/party",
        },
        {
          title: "Items",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/dashboard/invoice/item",
        },
        {
          title: "Purchase",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/dashboard/invoice/purchase",
        },
        {
          title: "Sales",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/dashboard/invoice/sales",
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
          linkTo: "/dashboard/finance/loan",
        },
        {
          title: "Payment",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "/dashboard/finance/payment",
        },
        {
          title: "Working Capital",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "/dashboard/finance/working-capital",
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
          linkTo: "/dashboard/reports/project_report",
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
  admin: [
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
          upcoming: true,
          linkTo: "/",
          title: "File Manually",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: true,
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
      subMenu: true,
      subMenuItems: [
        {
          upcoming: false,
          linkTo: "easy-investment/insurance",
          title: "Insurance",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: true,
          linkTo: "/easy-investment/mutual-fund",
          title: "Mutual Fund",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: true,
          linkTo: "/easy-investment/sip",
          title: "SIP",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: true,
          linkTo: "/easy-investment/sells-of-shares",
          title: "Sells of Share",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: true,
          linkTo: "/easy-investment/purchases-of-shares",
          title: "Purchase of Share",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: true,
          linkTo: "/easy-investment/profit",
          title: "Profit",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: true,
          linkTo: "/easy-investment/loss",
          title: "Loss",
          iconName: "lets-icons:subttasks-alt-fill",
        },
      ],
    },
    {
      access: ["superAdmin", "admin"],
      upcoming: true,
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
      upcoming: true,
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
      upcoming: true,
      title: "Transactions",
      iconName: "clarity:two-way-arrows-line",
      linkTo: "transactions",
      subMenu: false,
    },
    {
      access: ["superAdmin", "admin"],
      upcoming: true,
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
      upcoming: true,
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
      upcoming: true,
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
  superAdmin: [
    {
      access: ["superAdmin"],
      upcoming: false,
      title: "Dashboard",
      linkTo: "/dashboard",
      iconName: "material-symbols:dashboard",
      subMenu: false,
    },
    {
      access: ["superAdmin"],
      upcoming: true,
      title: "cms",
      linkTo: "cms",
      iconName: "simple-icons:payloadcms",
      subMenu: false,
    },
    {
      access: ["superAdmin"],
      upcoming: true,
      title: "users/admins",
      iconName: "mdi:user",
      subMenu: true,
      subMenuItems: [
        {
          upcoming: false,
          linkTo: "all-users",
          title: "all users",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "active-users",
          title: "active users",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "non-active-users",
          title: "non active users",
          iconName: "lets-icons:subttasks-alt-fill",
        },
      ],
    },
    {
      access: ["superAdmin"],
      upcoming: true,
      title: "Easy GST Return",
      linkTo: "gstr",
      iconName: "carbon:finance",
      subMenu: true,
      subMenuItems: [
        {
          upcoming: false,
          linkTo: "all-users",
          title: "all users",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "active-users",
          title: "active users",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "non-active-users",
          title: "non active users",
          iconName: "lets-icons:subttasks-alt-fill",
        },
      ],
    },
    {
      access: ["superAdmin"],
      upcoming: true,
      title: "Easy ITR",
      iconName: "fa6-solid:percent",
      subMenu: true,
      subMenuItems: [
        {
          upcoming: false,
          linkTo: "all-users",
          title: "all users",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "active-users",
          title: "active users",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: false,
          linkTo: "non-active-users",
          title: "non active users",
          iconName: "lets-icons:subttasks-alt-fill",
        },
      ],
    },
    {
      access: ["superAdmin"],
      upcoming: false,
      title: "Easy Investment",
      linkTo: "easy-investment",
      iconName: "mdi:finance",
      subMenu: true,
      subMenuItems: [
        {
          upcoming: false,
          linkTo: "easy-investment/insurance",
          title: "insurance",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: true,
          linkTo: "easy-investment/mutual-fund",
          title: "mutual fund",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: true,
          linkTo: "easy-investment/sip",
          title: "sip",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: true,
          linkTo: "easy-investment/sales-of-share",
          title: "sales if share",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: true,
          linkTo: "easy-investment/purchase-of-share",
          title: "purchase if share",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: true,
          linkTo: "easy-investment/profit",
          title: "profit",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: true,
          linkTo: "easy-investment/loss",
          title: "loss",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: true,
          linkTo: "easy-investment/lic",
          title: "lic",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: true,
          linkTo: "easy-investment/star-health",
          title: "star health",
          iconName: "lets-icons:subttasks-alt-fill",
        },
        {
          upcoming: true,
          linkTo: "easy-investment/post-office",
          title: "post office",
          iconName: "lets-icons:subttasks-alt-fill",
        },
      ],
    },
    {
      access: ["superAdmin"],
      upcoming: false,
      title: "Invoice",
      iconName: "mdi:invoice-edit-outline",
      subMenu: true,
      subMenuItems: [
        {
          title: "Invoice",
          iconName: "material-symbols:dashboard",
          upcoming: false,
          linkTo: "/dashboard/invoice",
        },
        {
          title: "Parties",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "/invoice/addparty",
        },
        {
          title: "Items",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "/invoice/createitem",
        },
        {
          title: "Purchase",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "/invoice/purchase",
        },
        {
          title: "Sales",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "/invoice/sales",
        },
      ],
    },
    {
      access: ["superAdmin"],
      upcoming: false,
      title: "Accounts",
      iconName: "fa6-solid:users",
      subMenu: true,
      subMenuItems: [
        {
          title: "Accounts",
          iconName: "material-symbols:dashboard",
          upcoming: false,
          linkTo: "/dashboard/accounts",
        },
        {
          title: "All Parties",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "/dashboard/accounts/all-parties",
        },

        {
          title: "Items",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "/dashboard/accounts/items",
        },

        {
          title: "Reports",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "/dashboard/accounts/reports",
        },
        {
          title: "Sales",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "/dashboard/accounts/sales",
        },
        {
          title: "Purchase",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "/dashboard/accounts/purchase",
        },
        {
          title: "Expense",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "/dashboard/accounts/expense",
        },
        {
          title: "Cash/Bank",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: true,
          linkTo: "/dashboard/accounts/cash-bank",
        },
      ],
    },
    {
      access: ["superAdmin"],
      upcoming: true,
      title: "Finance",
      iconName: "mingcute:currency-rupee-fill",
      subMenu: true,
      subMenuItems: [
        {
          title: "Finance",
          iconName: "material-symbols:dashboard",
          upcoming: true,
          linkTo: "finance",
        },
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
      access: ["superAdmin"],
      upcoming: false,
      title: "Transactions",
      iconName: "clarity:two-way-arrows-line",
      linkTo: "transactions",
      subMenu: false,
    },
    {
      access: ["superAdmin"],
      upcoming: false,
      title: "Reports",
      iconName: "tabler:report",
      subMenu: true,
      subMenuItems: [
        {
          title: "Reports",
          iconName: "material-symbols:dashboard",
          upcoming: false,
          linkTo: "reports",
        },
      ],
    },
    {
      access: ["superAdmin"],
      upcoming: false,
      title: "Bill Payment",
      iconName: "mingcute:paper-fill",
      subMenu: true,
      subMenuItems: [
        {
          title: "Bill payments",
          iconName: "material-symbols:dashboard",
          upcoming: false,
          linkTo: "bill-payments",
        },
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
      access: ["superAdmin"],
      upcoming: false,
      title: "Settings",
      iconName: "material-symbols:settings",
      subMenu: true,
      subMenuItems: [
        {
          title: "web-settings",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "web-settings",
        },
        {
          title: "settings",
          iconName: "lets-icons:subttasks-alt-fill",
          upcoming: false,
          linkTo: "settings",
        },
      ],
    },
  ],
};

const InvoiceData = [
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
];

export default function DashboardSideBar(props) {
  const { isSidebarOpen, handleSidebar } = props;

  const [state, dispatch] = useContext(StoreContext);
  let userType = state.isInvoiceSidebarOpen ? "invoice" : props.userType;
  let data;
  switch (userType) {
    case "superAdmin":
      data = DashboardSidebarItemsData.superAdmin;
      break;
    case "admin":
      data = DashboardSidebarItemsData.admin;
      break;
    case "normal":
      data = DashboardSidebarItemsData.normal;
      break;
    case "invoice":
      data = InvoiceData;
      break;
    default:
      console.log("User not found");
  }

  return data ? (
    <>
      <SideBar
        data={data}
        isSidebarOpen={isSidebarOpen}
        handleSidebar={handleSidebar}
      />
    </>
  ) : (
    "user not found"
  );
}
