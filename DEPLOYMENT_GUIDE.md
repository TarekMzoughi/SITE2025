# 🚀 SITE 2025 - Deployment Guide

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:5174/`

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## 🌐 Deployment Options

### 1. Netlify (Recommended)

#### Automatic Deployment
1. Push code to GitHub repository
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy automatically on push

#### Manual Deployment
```bash
npm run build
# Upload dist/ folder to Netlify
```

### 2. Vercel

#### Automatic Deployment
1. Import project from GitHub
2. Vercel auto-detects Vite configuration
3. Deploy automatically

#### Manual Deployment
```bash
npm install -g vercel
npm run build
vercel --prod
```

### 3. GitHub Pages

#### Setup
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/site-conf-replica"
}
```

#### Deploy
```bash
npm run build
npm run deploy
```

### 4. Traditional Web Hosting

#### Build and Upload
```bash
npm run build
# Upload contents of dist/ folder to web server
```

## ⚙️ Configuration

### Environment Variables
Create `.env` file for environment-specific settings:
```env
VITE_API_URL=https://api.site-conf.com
VITE_CONTACT_EMAIL=contact@site-conf.com
```

### Base URL Configuration
For subdirectory deployment, update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/subdirectory/',
  // ... other config
})
```

## 🔧 Customization

### 1. Colors and Branding
Edit CSS variables in `src/index.css`:
```css
:root {
  --color-primary: #1e40af;
  --color-secondary: #6366f1;
  /* ... other variables */
}
```

### 2. Content Updates
- Update conference information in component files
- Modify images in `public/` directory
- Edit contact information in `ContactUs.jsx`

### 3. Navigation
Update navigation links in `src/components/Header.jsx`

## 📊 Performance Optimization

### 1. Image Optimization
- Use WebP format for images
- Implement lazy loading
- Optimize image sizes

### 2. Code Splitting
- Already implemented with React Router
- Dynamic imports for large components

### 3. Caching
- Configure proper cache headers
- Use CDN for static assets

## 🔒 Security

### 1. Content Security Policy
Add CSP headers:
```
Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com;
```

### 2. HTTPS
- Always use HTTPS in production
- Configure SSL certificates

## 📈 Analytics

### Google Analytics
Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🐛 Troubleshooting

### Common Issues

#### Build Errors
- Check Node.js version (18+ required)
- Clear node_modules and reinstall
- Check for TypeScript errors

#### Routing Issues
- Configure server for SPA routing
- Add `.htaccess` for Apache
- Configure nginx for proper routing

#### Performance Issues
- Enable gzip compression
- Optimize images
- Use CDN for assets

### Server Configuration

#### Apache (.htaccess)
```apache
RewriteEngine On
RewriteRule ^(?!.*\.).*$ /index.html [L]
```

#### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## 📞 Support

For deployment issues or questions:
- Check documentation: [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- React Router: [Deployment Guide](https://reactrouter.com/en/main/guides/deploying)

## 🎯 Production Checklist

- [ ] All environment variables configured
- [ ] Images optimized
- [ ] Analytics tracking added
- [ ] SSL certificate installed
- [ ] Performance tested
- [ ] Mobile responsiveness verified
- [ ] Cross-browser compatibility checked
- [ ] SEO meta tags added
- [ ] Error pages configured
- [ ] Backup strategy in place

## 🚀 Go Live!

Your SITE 2025 conference website is ready for production deployment. The modern design and professional features will provide an excellent experience for conference attendees and participants.
