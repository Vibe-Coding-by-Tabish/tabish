# Alex Chen - Full Stack AI Engineer Portfolio

A modern, responsive portfolio website showcasing expertise in AI/ML and full-stack development. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Dark Theme**: Sophisticated color palette with electric blue accents
- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Beautiful micro-interactions and scroll animations
- **SEO Optimized**: Complete meta tags, Open Graph, and structured data
- **Performance Focused**: Fast loading times and optimized assets
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom Design System
- **UI Components**: Radix UI, Lucide React
- **Animations**: CSS animations with custom keyframes
- **State Management**: React Hooks
- **Build Tool**: Vite
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/alexchen/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build & Deployment

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Production Deployment

#### Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

#### Deploy to Other Platforms
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting service

## 🎨 Customization

### Design System
The portfolio uses a comprehensive design system defined in:
- `src/index.css` - CSS custom properties and design tokens
- `tailwind.config.ts` - Tailwind configuration and extensions

### Content Updates
Update personal information in these components:
- `src/components/Hero.tsx` - Name, tagline, and bio
- `src/components/About.tsx` - Personal story and photo
- `src/components/Projects.tsx` - Featured projects
- `src/components/Experience.tsx` - Work experience and education
- `src/components/Contact.tsx` - Contact information

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `src/pages/Index.tsx`
3. Update navigation in `src/components/Navigation.tsx`

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── TechStack.tsx    # Skills/technologies
│   ├── Projects.tsx     # Featured projects
│   ├── Experience.tsx   # Work & education timeline
│   ├── Contact.tsx      # Contact form
│   └── Navigation.tsx   # Navigation component
├── assets/              # Images and static assets
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Page components
└── index.css           # Global styles & design system
```

## 🎯 Performance Optimizations

- **Image Optimization**: All images are optimized and properly sized
- **Code Splitting**: Components are lazy-loaded where beneficial
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Font Loading**: Google Fonts preconnected for faster loading
- **Build Optimization**: Vite provides optimal bundling

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configuration:
```env
VITE_CONTACT_FORM_ENDPOINT=your-form-endpoint
VITE_ANALYTICS_ID=your-analytics-id
```

### SEO Configuration
Update meta tags in `index.html`:
- Title, description, and keywords
- Open Graph and Twitter card metadata
- Canonical URL

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Alex Chen - [alex.chen@email.com](mailto:alex.chen@email.com)

Project Link: [https://github.com/alexchen/portfolio](https://github.com/alexchen/portfolio)

---

Built with ❤️ and ☕ by Alex Chen