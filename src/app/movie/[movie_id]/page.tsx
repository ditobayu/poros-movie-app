import BackdropMovie from "@/components/movie/BackdropMovie";
import DetailSection from "@/components/movie/DetailSection";
import { getDetailMovie } from "@/lib/movie";

export default async function MovieDetail({
  params,
}: {
  params: { movie_id: number };
}) {
  const movieDetail: MovieDetail = await getDetailMovie(params.movie_id);
  return (
    <div className="bg-black text-white">
      <BackdropMovie movie={movieDetail} />
      <DetailSection movie={movieDetail} />
    </div>
  );
}
