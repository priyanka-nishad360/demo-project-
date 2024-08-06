export default function Input (props) {
    const {className}=props
    return (
        <Input 
            {...props}
            className={`
                bg-gray-100
                appearance-none 
                border
                border-gray-300 
                rounded 
                w-full
                xl:py-3
                py-2
                px-2
                text-gray-700 
                leading-tight 
                focus:outline-none 
                focus:bg-white 
                focus:border-primary
                ${className}
            `}
        />
    )
}

