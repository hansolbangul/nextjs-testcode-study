import { setSearchParams } from "@/utils/setSearchParams";

const baseUrl = "https://picsum.photos/v2";

const getRandomPhotos = async (page: string = "1", limit: string = "10"): Promise<Photo[]> => {
  const params = { page, limit };
  const url = setSearchParams(`${baseUrl}/list`, params);

  const response = await fetch(url);
  return response.json();
};

export default {
  getRandomPhotos,
};
