import PincodeInfo from "@/app_old/pages/EasyServices/PostOffice/PincodeInfo";

const index = () => {
    return <PincodeInfo />;
};

export default index;
export async function generateMetadata({ params }) {
    return {
        title: "pin code info",
    };
}
