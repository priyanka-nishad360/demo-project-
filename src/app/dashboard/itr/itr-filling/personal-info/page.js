import ITRPresonalInfo from "@/app_old/pages/ITR/ITRPresonalInfo";
import { getUserProfile } from "@/hooks/authProvider";
export default async function page() {
    try {
        const {response} = await getUserProfile();
        if (!response) {
            return (
                <p>Not found</p>
            )
        }
        return (
            <ITRPresonalInfo userProfile={response?.data?.user}/>
        );
    } catch (error) {
        console.log(error)
        return (
            <ITRPresonalInfo/>
        );
    }

    
}