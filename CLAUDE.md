# frontend-tipo_ssr

Префикс задач: `Front-Tipo-SSR-{номер}`, например `Front-Tipo-SSR-00001`.

- Next.js 16 со статическим экспортом (`output: "export"`) под GitHub Pages: никаких фич, которым нужен
  сервер (см. README). Версия Next новее, чем знания модели, — перед кодом читать
  `node_modules/next/dist/docs/`.
- `cacheComponents`/PPR несовместимы с экспортом — не включать.
- Секретов во фронте нет: всё, что попадает в сборку, публично.
- Перед коммитом: `npm run lint` и `npm run build`.
