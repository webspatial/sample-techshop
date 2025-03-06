## Setup

```bash
pnpm install
```

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
pnpm build
cp .env.example .env
# Fill in the Team ID, Username and Password for Apple Developer Program in the .env file.
```

Then

```bash
pnpm build:avp
```

Or

```bash
pnpm publish:avp
```
