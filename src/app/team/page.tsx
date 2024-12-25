import ReviewCard from "@/components/ReviewCard";
import TeamCard from "@/components/TeamCard";

const team = [
  {
    name: "Dra. Ana Martínez",
    role: "Veterinaria Principal",
    bio: "Especialista en medicina felina con más de 10 años de experiencia.",
  },
  {
    name: "Dr. Carlos Ruiz",
    role: "Cirujano Veterinario",
    bio: "Experto en cirugía de tejidos blandos y ortopedia veterinaria.",
  },
  {
    name: "Laura Sánchez",
    role: "Técnica Veterinaria",
    bio: "Especializada en cuidados intensivos y emergencias.",
  },
];

const reviews = [
  {
    id: 1,
    name: "María García",
    rating: 5,
    comment: "Excelente atención para mi perrito. ¡Muy recomendado!",
  },
  {
    id: 2,
    name: "Juan Pérez",
    rating: 4,
    comment: "Buen servicio y precios razonables.",
  },
  {
    id: 3,
    name: "Ana Martínez",
    rating: 5,
    comment: "El doctor fue muy amable y paciente con mi gato nervioso.",
  },
];

export default function TeamPage() {
  return (
    <section className="my-10">
      <div className="flex flex-col">
        <h1 className="flex justify-start text-4xl text-emerald-500 dark:text-emerald-400">
          Nuestro Equipo
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-10 my-10">
            {team.map((member) => (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                description={member.bio}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="flex justify-start text-2xl text-emerald-500 dark:text-emerald-400">
          Lo que dicen nuestros clientes
        </h1>
        <div className="grid grid-cols-3 gap-10 my-5 px-10">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              rating={review.rating}
              comment={review.comment}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
