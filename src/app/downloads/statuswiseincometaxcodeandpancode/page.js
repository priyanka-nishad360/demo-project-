import Statuswiseincometaxcodepan from '@/components/downloads/Statuswiseincometaxcodepan';
import { api } from '@/lib/axios';
import { generateQueryFromObject } from '@/utils/utilityFunctions';
import Image from 'next/image';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

const Index = async () => {
  const data = await getStatusWiseIncomeTaxCode();

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
        <Statuswiseincometaxcodepan data={Array.isArray(data) && data.at(0)} />
      </div>
    </Suspense>
  );
};

export default Index;

const getStatusWiseIncomeTaxCode = async () => {
  try {
    const query = generateQueryFromObject({
      financialYear: 2022,
    });
    const { data, status } = await api.get(
      `/api/downloads/statuswise-pancode-itcode?${query}`,
    );

    if (status) {
      return data?.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export async function generateMetadata() {
  return {
    title: 'Status wise income tax code and pan code',
  };
}
