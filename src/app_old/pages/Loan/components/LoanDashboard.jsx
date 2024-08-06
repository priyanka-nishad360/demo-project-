import React, { useEffect } from 'react'
import { RiMotorbikeFill } from 'react-icons/ri';
import { AiFillCar } from 'react-icons/ai';
import { SiGooglemybusiness } from 'react-icons/si';
import { HiHome } from 'react-icons/hi';
import { MdBusinessCenter } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const loanTypesData = [
  {
    name: 'Bike Loan',
    logo: RiMotorbikeFill,
  },
  {
    name: 'Car Loan',
    logo: AiFillCar,
  },
  {
    name: 'Personal Loan',
    logo: SiGooglemybusiness,
  },
  {
    name: 'Home Loan',
    logo: HiHome,
  },
  {
    name: 'Business Loan',
    logo: MdBusinessCenter,
  },
  {
    name: 'Education Loan',
    logo: HiHome,
  }
];

const upcomingRenewals = [
  {
    day: 'Today',
    pendingRenewals: 0
  },
  {
    day: 'Next 7 days',
    pendingRenewals: 0
  },
  {
    day: 'Next 15 days',
    pendingRenewals: 0
  },
  {
    day: 'Next 30 days',
    pendingRenewals: 0
  }
]

const expiredRenewals = [
  {
    day: 'Yesterday',
    pendingRenewals: 0
  },
  {
    day: 'Last 7 days',
    pendingRenewals: 0
  },
  {
    day: 'Last 15 days',
    pendingRenewals: 0
  },
  {
    day: 'Last 30 days',
    pendingRenewals: 0
  }
]

const policyIssuence = [
  {
    date: 'Current Year',
    policiesIssued: [
      {
        type: 'All Premiums',
        amount: 0, // Total amount of all premiums
        NOP: 0 // Total number of policies
      },
      {
        type: 'Car Insurance',
        amount: 0,
        NOP: 0
      },
      {
        type: 'Bike Insurance',
        amount: 0,
        NOP: 0
      },
      {
        type: 'Health Insurance',
        amount: 0,
        NOP: 0
      }
    ]
  },
  {
    date: 'Last Year',
    policiesIssued: [
      {
        type: 'All Premium',
        amount: 0, // Total amount of all premiums
        NOP: 0 // Total number of policies
      },
      {
        type: 'Car Insurance',
        amount: 0,
        NOP: 0
      },
      {
        type: 'Bike Insurance',
        amount: 0,
        NOP: 0
      },
      {
        type: 'Health Insurance',
        amount: 0,
        NOP: 0
      }
    ]
  }
]

function PolicyStatus({ status }) {
  return (
    <div className="border p-3 rounded-md shadow-md my-10">
      <h2 className="text-lg font-semibold mb-2">Proposal / Policy Status</h2>
      <div className="text-gray-700">
        <p>Status: {status}</p>
      </div>
    </div>
  );
}

function RenewalCard({ data }) {
  return (
    <div>
      <div className='text-2xl font-semibold mb-4'>
        <p>{data === upcomingRenewals ? 'Upcoming Renewals' : 'Expired Renewals'}</p>
      </div>
      <div className='p-2'>
        {data.map((renewal, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-2 px-3 bg-gray-300 shadow-md leading-10
              ${index === 0 ? "rounded-t-md" : ""}
              ${index === data.length - 1 ? "rounded-b-md" : ""}`
            }>
            <p>{renewal.day}</p>
            <p>{renewal.pendingRenewals}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function YearlyPolicyTable({ data }) {
  return (
    <div>
        <div className="mt-5">
          <h1 className="text-2xl font-semibold mb-4">Policy Issuance</h1>
          {data.map((yearData, index) => (
            <div key={index} className="mb-5 p-2">
              <h2 className="text-xl font-semibold mb-2">{yearData.date}</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2">Type</th>
                    <th className="p-2 text-center">Amount</th>
                    <th className="p-2 text-center">NOP</th>
                  </tr>
                </thead>
                <tbody>
                  {yearData.policiesIssued.map((policy, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="p-2">{policy.type}</td>
                      <td className="p-2 text-center">{policy.amount}</td>
                      <td className="p-2 text-center">{policy.NOP}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
  );
}

function LoanTypes({ data }) {
  const navigate = useNavigate();
  
  const handleLoanTypeClick = (loanType) => {
    localStorage.setItem('loanInfo', JSON.stringify({loanType : loanType}));
    const type = loanType.split(' ')[0];
    navigate("/loan/apply" + type + "loan")
  };

  useEffect(() => {
    localStorage.removeItem('loanInfo');
  }, []);

  return (
    <div>
    <div className='text-2xl font-semibold mb-4'>
      <p>Loan Application</p>
    </div>
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-between bg-gray-300 text-blue-900 rounded-md p-2'>
      {data.map((loanType) => (
          <div
            key={loanType.name}
            onClick={() => handleLoanTypeClick(loanType.name)}
            className='flex gap-3 m-auto flex-col items-center justify-center p-4 cursor-pointer'
          >
            {React.createElement(loanType.logo, { size: 32 })}
            <p className='mt-2 font-normal'>{loanType.name}</p>
          </div>
      ))}
    </div>
  </div>
  );
}

const LoanDashboard = () => {
    return (
        <div>
            <LoanTypes data={loanTypesData} />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-5'>
                <RenewalCard data={upcomingRenewals} />
                <RenewalCard data={expiredRenewals} />
            </div>
            <YearlyPolicyTable data={policyIssuence} />
            <PolicyStatus status="Clear" />
        </div>
    )
}

export default LoanDashboard