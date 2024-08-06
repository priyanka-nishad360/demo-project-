export default function Label(props) {
    const {className,children}=props
    return (
        <label 
            {...props}
            className={`
                block 
                uppercase
                tracking-wide
                text-gray-700
                dark:text-neutral-50
                text-sm
                font-bold
                ${className}
            `}
        >{children}</label>
    )
}

