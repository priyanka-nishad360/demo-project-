export default function Head2(props) {
	const { children, className } = props;
	return (
		<h2
            {...props}
			className={`
                
                container
                mx-auto
                flex
                mt-3
                text-2xl
                font-semibold
                text-gray-700
                dark:text-gray-200
                ${className}
            `}>
			{children}
		</h2>
	);
}
