# 旅する福女｜あなたに合う海外旅行先診断

note「旅する福女」から外部リンクで案内する想定の、海外旅行先診断WebアプリMVPです。

10問の回答から、静的な旅行先データとシンプルなスコアリングロジックでおすすめの海外旅行先を上位3件表示します。個人情報、ログイン、決済、データベース、外部API連携は使っていません。

## 起動方法

初回だけ依存関係をインストールします。

```bash
npm install
```

開発用サーバーを起動します。

```bash
npm run dev
```

ブラウザで以下を開きます。

```text
http://localhost:3000
```

本番用ビルド確認は以下です。

```bash
npm run build
```

型チェックだけを確認する場合は以下です。

```bash
npm run typecheck
```

## ファイル構成

主に編集するファイルは以下です。

```text
app/page.tsx                 画面全体の状態管理
components/                  トップ、質問、結果、免責などのUI部品
data/questions.ts            診断質問と選択肢
data/destinations.ts         旅行先データ
data/destinationMedia.ts     旅行先の観光写真・国旗・画像出典
data/affiliateLinks.ts       アフィリエイトリンク設定
lib/diagnosis.ts             診断スコアリングロジック
types/diagnosis.ts           型定義
```

## 旅行先データの追加方法

`data/destinations.ts` の `destinations` 配列に都市データを追加します。

追加時に入れる項目は以下です。

```ts
{
  id: "city-id",
  city: "都市名",
  country: "国名",
  summary: "概要",
  recommendedReason: "おすすめ理由",
  caution: "注意点",
  suitedFor: "向いている旅行者",
  recommendedDays: "おすすめ日数",
  budget: "予算目安",
  tags: ["グルメ", "絶景", "初心者"],
  scores: scores({
    safety: 8,
    lowCost: 7,
    beginnerFriendly: 8,
    womenFriendly: 8,
    soloFriendly: 7,
    gourmet: 9,
    scenery: 8,
    historyCulture: 6,
    shopping: 7,
    shortFlight: 8,
    hiddenGem: 5,
  }),
}
```

`tags` は質問の選択肢と一致したときに加点されます。`scores` は 1 から 10 の目安で入力すると調整しやすいです。

## アフィリエイトリンクの差し替え方法

`data/affiliateLinks.ts` の `templateUrl` を差し替えてください。

```ts
hotel: {
  label: "ホテルを探す",
  templateUrl: "https://example.com/affiliate/hotel?city={city}&country={country}",
},
```

現在は仮URLのみを入れています。実在のアフィリエイトIDは入れていません。`{city}` と `{country}` は診断結果の都市名・国名に自動で置き換わります。

## 画像の差し替え方法

`data/destinationMedia.ts` を編集します。

- `imageUrl`: 結果カードに表示する観光写真URL
- `imageAlt`: 画像の説明文
- `sourceLabel`: 出典名
- `sourceUrl`: 出典ページ

カード上には出典リンクを出さず、ページ最下部の「画像出典について」にまとめて表示します。

## 質問の編集方法

`data/questions.ts` を編集します。

選択肢には以下を設定できます。

- `label`: 画面に表示する選択肢名
- `tags`: 選んだときに一致判定へ使うタグ
- `scoreBoosts`: 特定スコアを重視する加点設定
- `avoidTags`: 避けたい条件として減点するタグ
- `multiple`: 複数選択にしたい質問で使う設定
- `requiredGroups`: 複数選択時に必ず選ばせたい選択肢グループ

Question8は複数選択に対応しています。行ったことがある地域を複数選び、「未訪問の地域を優先したい」または「行ったことがある地域も候補に含めたい」など、結果への反映方針も同じ画面で選ぶ設計です。

## noteへの掲載時の注意点

- note記事の末尾に、診断アプリへのリンクを自然な案内文として置く想定です。
- 記事側では「診断結果は参考情報」であることを明記すると安心です。
- 広告・アフィリエイトリンクを使う場合は、記事側にも広告表記を入れてください。
- 旅行条件、価格、入国条件、安全情報は変わるため、公式情報確認を促してください。
- スマホからの流入が多い想定なので、公開前にスマホ実機でも表示確認してください。

## 今後追加できる機能

- メール登録機能
- 診断結果の保存
- 人気旅行先ランキング
- 季節別おすすめ診断
- 有料PDFガイド販売
- Google Analytics導入
- Search Console対応
- PWA化
- 多言語化
- 管理画面
- ASP別アフィリエイトリンク管理

## 実装メモ

- MVPでは外部API、ログイン、決済、データベース接続は使っていません。
- 診断結果はブラウザ上の状態だけで計算され、個人情報は保存しません。
- 結果は `lib/diagnosis.ts` のスコアリング方式で上位3都市を表示します。
- ブランド名は「旅する福女」、診断名は「あなたに合う海外旅行先診断」です。
