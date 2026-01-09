# Liveavatar NextJS Demo

This is a quick demo to demonstrate the various capabilities of the LiveAvatar Web SDK.

## Installation

This demo was built with NextJS, TailwindCSS and pnpm.

### 1. Configure environment variables

Copy the example environment file and set your API keys:

```bash
cd apps/demo
cp .env.example .env.local
```

Edit `.env.local` and set your `LIVEAVATAR_API_KEY`. Get your API key from [https://liveavatar.com](https://liveavatar.com) or [https://docs.liveavatar.com](https://docs.liveavatar.com).

### 2. Start the demo

From the base directory:

```bash
pnpm install
pnpm build
pnpm run demo
```

Or navigate to the `apps/demo` directory and run:

```bash
pnpm install
pnpm build
pnpm run dev
```

Navigate to the local demo page on [http://localhost:3002](http://localhost:3002).

## Usage

アプリケーションの各ボタンやラベルの詳しい説明については、[USAGE.md](./USAGE.md)を参照してください。
