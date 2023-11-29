import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { UserProvider } from "../context/AuthContext";

const useAssignToure = () => {
    const { user, loader } = useContext(UserProvider)
    const axiosData = useAxios()
    const { isPending, error, data: allAssigntour, refetch } = useQuery({
        queryKey: ['useAssignToure'],
        enabled: !loader,
        queryFn: () =>
            axiosData.get(`/assigntour?email=${user?.email}`)
                .then(res => {
                    return (res.data)
                })
    })
    return { isPending, error, allAssigntour, refetch }
};

export default useAssignToure;