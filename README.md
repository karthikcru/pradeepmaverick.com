# Pradeep Maverick Portfolio

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and managed with Bun.

## 🚀 Tech Stack

- **React 19** - UI Framework
- **Vite** - Build Tool
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Bun** - Package Manager
- **GitHub Pages** - Hosting

## 📦 Installation

```bash
# Install dependencies
bun install
```

## 🛠️ Development

```bash
# Start development server
bun run dev
```

Visit `http://localhost:5173` to view the site locally.

## 🏗️ Build

```bash
# Build for production
bun run build

# Preview production build
bun run preview
```

## 🌐 Deployment to GitHub Pages

### Step 1: Enable GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **Pages** section
3. Under "Build and deployment":
   - Source: **GitHub Actions**

### Step 2: Configure DNS

Configure your domain `pradeepmaverick.space` at your domain registrar:

#### Option A: A Records (Recommended)
Add these A records pointing to GitHub Pages:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

#### Option B: CNAME Record
Add a CNAME record:
```
CNAME: www -> [your-username].github.io
```

### Step 3: Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[your-username]/pradeepmaverick.com.git
git push -u origin main
```

The GitHub Actions workflow will automatically build and deploy your site!

### Step 4: Verify Deployment

- Check the **Actions** tab in your GitHub repository
- Once the workflow completes, visit `https://pradeepmaverick.space`
- DNS propagation may take up to 24-48 hours

## 📝 Customization

Edit the following files to customize your portfolio:

- `src/components/Hero.tsx` - Hero section with name and title
- `src/components/About.tsx` - About section
- `src/components/Skills.tsx` - Skills and technologies
- `src/components/Projects.tsx` - Project showcase
- `src/components/Contact.tsx` - Contact links

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Support

For issues or questions, please open an issue on GitHub.
