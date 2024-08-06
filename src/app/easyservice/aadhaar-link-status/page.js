import AadhaarLinkStatus from "@/app_old/pages/EasyServices/Aadhaar/AadhaarLinkStatus";

const index = () => {
    return <AadhaarLinkStatus />;
};

export default index;
export async function generateMetadata({ params }) {
    return {
        title: "aadhaar link status",
    };
}
