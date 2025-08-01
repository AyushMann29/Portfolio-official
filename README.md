# Ayush Mann - Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. This portfolio showcases my skills, projects, and professional experience in web development.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Responsive Layout**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels
- **Interactive Elements**: Smooth animations and hover effects
- **Contact Integration**: Direct email contact and feedback form
- **Project Showcase**: Dedicated section to highlight my work
- **Resume Download**: Easy access to downloadable resume

## 🛠️ Technologies Used

- **Framework**: Next.js 15.4.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.11
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
my-app/
├── public/
│   ├── AyushMann_Resume.pdf
│   ├── hero.png
│   └── projects/
│       ├── projects1.png
│       ├── projects2.png
│       └── projects3.png
├── src/
│   └── app/
│       ├── about.tsx
│       ├── layout.tsx
│       ├── page.tsx
│       ├── projects.tsx
│       ├── globals.css
│       └── favicon.ico
├── package.json
├── next.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Personal Information
Update the following files to customize the portfolio for your needs:

- **About Section**: Edit `src/app/about.tsx` to update your bio, skills, and contact information
- **Projects**: Modify `src/app/projects.tsx` to showcase your projects
- **Homepage**: Update `src/app/page.tsx` for the main landing page
- **Resume**: Replace `public/AyushMann_Resume.pdf` with your resume

### Styling
- **Colors**: Modify `src/app/globals.css` for custom color schemes
- **Layout**: Update Tailwind classes in components for layout changes
- **Fonts**: Add custom fonts in the global CSS file

### Content
- **Profile Image**: Replace `public/hero.png` with your profile photo
- **Project Images**: Add your project screenshots to `public/projects/`
- **Feedback Form**: Update the Google Form link in `about.tsx`

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` package
- **AWS Amplify**: Connect your repository for automatic deployments

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio project, but if you find any bugs or have suggestions for improvements, feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: mannayush60@gmail.com
- **Portfolio**: [Your deployed URL]
- **LinkedIn**: [Your LinkedIn profile]
- **GitHub**: [Your GitHub profile]

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Deployed on [Vercel](https://vercel.com/)

---

**Note**: Remember to update the Google Form link in the about section with your actual feedback form URL before deployment.
