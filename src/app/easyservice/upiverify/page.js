import UpiVerify from "@/app_old/pages/EasyServices/BankLinks/UpiVerify";

const index = () => {
    return <UpiVerify />;
};

export default index;
export async function generateMetadata({ params }) {
    return {
        title: "upi verify",
    };
}
