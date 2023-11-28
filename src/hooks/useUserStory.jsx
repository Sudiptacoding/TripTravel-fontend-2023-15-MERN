import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useUserStory = () => {
    const axiosData = useAxios()
    const { isPending, error, data: allStory, refetch } = useQuery({
        queryKey: ['alluserStory'],
        queryFn: () =>
            axiosData.get(`/userstory`)
                .then(res => {
                    return (res.data)
                })
    })
    return { isPending, error, allStory, refetch }
};

export default useUserStory;