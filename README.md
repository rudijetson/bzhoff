# Modern Portfolio Template

A sleek, customizable portfolio template built with Next.js 14, featuring a professional timeline, blog support, and creator/personal profile modes. Perfect for developers, creators, and professionals looking to showcase their work with a modern web presence.

[Live Demo](https://bzhoff.vercel.app)

## ✨ Features

- **Dual Profile Modes**: Switch between Personal Portfolio and Creator Profile modes
- **Interactive Timeline**: Showcase your professional journey with a clean, responsive timeline
- **Blog Platform**: Write and publish blog posts using MDX
  - Easy-to-follow post creation process
  - Code syntax highlighting
  - Support for images and rich media
- **Dark/Light Mode**: Built-in theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with elegant transitions
- **Modern Stack**: Built with the latest web technologies
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🚀 Quick Start

1. **Clone and Install**
```bash
# Clone the repository
git clone https://github.com/rudijetson/bzhoff.git my-portfolio

# Navigate to the project
cd my-portfolio

# Install dependencies
npm install
```

2. **Configuration**
- Update `app/data/profiles.tsx` with your personal information
- Modify `app/about/page.tsx` with your story
- Add your image to `public/images/authors/`

3. **Adding Blog Posts**
```bash
# Create a new blog post
npm run create-post "My Post Title"
```
- Posts are written in MDX format
- Store posts in `app/posts/[slug]/content.mdx`
- See `docs/ADDING_POSTS.md` for detailed instructions

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **UI**: React, Tailwind CSS, Radix UI
- **Content**: MDX for blog posts
- **Styling**: Tailwind CSS with custom components
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── components/    # Reusable UI components
│   ├── posts/        # Blog posts and content
│   ├── data/         # Profile and site configuration
│   └── about/        # About page template
├── public/           # Static assets
├── docs/            # Documentation
└── styles/          # Global styles
```

## 🎨 Customization

1. **Theming**
- Modify `tailwind.config.ts` for color schemes
- Update `app/globals.css` for global styles
- Customize components in `app/components/ui`

2. **Content**
- Update profile information in `app/data/profiles.tsx`
- Modify timeline entries in `app/about/page.tsx`
- Add blog posts in `app/posts/`

3. **Layout**
- Customize layout components in `app/components/layout`
- Modify navigation in `app/components/ui/navigation-menu.tsx`

## 📝 Blog Features

- MDX support for rich content
- Code syntax highlighting
- Image optimization
- Responsive layouts
- Reading time estimation
- Category organization

## 🚀 Deployment

Ready to deploy on Vercel with zero configuration:

```bash
# Build for production
npm run build

# Deploy (with Vercel CLI)
vercel
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Submit bug reports
- Suggest new features
- Create pull requests

## 📧 Contact

- Template Creator: Brandon Z. Hoff
- Email: brandonzhoff@gmail.com
- GitHub: [@rudijetson](https://github.com/rudijetson)
- LinkedIn: [hoffbrandon](https://www.linkedin.com/in/hoffbrandon/)

## 📄 License

MIT License - Feel free to use this template for your personal portfolio!

---

Built with ❤️ by Brandon Z. Hoff 