# Technical Documentation

## 1. Project Overview

This project is a responsive personal portfolio website built using HTML, CSS, and JavaScript.

The purpose of this project is to establish a structured foundation for a professional portfolio while applying responsive design principles and basic interactivity.

---

## 2. Folder Structure

```
assignment-1/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── Mohammed.JPG
│       ├── p1.jpg
│       ├── p2.jpg
│       └── p3.jpg
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── README.md
```

---

## 3. HTML Structure

The website is divided into semantic sections:

- Header (Navigation bar)
- Hero Section
- About Section
- Highlights (Why Choose Me)
- Projects Section
- Contact Form
- Footer

Each section is organized using semantic tags (`header`, `main`, `section`, `footer`) for clarity and accessibility.

---

## 4. CSS Design Approach

The styling focuses on:

- Dark theme with gradient accent colors
- Responsive layout using Flexbox and Grid
- Card-based project design with shadow effects
- Hover animations for interactivity
- Image handling using `object-fit: cover`

The layout adapts for:

- Desktop
- Tablet
- Mobile screens

---

## 5. JavaScript Features

The JavaScript file includes:

- Time-based greeting message
- Basic contact form interaction (frontend feedback)
- Lucide icon activation

Icons are initialized using:

```
lucide.createIcons();
```

---

## 6. Responsiveness

Media queries were used to ensure:

- Navigation adapts to smaller screens
- Grid layout stacks properly on mobile
- Text scales correctly across devices

Testing was done using browser DevTools responsive mode.

---

## 7. Performance Considerations

- Images are stored locally in the assets folder.
- CSS is organized in a single stylesheet.
- No heavy external frameworks were used.
- Lightweight icon library (Lucide) is used via CDN.

---

## 8. Conclusion

This project demonstrates understanding of:

- Structured HTML
- Clean CSS organization
- Responsive design principles
- Basic JavaScript interactivity
- Responsible AI integration

It serves as a strong foundation for future portfolio expansion.
