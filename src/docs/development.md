# Development Context

## Текущее состояние

Stage 0 завершён. Создан базовый каркас проекта.

### Реализовано
- Vite + React 19 + TypeScript
- Tailwind CSS v4 с PostCSS
- Алиасы @/ → src/
- Recharts, clsx установлены
- Prettier (semi: false) + ESLint
- Минимальная FSD: app/, features/, shared/, mocks/
- Публичные API через index.ts
- Git-репозиторий инициализирован, main ветка
- Запушено на GitHub: git@github.com:quterma/trading-mini-app.git

### Структура файлов
```
features/
  connect-wallet/ (ConnectWallet, useWallet)
  price-chart/ (PriceChart, usePriceData)
shared/
  ui/ (Button, Card)
  lib/ (formatters)
mocks/
  wallet.ts (address, balance)
  prices.ts (24 PricePoint[])
```

### Dev-сервер
`npm run dev` → localhost:5173
Работает корректно (предупреждение Node.js версии можно игнорировать)

### Следующие шаги
Реализация вёрстки согласно Figma, подключение моков, имитация real-time обновлений.
