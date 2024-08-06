
import GridContainer from "../../../components/cardItems/GridContainer";
import GridItem from "../../../components/cardItems/GridItem";
import { Icon } from "@iconify/react";

import Section from "../../../components/pageLayouts/Section";
import { H1,H2,H3 } from "../../../components/pageLayouts/Headings";

const data = {
    services:[
        {
            linkTo:"GST",
            title:"GST",
            updates:{
                time:"yesterday",
                value:"20",

            },
            icon:"material-symbols:text-snippet-outline",
            cssClass:"text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500",
        },
        {
            linkTo:"ITR",
            title:"ITR",
            updates:{
                time:"last month",
                value:"10",

            },
            icon:"icon-park-outline:play-cycle",
            cssClass:"text-green-500 bg-green-100 dark:text-green-100 dark:bg-green-500",
        },
        {
            linkTo:"Reg",
            title:"Register & Startup",
            updates:{
                time:"yesterday",
                value:"-2",

            },
            icon:"ri:building-2-fill",
            cssClass:"text-red-500 bg-red-100 dark:text-red-100 dark:bg-red-500",
        },
        {
            linkTo:"API",
            title:"APIs",
            updates:{
                time:"yesterday",
                value:"10",

            },
            icon:"eos-icons:api-outlined",
            cssClass:"text-purple-500 bg-purple-100 dark:text-purple-100 dark:bg-purple-500",
        },
        {
            linkTo:"Gra",
            title:"Graphic Design",
            updates:{
                time:"last month",
                value:"-12",

            },
            icon:"icon-park-outline:graphic-design",
            cssClass:"text-yellow-500 bg-yellow-100 dark:text-yellow-100 dark:bg-yellow-500",
        },
        {
            linkTo:"Dig",
            title:"Digital Marketing",
            updates:{
                time:"last month",
                value:"-12",

            },
            icon:"nimbus:marketing",
            cssClass:"text-indigo-500 bg-indigo-100 dark:text-indigo-100 dark:bg-indigo-500",
        },
        {
            linkTo:"Hos",
            title:"Hosting server",
            updates:{
                time:"yesterday",
                value:"10",

            },
            icon:"uil:server",
            cssClass:"text-pink-500 bg-pink-100 dark:text-pink-100 dark:bg-pink-500",
        },
        {
            linkTo:"Inv",
            title:"Investment",
            updates:{
                time:"yesterday",
                value:"-12",

            },
            icon:"mdi:graph-line",
            cssClass:"p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500",
        },
    ],
}
export default function Services() {
    return (
        <>
        <H1 className=" justify-center" >Services</H1>
        <Section>
            <GridContainer>
                {data?.services.map((el,key)=>(
                    <li key={key} to={el?.linkTo} className="bg-bg_1 p-4 rounded-2xl shadow-[rgba(0,_0,_0,_0.1)_0px_2px_8px]">
                        <div className= {`text-xl font-semibold py-2 text-center`}>
                            {el?.title}
                        </div>
                        <div className="grid grid-cols-2 gap-4 items-end ">
                            <div className="text-sm">
                                <div className={`${el?.updates.value<=0?"text-red-500":"text-green-500"}`}>{el?.updates.value}%</div>
                                since  {el?.updates.time}
                            </div>
                            <Icon icon={el?.icon}  className={` justify-self-end rounded-lg sm:h-16 sm:w-16 sm:p-3 h-14  w-14  p-3 ${el?.cssClass} `}/>
                        </div>
                    </li>
                ))}

            </GridContainer>
        </Section>
        </>
    );
}