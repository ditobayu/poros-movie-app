import DetailContentSection from "./DetailContentSection";
import ProductCompanyCard from "./ProductCompanyCard";

export default function DetailSection({ movie }: { movie: MovieDetail }) {
  return (
    <div className="p-8 grid grid-rows-6 md:grid-rows-3 grid-cols-6 grid-flow-col gap-4">
      <div className="col-span-6 md:col-span-4 bg-slate-900 rounded-2xl p-8">
        <DetailContentSection label="Description" content={movie.overview} />
      </div>
      <div className="col-span-6 md:col-span-4 row-span-2  bg-slate-900 rounded-2xl p-8 flex flex-col gap-4">
        <span className="font-semibold">Production Companies</span>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 ">
          {movie.production_companies?.map((company) => {
            return <ProductCompanyCard key={company.id} company={company} />;
          })}
        </div>
      </div>
      <div className="row-span-3 col-span-6 md:col-span-2  bg-slate-900 rounded-2xl p-8 flex flex-col gap-4">
        <DetailContentSection
          label="Release Date"
          content={movie.release_date}
        />
        <DetailContentSection
          label="Origin Country"
          content={movie.origin_country[0]}
        />
        <DetailContentSection label="Popularity" content={movie.popularity} />
        <DetailContentSection label="Revenue" content={movie.revenue} />
        <DetailContentSection label="Tagline" content={movie.tagline} />
      </div>
    </div>
  );
}
