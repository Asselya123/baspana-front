import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosAuthorizedApi } from "@/api";
import { Application } from "@/types";

const deleteApplication = async (id: string) => {
  const response = await axiosAuthorizedApi.delete(`/api/applications/${id}/`);
  return response.data;
};

export const useDeleteApplication = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteApplication(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
    },
  });
};

const getApplications = async () => {
  const response = await axiosAuthorizedApi.get("/api/applications/");
  return response.data;
};

export const useGetApplications = () => {
  return useQuery<Application[]>({
    queryKey: ["applications"],
    queryFn: () => getApplications(),
  });
};
