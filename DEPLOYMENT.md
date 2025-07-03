# Deployment Guide for The Median Website

## Quick Start with Netlify

### Option 1: Deploy from GitHub (Recommended)
1. **Create a GitHub repository**
   - Go to [GitHub.com](https://github.com) and create a new repository
   - Name it `themedian-website` or similar
   - Make it public (for free Netlify deployment)

2. **Upload your files**
   - Upload all files from this project to your GitHub repository
   - Ensure `index.html` is in the root directory

3. **Connect to Netlify**
   - Go to [Netlify.com](https://netlify.com)
   - Sign up/login with your GitHub account
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `/`
   - Click "Deploy site"

4. **Custom domain setup**
   - In Netlify dashboard, go to "Domain settings"
   - Add custom domain: `themedian.org`
   - Follow Netlify's instructions to update DNS settings in Cloudflare

### Option 2: Manual Deploy
1. **Zip your files**
   - Create a zip file with all website files
   - Ensure `index.html` is in the root of the zip

2. **Drag and drop to Netlify**
   - Go to [Netlify.com](https://netlify.com)
   - Drag your zip file to the deployment area
   - Site will be deployed automatically

## Domain Configuration

### Cloudflare DNS Settings
Since you purchased the domain through Cloudflare, update these DNS records:

1. **Add CNAME record:**
   - Type: CNAME
   - Name: `@` (or leave empty)
   - Value: `your-netlify-site.netlify.app`

2. **Add CNAME for www:**
   - Type: CNAME
   - Name: `www`
   - Value: `your-netlify-site.netlify.app`

### SSL Certificate
- Netlify automatically provides SSL certificates
- Your site will be accessible via `https://themedian.org`

## Post-Deployment Checklist

- [ ] Site loads at `https://themedian.org`
- [ ] Mobile navigation works correctly
- [ ] State dropdown functions properly
- [ ] All voter registration links work
- [ ] SSL certificate is active (green lock icon)
- [ ] Favicon displays correctly
- [ ] Social media links are ready for future use

## Updating Your Site

### If using GitHub:
1. Make changes to your local files
2. Commit and push to GitHub
3. Netlify automatically rebuilds and deploys

### If using manual deploy:
1. Make changes to your local files
2. Create new zip file
3. Drag and drop to Netlify dashboard

## Performance Optimization

Your site is already optimized with:
- ✅ Minimal external dependencies
- ✅ Compressed and minified assets
- ✅ Responsive images
- ✅ Proper caching headers
- ✅ Security headers configured

## Troubleshooting

### Common Issues:
1. **Site not loading**: Check DNS propagation (can take up to 24 hours)
2. **Voter registration links not working**: Verify state codes match in JavaScript
3. **Mobile menu not working**: Check JavaScript is loading properly
4. **Icons not displaying**: Ensure Lucide CDN is accessible

### Support:
- Netlify Support: [support.netlify.com](https://support.netlify.com)
- Cloudflare Support: [support.cloudflare.com](https://support.cloudflare.com)

## Next Steps

1. **Test thoroughly** on multiple devices and browsers
2. **Set up analytics** (Google Analytics, Netlify Analytics)
3. **Plan future features** from the roadmap in README.md
4. **Consider SEO optimization** for better search rankings

## Estimated Deployment Time
- GitHub method: 5-10 minutes
- Manual method: 2-3 minutes
- DNS propagation: 1-24 hours

---

**Your website will be live at https://themedian.org once deployment is complete!** 