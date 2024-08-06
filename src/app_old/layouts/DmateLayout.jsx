import { Suspense, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { SideBar } from "../styles/sidebar";

function LoadingScreen() {
  return (
    <div className="fixed h-screen w-screen bg-white flex items-center justify-center">
      Loading...
    </div>
  );
}

export default function DmateLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  let location = useLocation();

  return (
    <div className="flex">
      <div className="flex flex-col items-end bg-zinc-100 pt-8">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:mx-6 mx-2 mt-2"
        >
          {!isMenuOpen ? (
            <GiHamburgerMenu size={28} color="hsl(228, 39%, 23%)" />
          ) : (
            <BsArrowLeftCircleFill size={28} color="hsl(228, 39%, 23%)" />
          )}
        </button>
        <div className="flex flex-col items-end py-12">
          <SideBar isOpen={isMenuOpen}>
            <ul className="flex w-full flex-col py-4">
              {menu.map((items) => (
                <Link
                  key={items.link}
                  to={items.link}
                  className={`block w-full py-3 font-semibold hover:bg-zinc-200 pl-10 border-l-8 cursor-pointer ${
                    location.pathname === items.link
                      ? "bg-zinc-200 border-primary"
                      : "border-zinc-100"
                  }`}
                >
                  {items.label}
                </Link>
              ))}
            </ul>
          </SideBar>
          {/* </section> */}
        </div>
      </div>
      <section
        className="flex flex-col w-full my-4 md:block"
      >
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
}

const menu = [
  {
    link: "/EasyInvest/demataccount/overview",
    label: "Over view",
  },
  {
    link: "/EasyInvest/demataccount/star-health",
    label: "Star Health",
  },
  {
    link: "/EasyInvest/demataccount/lic",
    label: "LIC",
  },
  {
    link: "/EasyInvest/demataccount/capital-gain-bond",
    label: "Capital Gain Bond",
  },
  {
    link: "/EasyInvest/demataccount/fixed-plans",
    label: "Fixed Plans",
  },
  // {
  //   link: "/EasyInvest/demataccount/bajaj-capital",
  //   label: "Bajaj Capital",
  // },
];