import Searchbypan from "@/app_old/pages/EasyServices/GstLinks/Searchbypan";

const index = () => {
    return <Searchbypan />;
};

export default index;
export async function generateMetadata({ params }) {
    return {
        title: "search by pan",
    };
}
