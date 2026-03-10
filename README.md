# test-git

React (Vite) demo repo to practice an enterprise Git workflow.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Suggested workflow (PR-based)

```bash
git checkout main
git pull
git checkout -b feat/your-feature
# make changes
git add -A
git commit -m "feat: ..."
git push -u origin feat/your-feature
```
