---
title: "文章標題（中文或英文都行）"
topic: investing            # 主題：investing / mountain / medicine / knowledge / ai / life
date: 2026-04-22             # 發布日期 YYYY-MM-DD
type: note                   # note / concept / insight / reflection / event / reference
summary: "一行摘要會顯示在首頁列表和主題頁面，約 30-60 字最剛好"
tags: ["標籤1", "標籤2"]   # 可選，給未來做標籤篩選用
draft: false                 # true 的話不會發布（暫存用）
---

# 文章標題（H1，通常跟上面 title 一樣）

> 💡 **TL;DR**：一兩句話講這篇在幹嘛（可選但建議有）

## 第一個段落

正文開始。Markdown 支援：

- **粗體** / *斜體* / ~~刪除線~~
- `程式碼`
- > 引言

## 表格範例

| 項目 | 說明 | 狀態 |
|------|------|------|
| A    | ... | ✅ |
| B    | ... | ⏳ |

## 列表

1. 編號列表
2. ...
   - 巢狀 bullet
   - ...

## 程式碼

```python
def hello():
    return "world"
```

## 連結

內部連結：暫時用相對路徑 `../investing/moat-theory` 或等有搜尋再說
外部連結：[連結文字](https://example.com)

## 圖片

```
![圖片說明](./images/xxx.jpg)
```
（之後要支援圖片的話我再跟你設 public/images/ 資料夾）

---

## 📝 寫作備忘（這段記得刪）

1. **檔名規則**：用英文 slug（小寫 + 連字號），例如 `moat-theory.md`、`kilimanjaro-prep.md`
   - 不要用空格、中文、特殊符號（會變成醜醜的 URL）
2. **儲存位置**：放在對應主題資料夾（investing / mountain / ...）
3. **`topic` 欄位**：一定要填，決定首頁分類
4. **`draft: true`**：寫一半不想發布就設這個
5. **複製方法**：在 Obsidian 對這檔案右鍵 → Make a copy → 搬到對應主題資料夾 → 改檔名 → 改 frontmatter → 寫內容 → 刪掉這段備忘 → 告訴我「發布」
