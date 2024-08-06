import Searchbygstin from "@/app_old/pages/EasyServices/GstLinks/Searchbygstin";

const index = () => {
    return <Searchbygstin />;
};

export default index;
export async function generateMetadata({ params }) {
    return {
        title: "Search by gstin",
    };
}
