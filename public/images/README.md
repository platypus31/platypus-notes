# 圖片資料夾

## 用法

1. 把圖片丟到對應主題資料夾，例如：
   - `public/images/investing/tsmc-chart.png`
   - `public/images/mountain/kilimanjaro-route.jpg`

2. 在 markdown 文章用**絕對路徑**引用：

```markdown
![護城河示意圖](/images/investing/moat-diagram.png)

或加 caption：

<figure>
  <img src="/images/investing/moat-diagram.png" alt="護城河示意圖">
  <figcaption>圖 1：五大護城河類型</figcaption>
</figure>
```

## 命名規則

- 全小寫、英文或數字，用 hyphen 分隔：`kilimanjaro-route-map.jpg`
- 避免空格、中文、底線開頭
- 格式：PNG（圖表）/ JPG（照片）/ WebP（優化版）

## 檔案大小建議

- **> 500KB**：先跑 `sips -Z 1600 image.jpg` 縮到 1600px 最長邊
- **> 2MB**：請用 WebP（`cwebp -q 80 input.jpg -o output.webp`）
- Cloudflare Pages 有單檔 25MB 限制，整站免費方案 20GB 流量

## Hub 和子站共享圖片

- 任何站 build 時都會包含整個 `public/images/` 樹
- 想只讓某子站用的圖放對應資料夾（投資類圖放 `investing/`）
- `hub/` 放 hub 專用圖（banner、logo 等）

## 之後升級：Astro 圖片優化（optional）

目前用 `public/` 是**最簡方案**（無優化、無延遲載入）。未來想要：
- 自動產生 WebP / AVIF
- Responsive srcset
- 延遲載入

需要把圖搬到 `src/content/notes/{topic}/images/`，然後文章用 `astro:assets` 的 `<Image>` component。現在先不做。
