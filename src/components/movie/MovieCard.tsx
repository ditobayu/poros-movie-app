import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="w-full h-80 relative flex flex-col"
    >
      <Image
        className="w-full h-80 object-cover rounded-lg"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        fill
      />
      <span className="absolute bottom-4 left-4 text-white font-semibold">
        {movie.title}
      </span>
    </Link>
  );
}
