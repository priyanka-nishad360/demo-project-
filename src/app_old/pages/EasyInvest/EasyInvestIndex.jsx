import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function EasyInvestIndex() {
    const [section, setSection] = useState('Download');
    const [renderEasyInvest, setRenderEasyInvest] = useState(list);

    return (
        <div className='bg-gray-200'>
           
            <div className="pb-10 p-8 max-w-7xl   mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {renderEasyInvest.map((element) =>
                    element.EasyInvest.map((element, index) => (
                        <Link
                            key={index}
                            to={`/EasyInvest/${!element.link ? `${element.label
                                .replace(/ /g, '')
                                .toLowerCase()}` : `${element.link}` }`}
                            className="flex flex-col items-center py-8 px-3 bg-white shadow-md rounded-lg mx-8 md:mx-0"
                        >
                            <span className="object-contain h-6 w-6 fill-zinc-600">
                                {calculatorIcon}
                            </span>
                            <p className="font-medium text-center mt-8 text-lg">
                                {element.label}
                            </p>
                            <p className="text-sm text-center mt-1">
                                {element.description}
                            </p>
                        </Link>
                        
                    ))
                )}
            </div>
        </div>
    );
}

const list = [
    {
        EasyInvest: [
         
            {
                link: '',
                label: 'Capital Gain Bond',
                description:
                    '',
            },
            {
                link: '',
                label: 'Matual Fund ',
                description:
                    '',
            },
           
            {
                link: '/',
                label: 'ELSS',
                description:
                    '',
            },
            {
                link: '/',
                label: 'SIP',
                description:
                    '',
            },
            {
                link: '/',
                label: 'NPS',
                description:
                    '',
            },
            {
                link: 'demataccount/overview',
                label: 'Demat Account',
                description:
                    '',
            },
        
        ],
    },
 
 
];

const calculatorIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 224c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zm32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zM160 320c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zM288 192c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zM256 320c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zm32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32z" />
    </svg>
);
