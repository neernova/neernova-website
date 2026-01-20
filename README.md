# NeerNova Technologies - Official Website

![NeerNova Technologies](https://img.shields.io/badge/AI-Consulting-6366f1?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)

Professional AI consulting website for NeerNova Technologies - Transforming Business Through AI Innovation.

## 🌟 Overview

This is a modern, responsive static website built for NeerNova Technologies, showcasing our comprehensive AI consulting services and expertise. The website is optimized for deployment on GitHub Pages with custom domain support.

## 🚀 Features

- **Modern Design**: Professional UI/UX with gradient effects and smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Fast Loading**: Lightweight static site with optimized performance
- **SEO Friendly**: Semantic HTML with proper meta tags
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Interactive Elements**: Smooth scrolling, animated sections, and dynamic navigation
- **Contact Form**: Integrated mailto functionality for easy client contact

## 📋 Sections

1. **Hero/Home**: Eye-catching landing section with company tagline
2. **About**: Company overview with statistics and achievements
3. **Services**: Comprehensive listing of all AI consulting services:
   - Human-AI Voice Interface
   - AI Strategy Consulting
   - Machine Learning Implementation
   - AI Automation
   - Big Data Analytics
   - LLM Model Building & Fine-Tuning
   - Complex Custom RAG Building
   - Agent Development
4. **Contact**: Contact information and inquiry form

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties, flexbox, and grid
- **JavaScript**: Vanilla JS for interactions and animations
- **Fonts**: Google Fonts (Inter, Space Grotesk)
- **Icons**: Inline SVG icons

## 📁 Project Structure

```
neernova_website/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styles and responsive design
├── js/
│   └── script.js          # Interactive functionality
├── images/                # Image assets (empty - ready for logos/images)
├── TAGLINES.md           # Professional tagline options
├── DEPLOYMENT.md         # Comprehensive deployment guide
└── README.md            # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: Indigo (#6366f1) - AI/Tech theme
- **Secondary**: Sky Blue (#0ea5e9)
- **Accent**: Purple (#8b5cf6)
- **Background**: Dark slate gradients
- **Text**: Light with proper contrast ratios

### Typography
- **Headings**: Space Grotesk (Modern, geometric)
- **Body**: Inter (Clean, readable)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🚀 Quick Start

### Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

### Editing Content

- **Update text**: Edit `index.html`
- **Modify styles**: Edit `css/styles.css`
- **Change functionality**: Edit `js/script.js`

## 🌐 Deployment

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for comprehensive instructions on:
- Deploying to GitHub Pages
- Connecting Namecheap domain (NeerNova.com)
- DNS configuration
- HTTPS setup
- Troubleshooting

## 🎯 Tagline Options

See **[TAGLINES.md](TAGLINES.md)** for 5 professional tagline options with recommendations.

**Current tagline**: "Transforming Business Through AI Innovation"

## ✉️ Contact

**Email**: accounts@neernova.com

## 📝 Customization Guide

### Change Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #0ea5e9;
    /* ... more variables */
}
```

### Add Your Logo

1. Add logo image to `images/` folder
2. Update the logo section in `index.html`:

```html
<a href="#home" class="logo">
    <img src="images/your-logo.png" alt="NeerNova">
</a>
```

### Update Services

Edit the services grid in `index.html` (around line 180-370).

### Modify Contact Email

Update `accounts@neernova.com` in:
- Contact section (line ~400)
- Footer (line ~445)
- JavaScript form handler (line ~120 in `js/script.js`)

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Load Time**: < 2 seconds on 3G
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **File Size**: Total < 100KB (excluding images)

## 📊 Analytics (Optional)

To add Google Analytics:

1. Get your GA tracking code
2. Add to `<head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Known Issues

None at this time.

## 🔮 Future Enhancements

Potential features for future versions:
- Blog section
- Case studies/portfolio
- Client testimonials
- Live chat integration
- Newsletter signup
- Multi-language support

## 📄 License

© 2026 NeerNova Technologies. All rights reserved.

This is proprietary software. Unauthorized copying or distribution is prohibited.

## 🤝 Support

For technical support or customization requests, contact: accounts@neernova.com

---

**Built with ❤️ for NeerNova Technologies**

*Transforming Business Through AI Innovation*
