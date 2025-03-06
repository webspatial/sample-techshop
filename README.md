## Setup

```bash
pnpm install
```

Install the following tools globally:

1. `pnpm add -g @webspatial/builder`
2. Xcode
3. visionOS simulator

## Development

### For desktop/mobile platforms

```bash
pnpm dev
```

### For Vision Pro

Open two terminals and run these two commands in each one:

```bash
XR_ENV=avp pnpm dev
```

```bash
pnpm dev:avp
```

## Distribution

### For desktop/mobile platforms

```bash
pnpm build
```

### For Vision Pro

```bash
cp .env.example .env
# Fill in the Team ID, Username and Password for Apple Developer Program in the .env file.
```

```bash
 pnpm build
```

Then

```bash
pnpm build:avp
```

Or

```bash
pnpm publish:avp
```
