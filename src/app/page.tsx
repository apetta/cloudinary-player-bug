import Link from "next/link";

function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4 text-center">
      <Link
        href="/cloudinary"
        className="bg-blue-500 p-4 rounded-md text-white w-48"
      >
        Cloudinary
      </Link>
      <Link
        href="/video"
        className="bg-blue-500 p-4 rounded-md text-white w-48"
      >
        Video
      </Link>
    </div>
  );
}
export default Home;
