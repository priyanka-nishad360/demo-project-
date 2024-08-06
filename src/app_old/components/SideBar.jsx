import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";


function UserInfoDashBoard__index(prop) {
	const {active,index,handleActive,}=prop


	if (prop.upcoming) {
		return (
			<li className="whitespace-nowrap relative" to={prop.linkTo}>
				<span className=" absolute top-2 right-2 text-xs italic font-semibold bg-neutral-50 text-accent rounded-lg px-1">UpComing</span>
                <button onClick={()=>handleActive(index)} className={`uppercase ${active==index?"bg-neutral-50/40":""} rounded-md w-full p-2 grid grid-cols-[auto_1fr_auto]`}>
					<span><Icon icon={prop.iconName} className='w-8 h-8 text-2xl ml-1 mr-2  bg-neutral-50 text-primary rounded-2xl p-1'/></span>
					<span className="ml-3 font-semibold text-left block">
						{prop.title}
					</span>
					<span>
						{prop.subMenu? <Icon icon={(index==active)?"ep:arrow-up-bold":"ep:arrow-down-bold"}/> :""}
					</span>
				</button>
            </li>
		)
	}
    return (
        <li className="whitespace-nowrap ">
            {prop.subMenu?
                <div className={`
                    grid transition-grid-rows duration-300 grid-rows-[0fr_0fr] 
                    ${(index==active)?"grid-rows-[0fr_1fr]":""}
                    focus:grid-rows-[0fr_1fr]
                    `}
                    >
                    <button onClick={()=>handleActive(index)} className={` ${active==index?"bg-neutral-50/40":""} rounded-md w-full p-2 grid grid-cols-[auto_1fr_auto]`}>
						<span><Icon icon={prop.iconName} className='w-8 h-8 text-2xl ml-1 mr-2  bg-neutral-50 text-primary rounded-2xl p-1'/></span>
                        <span className="ml-3 font-semibold text-left block">
							{prop.title}
						</span>
						<span>
							{prop.subMenu? <Icon icon={(index==active)?"ep:arrow-up-bold":"ep:arrow-down-bold"}/> :""}
						</span>
                    </button>
                    <ul className="overflow-hidden bg-primary  shadow-[inset_0px_0px_3px_0px_#444] transition-colors text-neutral-50 rounded-b-lg">
                        {prop.subMenuItems.map((el,i)=>(
							(el.upcoming)?
							<li key={i} className="relative" >
								<span className=" absolute top-2 right-2 text-xs italic font-semibold bg-neutral-50 text-accent rounded-lg px-1">UpComing</span>
                                <span  className="capitalize relative flex items-center w-full p-2  font-semibold pl-10 ml-6  hover:text-neutral-50/50 ">
                                    {el.title}
                                    <Icon icon={el.iconName} className='text-xl absolute left-0 top-3'/>
                                </span>
                            </li>:
                            <li key={i} >
                                <Link to={el.linkTo} className="capitalize relative flex items-center w-full p-2  font-semibold pl-10 ml-6  hover:text-neutral-50/50 ">
                                    {el.title}
                                    <Icon icon={el.iconName} className='text-xl absolute left-0 top-3'/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            :
            <Link className="whitespace-nowrap" to={prop.linkTo}>
                <button onClick={()=>handleActive(index)} className={`uppercase ${active==index?"bg-neutral-50/40":""} rounded-md w-full p-2 grid grid-cols-[auto_1fr_auto]`}>
					<span><Icon icon={prop.iconName} className='w-8 h-8 text-2xl ml-1 mr-2  bg-neutral-50 text-primary rounded-2xl p-1'/></span>
					<span className="ml-3 font-semibold text-left block">
						{prop.title}
					</span>
					<span>
						{prop.subMenu? <Icon icon={(index==active)?"ep:arrow-up-bold":"ep:arrow-down-bold"}/> :""}
					</span>
				</button>
            </Link>
            }
			
        </li>
    );
}

function SidebarToggle({isSidebarOpen,handleSidebar}) {
	return (
		
		<div className="
			relative
			w-full 
			text-4xl font-bold lg:hidden visible
            pl-4
            mt-3
             shadow-lg
			">
			<button onClick={handleSidebar} >
				<Icon className="rounded-sm" icon="pepicons-pop:menu"/>
			</button>
		</div>
	
	);
}


export default function SideBar(prop) {
	const {data,isSidebarOpen,handleSidebar}=prop
    const [active,setActive]=useState(0)
	const handleActive = (e)=>{
        if(active==e) {
            return setActive(null)
        }
        setActive(e)
    }
    return (
		<>
			<header className={` dashboard-side-navbar 
				z-40
				sm:transition-width
				duration-300 delay-200 
				${isSidebarOpen?"sm:w-[16rem]":"sm:hover:w-[16rem]"}
				lg:w-[16rem]
                sm:w-[4.5rem]
				

				sm:translate-x-0
				-translate-x-[16rem]
				overflow-hidden
				bg-primary
				text-neutral-50
			`}>

                <SidebarToggle {...prop} /> 
				<nav className={`
					transition-transform duration-500
					overflow-y-auto
					overflow-x-hidden
					p-2 pb-20
					h-full
					w-[16rem]
				`}	
				>
					<ul className="grid gap-3">
                        {data.map( (element,index)=>(
                                <UserInfoDashBoard__index {...element} active={active} handleActive={handleActive} index={index} key={index} />
                        ))}
					</ul>
				</nav>
			</header>
			<div onClick={handleSidebar} className={` ${isSidebarOpen ? 'lg:hidden absolute inset-[0_0_0_0] z-30 ' : 'hidden'}`}></div>
		</>

	);
}