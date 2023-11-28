import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useIsToureGuide = () => {
    const { user, loader } = useAuth()
    const axiosData = useAxios()
    const { isPending, error, data: isToureGide } = useQuery({
        queryKey: ['isToureGide', user?.email],
        enabled: !loader,
        queryFn: () =>
            axiosData.get(`/turegideIsValid/${user?.email}`)
                .then(res => {
                    return (res.data)
                })
    })
    return { isPending, error, isToureGide, user, loader }
};

export default useIsToureGuide;