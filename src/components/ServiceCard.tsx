import Image from "next/image";

export default function ServiceCard({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) {
  return (
    <div className="flex w-[13rem] flex-col items-center gap-3 bg-white dark:bg-zinc-800 rounded shadow shadow-zinc-400 dark:shadow-zinc-950 p-5 transition-transform hover:scale-105">
      <Image src={src} alt={title} width={50} height={50} className="dark:invert" />
      <div className="flex flex-col items-center">
      <h3 className="text-lg text-emerald-500 dark:text-emerald-400">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">{description}</p>
      </div>
    </div>
  );
}
