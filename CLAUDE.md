# hard-cover

Личная читалка для iPhone и Mac, форк Readest (AGPL-3.0). Правила кода, дизайна и продукта апстрима лежат в `apps/readest-app/AGENTS.md`, `DESIGN.md`, `PRODUCT.md` и действуют и здесь.

- Апстрим подключён remote'ом `upstream`. Обновления: `git fetch upstream && git merge upstream/main`. Свои правки держать изолированными (новые файлы, тонкие точки встраивания), чтобы слияния не конфликтовали.
- Сабмодули при клоне не тянулись. Перед первой сборкой: `git submodule update --init --recursive` (среди них форк Tauri целиком).
- Импорт своих файлов и каталоги OPDS уже есть в апстриме: `apps/readest-app/src/app/library/components/ImportMenu.tsx`, `apps/readest-app/src/app/opds/`.
