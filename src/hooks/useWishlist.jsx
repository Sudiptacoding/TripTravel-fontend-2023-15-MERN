import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { UserProvider } from "../context/AuthContext";

const useWishlist = () => {
    const { user, loader } = useContext(UserProvider)
    const axiosData = useAxios()
    const { isPending, error, data: allwishlist, refetch } = useQuery({
        queryKey: ['allwishlist'],
        enabled: !loader,
        queryFn: () =>
            axiosData.get(`/loveservices/${user?.email}`)
                .then(res => {
                    return (res.data)
                })
    })
    return { isPending, error, allwishlist, refetch }
};

export default useWishlist;