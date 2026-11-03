# frontend-tipo_ssr

Сайт tipo: Next.js (App Router) + React + Tailwind CSS. Страницы собираются в статический HTML
(`output: "export"`), чтобы поисковики видели готовый контент. Хостинг — GitHub Pages.

## Локально

Нужен Node.js 24 (`.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # статика в out/
npm run lint
```

Проверить собранную статику: `npx serve out`.

## Ограничения статического экспорта

На GitHub Pages нет сервера, поэтому не работают: cookies и заголовки на сервере, rewrites/redirects,
Server Actions, ISR, динамические роуты без `generateStaticParams()`, оптимизация `next/image`
(включено `images.unoptimized`). Данные из API для SEO-страниц забираются при сборке; всё личное
(вход, профиль) — запросами из браузера в клиентских компонентах.

## Деплой

`.github/workflows/deploy.yml` собирает сайт и публикует его в GitHub Pages при каждом пуше в `main`
(и вручную — Actions → Deploy to GitHub Pages → Run workflow).

Один раз в репозитории: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Адрес по умолчанию — `https://tipo-platform.github.io/frontend-tipo_ssr/`. Префикс пути workflow
берёт из `actions/configure-pages` и передаёт в `BASE_PATH`. Ссылки и ассеты через `next/link`
и `next/image` получают префикс сами; голые `<a href="/...">` и пути к файлам из `public/` — нет.

Свой домен: Settings → Pages → Custom domain + DNS-запись `CNAME` на `tipo-platform.github.io`
(для корня домена — `A`-записи GitHub). Префикс пути тогда станет пустым автоматически.
