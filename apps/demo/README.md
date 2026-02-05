# LiveAvatar NextJS デモ

これはLiveAvatar Web SDKのさまざまな機能を実演するクイックデモです。

## インストール

このデモはNextJS、TailwindCSS、pnpmを使用して構築されています。

### 1. 環境変数の設定

サンプル環境ファイルをコピーして、APIキーを設定します：

```bash
cd apps/demo
cp .env.example .env.local
```

`.env.local` を編集して `LIVEAVATAR_API_KEY` を設定してください。APIキーは [https://liveavatar.com](https://liveavatar.com) または [https://docs.liveavatar.com](https://docs.liveavatar.com) から取得できます。

### 2. デモの起動

プロジェクトルートディレクトリから：

```bash
pnpm install
pnpm build
pnpm run demo
```

または、`apps/demo` ディレクトリに移動して実行：

```bash
pnpm install
pnpm build
pnpm run dev
```

ローカルデモページは [http://localhost:3002](http://localhost:3002) でアクセスできます。

## 本番環境

デモを本番モードで実行するには：

### 1. 本番用ビルド

プロジェクトルートディレクトリから：

```bash
pnpm build
```

これにより、すべてのパッケージがビルドされ、Next.jsアプリケーションの最適化された本番ビルドが作成されます。

### 2. 本番サーバーの起動

`apps/demo` ディレクトリに移動してサーバーを起動：

```bash
cd apps/demo
pnpm start
```

アプリケーションはデフォルトで [http://localhost:3000](http://localhost:3000) で利用可能になります。

### 3. カスタムポート（オプション）

カスタムポートで実行するには：

```bash
cd apps/demo
pnpm start -- -p 3002
```

### 4. 環境変数

サーバーを起動する前に、`.env.local` に本番用のAPIキーが設定されていることを確認してください。

## 使い方

アプリケーションの各ボタンやラベルの詳しい説明については、[USAGE.md](./USAGE.md)を参照してください。
