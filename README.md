# Vite + React + TypeScript + Sanity

A setup to reproduce a missing _publish_ button in Sanity Studio v3 when rendered by React 18 in `StrictMode` during development.

## Setup & Develop React 18

```shell
# add projectId to environment
echo "VITE_SANITY_PROJECT_ID=\"[PROJECT_ID]\"" >> .env.local

# install and run
npm i
npm run dev
// open browser at http://localhost:5173/desk/item
```

Select or create an item. The _publish_ button will not be visible for the Studio rendered inside React’s `StrictMode` (top).

## Setup & Build React 18

```shell
# add projectId to environment
echo "VITE_SANITY_PROJECT_ID=\"[PROJECT_ID]\"" >> .env.local

# install and run
npm i
npm run build
npm run preview
// open browser at http://localhost:4173/desk/item
```

Select or create an item. The _publish_ button will be visible in both Studio instances.

## Setup & Develop React 17

```shell
# add projectId to environment
echo "VITE_SANITY_PROJECT_ID=\"[PROJECT_ID]\"" >> .env.local

# checkout v17 setup
git checkout react-v17

# install and run
npm i
npm run dev
// open browser at http://localhost:5173/desk/item
```

Select or create an item. The _publish_ button will be visible in both Studio instances.
