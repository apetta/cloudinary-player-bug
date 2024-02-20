import VideoPlayer from "../VideoPlayer";

export default function Cloudinary() {
  return (
    <VideoPlayer
      controls={false}
      autoPlay
      muted
      playsinline
      loop
      fluid
      id="samples/sea-turtle"
      src="samples/sea-turtle"
      height="auto"
      width="auto"
      className="object-cover w-full h-full"
    />
  );
}
