import Image from "next/image";

export default function TeamCard({
  name,
  role,
  description,
}: {
  name: string;
  role: string;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-center w-[18rem] items-center border border-zinc-200 dark:border-zinc-700 rounded-xl shadow shadow-zinc-400 dark:shadow-zinc-950 p-5 bg-white dark:bg-zinc-800 hover:dark:bg-zinc-900 hover:bg-zinc-50 transition duration-300">
      <Image src={"/img/doctor.png"} alt="doctor" width={250} height={500} />
      <h2 className="mt-4 mb-1 text-xl font-semibold text-emerald-500 dark:text-emerald-400">
        {name}
      </h2>
      <p className="text-sm font-medium text-emerald-400 dark:text-emerald-300">
        {role}
      </p>
      <p className="text-center text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}
