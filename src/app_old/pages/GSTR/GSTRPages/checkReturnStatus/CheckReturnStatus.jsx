import PageContainer from "../../../../components/pageLayouts/PageContainer"
import Head2 from "../../../../components/pageLayouts/Head2";

import query from "../../../../hooks/query";

export default function CheckReturnStatus() {
    const localStore_currentUser = JSON.parse(localStorage.currentUser)

    const {isLoading, respData,isError,error}=query.post(
        "https://api.itaxeasy.com/gst/return/track",
        {
            gstin: localStore_currentUser.user.GSTIN.GSTIN_number,
            username: localStore_currentUser.user.GSTIN.gst_portal_username,
            financialYear: "FY 2019-20"
        },
        {
            headers: {
            Authorization: `Bearer ${localStore_currentUser.token}`,
            },
        }
    )
    if (isError) {
        console.log(error)
    }
    return (
		<PageContainer>
			<Head2>Check Return Status</Head2>
			<main className='py-4'>
                
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">Return type</th>
                                <th scope="col" class="px-6 py-3">Period</th>
                                <th scope="col" class="px-6 py-3">Mode of Filling</th>
                                <th scope="col" class="px-6 py-3">Date of Filling</th>
                                <th scope="col" class="px-6 py-3">ARN</th>
                                <th scope="col" class="px-6 py-3">Valid</th>
                                <th scope="col" class="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isLoading?(
                                    <div class=" text-centerbg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        loading
                                    </div>
                                ): isError ? (
                                    <h6>Error occurred while fetching data</h6>
                                ):(
                                respData?.data.EFiledlist.map((el, key) => (
                                <tr key={key} class="bg-white border-b dark:-bg--clr-neutral-900 dark:border-gray-700">
                                    <td class="px-6 py-4">{el.rtntype}</td>
                                    <td class="px-6 py-4">{el.mof}</td>
                                    <td class="px-6 py-4">{el.ret_prd}</td>
                                    <td class="px-6 py-4">{el.dof}</td>
                                    <td class="px-6 py-4">{el.arn}</td>
                                    <td class="px-6 py-4">{el.valid}</td>
                                    <td class="px-6 py-4">{el.status}</td>
                                </tr>
                                ))
                                )
                            }
                        </tbody>
                    </table>
                </div>
			</main>
		</PageContainer>
	);
}
