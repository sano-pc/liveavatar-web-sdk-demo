# Vercel Deployment Protection 設定ガイド

デモサイトへのアクセスを制限する方法について説明します。

## サイトURL

https://liveavatarwebsdkdemo-takaos-projects-98f47488.vercel.app/

## Vercel Authentication の切り替え方法

### 設定画面へのアクセス

1. [Vercel Dashboard](https://vercel.com/takaos-projects-98f47488/liveavatar_web_sdk_demo/settings) にアクセス
2. 左メニューから **Deployment Protection** を選択

### サイトを非公開にする（認証を有効化）

1. **Vercel Authentication** を **Enabled** に設定
2. **Save** をクリック

これにより、Vercelアカウントでログインしたユーザーのみがサイトにアクセスできるようになります。

### サイトを公開する（認証を無効化）

1. **Vercel Authentication** を **Disabled** に設定
2. **Save** をクリック

これにより、誰でもサイトにアクセスできるようになります。

## 注意事項

- 設定変更は即座に反映されます（再デプロイ不要）
- 認証が有効な場合、Vercelアカウントを持つチームメンバーのみアクセス可能です
- APIエンドポイント（`/api/*`）も同様に保護されます

## その他の保護方法

| 方法                  | プラン     | 説明                             |
| --------------------- | ---------- | -------------------------------- |
| Vercel Authentication | 無料       | Vercelアカウントでログインが必要 |
| Password Protection   | Pro以上    | パスワードでサイトを保護         |
| IP Allowlist          | Enterprise | 特定のIPアドレスのみ許可         |
