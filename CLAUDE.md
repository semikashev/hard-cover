# hard-cover

Личная читалка для iPhone и Mac, форк Readest (AGPL-3.0). Правила кода, дизайна и продукта апстрима лежат в `apps/readest-app/AGENTS.md`, `DESIGN.md`, `PRODUCT.md` и действуют и здесь.

- Апстрим подключён remote'ом `upstream`. Обновления: `git fetch upstream && git merge upstream/main`. Свои правки держать изолированными (новые файлы, тонкие точки встраивания), чтобы слияния не конфликтовали.
- Сабмодули при клоне не тянулись. Перед первой сборкой: `git submodule update --init --recursive` (среди них форк Tauri целиком).
- Импорт своих файлов и каталоги OPDS уже есть в апстриме: `apps/readest-app/src/app/library/components/ImportMenu.tsx`, `apps/readest-app/src/app/opds/`.
- Шрифт чтения по умолчанию в форке Golos Text (хорошая кириллица). Тест `src/__tests__/styles/golos-default-font.test.ts` ловит откат дефолта при слиянии с апстримом.
- Тесты запускать с env проекта: `pnpm exec dotenv -e .env -e .env.test.local -- vitest run <файл>` из `apps/readest-app`. CI апстрима на Node 24; на Node 26 встроенный `localStorage` перекрывает jsdom и роняет сотни тестов, лечится `NODE_OPTIONS=--no-experimental-webstorage` (и для pre-push хука тоже).
- `pnpm dev-web` переписывает блок nextjs-agent-rules в `apps/readest-app/AGENTS.md`; это изменение не коммитить.
