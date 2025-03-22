# AIAU ブログ 記事作成ガイド

このガイドでは、AIAUブログの記事を作成する手順について説明します。

## 目次

1. [記事作成の準備](#記事作成の準備)
2. [記事の作成手順](#記事の作成手順)
3. [記事の投稿方法](#記事の投稿方法)
4. [記事作成のガイドライン](#記事作成のガイドライン)

## 記事作成の準備

1. リポジトリのクローン
   ```bash
   git clone https://github.com/your-username/AIAU_Blog.git
   cd AIAU_Blog
   ```

2. 必要な依存関係のインストール
   ```bash
   npm install
   ```

## 記事の作成手順

1. `/src/content/blog/` ディレクトリ内に新しいマークダウンファイルを作成
   - ファイル名の形式: `YYYY-MM-DD-title.md`
   - 例: `2024-03-20-getting-started-with-ai.md`

2. 記事のフロントマター（メタデータ）を追加
   ```markdown
   ---
   title: '記事のタイトル'
   date: 'YYYY-MM-DD'
   author: '著者名'
   description: '記事の簡単な説明'
   tags: ['タグ1', 'タグ2']
   ---
   ```

3. 記事の本文を作成
   - Markdownフォーマットで記事を書く
   - 画像は `public/images` ディレクトリに配置
   - 画像の参照: `![代替テキスト](/AIAU_Blog/images/ファイル名.png)`

## 記事の投稿方法

1. 変更をステージング
   ```bash
   git add .
   ```

2. 変更をコミット
   ```bash
   git commit -m "Add new blog post: タイトル"
   ```

3. 変更をプッシュ
   ```bash
   git push origin main
   ```

## 記事作成のガイドライン

### 記事の構成
- 明確な導入部分
- 適切な見出しの使用
- 段落の適切な区切り
- まとめや結論の提示

### 文章のスタイル
- 簡潔で分かりやすい文章
- 専門用語は必要に応じて説明を追加
- 読者の理解を助ける例示の活用

## 開発環境の起動

ローカルで記事をプレビューする場合：
```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開いて確認できます。

## サポート

質問や問題がある場合は、GitHubのIssueを作成してください。 