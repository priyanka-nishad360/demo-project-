import SearchTan from "@/app_old/pages/EasyServices/IncomeTaxLinks/SearchTan";

const index = () => {
    return <SearchTan />;
};

export default index;
export async function generateMetadata({ params }) {
    return {
        title: "search tan",
    };
}
