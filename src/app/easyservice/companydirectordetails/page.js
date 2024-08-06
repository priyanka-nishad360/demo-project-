import DirectorDetails from "@/app_old/pages/EasyServices/MCA/DirectorDetails";

const index = () => {
    return <DirectorDetails />;
};

export default index;
export async function generateMetadata({ params }) {
    return {
        title: "company director details",
    };
}
