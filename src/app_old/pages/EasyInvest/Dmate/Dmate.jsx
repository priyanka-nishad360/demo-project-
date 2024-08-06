import { Link } from "react-router-dom";
import starHealth from '../../../../public/icons/starHealth.png'
import lic from '../../../../public/icons/lic.svg'
import bajajCapital from "../../../../public/images/home/partners/bajajCapital.png"

export default function Dmate() {
  return (
    <>
      <div className="py-6">
        <h1 className="text-3xl text-center mb-12 font-bold text-slate-800">
          Overview
        </h1>
        <div className="grid gap-12 rounded-sm mx-auto max-w-4xl w-full md:grid-cols-3">
          {items.map((item) => (
            <Link key={item.label+item.link} to={item.link}>
              <div className="flex gap-6 pt-4 min-h-[250px] shadow rounded-b-xl overflow-hidden flex-col items-center justify-between min-w-xs">
                <img className="max-w-[150px]" src={item.logo} alt={item.label + " Logo"} />
                <div className="bg-primary text-white w-full text-center py-3 outline">
                <span className="text-2xl">{item.label}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

const items = [
  { logo: starHealth, label: "Star Health", link: "/EasyInvest/demataccount/star-health" },
  { logo: lic, label: "LIC", link: "/EasyInvest/demataccount/lic" },
  { logo: "", label: "Capital Gain Bond", link: "/EasyInvest/demataccount/capital-gain-bond" },
  { logo: "", label: "Fixed Plans", link: "/EasyInvest/demataccount/fixed-plans" },
  // { logo: bajajCapital, label: "Bajaj Capital", link: "/EasyInvest/demataccount/bajaj-capital", upcoming: true },
];