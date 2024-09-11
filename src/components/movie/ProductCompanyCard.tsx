import Image from "next/image";

export default function ProductCompanyCard({
  company,
}: {
  company: ProductionCompany;
}) {
  return (
    <div className="flex flex-col gap-2 justify-between bg-slate-800 py-4 px-2 rounded-xl">
      <div className="w-full aspect-square relative flex flex-col">
        <Image
          className="object-contain rounded-lg"
          src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
          alt={company.name}
          fill
        />
      </div>
      <span className="text-center">{company.name}</span>
    </div>
  );
}
