# Development Context

## Текущее состояние

**Stage 1 (Wallet Domain)** завершён. Базовая функциональность кошелька реализована.

### Реализовано

#### Инфраструктура
- Vite + React 19 + TypeScript
- Tailwind CSS v4 с @tailwindcss/postcss
- Алиасы @/ → src/
- Recharts, clsx установлены
- Prettier (semi: false) + ESLint
- Vitest + Testing Library + jsdom
- Минимальная FSD: app/, features/, shared/, mocks/
- Публичные API через index.ts
- Type-only imports для типов
- Git-репозиторий, артефакты Vite удалены

#### Wallet Feature
- Тип WalletState (isConnected, address?, balance?)
- MOCK_WALLET с generateRandomBalance
- Хук useMockWallet с connect/disconnect
- UI ConnectWallet с условным рендерингом

### Структура файлов
```
features/
  connect-wallet/
    ui/ConnectWallet.tsx
    model/useMockWallet.ts, types.ts, useWallet.ts
    index.ts
  price-chart/
    ui/PriceChart.tsx
    model/usePriceData.ts
    index.ts
shared/
  ui/ (Button, Card + index.ts)
  lib/ (formatters + index.ts)
mocks/
  wallet.ts (MOCK_WALLET, generateRandomBalance)
  prices.ts (mockPrices)
  index.ts
```

### Команды
```bash
npm run dev       # localhost:5173
npm run lint      # ESLint проверка
npm run build     # Сборка проекта
npm run test      # Vitest watch mode
npm run test:run  # Vitest разовый запуск
npm run test:ui   # Vitest UI
```

### Следующие шаги
Stage 2: реализация price feed domain, интеграция Recharts, имитация real-time обновлений цен.
