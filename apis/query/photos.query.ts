import { UseQueryResult, useQuery } from "react-query";
import photoApi from "../photos.api";

const getRandomPhotosQuery = (page: string = "1", limit: string = "10"): UseQueryResult<Photo[]> => {
  return useQuery({
    queryKey: ["photos", page, limit],
    queryFn: async () => photoApi.getRandomPhotos(),
    refetchOnWindowFocus: true,
  });
};

export default { getRandomPhotosQuery };
