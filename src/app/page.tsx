import Image from "next/image";
import comma from "@/assets/comma.webp";
import wordmark from "@/assets/wordmark.webp";

const features = [
  {
    title: "Встречи",
    text: "Карта, календарь и карточки со свайпами.",
    icon: (
      <>
        <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
        <path d="M15 5.764v15" />
        <path d="M9 3.236v15" />
      </>
    ),
  },
  {
    title: "Чаты",
    text: "Видео перед встречей и чат участников.",
    icon: (
      <>
        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" />
        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
      </>
    ),
  },
  {
    title: "Профиль",
    text: "Имя, аватар и фото со встреч.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="10" r="3" />
        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
      </>
    ),
  },
];

export default function Home() {
  return (
    <div className="relative isolate flex min-h-svh flex-1 flex-col overflow-hidden">
      {/* Фон как у экрана приветствия: тёмный с лаймовым подтоном и лаймовой дугой справа внизу */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_0%,#18200f_0%,#0d110b_45%,#0a0a0a_100%)]" />
        <div className="absolute -right-[200px] -bottom-[300px] size-[420px] lg:-right-[360px] lg:-bottom-[560px] lg:size-[960px] rounded-full bg-[radial-gradient(circle_at_30%_25%,#e8ff8a_0%,#cdfa00_35%,#9bbf00_100%)] shadow-[0_0_120px_rgb(205_250_0/0.35)]" />
      </div>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8 sm:px-10 sm:pt-10">
        <Image src={wordmark} alt="tipo," priority className="h-auto w-28 sm:w-36" />
        <span className="text-xs font-semibold tracking-[0.2em] text-ink-2">БЕТА</span>
      </header>

      <main className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="animate-rise">
          <div className="flex items-center justify-between gap-6 lg:block">
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] font-bold tracking-[-0.04em]">
              Типо
              <br />
              <span className="text-lime">встретимся?</span>
            </h1>
            <Image
              src={comma}
              alt=""
              className="h-auto w-20 shrink-0 animate-float drop-shadow-[0_16px_40px_rgb(205_250_0/0.25)] lg:hidden"
            />
          </div>

          <p className="mt-6 max-w-md text-lg text-ink-2 sm:text-xl">
            Встречи с людьми рядом. Это бета Tipo — вот что уже работает.
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-4">
            {features.map((f) => (
              <li key={f.title} className="flex gap-4 sm:flex-col sm:gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className="size-7 shrink-0 text-lime"
                >
                  {f.icon}
                </svg>
                <div>
                  <h2 className="font-semibold tracking-tight">{f.title}</h2>
                  <p className="mt-1 text-sm text-ink-2">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-sm text-ink-3">Возможны ошибки, с VPN бывают проблемы.</p>
        </section>

        <div className="relative hidden justify-center lg:flex">
          <div aria-hidden className="absolute top-1/2 left-1/2 size-80 -translate-1/2 rounded-full bg-lime/20 blur-[90px]" />
          <Image
            src={comma}
            alt="Запятая tipo"
            priority
            className="relative h-auto w-[min(26rem,32vw)] animate-float"
          />
        </div>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-6 pb-8 text-xs text-ink-3 sm:px-10">
        © {new Date().getFullYear()} tipo
      </footer>
    </div>
  );
}
