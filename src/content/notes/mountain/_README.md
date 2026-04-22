# ⛰️ 登山

_百岳、海外高峰、裝備與經驗_

## 📝 這個資料夾適合放什麼

- 路線紀錄（某座山的完整行程）
- 裝備評測（背包、鞋、氣象、糧食）
- 訓練心得（體能、高度適應）
- 海外攀登準備清單
- 迷途/失溫/突發事件的 debrief

## 🚀 新增一篇文章

1. **複製模板**：在 Obsidian 打開 `publishing/_TEMPLATE.md` → 右鍵 `Make a copy` → 移到 `mountain/` 資料夾
2. **改檔名**：用英文 slug，例如 `kilimanjaro-gear-list.md`
3. **改 frontmatter**：
   ```yaml
   topic: mountain      ← 這個最重要
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
