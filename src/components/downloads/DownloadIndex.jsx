'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  depreciation,
  incomeTax,
  interestIndraVikas,
  interestOnKVP,
  gold,
  form16,
  savingCertificate1,
  // savingCertificate2,
  inflation,
  countryCode,
} from '@/app_old/icons';

export default function DownloadIndex() {
  const [section, setSection] = useState('Download');
  const [renderDownloadList, setRenderDownloadList] = useState(list);

  return (
    <div className="bg-gray-200">
      <div className="pb-10 p-8 max-w-7xl   mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {renderDownloadList.map((element) =>
          element.downloadlist.map((element, index) => (
            <Link
              key={index}
              href={`/downloads/${element.label
                .replace(/ /g, '')
                .toLowerCase()}`}
              className="flex flex-col items-center py-8 px-3 bg-white hover:shadow-lg hover:shadow-primary shadow-md rounded-lg mx-8 md:mx-0"
            >
              <span className="object-contain h-11 w-11 fill-zinc-600">
                {element.icon}
              </span>
              <p className="heading-6  text-center mt-8 ">{element.label}</p>
              <p className="text-sm  text-center mt-1">{element.description}</p>
            </Link>
          )),
        )}
      </div>
    </div>
  );
}

const list = [
  {
    downloadlist: [
      // {
      //     link: '/',
      //     label: 'Pan Corection',
      //     description:
      //         'Downlaod Blank Form Or Click Here.',
      // },
      {
        link: '/',
        icon: form16,
        label: 'Form 16',
        description: 'Downlaod Blank Form16 From Here.',
      },
      {
        link: '/downloadlist/gold&silverrate',
        icon: gold,
        label: 'Gold & Silver Rate ',
        description: 'Find Your Gold Rate And Downaload It.',
      },
      // {
      //     link: '/',
      //     label: 'Bussiness Codec For ITR Forms ',
      //     description:
      //         'Know Your Bussiness Code Before Filling ITR',
      // },
      {
        link: '/',
        label: 'New Cost Inflation Index',
        icon: inflation,
        description: 'The Cost Inflation Index For FY 2023-24',
      },
      {
        link: '/',
        icon: inflation,
        label: 'Cost Inflation Index',
        description: 'The Cost Inflation Index For FY 2023-24',
      },
      {
        link: '/',
        icon: incomeTax,
        label: 'Status wise Income Tax Code and PAN Code',
        description:
          'Applicants for PAN are required to provide the AO code in their application.',
      },
      {
        link: '/',
        icon: savingCertificate1,
        label:
          'Interest Accrued on National Saving Certificates (VIIIth Issue)',
        description: 'VIII are that it has no limit ',
      },
      {
        link: '/',
        icon: interestIndraVikas,
        label: 'Interest Accrued on Indira Vikas Patras (IVP)',
        description: 'interest accrued on IVPs at the rate of 13.43% per annum',
      },
      {
        link: '/',
        icon: interestOnKVP,
        label: 'Interest Accrued on National Saving Certificates (IXth Issue)',
        description: 'The NSC interest rate in 2021 and 2022 currently 6.8% ',
      },
      {
        link: '/',
        icon: depreciation,
        label: 'Depreciation Table',
        description: 'Depreciation allowance as percentage of WDV ',
      },
      {
        link: '/',
        icon: interestOnKVP,
        label: 'Interest On  KVP',
        description: 'Kisan Vikas Patra is a small savings instrument ',
      },
      {
        link: '/',
        icon: countryCode,
        label: 'Country Code',
        description: 'To File ITR Select Country Code. ',
      },
      // {
      //     link: '/',
      //     label: 'Tax Calculator',
      //     description:
      //         'calculate your tax liability for The assessment year. ',
      // },
    ],
  },
];

const calculatorIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 224c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zm32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zM160 320c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zM288 192c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32zM256 320c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zm32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32z" />
  </svg>
);
