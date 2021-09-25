This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## NextJS Getting Started

For installing any packages inside the docker container use the following,

```bash
docker compose exec webapp yarn install <package-name>
```

Also, if u get any `ModuleNotFoundError` use the same command in order to install the missing one inside container.