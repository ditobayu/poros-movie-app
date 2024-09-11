import Image from "next/image";
import { Button } from "../ui/button";

const IMAGE_API_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_API_BASE_URL;
export default function BackdropMovie({ movie }: { movie: MovieDetail }) {
  return (
    <div className="w-full h-[50vh] md:h-screen relative">
      <div className="relative w-full h-full">
        <Image
          src={`${IMAGE_API_BASE_URL}/original${movie.backdrop_path}`}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          alt={movie.title}
        />
        <div className="absolute bottom-0 text-white z-10 items-center justify-center w-full py-20 flex flex-col gap-4">
          <span className="text-4xl font-semibold">{movie.title}</span>
          <span className="px-8 text-center">{movie.overview}</span>
          <div className="flex flex-row gap-4 items-center">
            <Button variant={"destructive"}>Watch Now</Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black rounded-md"></div>
      </div>
    </div>
  );
}
