
import React from 'react';

const Button = ({ color, children, onClick }) => {
  // Use Tailwind CSS classes to dynamically set button color
  const buttonClasses = `bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded w-52 mx-auto py-3  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 text-white border-none cursor-pointer font-bold px-8 -text--clr-neutral-900 rounded-lg bg-blue-700`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;