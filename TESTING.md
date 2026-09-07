# Testing

100% test coverage is the key to great vibe coding. Tests let you move fast,
trust your instincts, and ship with confidence. Without them, vibe coding is
just yolo coding. With tests, it's a superpower.

## Stack

- Vitest 3 with jsdom and Testing Library for unit and component tests
- Playwright for browser tests against a production build

## Run

```bash
npm test            # unit + component tests, tests/unit/**
npm run test:watch  # same, watching
npm run build && npm run test:e2e   # browser tests, tests/e2e/**, starts `next start -p 3123`
```

CI runs all three on every push to main and every pull request
(`.github/workflows/test.yml`).

## Layers

- **Unit** (`tests/unit/*.test.ts`): the data and metadata builders in
  `src/data/` and `src/app/seo.ts`, `src/app/structured-data.ts`. Pure
  functions, no DOM.
- **Component** (`tests/unit/*.test.tsx`): client components rendered with
  Testing Library. Mock `fetch`; never hit Web3Forms.
- **Browser** (`tests/e2e/*.spec.ts`): whole pages on desktop and phone.
  Console must stay clean; every nav route must answer 200.

## Conventions

- One `describe` per module, `it` names say what the code does, not "works".
- Assert behaviour, never `toBeDefined`.
- Regression tests carry the issue id and the QA report path in a comment.
- Tests live outside `src/`, so `tsconfig.json` excludes them from the app build.
