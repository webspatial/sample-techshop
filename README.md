## Setup

```bash
pnpm install
```

## Development

Open two terminals and run these two commands in each one:

```bash
pnpm dev
```

```bash
pnpm dev:avp
```

## Distribution

```bash
cp .env.example .env
```

Fill in the Team ID, Username and Password for Apple Developer Program in the .env file.

Then:

```bash
pnpm build:avp
```

Or

```bash
pnpm publish:avp
```
