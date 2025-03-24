# TechShop Demo

Demo for the full process and final use of WebSpatial

## Setup

Run this command to reinstall dependencies after cloning or updating the repository:

```bash
pnpm install:clean
```

Install the following tools globally:

1. Xcode
2. visionOS simulator
<!-- 3. `pnpm add -g @webspatial/builder` -->

Then, create a `.env` file:

```bash
cp .env.example .env
```

## Development

### Only For Desktop/Mobile Platforms

```bash
pnpm dev
```

> Ensure the environment variable `XR_ENV` is empty when running this dev server

### For Both Desktop/Mobile Platforms and visionOS

#### Step 1: Web Builder

Option A: open two terminals and run these two commands in each one:

```bash
pnpm dev
```

```bash
pnpm dev:avp
```

> This environment-variable-enabled devserver can coexist with the devserver for desktop/mobile, using different ports and base automatically.

Option B: open one terminal and run this all-in-one command:

```bash
pnpm dev:all
```

#### Step 2: WebSpatial Builder

Fill in the `$XR_DEV_SERVER` in the .env file.

```
XR_DEV_SERVER=http://localhost:[port from `pnpm dev:avp`]/webspatial/avp/
XR_PRE_SERVER=
XR_PROD_SERVER=
```

Then:

```bash
pnpm run:avp
```

## Distribution

### Only For Desktop/Mobile Platforms

```bash
pnpm build
```

### For Both Desktop/Mobile Platforms and visionOS

Step 1:

```bash
pnpm build
```

Step 2: fill in the Bundle ID, Team ID, Username and Password for Apple Developer Program in the .env file.

Step 3:

```bash
pnpm build:avp
```

Step 4: fill in the Version, Username and Password for Apple Developer Program in the .env file.

Step 5:

```bash
pnpm publish:avp
```

# How to debug using WebSpatial SDK source code

See [Debug with SDK source code](./debug.md)
