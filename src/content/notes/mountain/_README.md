# 🏕️ 野外

_登山、潛水、野溪溫泉、露營、其他戶外活動_

> 資料夾 slug 保持 `mountain/`（不改 folder / env var 成本低），網站顯示統一為「野外」

## 📝 這個資料夾適合放什麼

- 路線/路程紀錄（百岳、野溪、潛點、露營地）
- 裝備評測（登山、潛水、露營裝備）
- 訓練心得（體能、高度適應、潛水技巧）
- 海外攀登 / 跨國潛旅準備清單
- 迷途/失溫/潛水意外的 debrief
- 秘境溫泉、野溪點探勘與心得

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
