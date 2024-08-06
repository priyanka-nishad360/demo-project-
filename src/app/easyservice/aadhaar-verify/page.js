import AadhaarVerify from "@/app_old/pages/EasyServices/Aadhaar/AadhaarVerify";

const index = () => {
    return <AadhaarVerify />;
};

export default index;
export async function generateMetadata({ params }) {
    return {
        title: "aadhaar verify",
    };
}
