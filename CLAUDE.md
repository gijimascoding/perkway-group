# perkway-group

Marketing site for Perkway Group. Next.js 15 app router, Tailwind v4 tokens in
`src/app/globals.css`, facts in `src/data/company.ts`. Deploys to Vercel on
push to `main`. `npm run build` is the only automated gate.

## Design System
Always read DESIGN.md before making any visual or UI decisions.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code that doesn't match DESIGN.md.

## Testing
Run `npm test` for unit and component tests (`tests/unit/`) and
`npm run build && npm run test:e2e` for browser tests (`tests/e2e/`).
See TESTING.md. 100% test coverage is the goal: when you write a function,
write its test; when you fix a bug, write a regression test; when you add
error handling, write a test that triggers the error; when you add a
conditional, test both paths. Never commit code that makes existing tests fail.
