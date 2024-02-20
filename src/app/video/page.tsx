export default function Video() {
  return (
    <video
      src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/f_auto:video,q_auto/v1/samples/sea-turtle`}
      autoPlay
      loop
      muted
      playsInline
      disableRemotePlayback
      className="object-cover h-full w-full"
    />
  );
}
