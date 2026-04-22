# 🧠 知識

_會計、法律、中醫、第二大腦、筆記法、各式雜知識_

> 資料夾 slug 保持 `knowledge/`（不動 folder / env var）。網站顯示統一為「知識」。
> 子主題累積到一定量（例如 20+ 篇法律）可以搬出來獨立成新主題站。

## 📝 這個資料夾適合放什麼

- 會計 / 財報 / 稅務基礎
- 法律常識（醫療法、契約、個資）
- 中醫 / 替代療法學習筆記
- Obsidian / Notion / Readwise workflow
- 筆記法、PARA、第二大腦
- 其他跨領域雜學

## 💡 子主題標記（可選但建議）

frontmatter 加 `subtopic` 欄位方便未來搬出去：

```yaml
topic: knowledge
subtopic: law            # 或 accounting / chinese-medicine / note-taking ...
title: "..."
```

當某個 subtopic 累積夠多（例如 20+ 篇法律），跟 Claude 說「把法律搬出來變獨立站」，會自動 `git mv` + 加新主題 `law` 到 site-mode.ts + 提示新 Cloudflare project 步驟。

## 🚀 新增一篇文章

1. **複製模板**：在 Obsidian 打開 `publishing/_TEMPLATE.md` → 右鍵 `Make a copy` → 移到 `knowledge/` 資料夾
2. **改檔名**：用英文 slug，例如 `kilimanjaro-gear-list.md`
3. **改 frontmatter**：
   ```yaml
   topic: knowledge      ← 這個最重要
   title: "..."
   date: 2026-04-22
   ```
4. **寫內容**
5. **存檔 → 告訴 Claude「發布」**

## 📂 這個資料夾的現有文章

看 `publishing/_INDEX.md`（會自動更新）

## ⚙️ 小知識

- 檔名 `_` 開頭的不會變網頁（這個 `_README.md` 也是）
- Frontmatter 的 `draft: true` = 暫存不發布
- 刪掉某篇 = 從網站下架（下次發布會消失）
