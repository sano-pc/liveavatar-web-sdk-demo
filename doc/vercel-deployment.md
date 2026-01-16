# Vercel デプロイガイド

デモアプリケーションをVercelにデプロイする方法を説明します。

## Vercelを使う理由

- Next.jsのAPIルート（`/api/*`）をサポート
- 環境変数の安全な管理
- 自動デプロイ（GitHubプッシュ時）
- Deployment Protectionによるアクセス制限

> **注意**: GitHub Pagesは静的ホスティングのみのため、APIルートが動作しません。

## 初回デプロイ

### 1. Vercel CLIのインストール

```bash
npm install -g vercel
```

### 2. Vercelにログイン

```bash
vercel login
```

ブラウザが開くので、Vercelアカウントでログインします。

### 3. プロジェクトのリンク

```bash
cd apps/demo
vercel link
```

対話形式で設定を行います：

- **Set up and deploy?** → Yes
- **Which scope?** → 自分のアカウントまたはチームを選択
- **Link to existing project?** → 新規の場合は No
- **Project name** → 任意の名前（例: `liveavatar-web-sdk-demo`）

### 4. 環境変数の設定

[Vercel Dashboard](https://vercel.com) にアクセスし、プロジェクトの Settings → Environment Variables で以下を設定：

| 変数名                  | 説明                                     |
| ----------------------- | ---------------------------------------- |
| `LIVEAVATAR_API_KEY`    | APIキー                                  |
| `LIVEAVATAR_API_URL`    | APIのURL（`https://api.liveavatar.com`） |
| `LIVEAVATAR_AVATAR_ID`  | アバターID                               |
| `LIVEAVATAR_CONTEXT_ID` | コンテキストID（先頭スペースに注意）     |
| `LIVEAVATAR_LANGUAGE`   | 言語コード（例: `ja`）                   |
| `LIVEAVATAR_VOICE_ID`   | 音声ID                                   |

> **重要**: `LIVEAVATAR_CONTEXT_ID` に先頭スペースが入ると、UUID形式のバリデーションエラーが発生します。

### 5. プロジェクト設定（Vercel Dashboard）

Settings → General で以下を確認・設定：

| 設定項目             | 値                           |
| -------------------- | ---------------------------- |
| **Framework Preset** | Next.js                      |
| **Root Directory**   | `apps/demo`                  |
| **Build Command**    | `pnpm build`（デフォルト）   |
| **Output Directory** | `.next`                      |
| **Install Command**  | `pnpm install`（デフォルト） |

> **注意**: Root Directoryを `apps/demo` に設定しているため、Output Directoryは `.next` のみで正しいです。

### 6. デプロイの実行

```bash
vercel --prod
```

または、Vercel Dashboardから **Redeploy** をクリック。

## 自動デプロイの設定

GitHubリポジトリと連携すると、プッシュ時に自動デプロイされます。

### 設定方法

1. Vercel Dashboard → プロジェクト → Settings → Git
2. **Connected Git Repository** でGitHubリポジトリを選択
3. **Production Branch** を設定（例: `master`）

### ブランチごとのデプロイ

- `master` ブランチ → 本番環境（Production）
- その他のブランチ → プレビュー環境（Preview）
