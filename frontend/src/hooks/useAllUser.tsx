// import { apiUrl } from "@/utils/axiosInstance";
// import { fetcher } from "@/utils/fetcher";
// import useSWR, { mutate } from "swr";

// export function useAllUsers() {
//     const { data: users, error, isLoading } = useSWR<any>(`/listeUser`,
//         fetcher,
//         {
//             onError: (error) => {
//                 console.error("An error occurred during fetch", error)
//             },
//         },
//     );


//     const updateUserData = async () => {
//         try {
//             await mutate(`${apiUrl}/all_user`);
//         } catch (error) {
//             console.error("Error updating user data", error);
//         }
//     }

//     return {
//         users: users?.data || [],
//         isLoading,
//         error: error?.message || null,
//         updateUserData
//     };
// }