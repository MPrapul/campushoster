# 🏫 Campushoster - Smart School ERP

The all-in-one smart campus platform for modern educational institutions. Streamline administration, enhance teaching, and improve student outcomes with our comprehensive school management solution powered by Verixence technology.

![Campushoster Banner](https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80)

## ✨ Features

- **Multi-Portal Experience**: Tailored interfaces for Admin, Teachers, Parents, and Students
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Glass morphism effects, smooth animations, and intuitive navigation
- **Smart Analytics**: Real-time insights and performance tracking
- **Secure Platform**: Role-based access control and comprehensive audit trails
- **Mobile-First**: Fully responsive design with mobile optimization

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins from Google Fonts

## 📱 Mobile Responsiveness

This project is fully optimized for mobile devices with:
- Responsive tab navigation (2 columns on mobile, 4 on desktop)
- Mobile-friendly card layouts and spacing
- Optimized typography scaling
- Touch-friendly button sizes
- Proper text wrapping for small screens

## 🚀 Vercel Deployment

### Automatic Deployment (Recommended)

1. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
   - Click "Add New Project"
   - Import this repository: `https://github.com/MPrapul/campushoster`

2. **Configure Project**:
   - Project Name: `campushoster`
   - Framework Preset: `Next.js` (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

3. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically build and deploy your project
   - Your site will be available at `https://campushoster.vercel.app` (or similar)

### Manual Deployment via CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

### Environment Configuration

No environment variables are required for this landing page. The project is configured to work out of the box.

### Custom Domain (Optional)

1. In your Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add your custom domain (e.g., `campushoster.com`)
4. Follow Vercel's instructions to configure DNS

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/MPrapul/campushoster.git

# Navigate to project directory
cd campushoster

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📊 Performance Metrics

- **Build Size**: ~212kB first load JS
- **Performance**: Optimized static generation
- **Mobile Score**: Fully responsive design
- **SEO Ready**: Proper meta tags and structured data

## 🎯 Key Improvements

### Recent Updates (Latest)
- ✅ Fixed mobile Multi-Portal Experience tab navigation
- ✅ Improved badge text wrapping for mobile devices
- ✅ Enhanced card layouts and spacing for mobile
- ✅ Updated school metrics from 500+ to realistic 150+
- ✅ Added proper active state styling for tab buttons
- ✅ Optimized typography and padding for mobile screens

### Previous Updates
- ✅ Enhanced mobile responsiveness across all sections
- ✅ Improved SEO with Verixence branding and structured data
- ✅ Fixed viewport configuration for mobile devices
- ✅ Added comprehensive touch and interaction optimizations
- ✅ Integrated custom date/time picker for demo scheduling
- ✅ Added Vercel deployment optimization
- ✅ Enhanced contact forms with validation

## 🏢 Business Information

**Powered by**: [Verixence](https://www.verixence.com/)  
**Marketed by**: [DigiMindsGlobal](https://www.digimindsglobal.tech/)  
**Contact**: info@verixence.com

## 📋 Project Structure

```
campushoster/
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── components/     # Marketing page components
│   │   │   ├── layout.tsx      # Marketing layout
│   │   │   └── page.tsx        # Marketing page
│   │   ├── favicon.ico
│   │   ├── globals.css         # Global styles
│   │   └── layout.tsx          # Root layout
│   ├── components/
│   │   └── ui/                 # Shadcn/ui components
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
├── vercel.json                 # Vercel configuration
└── package.json
```

## 🚀 Deployment Status

- **Repository**: https://github.com/MPrapul/campushoster.git
- **Production Ready**: ✅ Yes
- **Build Status**: ✅ Successful
- **Mobile Optimized**: ✅ Yes
- **Vercel Ready**: ✅ Yes

## 📄 License

© 2024 Campushoster. All rights reserved. Built with excellence for education.

---

*Transform your educational institution with our comprehensive School ERP solution. Experience the future of education management with Verixence technology.*
