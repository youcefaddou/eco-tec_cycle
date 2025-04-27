import Link from "next/link";

export default function BentoCard({ image, title, link }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 flex flex-col cursor-pointer m-1">
      <div className="h-32 md:h-40 w-full overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="p-3 md:p-5 flex-1 flex flex-col justify-between">
        <h3 className="text-base md:text-lg font-bold text-green-800 mb-2">{title}</h3>
        <Link href={link} className="mt-auto text-green-600 font-semibold hover:underline text-sm md:text-base">En savoir plus</Link>
      </div>
    </div>
  );
} 