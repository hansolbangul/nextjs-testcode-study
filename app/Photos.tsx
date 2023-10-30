"use client";
import Image from "next/image";

import photoQuery from "@/apis/query/photos.query";

const PhotoItem = ({ photo }: { photo: Photo }) => {
  return (
    <div data-testid="photo">
      <Image src={photo.download_url} alt={photo.url} width={300} height={300} />
      <span>{photo.author}</span>
    </div>
  );
};

const Photos = () => {
  const { data: photos, isLoading, refetch } = photoQuery.getRandomPhotosQuery();

  if (isLoading)
    return (
      <>
        <div>loading</div>{" "}
        <button type="button" onClick={() => refetch()}>
          refetch
        </button>
      </>
    );

  return (
    <div className="max-w-3xl grid grid-cols-3 gap-3">
      {photos?.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default Photos;
