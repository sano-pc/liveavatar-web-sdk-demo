# 開発ガイド

ローカル環境での開発方法と本番ビルドについて説明します。

## 前提条件

- Node.js 18以上
- pnpm 9以上

## セットアップ

### 1. リポジトリのクローン

```bash
git clone https://github.com/your-org/liveavatar-web-sdk.git
cd liveavatar-web-sdk
```

### 2. 依存関係のインストール

```bash
pnpm install
```

### 3. 環境変数の設定

`apps/demo/.env.local` ファイルを作成し、以下の環境変数を設定します：

```bash
LIVEAVATAR_API_KEY="your-api-key"
LIVEAVATAR_API_URL="https://api.liveavatar.com"
LIVEAVATAR_AVATAR_ID="your-avatar-id"
LIVEAVATAR_CONTEXT_ID="your-context-id"
LIVEAVATAR_LANGUAGE="ja"
LIVEAVATAR_VOICE_ID="your-voice-id"
```

> **注意**: `LIVEAVATAR_CONTEXT_ID` の値に先頭スペースが入らないように注意してください。

## ローカル開発

### 開発サーバーの起動

```bash
cd apps/demo
pnpm dev
```

開発サーバーが http://localhost:3002 で起動します。

### コードの変更

ファイルを編集すると、自動的にホットリロードされます。

## コード品質チェック

### TypeScript型チェック

```bash
cd apps/demo
pnpm typecheck
```

### ESLint

```bash
cd apps/demo
pnpm lint
```

## 本番ビルド

### ビルドの実行

```bash
cd apps/demo
pnpm build
```

`.next` ディレクトリにビルド成果物が生成されます。

### 本番サーバーの起動（ローカル確認用）

```bash
cd apps/demo
pnpm start
```

本番モードでサーバーが起動します（デフォルトはポート3000）。

## プロジェクト構造

```
liveavatar-web-sdk/
├── apps/
│   └── demo/          # デモアプリケーション（Next.js）
├── packages/
│   └── js-sdk/        # LiveAvatar Web SDK
└── doc/               # ドキュメント
```

## トラブルシューティング

### pnpmがインストールされていない場合

```bash
npm install -g pnpm
```

### 依存関係エラーが発生する場合

```bash
pnpm install --force
```

### ポートが使用中の場合

`apps/demo/package.json` の `dev` スクリプトでポート番号を変更できます：

```json
"dev": "next dev --port 3003"
```
