import Section from "../../../components/pageLayouts/Section";
import { H1,H2,H3 } from "../../../components/pageLayouts/Headings";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
export default function TotalBalance() {
    return (
        <>
            <H2>Total Balance</H2>
            <H1 className="justify-center">Cash & Bank</H1>
            <Section>
                <div className="flex items-center">
                    <div className=" flex  flex-col gap-2 items-center font-semibold text-xl ">
                        <span>Unlinked Payments</span>
                        <span className="flex gap-2 items-center font-semibold text-xl mr-auto">
                            <Icon icon="fa:rupee" />
                            0.0
                        </span>
                    </div>
                    <Icon className="ml-auto w-8 h-8" icon="ph:arrow-right-bold" />
                </div>
            </Section>
            
            <H3 className="justify-between border-b-2 py-4 dark:border-neutral-700" >
                Bank/Online
                <Link className=" font-light text-primary"><Icon className=" inline-block mx-2" icon="ic:baseline-plus"/>Add New Bank</Link>
            </H3>
            <Section>
                <div className="flex">
                    <span>Unlinked Payments</span>
                    <span className="ml-auto flex gap-2 items-center font-semibold text-xl ">
                        <Icon icon="fa:rupee" />
                        0.0
                    </span>
                </div>
            </Section>
        
        </>
	);
}
