import Image from "next/image";

export default function FeatureCard({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[80px] h-[80px] mb-5 bg-emerald-100 dark:bg-emerald-900 flex justify-center items-center rounded-full">
        <Image
          src={src}
          alt="Feature"
          width={50}
          height={50}
          className="border border-none rounded-full bg-cover dark:invert"
        />
      </div>
      <h3 className="my-2 text-lg text-emerald-600 dark:text-emerald-400 text-center">
        {title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-center">{description}</p>
    </div>
  );
}
