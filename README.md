# TechShop Demo for WebSpatial

<div align="center">
  <img src="assets/logo.png" alt="WebSpatial Logo" width="400"/>
</div>

<div align="center" style="width: 100%; max-width: 860px;">
  <img src="assets/techshop-desktop.png" alt="TechShop Desktop" width="800"/>
  <img src="assets/techshop-small.png" alt="TechShop Small" width="120"/>
  <img src="assets/techshop-phone.png" alt="TechShop Phone" width="120"/>
  <img src="assets/techshop-pad.png" alt="TechShop Pad" width="210"/>
  <img src="assets/techshop-spatial.png" alt="TechShop Spatial" width="800"/>
</div>

## Setup

Run this command to reinstall dependencies after cloning or updating the repository:

```bash
pnpm install:clean
```

Install the following tools globally:

1. Xcode
2. visionOS simulator
<!-- 3. `pnpm add -g @webspatial/builder` -->

Then, create a `.env.local` file:

```bash
cp .env.example .env.local
```

## Development

### Only For Desktop/Mobile Platforms

```bash
pnpm dev
```

> Ensure the environment variable `XR_ENV` is empty when running this dev server

### For Both Desktop/Mobile Platforms and visionOS

#### Step 1: Web Build Tool

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

Fill in the `$XR_DEV_SERVER` in the .env.local file.

```bash
XR_DEV_SERVER=http://localhost:[port from `pnpm dev:avp`]/webspatial/avp/
XR_PRE_SERVER=
XR_PROD_SERVER=
```

Then:

```bash
pnpm run:avp
```

## WebSpatial Documentation

- [Table of Contents](https://github.com/webspatial/webspatial-sdk/blob/main/docs/en/README.md)
- [Introduction](https://github.com/webspatial/webspatial-sdk/blob/main/docs/en/introduction/README.md)
- [Quick Start](https://github.com/webspatial/webspatial-sdk/blob/main/docs/en/quick-start/README.md)
- [Core Concepts](https://github.com/webspatial/webspatial-sdk/blob/main/docs/en/core-concepts/README.md)
- [Development Guide](https://github.com/webspatial/webspatial-sdk/blob/main/docs/en/development-guide/README.md)
