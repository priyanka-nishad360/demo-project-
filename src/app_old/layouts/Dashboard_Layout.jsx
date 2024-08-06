import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';

import "../styles/dashboard_layout.css"

import Navbar from '../components/Navbar.jsx';
import ThemeToggle from '../components/ThemeToggle.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';
import Chatbot from '../components/Chatbot.jsx';
import { useAuth } from '../hooks/useAuth.js';
import DashboardSideBar from '../components/Dashboard/DashboardSideBar.jsx';
export default function Dashboard_Layout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    const { currentUser } = useAuth();
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [location]);


    const handleSidebar = () => setIsSidebarOpen((prev) => !prev);
    let userType=currentUser.user.userType
    return (
		<div className="dashboard-wrapper bg-bg_1 text-txt">
            <div className=" dashboard-top-navbar">
                <Navbar handleSidebar={handleSidebar} isSidebarOpen={isSidebarOpen}/>
            </div>
            <DashboardSideBar userType={userType} isSidebarOpen={isSidebarOpen} handleSidebar={handleSidebar}/>
            <Suspense fallback={"Loading indicator here"}>
                <main className="dashboard-main-body  lg:pl-[0rem] sm:pl-[4.5rem]">
                    <Outlet />
                    
                    <Chatbot />
                    <ThemeToggle/>
                    <ScrollToTop/>
                </main>
            </Suspense>
        </div>
	);
}
