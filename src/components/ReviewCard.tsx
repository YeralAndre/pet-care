import Image from "next/image";

export default function ReviewCard({
  name,
  rating,
  comment,
}: {
  name: string;
  rating: number;
  comment: string;
}) {
  return (
    <div className="flex flex-col gap-3 bg-white dark:bg-zinc-800 rounded shadow shadow-zinc-400 dark:shadow-zinc-950 p-5 transition-transform hover:scale-105 w-[18rem]">
      <div className="flex justify-between gap-3">
        <h3 className="text-lg text-black dark:text-white">{name}</h3>
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, index) => (
            <Image
              src={"/img/star.svg"}
              alt="Star"
              width={20}
              height={20}
              key={index}
            />
          ))}
        </div>
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">{comment}</p>
    </div>
  );
}
