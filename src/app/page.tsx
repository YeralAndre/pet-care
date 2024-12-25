import { ReserveButton } from "./components/Buttons";
import FeatureCard from "./components/FeatureCard";
import ServiceCard from "./components/ServiceCard";

export const metadata = {
  title: "Pet Care",
  description: "Pet Care is a pet store",
  keywords: ["pet", "store", "animal"],
};

export default async function HomePage() {
  const fetchData = await (
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
  ).json();
  console.log(fetchData);
  return (
    <section className="mt-10">
      <div className="flex flex-col items-center gap-3 mb-10">
        <h1 className="text-5xl text-emerald-500 dark:text-emerald-400">
          PetCare
        </h1>
        <h3 className="text-gray-600 dark:text-zinc-400 text-lg">
          Cuidamos con amor, sanamos con ciencia.
        </h3>
        <ReserveButton />
      </div>
      <div className="grid grid-cols-3 px-20">
        {[
          {
            title: "Cuidado Canino",
            description: "Atención especializada para tu mejor amigo",
          },
          {
            title: "Felinos",
            description: "Expertos en el cuidado de tu gato",
          },
          {
            title: "Exóticos",
            description: "Atención para todas las especies",
          },
        ].map((feature, index) => (
          <FeatureCard
            key={index}
            src="/img/icon.png"
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      <div className="flex flex-col items-center gap-7 my-20 bg-white dark:bg-zinc-800 p-10 mx-32 rounded shadow shadow-zinc-400 dark:shadow-zinc-950 transition-transform hover:scale-105">
        <h1 className="text-2xl text-emerald-500 dark:text-emerald-400">
          ¿Por qué elegirnos?
        </h1>
        <div className="grid grid-cols-2 gap-52">
          <ul className="flex flex-col list-disc gap-3">
            <li className="text-emerald-500 dark:text-emerald-400">
              <span className="text-zinc-600 dark:text-zinc-400">
                Equipo veterinario certificado
              </span>
            </li>
            <li className="text-emerald-500 dark:text-emerald-400">
              <span className="text-zinc-600 dark:text-zinc-400">
                Atención personalizada
              </span>
            </li>
            <li className="text-emerald-500 dark:text-emerald-400">
              <span className="text-zinc-600 dark:text-zinc-400">
                Programas preventivos
              </span>
            </li>
          </ul>
          <ul className="flex flex-col gap-3 list-disc">
            <li className="text-emerald-500 dark:text-emerald-400">
              <span className="text-zinc-600 dark:text-zinc-400">
                Tecnología de vanguardia
              </span>
            </li>
            <li className="text-emerald-500 dark:text-emerald-400">
              <span className="text-zinc-600 dark:text-zinc-400">
                Emergencias 24/7
              </span>
            </li>
            <li className="text-emerald-500 dark:text-emerald-400">
              <span className="text-zinc-600 dark:text-zinc-400">
                Asesoría integral
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center gap-7 my-10">
        <h1 className="text-2xl text-emerald-500 dark:text-emerald-400">
          Servicios Destacados
        </h1>
        <div className="grid grid-cols-4 gap-10">
        {[
          {
            title: "Consultas",
            description: "Chequeos completos",
          },
          {
            title: "Cirugía",
            description: "Procedimientos avanzados",
          },
          {
            title: "Nutrición",
            description: "Planes personalizados",
          },
          {
            title: "Rehabilitación",
            description: "Terapia integral",
          },
        ].map((service, i) => (
          <ServiceCard
            key={i}
            src="/img/icon.png"
            title={service.title}
            description={service.description}
          />
        ))}
        </div>
      </div>
    </section>
  );
}
