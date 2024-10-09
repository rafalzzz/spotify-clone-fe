This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[`Demo`](https://spotify-clone-fe-ten.vercel.app/)

This is a copy of the Spotify app using the iTunes API. The application is not fully finished (the home page is mostly done, but not completely, as there are still many things that could be improved, as well as some minor bugs that need to be fixed).

The backend with the registration, login, password reset, and change functions for the application is located in a separate repository and is written in ASP.NET Core.

I stopped working on the application due to a lack of free time. However, I do not rule out returning to it someday.

## Getting Started

First, install libraries using:

```bash
npm install
# or
yarn install
```

and then:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Env file

.env.local
```bash
NEXT_PUBLIC_API_URL=https://localhost:7173/api
NEXT_PUBLIC_API_ITUNES=https://itunes.apple.com
```
