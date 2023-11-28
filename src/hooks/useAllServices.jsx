import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllServices = () => {
    const axiosData = useAxios()
    const { isPending, error, data: allservices, refetch } = useQuery({
        queryKey: ['allServices'],
        queryFn: () =>
            axiosData.get(`/allservices`)
                .then(res => {
                    return (res.data)
                })
    })
    return { isPending, error, allservices, refetch }
};

export default useAllServices;