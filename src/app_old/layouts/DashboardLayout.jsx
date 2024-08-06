import { Outlet, Link } from "react-router-dom"
import { H6 } from "../components/pageLayouts/Headings";
import { Icon } from "@iconify/react";
import { useLocation } from 'react-router-dom';

import SideBar from "../components/Dashboard/SideBar";
export default function DashboardLayout() {
    let {pathname} = useLocation();
    const paths=pathname.split('/')
    paths.shift(0)
    return(
        <div className="grid lg/:grid-cols-[256px_1fr]">
            <div className="lg:bg-bg_1">
                <SideBar/>
            </div>
            <main className={`
                    bg-neutral-100
                    dark:bg-neutral-950
                    text-neutral-700
                    dark:text-neutral-200
                    py-8
                    min-h-screen
                `}>
                {/* <div className="flex font-bold text-xs">
                    {paths.map(el=>(
                        <div className="flex items-center transition-colors relative">
                            <Icon icon="iconamoon:arrow-top-left-2-bold" className="  -rotate-45"/>
                            <span>{el}</span>
                        </div>
                    ))}
                </div> */}
                <Outlet/>
            </main>
        </div>
    ) 
  
}