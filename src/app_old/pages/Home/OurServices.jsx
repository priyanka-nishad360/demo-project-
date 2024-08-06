import Link from 'next/link';
import { H2 } from '@/components/pagesComponents/pageLayout/Headings';

export default function OurServices({ ourServicesCards }) {
  return (
    <div className="mx-auto max-w-7xl lg:px-8">
      <H2 className="text-lg lg:text-[32px] py-8 justify-center">
        Our Services
      </H2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 xl:gap-x-8">
        {ourServicesCards.map((element, i) => (
          <li
            key={`key ${element.name + ' ' + i}`}
            className="shadow-lg overflow-hidden p-8 lg:p-2 flex-grow flex-shrink-0"
          >
            <h4 className="rounded-lg text-center text-lg py-5 bg-primary text-white font-semibold">
              {element.heading}
            </h4>
            <div className="flex flex-col justify-between">
              {element.items.map((item) => (
                <>
                  {item.label && (
                    <Link
                      key={item.label}
                      className={`flex justify-between gap-4 items-center py-4 px-3  hover:text-blue-600 ${!item.link ? 'pointer-events-none' : ''}`}
                      href={item.link ? item.link : '#'}
                    >
                      <p className="font-semibold whitespace-nowrap ">
                        {item.label}
                      </p>
                      {!item.link && (
                        <span className="tracking-tighter text-xs text-blue-500 italic">
                          Upcoming
                        </span>
                      )}
                    </Link>
                  )}
                </>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
