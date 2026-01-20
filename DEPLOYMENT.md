# NeerNova Technologies Website - Deployment Guide

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Deploying to GitHub Pages](#deploying-to-github-pages)
3. [Connecting Namecheap Domain](#connecting-namecheap-domain)
4. [DNS Configuration](#dns-configuration)
5. [Troubleshooting](#troubleshooting)
6. [Post-Deployment Checklist](#post-deployment-checklist)

---

## Prerequisites

- GitHub account (username: **NeerNova**)
- Namecheap domain: **NeerNova.com**
- Git installed on your computer ([Download Git](https://git-scm.com/downloads))
- Text editor (VS Code, Sublime Text, etc.)

---

## Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in with username **NeerNova**
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Configure the repository:
   - **Repository name:** `NeerNova.github.io` (use this exact format for user site) OR `neernova-website` (for project site)
   - **Description:** "Professional AI consulting website for NeerNova Technologies"
   - **Visibility:** Public (required for free GitHub Pages)
   - **Do NOT** initialize with README, .gitignore, or license
5. Click **"Create repository"**

### Step 2: Initialize Git Repository Locally

Open your terminal/command prompt and navigate to the website folder:

```bash
cd /path/to/neernova_website
```

Initialize Git and make your first commit:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: NeerNova Technologies website"

# Rename branch to main (if not already)
git branch -M main
```

### Step 3: Connect to GitHub Repository

Connect your local repository to GitHub:

**For user site (NeerNova.github.io):**
```bash
git remote add origin https://github.com/NeerNova/NeerNova.github.io.git
```

**OR for project site (neernova-website):**
```bash
git remote add origin https://github.com/NeerNova/neernova-website.git
```

Push your code to GitHub:

```bash
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/NeerNova/[repository-name]`
2. Click **"Settings"** tab
3. In the left sidebar, click **"Pages"**
4. Under **"Source"**, select:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **"Save"**
6. Wait 2-5 minutes for GitHub to build and deploy your site
7. Your site will be available at:
   - **User site:** `https://NeerNova.github.io`
   - **Project site:** `https://NeerNova.github.io/neernova-website`

### Step 5: Verify Deployment

1. Wait for the deployment to complete (check the Actions tab for progress)
2. Visit your site URL
3. Verify all pages load correctly
4. Test responsive design on mobile devices
5. Check all links and navigation

---

## Connecting Namecheap Domain

### Overview

You'll connect **NeerNova.com** to your GitHub Pages site using DNS records.

### Step 6: Configure Custom Domain in GitHub

1. Go to your GitHub repository
2. Navigate to **Settings → Pages**
3. Under **"Custom domain"**, enter: `neernova.com`
4. Click **"Save"**
5. **Important:** Check the box for **"Enforce HTTPS"** (wait for DNS to propagate first)

### Step 7: Create CNAME File

GitHub will automatically create a `CNAME` file, but you can verify:

1. In your local repository, create a file named `CNAME` (no extension) in the root directory
2. Add a single line with your domain:
   ```
   neernova.com
   ```
3. Save the file
4. Commit and push:
   ```bash
   git add CNAME
   git commit -m "Add custom domain CNAME"
   git push
   ```

### Step 8: Configure DNS in Namecheap

1. Log in to [Namecheap](https://www.namecheap.com)
2. Go to **Dashboard → Domain List**
3. Click **"Manage"** next to **NeerNova.com**
4. Click the **"Advanced DNS"** tab
5. Add the following DNS records:

---

## DNS Configuration

### Required DNS Records for Namecheap:

#### A Records (Point to GitHub Pages IPs):

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |

#### CNAME Record (For www subdomain):

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME Record | www | neernova.github.io. | Automatic |

**Note:** The period (.) at the end of `neernova.github.io.` is important!

### Step-by-Step DNS Configuration:

1. **Delete existing records** (if any):
   - Remove any existing A records for `@`
   - Remove any existing CNAME for `www`
   - Keep your email-related records (MX, TXT) if you have email configured

2. **Add A Records:**
   - Click **"Add New Record"**
   - Select **"A Record"**
   - Host: `@`
   - Value: `185.199.108.153`
   - TTL: Automatic (or 300)
   - Click the green checkmark to save
   - Repeat for the other 3 IP addresses

3. **Add CNAME Record:**
   - Click **"Add New Record"**
   - Select **"CNAME Record"**
   - Host: `www`
   - Value: `neernova.github.io.`
   - TTL: Automatic (or 300)
   - Click the green checkmark to save

4. **Save All Changes**

### DNS Propagation:

- DNS changes can take **24-48 hours** to fully propagate
- In practice, changes often appear within **15 minutes to 2 hours**
- Check propagation status: [WhatsMyDNS.net](https://www.whatsmydns.net/)

---

## Enable HTTPS

### Step 9: Enforce HTTPS (After DNS Propagation)

1. Wait for DNS to propagate (verify your domain loads the site)
2. Go to GitHub repository → **Settings → Pages**
3. Check the box: **"Enforce HTTPS"**
4. GitHub will automatically provision an SSL certificate (takes 5-10 minutes)
5. Your site will now be accessible via `https://neernova.com`

---

## Troubleshooting

### Common Issues:

#### Issue 1: "Domain's DNS record could not be retrieved"
**Solution:**
- Wait longer for DNS propagation
- Verify DNS records are correctly entered in Namecheap
- Use [DNS Checker](https://dnschecker.org/) to verify records

#### Issue 2: 404 Error on GitHub Pages
**Solution:**
- Ensure `index.html` is in the root directory
- Check repository name matches GitHub Pages requirements
- Verify branch is set to `main` in GitHub Pages settings

#### Issue 3: HTTPS Not Working
**Solution:**
- Wait for DNS to fully propagate before enforcing HTTPS
- Uncheck "Enforce HTTPS", wait 5 minutes, then re-check it
- Clear browser cache and try again

#### Issue 4: www Not Working
**Solution:**
- Verify CNAME record for `www` is correct: `neernova.github.io.`
- Check for trailing period in CNAME value
- Wait for DNS propagation

#### Issue 5: CSS/JS Not Loading
**Solution:**
- Check file paths in `index.html` are relative (not absolute)
- Verify files are in correct directories (`css/`, `js/`)
- Clear browser cache
- Check browser console for errors

---

## Post-Deployment Checklist

- [ ] Website loads at `https://neernova.com`
- [ ] Website loads at `https://www.neernova.com`
- [ ] HTTPS is enabled and working (green padlock in browser)
- [ ] All sections scroll smoothly (Home, About, Services, Contact)
- [ ] Mobile responsive design works on phone and tablet
- [ ] Contact form opens email client correctly
- [ ] All navigation links work
- [ ] No console errors in browser developer tools
- [ ] Website displays correctly in Chrome, Firefox, Safari, and Edge
- [ ] Images and icons load properly
- [ ] Page loads within 3 seconds

---

## Making Updates

### To Update Your Website:

1. Make changes to your local files
2. Test changes locally by opening `index.html` in browser
3. Commit and push changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. GitHub Pages will automatically rebuild (takes 1-3 minutes)
5. Refresh your website to see changes

### Update Workflow:

```bash
# Pull latest changes (if working from multiple computers)
git pull

# Make your edits in text editor
# ...

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Update services section with new pricing"

# Push to GitHub
git push
```

---

## Performance Optimization (Optional)

### After Deployment:

1. **Test Performance:**
   - Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - Test on [GTmetrix](https://gtmetrix.com/)

2. **Optimize Images:**
   - Compress images before uploading
   - Use modern formats (WebP)

3. **Enable Caching:**
   - GitHub Pages automatically handles caching

4. **Monitor Analytics:**
   - Consider adding Google Analytics
   - Add to `<head>` section of `index.html`

---

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Namecheap DNS Setup Guide](https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/)
- [Custom Domain with GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Git Basics Tutorial](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

---

## Support

If you encounter issues:

1. Check the [Troubleshooting](#troubleshooting) section above
2. Review [GitHub Pages Documentation](https://docs.github.com/en/pages)
3. Contact Namecheap Support for DNS-related issues
4. Check GitHub Community Forums

---

## Summary

**Quick Steps:**
1. ✅ Create GitHub repository: `NeerNova.github.io`
2. ✅ Push website files to GitHub
3. ✅ Enable GitHub Pages in repository settings
4. ✅ Add custom domain `neernova.com` in GitHub Pages settings
5. ✅ Configure DNS records in Namecheap (4 A records + 1 CNAME)
6. ✅ Wait for DNS propagation (up to 48 hours)
7. ✅ Enable HTTPS enforcement
8. ✅ Test website at `https://neernova.com`

**Your website will be live at:**
- Primary: `https://neernova.com`
- Alternate: `https://www.neernova.com`
- GitHub URL: `https://NeerNova.github.io`

---

*Last Updated: January 2026*
*NeerNova Technologies - Transforming Business Through AI Innovation*