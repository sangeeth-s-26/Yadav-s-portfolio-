# Yadav Babu MK — Civil Engineering & Interior / Exterior Designer Portfolio

A modern, responsive, and technical portfolio website built with **React.js**, **Vite**, **Bootstrap 5**, and custom CSS. Designed specifically for **Yadav Babu MK**, featuring all verified academic credentials, technical CAD drawings, architectural elevations, structural sections, religious sacred architecture, and photorealistic 3D interior/exterior renders extracted directly from the official portfolio.

---

## 🎨 Color Palette

| Role | Color | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | Charcoal | `#25282D` | Navbar, footer, dark hero elements, cards, headings |
| **Secondary** | Construction Orange | `#F28C28` | Buttons, icons, active nav links, badges, hover accents |
| **Main Background** | Crisp White | `#FFFFFF` | Main page background, primary cards, modals |
| **Section Background** | Light Gray | `#F1F3F5` | Alternate sections, project cards, table headers |
| **Text** | Dark Gray | `#343A40` | Body typography, descriptions, specifications |

---

## 🏗️ Project Structure

```text
yadav/
├── public/
│   ├── images/
│   │   ├── profile/              # Yadav's portrait & architectural hero backdrop
│   │   ├── architectural/        # Sanction drawings, CAD floor plans, sections, elevations, gridlines, setouts, electrical
│   │   ├── residential/          # Traditional, contemporary, and colonial CAD blueprints
│   │   ├── commercial/           # Multi-storey commercial building plans & 3D render
│   │   ├── religious/            # Avant-garde mosque, Kerala temple, and ecclesiastical church designs
│   │   ├── exterior/             # High-resolution 3D exterior renders (traditional, contemporary, colonial, commercial)
│   │   ├── interior/             # 3D interior renders (bedroom, bathroom, living room, dining room, kitchen)
│   │   └── skills/               # Extracted official software logos (AutoCAD, 3ds Max, Revit, Lumion, V-Ray)
│   └── Yadav_Portfolio.pdf       # Official high-resolution PDF for instant download
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky responsive navbar with active section highlighting
│   │   ├── Hero.jsx              # High-impact first impression with architectural imagery & CTAs
│   │   ├── About.jsx             # Authentic bio, portrait, qualifications & core strengths
│   │   ├── Education.jsx         # Modern timeline cards (M DIT, Planners Group, GVHSS)
│   │   ├── Skills.jsx            # Software proficiency cards with logos & technical workflows
│   │   ├── Projects.jsx          # Filterable project portfolio with responsive 3-2-1 grid & modal inspect
│   │   ├── Gallery.jsx           # Dedicated visual gallery with interactive lightbox
│   │   ├── WhyChooseMe.jsx       # 5 grounded professional strength focus areas
│   │   ├── Contact.jsx           # Direct mailto, tel links, location, and inquiry form UI
│   │   ├── Footer.jsx            # Charcoal footer with copyright and navigation
│   │   └── BackToTop.jsx         # Smooth scroll-to-top floating button
│   ├── data/
│   │   └── portfolioData.js      # Centralized source-of-truth for all text, projects & contact info
│   ├── App.jsx                   # Single-page layout with scroll position tracker
│   ├── main.jsx                  # Application entry point with Bootstrap imports
│   └── index.css                 # Custom CSS variables, typography, and construction aesthetic
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0 or higher recommended)
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ How to Update Project Details & Images

### 1. Updating Personal, Education, or Contact Details
All content is cleanly separated in [portfolioData.js](file:///c:/Users/Hp/Desktop/yadav/src/data/portfolioData.js):
- **Name, Title, or Email**: Edit `personalInfo` and `contact` objects in `src/data/portfolioData.js`.
- **Education Timeline**: Update or add entries to `portfolioData.education`.
- **Technical Skills**: Modify `portfolioData.skills`.
- **Why Choose Me**: Update `portfolioData.whyChooseMe`.

### 2. Adding or Updating Projects
In [portfolioData.js](file:///c:/Users/Hp/Desktop/yadav/src/data/portfolioData.js), locate `portfolioData.projects`:
```javascript
{
  id: "unique-project-id",
  title: "Project Title",
  category: "Architectural Drawings", // One of: Architectural Drawings, Residential, Commercial, Religious, Exterior, Interior
  image: "/images/architectural/your_drawing.png",
  subtitle: "Brief subtitle",
  description: "Detailed description of the project...",
  specifications: [
    { label: "Scale", value: "1:100" },
    { label: "Built-up Area", value: "200 Sq.M" }
  ]
}
```

### 3. Replacing Images
- Drop new images into the appropriate folder inside `public/images/`:
  - Profile image: `public/images/profile/yadav_babu.jpg`
  - Architectural drawings: `public/images/architectural/`
  - Exterior renders: `public/images/exterior/`
  - Interior renders: `public/images/interior/`
- Vite serves files inside `public/` directly from the root path (e.g. `/images/profile/yadav_babu.jpg`).

---

## 📱 Responsiveness & Browser Compatibility
- **Desktop & Laptop**: Full 3-column project grid with expanded technical specs.
- **Tablets**: 2-column grid with touch-friendly cards and lightbox.
- **Mobile (iPhone & Android)**: 1-column layout, responsive hamburger menu, and click-to-call / click-to-email actions.
