# codebefunny 粉專網站

> 扣比不贏比逗比 🤪 —— codebefunny (@codebefunny) 的官方介紹網站

線上網址:**https://codebefunny.netlify.app**

這是一個**純靜態網站**(只有 HTML / CSS / JS,沒有任何 build 步驟),
任何人把檔案下載下來、用瀏覽器打開 `index.html` 就能看。

---

## 📁 專案結構

```
codebefun/
├─ index.html          首頁(介紹、街訪評分系列、熱血日常、聯絡方式)
├─ daigou.html         代購專區頁
├─ netlify.toml        Netlify 部署設定(發佈目錄、轉址)
├─ README.md           本說明檔
└─ assets/
   ├─ css/style.css    全站樣式(暗黑模式、紅/藍點綴色)
   ├─ js/main.js       手機選單、頁尾年份
   └─ img/             圖片放這裡(縮圖、大頭貼…)
```

---

## 🚀 多人協作流程

### 第一次:把專案複製下來
```bash
git clone https://github.com/2427jim2427/codebefunny.git
cd codebefunny
```

### 平常改東西
```bash
git pull                 # 1. 動手前先拉最新版,避免衝突
# ...用編輯器修改檔案...
git add .                # 2. 把改動加入
git commit -m "改了什麼" # 3. 寫一句說明
git push                 # 4. 上傳 → Netlify 會自動重新部署
```

push 完約 30~60 秒,**https://codebefunny.netlify.app** 就會更新。

> 💡 **建議**:比較大的改動先開分支再發 Pull Request,讓夥伴 review 後再合併到 `main`:
> ```bash
> git checkout -b 我的功能
> # 改完 commit 後
> git push -u origin 我的功能
> ```
> 然後到 GitHub 開 Pull Request。

---

## ✏️ 常見修改位置

| 想改什麼 | 改哪裡 |
|---|---|
| 聯絡 Email | `index.html` / `daigou.html` 裡所有 `mailto:` |
| Instagram / YouTube / Linktree 連結 | 兩個 html 的聯絡區與頁尾 |
| 粉絲數 | `index.html` 的 `.follower-count`(目前 `3K+`) |
| 影片連結 | `index.html` 三張評分卡的 `href` |
| 縮圖 / 大頭貼 | 把圖放到 `assets/img/`,再依 html 內 `<!-- 替換 -->` 註解換成 `<img>` |
| 代購商品 | `daigou.html` 的 `.product` 卡片 |
| 顏色 / 字體 | `assets/css/style.css` 最上方的 `:root` 變數 |

---

## 🖥️ 在自己電腦預覽

最簡單:直接雙擊 `index.html` 用瀏覽器開。

或啟動本機伺服器(連結與字體會更接近線上效果):
```bash
# 任選一種,在專案資料夾執行
python3 -m http.server 8000
# 然後瀏覽器開 http://localhost:8000
```

---

## ☁️ 部署

網站由 **Netlify** 託管,並已連結本 GitHub repo:
**只要 push 到 `main`,Netlify 就會自動部署**,不需手動操作。

(若需手動部署,需先安裝 Netlify CLI 並登入,再執行 `netlify deploy --prod --dir=.`。)

---

有問題請在 GitHub 開 Issue,或私訊 Instagram [@codebefunny](https://instagram.com/codebefunny) 🙌
