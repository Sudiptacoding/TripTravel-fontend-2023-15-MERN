import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { UserProvider } from "../context/AuthContext";

const useMyBookings = () => {
    const { user, loader } = useContext(UserProvider)
    const axiosData = useAxios()
    const { isPending, error, data: allbookings, refetch } = useQuery({
        queryKey: ['bookingsdata'],
        enabled: !loader,
        queryFn: () =>
            axiosData.get(`/servicesbooking?email=${user?.email}`)
                .then(res => {
                    return (res.data)
                })
    })
    return { isPending, error, allbookings, refetch }
};

export default useMyBookings;
