# JOD Art Services - Landing Page

A modern, elegant single-page landing site for JOD Art Services featuring smooth parallax scrolling, Christmas-inspired design, and premium aesthetics.

## 🎨 Design Features

### Color Palette (Christmas-Inspired)
- **Pine Green** (`#0B4D2E`) - Deep forest background
- **Santa Red** (`#C92A2A`) - Bold accent color
- **Gold** (`#D4AF37`) - Premium highlights
- **Snowy White** (`#F7FAFB`) - Clean text and cards

### Visual Effects
- ✨ **Parallax Scrolling** - 3-layer depth effect (background, midground decorations, foreground content)
- 🎄 **Christmas Decorations** - Animated trees and ornaments with floating effects
- 💎 **Glassmorphism** - Frosted glass cards with backdrop blur
- ⚡ **Micro-animations** - Smooth fade-in, translate, and hover effects
- 🌟 **Glow Effects** - Subtle shadows and gold glows on interactive elements

### Typography
- **Headlines**: Playfair Display (elegant serif)
- **Body**: Inter (clean humanist sans-serif)
- Responsive font sizing using `clamp()`

## 📋 Sections

1. **Hero** - Full-width parallax hero with dual CTAs
2. **About Us** - Company description with 3 strength cards
3. **Services** - 6 service cards in responsive grid
4. **Contact** - Form with validation + contact info + social links
5. **Footer** - Navigation, newsletter signup, copyright

## ♿ Accessibility Features

- ✅ WCAG AA compliant color contrast
- ✅ Skip-to-content link for keyboard navigation
- ✅ Semantic HTML5 structure
- ✅ ARIA labels and roles
- ✅ Keyboard focus indicators
- ✅ `prefers-reduced-motion` support (disables parallax and animations)
- ✅ Form validation with accessible error messages
- ✅ Proper heading hierarchy

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 480px (single column, simplified parallax)
- **Tablet**: 481px - 768px (2-column layouts where appropriate)
- **Desktop**: 769px - 1024px (multi-column grids)
- **Large Desktop**: > 1024px (full experience)

### Mobile Optimizations
- Hamburger navigation menu
- Reduced hero height (60-70vh)
- Stacked content sections
- Simplified parallax (single layer)
- Touch-friendly button sizes

## 🚀 Performance

### Optimization Techniques
- Lazy loading for images (when added)
- CSS animations using `transform` and `opacity` (GPU-accelerated)
- Passive event listeners for scroll
- RequestAnimationFrame for smooth parallax
- Minimal JavaScript dependencies (vanilla JS only)
- Efficient CSS with design tokens

### Expected Lighthouse Scores
- **Performance**: ≥ 90
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 90
- **SEO**: ≥ 95

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No frameworks or libraries
- **Google Fonts** - Playfair Display & Inter

## 📦 File Structure

```
jod-chaplin/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling with design tokens
├── script.js           # Parallax, animations, form validation
└── README.md           # This file
```

## 🎯 Quick Start

### Option 1: Direct File Opening
Simply open `index.html` in a modern web browser.

### Option 2: Local Development Server
For the best experience (especially for testing), use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## ✨ Key Features

### Parallax Effect
The hero section uses a 3-layer parallax system:
- **Background** (1% movement) - Gradient and subtle texture
- **Midground** (15% movement) - Christmas decorations (trees, ornaments)
- **Foreground** (5% movement) - Hero content

### Form Validation
Client-side validation includes:
- Required field checking
- Email format validation
- Consent checkbox requirement
- Accessible error messages
- Success feedback

### Interactive Elements
- Smooth scroll to anchored sections
- Hover effects on all cards (8px lift + glow)
- Service links with animated arrows
- Social icons with rotation on hover
- Newsletter form with success animation

## 🎨 Customization

### Updating Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --pine-900: #0B4D2E;
    --santa-red: #C92A2A;
    --gold: #D4AF37;
    --snow: #F7FAFB;
}
```

### Updating Content
All content is in `index.html`. Key sections:
- Hero title/subtitle: `.hero-content`
- About text: `.about-lead`
- Services: `.service-card` elements
- Contact info: `.info-item` elements

### Adding Images
To add images (e.g., for hero background or service cards):

1. Add image with `data-src` attribute:
```html
<img data-src="path/to/image.jpg" alt="Description" loading="lazy">
```

2. The lazy loading observer will automatically handle it.

## 🔧 Browser Support

- ✅ Chrome/Edge (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Required Features
- CSS Grid & Flexbox
- CSS Custom Properties
- IntersectionObserver API
- RequestAnimationFrame
- ES6 JavaScript

## 📝 Content Guidelines

### About Us Section
Uses the exact copy provided:
> "At 'JOD Art Services', we don't just create ads — we craft experiences that connect brands with people..."

### Services
Six services included:
1. Branding & Identity
2. Social Campaigns
3. Integrated Strategy
4. Creative Production
5. Analytics & Optimization
6. Content Strategy

### Contact Form Fields
- Name (required)
- Email (required)
- Company (optional)
- Budget dropdown (optional)
- Message (required)
- Consent checkbox (required)

## 🎄 Christmas Theme Elements

### Decorative Animations
- **Floating Trees** - Gentle up/down motion (8-10s cycles)
- **Twinkling Ornaments** - Pulsing glow effect (3s cycles)
- **Gold Accents** - Used strategically for premium feel

### Color Psychology
- **Green** - Growth, creativity, nature
- **Red** - Energy, passion, action
- **Gold** - Premium, success, excellence
- **White** - Clarity, simplicity, space

## 🚦 Testing Checklist

- [ ] All links work correctly
- [ ] Form validation triggers appropriately
- [ ] Parallax scrolls smoothly (60fps)
- [ ] Mobile menu opens/closes
- [ ] All hover states work
- [ ] Keyboard navigation functional
- [ ] Screen reader compatible
- [ ] Reduced motion respected
- [ ] Fast load time (< 2s)
- [ ] No console errors

## 📊 Lighthouse Optimization Tips

If scores are below target:

1. **Performance**
   - Compress images to WebP format
   - Minify CSS/JS for production
   - Enable gzip compression on server

2. **Accessibility**
   - Verify all images have alt text
   - Check color contrast ratios
   - Test with screen reader

3. **SEO**
   - Add meta description
   - Include Open Graph tags
   - Create sitemap.xml

## 🎁 Future Enhancements

Potential additions:
- [ ] CMS integration (WordPress/Webflow)
- [ ] Backend for contact form (Node.js/PHP)
- [ ] Portfolio/case studies section
- [ ] Blog integration
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced analytics tracking

## 📄 License

This project is created for JOD Art Services. All rights reserved.

## 🤝 Credits

- **Design & Development**: Custom built for JOD Art Services
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Custom SVG icons

---

**Built with ❤️ and ☕ for JOD Art Services**

*Making brands unforgettable since 2024*
