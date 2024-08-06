import VerifyPanDetails from "@/app_old/pages/EasyServices/IncomeTaxLinks/VerifyPanDetails";

const index = () => {
    return <VerifyPanDetails />;
};

export default index;
export async function generateMetadata({ params }) {
    return {
        title: "verify pan details",
    };
}
