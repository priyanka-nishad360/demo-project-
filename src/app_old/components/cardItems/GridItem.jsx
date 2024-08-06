import { Link } from "react-router-dom";
export default function GridItem(props) {
	const { children, className, to } = props;
    if (to) {
        return (
                <Link
                    
                    {...props}
                    className={`
                        p-4
                        h-full
                        rounded-md
                        flex
                        items-center
        
        
        
        
                        shadow-md
                        shadow-blue-300
                        hover:shadow-xl
                        
                        hover:shadow-blue-100
                        bg-neutral-100
                        text-neutral-500 



                        dark:shadow-sm
                        hover:dark:shadow-blue-900
                        dark:hover:shadow-md
                        dark:shadow-blue-950 

                        dark:bg-neutral-950
                        dark:text-neutral-200
                        
                        
                        
                        active:bg-transparent

                        hover:-translate-y-1

                        transition-all 
                        duration-500
                        ease-in-out
                        
                        ${className}
                    `}
                >
                    {children}
                </Link>
        );
    }
	return (
		<li
            
            {...props}
			className={`
                p-4
                h-full
                rounded-md
                flex
                items-center




                shadow-md
                shadow-blue-300
                hover:shadow-xl
                
                hover:shadow-blue-100
                bg-neutral-100
                text-neutral-500 



                dark:shadow-sm
                hover:dark:shadow-blue-900
                dark:hover:shadow-md
                dark:shadow-blue-950 

                dark:bg-neutral-950
                dark:text-neutral-200
                
                
                
                active:bg-transparent

                transition-all 
                duration-500
                ease-in-out
                
                ${className}
            `}
		>
			{children}
		</li>
	);
}