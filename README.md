# platypus.notes — 價值投資筆記

用 Astro 建的靜態站，Markdown 內容寫在 `src/content/notes/`。

## 本地開發

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 產出 dist/
npm run preview  # 測試 build 結果
```

## 發布流程

1. 在 `src/content/notes/` 新增或編輯 `.md`
2. `git add -A && git commit -m "..."` 
3. `git push` — Cloudflare Pages 自動 build + deploy

## 部署

Cloudflare Pages · Framework preset: Astro · Build command: `npm run build` · Output: `dist`
