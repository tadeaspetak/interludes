# Welcome to Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Notes

- [Set up your VS Code with Mantine](https://mantine.dev/getting-started/#set-up-vs-code).
- If the css module imports are not working well for you, set the TS version properly as described [here](https://puruvj.dev/blog/css-modules-typescript-intellisense).
- The `typescript-plugin-css-modules` plugin provides IDE support but not compilation support, so even when VS Code is happy, `tsc` is not. We use `typed-css-modules` in the `prelint:tsc` script to generate type defintions for CSS modules.
