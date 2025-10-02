# EduCinematic – E-Course Platform (Frontend Spec)

Goal: Build a **visually stunning, interactive, cinematic e-learning platform** with modern UI/UX.  
Tech stack: **Next.js (App Router)**, **React functional components**, **TailwindCSS**, **shadcn/ui** components, **GSAP + Framer Motion animations**, **Lottie animations**, **react-three-fiber / Three.js** for 3D backgrounds, and responsive design.

## Style & Visuals
- Dark mode base with neon/cyberpunk accents (cyan, violet, magenta).  
- Glassmorphism cards, glowing hover states, soft gradients.  
- Animated backgrounds: particles, floating 3D shapes, parallax.  
- Microinteractions: cursor-follow effects, hover lift/tilt, ripple clicks.  
- Cinematic transitions: staggered scroll-ins, fade/slide.

## Pages & Components (all modular, reusable)
1. **Landing Page**  
   - Hero section: Animated 3D background (react-three-fiber canvas), bold headline, glowing CTA buttons.  
   - Feature grid: 3-4 cards with icons (Lottie), hover effects.  
   - Testimonials carousel, Pricing cards, Footer with particle animation.  

2. **Auth Pages (Login, Signup)**  
   - Glassmorphic forms, glowing inputs, floating particle background.  
   - Supabase Auth integration placeholders.  

3. **Course Catalog**  
   - Filter/search bar, category chips.  
   - Course cards: image/video preview, title, rating, hover tilt/glow.  
   - Infinite scroll or pagination.  

4. **Course Detail Page**  
   - Hero banner with title, instructor, enroll button.  
   - Sticky sidebar (pricing, enroll CTA).  
   - Accordion for curriculum.  
   - Reviews with animated star ratings.  

5. **Course Player**  
   - Video player placeholder (Shaka/Video.js).  
   - Sidebar lesson list with current highlight.  
   - Notes + Discussion tabs.  
   - Floating “Next Lesson” CTA.  

6. **Student Dashboard**  
   - Sidebar navigation.  
   - Progress tracker (Lottie/GSAP).  
   - Recently Watched carousel, Recommended Courses grid.  
   - Achievement badges with animations.  

7. **Instructor Studio**  
   - Course builder form with drag & drop lesson ordering.  
   - Upload placeholders for videos/images.  
   - Earnings dashboard with Recharts.  
   - Save/Publish buttons with glowing progress effects.  

8. **Checkout**  
   - Order summary card, discount input.  
   - Payment CTA styled like Stripe Checkout.  
   - Animated success/failure states.  

9. **Profile / Settings**  
   - Editable avatar, bio, subscription badge.  
   - Security + Preferences tabs with smooth transitions.  

## Functionality Placeholders
- Supabase: Auth, user profile, courses DB, subscriptions.  
- Stripe: Checkout session starter.  
- Video: signed URL fetch + player component.  
- Upload: file upload placeholder for lessons.  

## Instructions for Copilot
- Scaffold full Next.js project with `/app` folder structure.  
- Create modular components in `/components`.  
- Use Tailwind utility classes for design.  
- Include props in components for easy data binding later.  
- Add comments like `// TODO: integrate Supabase fetchCourses()` for backend slots.  
- Generate placeholder images (unsplash/gradient masks) or use local `/public` assets.  
- Ensure mobile-first responsiveness with reduced-motion accessibility.  
