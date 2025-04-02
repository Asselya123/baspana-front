import { useQuery } from "@tanstack/react-query";
import { axiosAuthorizedApi } from "@/api";
import { Apartment } from "@/types";

const getApartments = async () => {
  const response = await axiosAuthorizedApi.get("/api/apartments/");
  return response.data;
};

export const useGetApartments = () => {
  return useQuery<Apartment[]>({
    queryKey: ["apartments"],
    queryFn: () => getApartments(),
  });
};
