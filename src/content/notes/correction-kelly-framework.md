---
title: "修正期框架：Kelly + Buy & Hold"
slug: "correction-kelly-framework"
date: 2026-04-19
type: insight
summary: "修正期回歸原則：ETF 不動、Wide Moat 打折買、高風險 half-Kelly、股息當心理錨點"
---

> 💡 修正期回歸原則：ETF 不動、Wide Moat 打折買、高風險 half-Kelly、股息當心理錨點

# 修正期框架：恐慌時套用 Kelly + Buy & Hold 原則

> 修正期回歸原則：ETF 不動、Wide Moat 打折買、高風險 half-Kelly、股息當心理錨點

## 🧬 跨域橋接

- **跨域橋接**:
  - **醫學**: 風險管理 = 治療計畫的副作用評估與預防，確保長期病程穩定
  - **登山**: 安全邊際 = 登山路線的備用糧水與撤退計畫，應對突發狀況
  - **知識管理**: 持續學習 = 定期審視投資理論與實踐成果，迭代認知框架

## ❓ 未知面向 / 還想探索

- **未知面向**:
  - 在『高風險資產採用 half-Kelly』的規則中，『高風險』的量化定義是什麼？是 Beta > 1.5，還是有特定的質化標準（如尚未盈利的科技股）？
  - 『股息作為心理錨點』的效應，在利率上升環境下會否減弱？當債券殖利率超過股息率時，這個錨點是否依然穩固？
  - 如何將此框架『程式碼化』？例如，撰寫一個 script，在 VIX 指數突破 35 時，自動發送一個通知到我的 Telegram，內容包含我的 Wide Moat 觀察名單及當前股價。
  - 這個框架在面對『黑天鵝』事件（如戰爭、瘟疫）和正常的經濟週期性回調時，其應對策略是否應該有所區別？

## 🚀 推薦延伸 / Action Items

- **行動項目**:

| 行動 | 狀態 | 截止日 |
| --- | --- | --- |
| 編寫 `scripts/market-correction-scanner.py`，監控 S&P 500 的 50 日均線和 VIX 指數，當 `VIX > 30` 且 `SPY < MA50` 時，觸發警報。 | 待規劃 | 2026-05-15 |
| 在 `brain.json` 中，為此 insight 創建與 `concept-kelly-criterion`, `concept-wide-moat`, `concept-margin-of-safety` 的雙向連結。 | 待規劃 | 2026-04-30 |
| 回測此策略：在 2020 年 3 月的市場崩盤中，如果嚴格執行此框架，我的模擬投資組合表現會如何。 | 待規劃 | 2026-06 |


## 🎚 信心度

- **信心度**: 0.95

## 屬性

- **來源**: RSS 綜合分析 2026-03-28（5 篇 Seeking Alpha）
- **synthesis**: 5 篇文章呈現恐慌→防禦的光譜，但對platypus而言應回歸既有原則
- **framework**:
  - **step_1**: ETF 部位（84%）：不動。buy & hold > 擇時（已驗證）
  - **step_2**: 個股部位（10%）：修正期是 Wide Moat 股打折的機會 — 用既有選股邏輯篩選，不追跌
  - **step_3**: 高風險部位（5%）：Kelly half-bet 原則 — 不確定性高時減半下注
  - **step_4**: 心理錨點：股息收入提供等待的耐心（Rida Morwa 觀點）
- **key_numbers**:
  - **sp500_from_high**: -8%
  - **analyst_full_year**: +12%
  - **gap**: 20% 潛在回升空間（若共識正確）
- **bridge_to_kelly**: 修正期 = 市場不確定性上升 = Kelly 建議降低 f*（下注比例）— 但「留在牌桌」比「精準擇時」更重要
- **核心洞察**: 修正期回歸原則：ETF 不動、Wide Moat 打折買、高風險 half-Kelly、股息當心理錨點
- **我的觀點**: 這個框架是我在市場恐慌中的『抗杏仁核綁架』（anti-amygdala hijack）協議。當市場集體陷入非理性拋售時，它就如同 ICU 中的 臨床評分 score，提供一個客觀、不動情的評估系統。我的行動不再由恐懼驅動，而是由預先設定的規則（Kelly 準則、Wide Moat 折價程度）決定，將他人的恐慌轉化為我的安全邊際。
- **子議題**:
  - Kelly 準則在非二元結果投資中的實際應用與限制
  - 恐慌性下跌時的投資者心理與情緒管理技巧
  - Buy & Hold 策略下的再平衡與部位調整最佳實踐
  - 如何區分市場的短期波動與真正的系統性風險觸發因子
- **_rewrite_log**:

| at | by | reviewer |
| --- | --- | --- |
| 2026-04-19T13:27:37.895421 | gemini-batch-rewrite-p1_low | sonnet-review-20260419 |




## 證據鏈

- **2026-03-28** (brain.json-migration, discovery): 初始建立（schema 遷移自動生成）

---

*ID: `insight-correction-opportunity-framework` · Type: `insight` · Strength: 0.362 · Last updated: 2026-04-19*

> 此卡片由 `brain-json-to-md.py` 從 `brain.json` 自動產生。
> 編輯 body / tags / wikilinks 不會影響主檔（POC 階段）。
