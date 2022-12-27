# coxit-test

# IMPORTANT INFORMATION!!!
## There are some important points and nuances in this task:
1. The server with the API that was provided is not properly configured to handle crossdomain requests. Thus, all requests from localhost will be failed with CORS error. To avoid this, you need to configure the Access-Control-Allow-Origin and Access-Control-Allow-Headers in the response on the server. In the client application, I got around this by using an online proxy that proxies calls to the API and thus bypasses CORS. You can see this in the src/common/http.ts file. I can't vouch for the third party services, so you can try one of the two, 27.12.2022 it works.
2. I didn't find a field in the API response that contains the album name. The track url also doesn't seem to contain the album name. The only place I can get it from (maybe) is by using the Apple Music API. But I think that's impractical and beyond the scope of this test case. So I left the placeholder for this task.


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
