# htlTest

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### For the UI used tailwind css

### Approach:
### Setup firebase -
1. Created firebase project
2. Enable firebase store
3. SDK configrations

### Create firebase store collections
Collection name and ID name and respective fields

### Setup Vue 3 composition API with typescript(.ts)
Created UserForm.vue and also created five fields, percentage progress and debounce method
in commMethod.ts for handle auto save then imported in component. Initialize the firebase.

### Flow:
1. User interacts with the form by entering data in the input fields.
2. Each input change triggers the @input event handler, which in turn calls the save data funtion with help of debounce function.
3. The debounce function waits for a specified delay to ensure the user has finished typing or making changes. I'm using 1 second delay it may change according users needs.

4. After debounce save the data in firestore using Firestore's setDoc method. complete percentage also work accoringly.

That's all steps followed by me to achive the target.

Thank You!
