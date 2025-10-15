# Googleスプレッドシートのテンプレート

このドキュメントでは、作品一覧と活動記録を管理するためのGoogleスプレッドシートの構造を説明します。

## 1. Worksシート（作品一覧）

### 列の構造

| 列 | フィールド名 | データ型 | 説明 | 例 |
|----|------------|---------|------|-----|
| A | id | 数値 | 作品のID（一意） | 1 |
| B | title | 文字列 | 作品のタイトル | 夕日の風景 |
| C | artist | 文字列 | 作者名 | 田中 美咲 |
| D | category | 文字列 | カテゴリー | イラスト |
| E | year | 文字列 | 制作年 | 2024 |
| F | description | 文字列 | 作品の説明 | 故郷の夕日を描いた水彩画です... |
| G | technology | 文字列 | 使用技術・手法 | 水彩画 |
| H | works | 文字列 | 作品詳細ページURL | https://example.com/works/1 |
| I | image | 文字列 | Google Drive画像リンク | https://drive.google.com/file/d/... |

### サンプルデータ

```
id | title        | artist      | category  | year | description                      | technology         | works                          | image
1  | 夕日の風景   | 田中 美咲   | イラスト  | 2024 | 故郷の夕日を描いた水彩画です... | 水彩画             | https://example.com/works/1   | https://drive.google.com/file/d/...
2  | 春のメロディー| 佐藤 健太   | 音楽      | 2024 | 桜をテーマにしたピアノ曲です... | ピアノ作曲         | https://example.com/works/2   | https://drive.google.com/file/d/...
3  | 星空の物語   | 山田 花子   | 小説      | 2023 | 天体観測をする少女の成長を...   | 文章創作           | https://example.com/works/3   | https://drive.google.com/file/d/...
```

---

## 2. Activitiesシート（活動記録）

### 列の構造

| 列 | フィールド名 | データ型 | 説明 | 例 |
|----|------------|---------|------|-----|
| A | id | 数値 | 活動のID（一意） | 1 |
| B | year | 文字列 | 開催年 | 2024 |
| C | title | 文字列 | 活動のタイトル | 冬のイラスト展開催 |
| D | category | 文字列 | カテゴリー | イベント |
| E | description | 文字列 | 活動の説明 | メンバーが制作したイラスト作品の... |
| F | participants | 数値 | 参加者数 | 20 |
| G | active | 文字列 | 活動詳細ページURL | https://example.com/activities/1 |
| H | image | 文字列 | Google Drive画像リンク | https://drive.google.com/file/d/... |

### サンプルデータ

```
id | year | title              | category  | description                          | participants | active                              | image
1  | 2024 | 冬のイラスト展開催 | イベント  | メンバーが制作したイラスト作品の... | 20          | https://example.com/activities/1   | https://drive.google.com/file/d/...
2  | 2024 | 新メンバー歓迎会   | 交流      | 12月に新しく加わった5名のメンバー... | 25          | https://example.com/activities/2   | https://drive.google.com/file/d/...
3  | 2024 | デジタルアート勉強会| 勉強会    | デジタルペインティングの基礎から... | 18          | https://example.com/activities/3   | https://drive.google.com/file/d/...
```

---

## 3. スプレッドシートの作成手順

### 3-1. 新規スプレッドシートの作成

1. Googleドライブにアクセス
2. 「新規」→「Googleスプレッドシート」→「空白のスプレッドシート」をクリック
3. スプレッドシート名を「ピアプロWeb データ」などに変更

### 3-2. Worksシートの作成

1. デフォルトの「シート1」の名前を「Works」に変更
2. 1行目（ヘッダー行）に以下を入力：
   ```
   id | title | artist | category | year | description | technology | works | image
   ```
3. 2行目以降にデータを入力

### 3-3. Activitiesシートの作成

1. 下部の「+」ボタンをクリックして新しいシートを作成
2. シート名を「Activities」に変更
3. 1行目（ヘッダー行）に以下を入力：
   ```
   id | year | title | category | description | participants | active | image
   ```
4. 2行目以降にデータを入力

---

## 4. 画像の準備（Google Drive）

### 4-1. 画像のアップロード

1. 作品画像や活動記録の写真をGoogle Driveにアップロード
2. アップロードしたファイルを右クリック→「共有」をクリック
3. 「リンクを知っている全員」に変更して「リンクをコピー」

### 4-2. リンクの形式

コピーしたリンクは以下のような形式です：
```
https://drive.google.com/file/d/1AbCdEfGhIjKlMnOpQrStUvWxYz/view?usp=sharing
```

このリンクをそのままスプレッドシートの `image` 列に貼り付けてください。
GASスクリプトが自動的に直接表示可能なリンクに変換します。

---

## 5. カテゴリーの推奨値

### 作品カテゴリー（Works）
- イラスト
- 音楽
- 小説
- 写真
- 動画
- デザイン
- その他

### 活動カテゴリー（Activities）
- イベント
- 交流
- 勉強会
- コンテスト
- ワークショップ
- 展示会
- その他

---

## 6. 注意事項

1. **ヘッダー行は必ず1行目に配置**してください
2. **idは連番で一意**にしてください
3. **空行を作らない**ようにしてください（データが取得されなくなります）
4. **数値型のフィールド**（id, participants）には数値のみを入力してください
5. **画像リンク**は必ずGoogle Driveの共有リンクを使用してください
6. **年（year）**は4桁の数字（例：2024）を使用してください

---

## 7. データの更新について

スプレッドシートのデータを更新すると、Next.jsアプリケーションに自動的に反映されます。
ただし、キャッシュにより反映に最大1時間かかる場合があります。

即座に反映させたい場合は、Next.jsアプリケーションの再検証APIを使用してください。

---

以上でスプレッドシートの準備は完了です！
