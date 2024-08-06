import VerifyBankDetails from "@/app_old/pages/EasyServices/BankLinks/VerifyBankDetails";

const index = () => {
    return <VerifyBankDetails />;
};

export default index;
export async function generateMetadata({ params }) {
    return {
        title: "verify bank details",
    };
}
