import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useIsAdmin = () => {
    const { user, loader } = useAuth()
    const axiosData = useAxios()
    const { isPending, error, data: isAdmin } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loader,
        queryFn: () =>
            axiosData.get(`/user/${user?.email}`)
                .then(res => {
                    return (res.data)
                })
    })
    return { isPending, error, isAdmin, user, loader }
};

export default useIsAdmin;