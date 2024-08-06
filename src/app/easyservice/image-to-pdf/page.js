import ImgToPdf from '@/app_old/pages/EasyServices/Converter/ImgToPdf';

const index = () => {
  return <ImgToPdf />;
};

export default index;
export async function generateMetadata({ params }) {
  return {
    title: 'Image To Pdf',
  };
}
