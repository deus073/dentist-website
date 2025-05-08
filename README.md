# SmileDental - Family Dentist Landing Page

A professional landing page for a family dentist practice, featuring a blue and white color scheme with an elegant, professional design.

## Features

- Responsive design for all devices
- Appointment booking form
- Services showcase with pricing
- Customer testimonials
- Interactive location map
- Sticky call-to-action bar

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React Icons
- Leaflet for maps
- Resend for email functionality

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dentist-website.git
   cd dentist-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file based on `.env.local.example` and add your Resend API key:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment with GitHub and Vercel

### GitHub Setup

1. Create a new repository on GitHub
2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/dentist-website.git
   git push -u origin main
   ```

### Vercel Deployment

1. Sign up or log in to [Vercel](https://vercel.com)
2. Click "New Project" and import your GitHub repository
3. Configure the project:
   - Framework Preset: Next.js
   - Environment Variables: Add your `RESEND_API_KEY`
4. Click "Deploy"

Your site will be automatically deployed and you'll receive a URL to access it. Vercel will automatically redeploy your site whenever you push changes to your GitHub repository.

## Environment Variables

- `RESEND_API_KEY`: Your Resend API key for email functionality

## Project Structure

- `/src/app`: Main application pages and API routes
- `/src/components`: Reusable UI components
- `/public`: Static assets like images
- `/public/img`: Images used throughout the site
- `/public/img/reviews`: Testimonial profile images

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images from Unsplash
- Icons from React Icons
- Map functionality from Leaflet