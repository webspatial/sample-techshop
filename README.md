## Setup

```bash
pnpm install
```

Install the following tools globally:

1. Xcode
2. visionOS simulator
<!-- 3. `pnpm add -g @webspatial/builder` -->

## Development

### For desktop/mobile platforms

```bash
pnpm dev
```

> Ensure the environment variable `XR_ENV` is empty when running this devserver

### For Vision Pro

Option A: open two terminals and run these two commands in each one:

```bash
XR_ENV=avp pnpm dev
```

> This environment-variable-enabled devserver can coexist with the devserver for desktop/mobile, using different ports automatically.

```bash
npm run dev:avp
```

Option B: open one terminal and run this all-in-one command:

```bash
npm run dev:all
```

## Distribution

### For desktop/mobile platforms

```bash
pnpm build
```

### For Vision Pro

Step 1:

```bash
cp .env.example .env
```

Fill in the Team ID, Username and Password for Apple Developer Program in the .env file.

Step 2:

```bash
pnpm build
```

Step 3:

```bash
pnpm build:avp
```

Or

```bash
pnpm publish:avp
```

### How to debug using WebSpatial SDK source code

Step 1: clone the WebSpatial SDK source code

```bash
git clone git@github.com:webspatial/webspatial-sdk.git
```

Step 2: change XRSDKBaseDir value in file 'internal.vite.config.ts'

```bash
const XRSDKBaseDir = "/path/to/your/XRSDK/";

```

Step 3: run the following command to start web project

```bash
npm run dev:internal
```


now you visit http://localhost:5201/ in you browser


Step 4: open XCode project in WebSpatial SDK source code, which is located in

```bash
YOUR_XRSDK/cli/template/visionOSApp
```

Step 5: change entry page of your project in XCode project

```bash
File:
YOUR_XRSDK/cli/template/visionOSApp/web-spatial/libs/webView/manifest.swift

Line 8


Change start_url
var start_url: String = "http://localhost:5201/"
```

Step 6
run you XCode project, it will open your web project in XCode simulator


Step 7: you can change your webspatial SDK source to see the effect immediately

Note: don't run npm run dev:avp, use npm run dev:internal instead

