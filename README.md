# Health Buddy


# Design Tokens

## Color Roles

為了讓程式內的所有顏色一致整齊，我們設計了一套統一規範來標示顏色，以及一定的變數命名、型態定義來讓全部協作者（也就是你！）方便、快速使用顏色。

## Color Palette

| Color     | Description |
|    ---    | --- |
| Primary   | 主要顏色，這個程式內最大頻率的顏色 |
| Secondary | 次要顏色，用以點綴、襯托，並呈現視覺上的平衡 |
| Tertiary  | 突出顏色，讓使用者知道什麼重要 |
| Neutral   | 中性顏色，基於主要色調整而成的中性顏色 |

其餘的部分如 Success、Error 等色調，規模不及上開色盤，但一樣可以套用下開規定。

## Variables

| Variable Name | Color Code(Light/Dark) | Description |
|    ---        | ---     | --- |
| base          | 500/700 | 標誌性的主要色調 |
| onBase        | 950/950 | 在標誌色上的文字、圖案顏色 |
| onBase  (Primary Only)  | 50/50 | 在標誌色上的文字、圖案顏色，僅限 Primary Color |
| container     | 200/700 | 突出顏色 |
| container (Neutral Only)| 100/800 | 突出顏色 |
| onContainer   | 950/50  | 在突出色上的文字、圖案顏色 |
| border        | 600/600 | 中性顏色 |
| shadow        | 900/900 | 陰影顏色 |
| tint          | 100/100 | 淡化顏色 |


# Codebase

## Components

我們將 Components 分為下面幾個部分：
```
/components/
/components/atoms/
/components/molecules/
/components/organisms/
```

- **Atoms**: 基本功能性的元件。
  - Button、Link 等「最小單位的」的元件。
  - Feedback、Haptic 等「單一功能性」的元件。
- **Molecules**: 組合性的元件。
  - Card、List 等「多個原子組合而成的」元件。
- **Organisms**: 組合性的元件。
  - Header、Footer 等「多個分子組合而成的」元件。

> 按照 Atomic Design 的角度，我們應該要新增一個 「Template」目錄，但因為 Expo 是 Page Routing，已經提供 _Layout_ 及 _Page_ 功能了。
