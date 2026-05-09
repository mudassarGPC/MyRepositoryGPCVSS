# GitHub Setup for Dummies - Complete Guide

A beginner-friendly guide to setting up GitHub with Visual Studio Code for your portfolio project.

---

## PART 1: What You Need to Install

### Git
- **Status:** Check if installed by opening Command Prompt or PowerShell and typing:
  ```bash
  git --version
  ```
- **If not installed:**
  1. Go to https://git-scm.com/download/win
  2. Download the installer
  3. Run it and keep clicking "Next" (default options are fine)
  4. Click "Install"

### Visual Studio Code
- **Download from:** https://code.visualstudio.com/
- **Installation steps:**
  1. Click the big blue "Download for Windows" button
  2. Run the installer
  3. Keep clicking "Next" (all default options are fine)
  4. Click "Install"
  5. Launch VS Code when installation completes

---

## PART 2: Create Your GitHub Account

**If you already have a GitHub account, skip this section.**

1. Go to https://github.com/
2. Click "Sign up" (top right corner)
3. Enter your email address
4. Create a password
5. Choose a username (like `mudassarkhattab` or anything you like)
6. Follow the verification steps
7. Choose the FREE plan

---

## PART 3: Set Up Git on Your Computer

Open **Command Prompt** or **PowerShell** and run these commands one by one:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

**Replace:**
- `"Your Name"` with your actual name (e.g., "Mudassar Khattab")
- `"your-email@example.com"` with the email you used for GitHub

**Example:**
```bash
git config --global user.name "Mudassar Khattab"
git config --global user.email "mudassar@example.com"
```

**To verify your configuration:**
```bash
git config --global user.name
git config --global user.email
```

---

## PART 4: Create a Repository on GitHub

1. **Log in to GitHub** at https://github.com/
2. **Click the "+" button** (top right corner, next to your profile picture)
3. **Click "New repository"**
4. **Fill in the details:**
   - **Repository name:** `MyPortfolio` (or any name you like)
   - **Description:** "My professional portfolio website"
   - **Public or Private:** Choose "Public" (so it can be hosted for free)
   - **DO NOT** check "Add a README file"
   - **DO NOT** add .gitignore or license
5. **Click "Create repository"**
6. **Copy the repository URL** - it will look like:
   ```
   https://github.com/YOUR-USERNAME/MyPortfolio.git
   ```
7. You will be navigated to the Repository Page

---

## PART 5: Connect Your Local Code to GitHub

After creating the repository on GitHub, you need to connect your local project folder to it.

**Open Command Prompt or PowerShell**, navigate to your project folder, and run:

```bash
cd C:\Khattab\AIProjects\MyPortfolio
git remote add origin REPOSITORY_URL_COPIED_ABOVE 
git branch -M main
```

**Replace `REPOSITORY_URL_COPIED_ABOVE`** with the Repository URL you copied in Part 4 (Also, Refer the section "…or push an existing repository from the command line" on the Repository page)

**To verify the connection:**
```bash
git remote -v
```

You should see your GitHub repository URL listed.

---

## PART 6: Open Your Project in Visual Studio Code

1. **Open Visual Studio Code**
2. **Click "File" → "Open Folder"**
3. **Na	vigate to** `C:\Khattab\AIProjects\MyPortfolio`
4. **Click "Select Folder"**

You should now see all your portfolio files in the left sidebar!

---	

## PART 7: Using the Source Control Panel in VS Code

### Step 1: Find the Source Control Panel
- Look at the **left sidebar** in VS Code
- Click the **icon that looks like a branching tree** (3rd icon from top)
- OR press `Ctrl + Shift + G`

### Step 2: Understanding What You See

You'll see a list of files with letters next to them:
- **U** = Untracked (new file Git doesn't know about yet)
- **M** = Modified (file that was changed)
- **A** = Added (file ready to be committed)
- **D** = Deleted

###Before moving to Step 3, please review if you are facing the below known problem

### Known Problem: Seeing Files from Other Folders

**Problem:** When you open the Source Control panel, you might see files from OTHER folders and projects that are NOT part of your portfolio. For example, you might see Excel files, PowerPoint presentations, or files from completely different projects.

**Why This Happens:**

This occurs when Git was accidentally initialized in a **parent folder** instead of your specific project folder.

For example:
- **What you want:** Git tracking only `C:\Projects\MyPortfolio\` (your portfolio folder)
- **What happened:** Git is tracking `C:\Projects\` (the parent folder containing ALL your projects)

When Git tracks a parent folder, VS Code shows ALL files from ALL sub-folders, making it confusing to know which files belong to your portfolio.

**How to Fix This:**

**Step 1: Initialize Git in Your Project Folder**

1. **Open Command Prompt or PowerShell**
2. **Navigate to your project folder:**
   ```bash
   cd C:\YourPath\YourProjectFolder
   ```
   Replace `C:\YourPath\YourProjectFolder` with the actual path to your portfolio folder

3. **Initialize a new Git repository in this folder:**
   ```bash
   git init
   ```
   You should see: `Initialized empty Git repository in C:/YourPath/YourProjectFolder/.git/`

4. **Verify it worked:**
   ```bash
   git status
   ```
   You should see a list of ONLY your project files, not files from other folders

**Step 2: Close and Reopen VS Code**

1. **Close VS Code Completely**
   - Click **File → Exit** or press `Alt + F4`
   - Make sure VS Code is fully closed (check the taskbar)

2. **Reopen VS Code**
   - Launch VS Code again
   - Click **"File" → "Open Folder"**
   - **IMPORTANT:** Select your **specific project folder**, NOT the parent folder
     - ✅ **Correct:** `C:\Projects\MyPortfolio` (your project folder)
     - ❌ **Wrong:** `C:\Projects` (parent folder containing multiple projects)
   - Click **"Select Folder"**

**Step 3: Verify the Fix**

1. **Open Source Control** (`Ctrl + Shift + G`)
2. **You should now see ONLY your portfolio files:**
   - index.html
   - styles.css
   - script.js
   - photo.jpg
   - Any documentation files (.md files)
3. **You should NOT see:**
   - Files from other projects
   - Excel, Word, or PowerPoint files (unless they're part of your portfolio)
   - Random folders or files you don't recognize

**Still Seeing Other Files?**

If you still see files from other folders after following these steps:
1. Check the **bottom left** of VS Code - it shows which folder is currently open
2. Make sure it shows your project folder name, not a parent folder
3. If it shows the wrong folder, close VS Code and repeat Step 2 above, carefully selecting the correct folder

**Prevention Tip:**

Always open your **specific project folder** in VS Code, not a parent folder containing multiple projects. This ensures Git tracks only the files you want.

---

### Step 3: Stage Your Changes
**Staging = Selecting which files you want to save to GitHub**

- **To stage ONE file:** Hover over the file and click the **"+" button**
- **To stage ALL files:** Click the **"+" button** next to "Changes"

### Step 4: Commit Your Changes
**Committing = Save a snapshot with a descriptive message**

1. After staging files, you'll see them under "Staged Changes"
2. At the top, there's a **text box** that says "Message"
3. **Type a short description** like:
   - "Initial commit - my portfolio website"
   - "Added email gate feature"
   - "Fixed mobile responsiveness"
   - "Updated about section"
4. **Press `Ctrl + Enter`** OR click the **checkmark ✓ button** above the message box

**IMPORTANT:** Always write a clear message so you know what you changed!

### Step 5: Push to GitHub
**Pushing = Upload your code to GitHub**

1. After committing, look for a **cloud icon with an up arrow ↑** at the bottom left
2. **Click it** OR click the **"..."** (three dots) at the top of Source Control panel
3. Select **"Push"**

**First time only:** VS Code might ask you to sign in to GitHub:
- Click "Allow"
- A browser window will open
- Sign in to GitHub
- Click "Authorize"
- Close the browser and return to VS Code

---

## PART 8: The Daily Workflow

Every time you make changes to your portfolio, follow this simple workflow:

1. **Open VS Code** → Your portfolio folder
2. **Make your changes** (edit HTML, CSS, JavaScript)
3. **Save your files** (`Ctrl + S`)
4. **Go to Source Control** (`Ctrl + Shift + G`)
5. **Review the changed files** (they'll show up automatically)
6. **Stage the files** (click the "+" next to each file or "Stage All")
7. **Write a commit message** (describe what you changed)
8. **Commit** (`Ctrl + Enter` or click ✓)
9. **Push to GitHub** (click the upload icon ↑)

---

## PART 9: Visual Helpers in VS Code

Understanding the visual indicators:

- **Blue dots** next to files = File has unsaved changes
- **Green bar** on the left of code = New lines you added
- **Red bar** on the left = Lines you deleted
- **Blue bar** on the left = Lines you modified
- **Numbers in Source Control icon** = Number of files with changes

---

## Quick Reference Card

| Action | How to Do It |
|--------|--------------|
| See what changed | `Ctrl + Shift + G` (Source Control) |
| Stage one file | Hover over file → Click "+" |
| Stage all files | Click "+" next to "Changes" |
| Unstage a file | Hover over staged file → Click "−" |
| Commit | Type message → `Ctrl + Enter` |
| Push to GitHub | Click ↑ icon (bottom left) |
| Pull from GitHub | Click ↓ icon (bottom left) |
| View file history | Right-click file → "Open Timeline" |
| Discard changes | Right-click file → "Discard Changes" |
| View diff | Click on a changed file in Source Control |

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + S` | Save current file |
| `Ctrl + Shift + G` | Open Source Control panel |
| `Ctrl + Enter` | Commit staged changes |
| `Ctrl + Shift + P` | Open Command Palette |
| `Ctrl + ~` | Open integrated terminal |
| `Ctrl + B` | Toggle sidebar visibility |

---

## Common Terms Explained

- **Repository (Repo):** A folder that Git tracks. Think of it as a project folder with history.
- **Commit:** A saved snapshot of your project at a specific point in time.
- **Stage:** Preparing files to be committed (like putting items in a shopping cart before checkout).
- **Push:** Uploading your commits from your computer to GitHub.
- **Pull:** Downloading updates from GitHub to your computer.
- **Branch:** A separate version of your code (like a parallel universe of your project).
- **Main/Master:** The primary branch of your project.
- **Origin:** The nickname for your GitHub repository.

---

## Troubleshooting

### "Permission denied" error when pushing
- You may need to authenticate with GitHub
- VS Code will prompt you to sign in
- Or use GitHub Desktop as an alternative

### "Conflict" when pulling
- This means someone else (or you on another computer) made changes
- VS Code will show you the conflicts
- You'll need to choose which version to keep

### Can't see Source Control panel
- Press `Ctrl + Shift + G`
- Or click View → Source Control

### Files not showing in Source Control
- Make sure you opened the correct folder
- Check that Git is initialized (you should see a `.git` folder)

---

## Best Practices

1. **Commit often** - Don't wait until you have 100 changes
2. **Write clear commit messages** - Your future self will thank you
3. **Pull before you push** - Especially if working from multiple computers
4. **Don't commit sensitive data** - No passwords, API keys, or personal info
5. **Stage selectively** - Only commit related changes together
6. **Test before committing** - Make sure your code works

---

## Next Steps: Deploying Your Portfolio

Once your code is on GitHub, you can deploy your portfolio for free using:

- **GitHub Pages** (built into GitHub)
- **Vercel** (https://vercel.com/)
- **Netlify** (https://www.netlify.com/)

We'll cover deployment in the next guide!

---

## Additional Resources

- **GitHub Docs:** https://docs.github.com/
- **VS Code Git Tutorial:** https://code.visualstudio.com/docs/sourcecontrol/overview
- **Git Cheat Sheet:** https://education.github.com/git-cheat-sheet-education.pdf

---

**Created:** 2026-05-09
**For:** MyPortfolio Project
**Last Updated:** 2026-05-09

**Changes done or copied from GitHub UI**
**Repository URL: https://github.com/mudassarGPC/MyRepositoryGPCVSS.git
