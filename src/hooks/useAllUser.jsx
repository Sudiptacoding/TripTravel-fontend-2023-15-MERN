import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useAllUser = () => {
    const axiosData = useAxios()
    const { isPending, error, data: alluser, refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: () =>
            axiosData.get(`/allUsers`)
                .then(res => {
                    return (res.data)
                })
    })
    return { isPending, error, alluser, refetch }
};

export default useAllUser;