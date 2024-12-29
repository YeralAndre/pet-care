export default function ContactPage() {
  return (
    <section className="my-10 flex flex-col md:flex-row justify-between gap-5 items-center">
      <div>
        <h1 className="text-4xl text-emerald-500 dark:text-emerald-400">
          Contacto
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 my-3">
          Estamos aquí para ayudarte. Contáctanos para cualquier consulta.
        </p>
        <div className="flex gap-5 my-5">
          <div className="bg-pin-light dark:bg-pin-dark w-6 h-6" />
          <div>
            <h3 className="dark:text-white">Ubicación</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Av. Principal 123
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              San Francisco, CA 94103
            </p>
          </div>
        </div>
        <div className="flex gap-5 my-5">
          <div className="bg-clock-light dark:bg-clock-dark w-6 h-6" />
          <div>
            <h3 className="dark:text-white">Horario</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Lunes a Viernes: 9:00 AM - 6:00 PM
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Sabados: 10:00 AM - 2:00 PM
            </p>
          </div>
        </div>
        <div className="flex gap-5 my-5">
          <div className="bg-phone-light dark:bg-phone-dark w-6 h-6" />
          <div>
            <h3 className="dark:text-white">Teléfono</h3>
            <p className="text-zinc-600 dark:text-zinc-400">(123) 456-7890</p>
          </div>
        </div>
        <div className="flex gap-5 my-5">
          <div className="bg-mail-light dark:bg-mail-dark w-6 h-6" />
          <div>
            <h3 className="dark:text-white">Correo electr&oacute;nico</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              contacto@petcare.com
            </p>
          </div>
        </div>
      </div>
      <div className="border-zinc-200 dark:border-zinc-700 rounded-xl shadow shadow-zinc-400 dark:shadow-zinc-950 p-5 transition-transform hover:scale-105 bg-white dark:bg-zinc-800">
        <h2 className="text-xl text-emerald-500 dark:text-emerald-400">
          Envíanos un mensaje
        </h2>
        <form>
          <div className="my-5 flex flex-row gap-5">
            <div>
              <label className="text-black dark:text-white" htmlFor="name">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full my-1 h-10 border border-zinc-200 dark:border-zinc-700 rounded bg-zinc-50 dark:bg-zinc-900 px-2 placeholder:text-zinc-500 dark:placeholder:text-zinc-400 text-black dark:text-white text-sm"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="text-black dark:text-white" htmlFor="name">
                Teléfono
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full my-1 h-10 border border-zinc-200 dark:border-zinc-700 rounded bg-zinc-50 dark:bg-zinc-900 px-2 placeholder:text-zinc-500 dark:placeholder:text-zinc-400 text-black dark:text-white text-sm"
                placeholder="Tu tel&eacute;fono"
              />
            </div>
          </div>
          <div className="my-5">
            <label className="text-dark dark:text-white" htmlFor="email">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full my-1 h-10 border border-zinc-200 dark:border-zinc-700 rounded bg-zinc-50 dark:bg-zinc-900 px-2 placeholder:text-zinc-500 dark:placeholder:text-zinc-400 text-black dark:text-white text-sm"
              placeholder="example@email.com"
            />
          </div>
          <div className="my-5">
            <label className="text-dark dark:text-white">Asunto</label>
            <input
              type="text"
              id="issue"
              name="issue"
              className="w-full my-1 h-10 border border-zinc-200 dark:border-zinc-700 rounded bg-zinc-50 dark:bg-zinc-900 px-2 placeholder:text-zinc-500 dark:placeholder:text-zinc-400 text-black dark:text-white text-sm"
              placeholder="Asunto del mensaje"
            />
          </div>
          <div className="my-5">
            <label className="text-black dark:text-white" htmlFor="message">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full my-1 h-28 border border-zinc-200 dark:border-zinc-700 rounded bg-zinc-50 dark:bg-zinc-900 p-2 placeholder:text-zinc-500 dark:placeholder:text-zinc-400 text-black dark:text-white text-sm"
              placeholder="Escribe tu mensaje"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full h-10 bg-emerald-500 dark:bg-emerald-400 text-white rounded"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
