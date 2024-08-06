import E_library from "@/app_old/pages/OurProducts/E_library";

const page = () => {
    return <E_library />;
};

export default page;

export async function generateMetadata({ params }) {
    return {
        title: "e-library",
    };
}
