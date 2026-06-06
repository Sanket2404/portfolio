# 🛠️ Setup & Deploy Guide (macOS)

This is your step-by-step guide to **run the portfolio on a Mac**, **edit the content**,
and **deploy it to GitHub** (and a live URL via Vercel).

The full project already lives in this folder:

```
/Users/swapnilshende/New Assignment/portfolio/
```

---

## 1. Install the right Node.js version

> ⚠️ This Mac's default `node` is **v16**, which is too old. Vite 5 needs **Node ≥ 18**
> (Node 20 LTS recommended). You have a couple of options.

### Option A — nvm (recommended, lets you switch versions cleanly)

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# Reload your shell (or open a new terminal)
source ~/.zshrc

# Install & use Node 20 LTS
nvm install 20
nvm use 20
nvm alias default 20

node -v   # should print v20.x.x
```

### Option B — Homebrew (you already have Node 25 installed this way)

```bash
brew install node            # installs the latest Node
# Make sure it's first in your PATH (Apple Silicon):
echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
node -v                      # should print v25.x.x (or whatever brew installed)
```

> ✅ Either Node **18, 20 (LTS), 22, or 25** works. Just **not v16**.

---

## 2. Run the project locally

```bash
cd "/Users/swapnilshende/New Assignment/portfolio"

npm install        # install dependencies (first time only)
npm run dev        # start dev server
```

Open **http://localhost:5173** in your browser. Edits hot-reload instantly.

Other commands:

```bash
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

---

## 3. Edit your content

**One file controls everything:** [`src/data/portfolio.ts`](src/data/portfolio.ts)

| Want to change…            | Edit this in `portfolio.ts`        |
| -------------------------- | ---------------------------------- |
| Name, title, intro, bio    | `profile`                          |
| Social links               | `profile.socials`                  |
| Typing roles in hero       | `profile.typingRoles`              |
| Stats / achievements counts| `stats`                            |
| Skills & proficiency %     | `skillCategories`                  |
| Work experience            | `experiences`                      |
| Projects (+ GitHub/live)   | `projects` → `links: { github, live }` |
| Testimonials               | `testimonials`                     |

Other edits:
- **Resume PDF:** replace `public/Sanket_Jain_Resume.pdf` (keep the same name, or update `profile.resumeUrl`).
- **Colors:** `tailwind.config.ts` → `colors.accent`.
- **Live domain / SEO URLs:** `index.html` (canonical + Open Graph URLs).

---

## 4. Push to your GitHub account

Git is already configured on this Mac as **Sanket Jain**. A local repo + first commit
have already been created in this folder, so you just need to create the remote and push.

### Step 4a — Create an empty repo on GitHub
Go to <https://github.com/new> and create a repo named e.g. **`portfolio`**.
**Do NOT** add a README, .gitignore, or license (the repo already has them).

### Step 4b — Connect and push

```bash
cd "/Users/swapnilshende/New Assignment/portfolio"

# Use the HTTPS URL GitHub shows you (replace Sanket2404 if your username differs)
git remote add origin https://github.com/Sanket2404/portfolio.git

git branch -M main
git push -u origin main
```

> When prompted for a password, GitHub no longer accepts your account password —
> use a **Personal Access Token**: GitHub → Settings → Developer settings →
> Personal access tokens → *Generate new token (classic)* → check `repo` scope →
> paste the token as the password. (Or install the GitHub CLI: `brew install gh && gh auth login`.)

That's it — your code is now on GitHub. 🎉

---

## 5. Put it live (free) with Vercel — recommended

1. Go to <https://vercel.com/new> and sign in **with GitHub**.
2. Click **Import** on your `portfolio` repo.
3. Vercel auto-detects **Vite**. Leave the defaults:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**. In ~30s you'll get a live URL like `https://portfolio-sanket.vercel.app`.

Every future `git push` to `main` auto-deploys. To add a custom domain, go to the
project's **Settings → Domains** in Vercel.

### Alternative: GitHub Pages
```bash
npm install --save-dev gh-pages
# In vite.config.ts add:  base: "/portfolio/"   (your repo name)
npm run build
npx gh-pages -d dist
# Then enable Pages in repo Settings → Pages → branch: gh-pages
```

---

## 6. Everyday workflow after editing

```bash
cd "/Users/swapnilshende/New Assignment/portfolio"
npm run dev                      # preview your edits locally

# When happy:
git add -A
git commit -m "Update portfolio content"
git push                         # auto-deploys on Vercel
```

---

## Troubleshooting

| Problem | Fix |
| ------- | --- |
| `crypto$2.getRandomValues is not a function` | You're on Node 16. Switch to Node 18+ (see step 1). |
| `command not found: node` after nvm install | Run `source ~/.zshrc` or open a new terminal. |
| `bg-ink class does not exist` on dev start | Run commands **from inside** the `portfolio/` folder (Tailwind reads config from the current directory). |
| Push asks for password and rejects it | Use a Personal Access Token, not your GitHub password (see step 4b). |
| Port 5173 in use | `npm run dev -- --port 5174` |
```
