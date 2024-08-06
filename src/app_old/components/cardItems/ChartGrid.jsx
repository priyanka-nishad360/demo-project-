export default function ChartGrid(props) {
  const { children, className } = props;
  return (
    <div
      {...props}
      className={`
                grid 
                grid-cols-1 
                sm:grid-cols-1
                lg:grid-cols-2
                xl:grid-cols-2
                gap-4
               
                ${className}
            `}
    >
      {children}
    </div>
  );
}
