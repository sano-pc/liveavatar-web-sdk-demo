# LiveAvatar Web SDK

## 概要

これはLiveAvatarの公式クライアント側SDKです。
このSDKライブラリは、セッションの開始、管理、クリーンアップをサポートし、さまざまなLiveAvatarセッションを管理します。

## APIドキュメント

詳細なAPIドキュメントはこちらをご参照ください：https://docs.liveavatar.com

## インストール

パッケージマネージャーを使用してプロジェクトにパッケージをインストールします。

```bash
npm install @heygen/liveavatar-web-sdk
# または
pnpm install @heygen/liveavatar-web-sdk
```

## 使い方

このライブラリは、さまざまなクライアント側のJavaScriptプロジェクトでの開発用に設計されています。
LiveAvatarセッションの管理に特化しており、セッションの開始、停止、さまざまなアバターアクションの複雑さを処理します。セッショントークンだけで、セッションの複雑さに焦点を当てるため、あなたは素晴らしいものを構築することに集中できます。

## 使用例

```ts
import { LiveAvatarSession } from "@heygen/liveavatar-web-sdk";

// バックエンドを呼び出してsessionTokenを取得
const { sessionToken } = await myBackendCallForSessionToken();
const userConfig = {
  voiceChat: true,
};

const session = new LiveAvatarSession(sessionToken, userConfig);

// セッションを開始
await session.start();

// LiveAvatarで素晴らしいものを構築

// セッションを終了
await session.stop();
```

## ライセンス

LiveAvatar Web SDKはMITライセンスの下でライセンスされています。

詳細についてはLICENSEファイルをご参照ください。
