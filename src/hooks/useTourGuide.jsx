import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useTourGuide = () => {
    const axiosData = useAxios()
    const { isPending, error, data: allTourGuide, refetch } = useQuery({
        queryKey: ['useTourGuide'],
        queryFn: () =>
            axiosData.get(`/turegide`)
                .then(res => {
                    return (res.data)
                })
    })
    return { isPending, error, allTourGuide, refetch }
};

export default useTourGuide;