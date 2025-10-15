# Google Apps Script セットアップガイド

このディレクトリには、作品一覧と活動記録をGoogleスプレッドシートで管理するためのGoogle Apps Script（GAS）ファイルが含まれています。

## 📁 ファイル構成

```
gas/
├── Code.gs                    # GASメインスクリプト
├── SPREADSHEET_TEMPLATE.md    # スプレッドシートテンプレート
└── README.md                  # このファイル
```

---

## 🚀 セットアップ手順

### 1. Googleスプレッドシートの作成

1. [Google Drive](https://drive.google.com/)にアクセス
2. 「新規」→「Googleスプレッドシート」→「空白のスプレッドシート」を選択
3. スプレッドシート名を「ピアプロWeb データ」などに変更

### 2. シートの設定

詳細は [SPREADSHEET_TEMPLATE.md](./SPREADSHEET_TEMPLATE.md) を参照してください。

#### Worksシート（作品一覧）

1行目のヘッダー：
```
id | title | artist | category | year | description | technology | works | image
```

#### Activitiesシート（活動記録）

1行目のヘッダー：
```
id | year | title | category | description | participants | active | image
```

### 3. Google Apps Scriptの設定

#### 3-1. Apps Scriptエディタを開く

1. スプレッドシートのメニューから「拡張機能」→「Apps Script」を選択
2. 新しいタブでApps Scriptエディタが開きます

#### 3-2. スクリプトをコピー

1. デフォルトの `Code.gs` ファイルの内容を全て削除
2. このディレクトリの [Code.gs](./Code.gs) の内容を全てコピー
3. Apps Scriptエディタに貼り付け
4. 「保存」ボタン（💾アイコン）をクリック

#### 3-3. プロジェクト名の設定

1. 左上の「無題のプロジェクト」をクリック
2. 「ピアプロWeb API」などの名前に変更

### 4. デプロイ

#### 4-1. ウェブアプリとしてデプロイ

1. 右上の「デプロイ」→「新しいデプロイ」をクリック
2. 歯車アイコン「種類の選択」→「ウェブアプリ」を選択
3. 以下の設定を行う：
   - **説明**: 「ピアプロWeb API v1」
   - **次のユーザーとして実行**: 「自分」
   - **アクセスできるユーザー**: 「全員」
4. 「デプロイ」をクリック
5. 権限の承認を求められたら：
   - 「アクセスを承認」をクリック
   - Googleアカウントを選択
   - 「詳細」→「ピアプロWeb API（安全ではないページ）に移動」をクリック
   - 「許可」をクリック

#### 4-2. デプロイURLの取得

1. デプロイが完了すると、**ウェブアプリのURL**が表示されます
2. このURLをコピーしてください（形式：`https://script.google.com/macros/s/xxx.../exec`）

### 5. Next.jsアプリケーションの設定

#### 5-1. 環境変数の設定

プロジェクトルートの `.env.local` ファイルに以下を追加：

```bash
NEXT_PUBLIC_GAS_API_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

> **注意**: `YOUR_SCRIPT_ID` の部分を、前の手順でコピーしたデプロイURLに置き換えてください

#### 5-2. アプリケーションの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000/works` または `http://localhost:3000/activities` にアクセスして、データが表示されることを確認してください。

---

## 🧪 テスト方法

### GAS側のテスト

Apps Scriptエディタで以下の関数を実行してテストできます：

1. **シート一覧の確認**
   - 関数: `listSheets`
   - 実行ボタンをクリック
   - 下部の「実行ログ」にシート名が表示されます

2. **Worksデータの確認**
   - 関数: `testWorksData`
   - 実行ボタンをクリック
   - 実行ログにJSONデータが表示されます

3. **Activitiesデータの確認**
   - 関数: `testActivitiesData`
   - 実行ボタンをクリック
   - 実行ログにJSONデータが表示されます

### API エンドポイントのテスト

ブラウザで以下のURLにアクセスして、APIの動作を確認できます：

- **作品一覧**: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?type=works`
- **活動記録**: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?type=activities`

正しくデータが返ってくれば、以下のような形式のJSONが表示されます：

```json
{
  "success": true,
  "data": [...],
  "count": 6
}
```

---

## 📊 データ構造

### Work（作品）

```typescript
{
  id: number;           // 作品ID
  title: string;        // タイトル
  artist: string;       // 作者名
  category: string;     // カテゴリー（イラスト、音楽、小説、写真など）
  year: string;         // 制作年
  description: string;  // 説明
  technology: string;   // 使用技術・手法
  works: string;        // 作品詳細ページURL
  image: string;        // Google Drive画像URL（自動変換）
}
```

### Activity（活動記録）

```typescript
{
  id: number;           // 活動ID
  year: string;         // 開催年
  title: string;        // タイトル
  category: string;     // カテゴリー（イベント、交流、勉強会など）
  description: string;  // 説明
  participants: number; // 参加者数
  active: string;       // 活動詳細ページURL
  image: string;        // Google Drive画像URL（自動変換）
}
```

---

## 🔄 更新とデプロイ

### スクリプトを更新した場合

1. Apps Scriptエディタでコードを編集
2. 「保存」をクリック
3. **新しいバージョンのデプロイは不要**（既存のデプロイが自動的に最新版を使用します）

### 新しいバージョンとしてデプロイする場合

1. 「デプロイ」→「デプロイを管理」をクリック
2. 既存のデプロイの右側の鉛筆アイコンをクリック
3. 右上のバージョンを「新バージョン」に変更
4. 「デプロイ」をクリック

---

## 🛠️ トラブルシューティング

### エラー: "Sheet not found"

- スプレッドシートに「Works」または「Activities」という名前のシートが存在することを確認してください
- シート名は大文字小文字を区別します

### エラー: CORSエラー

- デプロイ時に「アクセスできるユーザー」を「全員」に設定してください

### データが表示されない

1. スプレッドシートのシート名が正しいか確認
2. ヘッダー行（1行目）が正しく設定されているか確認
3. データが2行目以降に入力されているか確認
4. GASのテスト関数で正しくデータが取得できるか確認
5. `.env.local` に正しいURLが設定されているか確認

### 画像が表示されない

1. Google Driveで画像の共有設定を確認（「リンクを知っている全員」に設定）
2. 画像URLが正しい形式か確認（`https://drive.google.com/file/d/...`）
3. `convertDriveLinkToDirect` 関数が正しく動作しているか確認

---

## 🔐 セキュリティ考慮事項

1. **環境変数の管理**
   - `.env.local` は絶対に Git にコミットしないでください
   - `.gitignore` に `.env.local` が含まれていることを確認してください

2. **アクセス制限**
   - 本番環境では、GAS側でリファラーチェックなどのアクセス制限を追加することを推奨します

3. **データ検証**
   - 取得したデータは必ず型チェックを行ってください（TypeScriptの型定義を活用）

---

## 📖 参考リンク

- [Google Apps Script 公式ドキュメント](https://developers.google.com/apps-script)
- [Spreadsheet Service](https://developers.google.com/apps-script/reference/spreadsheet)
- [Content Service](https://developers.google.com/apps-script/reference/content)

---

## 💡 ヒント

### キャッシュの制御

Next.jsアプリケーションは1時間ごとにデータを再取得します（`revalidate: 3600`）。
即座にデータを反映させたい場合は、再検証APIを使用してください。

### 複数のスプレッドシートを使用する場合

複数のスプレッドシートからデータを取得したい場合は、スプレッドシートIDを環境変数で管理し、
`SpreadsheetApp.openById(id)` を使用してください。

---

以上でセットアップは完了です！
