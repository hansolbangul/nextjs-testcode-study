import Photos from "./Photos";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center pt-10">
      <h2 className="text-2xl font-bold mb-4">랜덤 사진</h2>
      <Photos />
    </div>
  );
}
