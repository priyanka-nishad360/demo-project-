import { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";
export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const goToTop=() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    const toggleVisibility = () => {
        if (window.scrollY > 300){
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    return (
		<div onClick={goToTop} className={`${isVisible ? 'visible' : 'invisible'} p-1 -rotate-45 grid place-item-center z-50 fixed bottom-6 right-24 cursor-pointer  rounded-full -text--clr-neutral-200 bg-gradient-to-t -from--clr-primary-400   to-primary   `}>
			<Icon className=' text-3xl ' icon='iconamoon:arrow-top-right-2'
			/>
		</div>
	);
}
