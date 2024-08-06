import { api } from '@/lib/axios';
import Newcostinflationindex from '@/components/downloads/Newcostinflationindex';
import { generateQueryFromObject } from '@/utils/utilityFunctions';
import { Suspense } from 'react';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

const Index = async () => {
  let data = [];
  let status = false;
  const res = await getCostInflationIndex();

  if (res) {
    data = res.data;
    console.log(data);
    status = res.status;
  }

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-[75vh]">
          <Image
            src={'/whiteLoader.svg'}
            width={100}
            height={100}
            alt="Loading.."
          />
        </div>
      }
    >
      <div className="2xl:max-w-7xl mx-auto mb-12">
        <Newcostinflationindex
          name={'costInflation'}
          data={Array.isArray(data) && data?.at(0)}
        />
      </div>
    </Suspense>
  );
};

export default Index;

export async function generateMetadata() {
  return {
    title: 'Cost inflation index',
  };
}

export const getCostInflationIndex = async () => {
  try {
    const query = generateQueryFromObject({
      listName: 'Cost Inflation Index List 2022',
      financialAct: '2022',
    });
    console.log(query);
    const { data } = await api.get(
      `/api/downloads/cost-inflation-index?${query}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
