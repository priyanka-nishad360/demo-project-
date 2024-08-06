import IfscDetails from '@/app_old/pages/EasyServices/BankLinks/IfscDetails';

const index = () => {
  return <IfscDetails />;
};

export default index;
export async function generateMetadata({ params }) {
  return {
    title: 'IFSC details',
  };
}
