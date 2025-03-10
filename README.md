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
