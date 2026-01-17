# Mike Adeleke's Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, showcasing my work as a Frontend Engineer and Technical Writer.

## 🚀 Features

- **Responsive Design**: Fully responsive layout optimized for all device sizes
- **Modern UI**: Clean, professional interface with smooth animations
- **Dark Theme**: Eye-friendly dark mode design
- **Performance Optimized**: Built with Next.js for optimal loading speed
- **Accessible**: Follows WCAG accessibility guidelines
- **SEO Ready**: Implemented meta tags and semantic HTML

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
<!-- - **Animations**: CSS transitions, Tailwind animations -->
- **Version Control**: Git

## 📁 Project Structure

```
src/
├── app/                   # Next.js app router pages
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Home page
│   ├── about/           # About section
│   ├── blog/            # Blog section
│   └── contact/         # Contact section
├── Components/           # React components
│   ├── animations/      # Animation components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── sections/       # Page sections
│   ├── shared/         # Shared components
│   └── ui/             # UI components (Button, Card, etc.)
├── data/               # Static data and content
├── types/              # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/MikeAdelek/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠 Development

### Key Components

- **Header**: Main navigation component (`src/Components/layout/Header.tsx`)
- **Layout**: Page layout wrapper (`src/Components/layout/Layout.tsx`)
- **Sections**: Modular content sections in `src/Components/sections/`

### Navigation

The site uses smooth scroll navigation with section highlighting:
- Navigation items in the sidebar
- Section IDs for scroll targeting
- Active section tracking

### Styling

- Tailwind CSS for utility-first styling
- Custom components in `src/Components/ui/`
- Consistent dark theme throughout
- Responsive design breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 🚀 Deployment

The site can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Static Export
```bash
npm run build
npm run export
```

## 📱 Mobile Responsiveness

- Navigation collapses to mobile menu
- Responsive typography using Tailwind's modular scale
- Flexible grid layouts
- Touch-friendly interactions

## 🔧 Customization

1. Update personal information in `src/data/`
2. Modify theme colors in `tailwind.config.js`
3. Add/remove sections in `src/Components/sections/`

## 📄 License

MIT License - feel free to use this code for your own portfolio!

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📞 Contact

For any questions or feedback, please reach out through:
- Email: [oikeoluwa@gmail.com]
- LinkedIn: [https://www.linkedin.com/in/micheal-olomola-frontend-dev/]
- GitHub: [https://github.com/MikeAdelek]


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
