import MergePdf from "@/app_old/pages/EasyServices/Converter/MergePdf";

const index = () => {
    return <MergePdf />;
};

export default index;
export async function generateMetadata({ params }) {
    return {
        title: "merge pdf",
    };
}
