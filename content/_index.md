---
# Homepage settings for Kamellia Hyacinth

# Site Title and Configuration
title: "Kamellia Hyacinth"
date: 2022-10-24
type: landing
theme: "hugoblox"
baseURL: "https://kamellia.github.io/"

# Page Sections
sections:
  - block: about.biography
    id: about
    content:
      title: "About Me"
      text: "Healthcare administration professional with a strong foundation in public health, health IT. Passionate about healthcare policy, operations, and technology-driven solutions to improve efficiency and patient outcomes. Focused on epidemiology, health advocacy, and regulatory compliance, with a keen interest in data-driven decision-making and healthcare innovation. Background in military leadership fosters discipline, strategic thinking, and adaptability in dynamic healthcare environments. Dedicated to leveraging technology, policy, and operational strategies to contribute to healthcare transformation and public health initiatives."
      button:
        text: "Download my Résumé"
        url: "uploads/resume.pdf"
      profile:
        name: "Kamellia Hyacinth"
        subtitle: "MS-HCA Student"
        organization: "University of Wisconsin La Crosse"
        image: "uploads/profile.jpg"
      interests:
        - "Healthcare Policy & Advocacy"
        - "Public Health & Community Wellness"
        - "Patient-Centered Care"
        - "Healthcare Data Analytics"
        - "Strategic Planning & Leadership"
        - "Population Health Management"
      education:
        - degree: "M.Sc., Public Health - 2027"
          institution: "University of Wisconsin Madison"
        - degree: "M.Sc., Healthcare Administration - 2025"
          institution: "University of Wisconsin La Crosse"
        - degree: "B.Sc., Information Technology - 2015"
          institution: "St. George’s University"
      social:
        linkedin: "https://linkedin.com/in/kamelliahyacinth"
        email: "kamelliahyacinth@gmail.com"

  - block: collection
    id: portfolio
    content:
      title: "Portfolio"
      text: "Projects and work samples will be added here."
    design:
      view: article-grid
      columns: 2

  - block: collection
    id: gallery
    content:
      title: "Gallery"
      text: "Images will be added later."
    design:
      view: gallery
      columns: 2

  - block: collection
    id: news
    content:
      title: "News & Updates"
      text: "Latest blog posts and updates go here."
      filters:
        page_type: post
      design:
        view: date-title-summary
        spacing:
          padding: [0, 0, 0, 0]
  
  - block: contact
    id: contact
    content:
      title: "Contact Me"
      text: "Get in touch through this section."
      email: "kamelliahyacinth@gmail.com"
      phone: "608-571-8876"
      social:
        Zoom: ""
        linkedin: "https://linkedin.com/in/kamelliahyacinth"
    design:
      view: simple
---

