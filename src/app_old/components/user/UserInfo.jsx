import Link from "next/link.js";
import { useAuth } from "../../hooks/useAuth.js";

// import UserImage from "/images/user.webp";
// import BillShillLink from '../BillShillLink.jsx';
import { Icon } from "@iconify/react";
import { useState } from "react";

const userMenuData = [
	{
		linkTo: "/dashboard",
		title: "Dashboard",
		iconName: "material-symbols:dashboard",
	},
	{
		linkTo: "/dashboard/profile/user",
		title: "User Profile",
		iconName: "mingcute:user-4-line",
	},
	{
		linkTo: "/dashboard/profile/business",
		title: "Business Profile",
		iconName: "dashicons:businessperson",
	},
	{
		linkTo: "/dashboard/Login with GSTIN",
		title: "Login with GSTIN",
		iconName: "ph:sign-in-bold",
	},
];

function UserInfoDashBoard__index(prop) {
	const { active, index, handleActive,linkTo } = prop;
	return (
		<li>
			<Link href={linkTo}>
				<button
					onClick={() => handleActive(index)}
					className={` ${
						index == active ? "bg-primary_light " : ""
					} w-full flex items-center p-2 text-primary dark:text-neutral-50 rounded-t-lg hover:bg-primary_light `}>
					<Icon icon={prop.iconName} className="text-2xl" />
					<span className="ml-3 font-semibold">{prop.title}</span>
					{prop.subMenu ? (
						<Icon icon="ep:arrow-down-bold" className=" ml-auto " />
					) : (
						""
					)}
				</button>
			</Link>
		</li>
	);
}
function UserMenu(prop) {
	const { className, dataItem, logout } = prop;
	const [active, setActive] = useState(-1);
	const [isOpen, setIsOpen] = useState(false);
	const handleActive = (e) => {
		setActive(e);
		setIsOpen((prev) => !prev);
	};
	return (
		<ul className={` flex gap-1 flex-col z-50 dir-col bg-white shadow-md rounded-md p-3 border absolute left-auto right-[1.5rem] lg:top-[4.5rem] top-[3.7rem] ${className} `}>
			<li className=" mx-auto">
				<Link
					href="/"
					className=" flex flex-shrink-0 justify-between items-center mx-auto pb-4">
					<img src="logo.svg" alt="logo" className="object-contain w-14" />
				</Link>
			</li>
			{dataItem.map((element, index) => (
				<UserInfoDashBoard__index
                    linkTo=""
					{...element}
					active={active}
					handleActive={handleActive}
					index={index}
					key={index}
					isOpen={isOpen}
				/>
			))}
            <li>
                <button  onClick={()=>{ logout()}} 
                    className=" hover:bg-neutral-200 dark:hover:bg-neutral-900 py-2 w-full font-semibold text-neutral-800 dark:text-neutral-200 flex items-center justify-center gap-1"
                >
                    <Icon icon="ph:sign-out-bold" className='text-2xl'/>
                    Logout
                </button>
            </li>
		</ul>
	);
}

export default function UserInfo() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { currentUser, logout } = useAuth();
	return (
		<>
			<div
				onClick={() => setIsMenuOpen((prev) => !prev)}
				className=" w-8 h-8 mx-3 dark:fill-neutral-200 fill-neutral-500 rounded-full cursor-pointer select-none">
				{userIcon}
			</div>
            <div>
                <UserMenu
                    dataItem={userMenuData}
                    logout={logout}
                    className={`${
                        isMenuOpen ? "" : "hidden"
                    } dark:-bg--clr-neutral-900`}
                />
            </div>
		</>
	);
}

const userIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z" />
	</svg>
);
