import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { UserProvider } from "../context/AuthContext";

const useUserRating = () => {
    const { user, loader } = useContext(UserProvider)
    const axiosData = useAxios()
    const { isPending, error, data: allcomment, refetch } = useQuery({
        queryKey: ['userreview'],
        enabled: !loader,
        queryFn: () =>
            axiosData.get(`/userreview?email=${user?.email}`)
                .then(res => {
                    return (res.data)
                })
    })
    return { isPending, error, allcomment, refetch }
};

export default useUserRating;