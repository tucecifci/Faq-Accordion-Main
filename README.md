# Faq-Accordion-Main

Hello everybody! 👋 </br>
✨ Welcome to the Accordion Main Page project README! This project showcases a simple yet interactive webpage created using HTML, CSS, and JavaScript. The main feature of this webpage is an accordion-style layout, where users can expand and collapse sections to view content.
This is a solution to the [Faq Accordion Main challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz/hub). 

## 👀 Overview

### 📷 Screenshot
![screencapture-127-0-0-1-3002-index-html-2024-03-22-15_29_22](https://github.com/tucecifci/Faq-Accordion-Main/assets/151346784/b6f6d5da-ff96-4c40-8ab0-5dfbaa08d478)

<img width="1422" alt="Ekran Resmi 2024-03-22 15 33 49" src="https://github.com/tucecifci/Faq-Accordion-Main/assets/151346784/900b1c3c-0cb5-4e9b-8264-1ce6ee25af31">


https://github.com/tucecifci/Faq-Accordion-Main/assets/151346784/bc8c7d5d-5639-431d-b4a2-ea02cd6f24fa



### 🔗 Links

- Live Site URL: https://tucecifci.github.io/Faq-Accordion-Main/

## My process

### 💡 Built with

- HTML5: HTML5 is used for structuring the webpage content, including headers, paragraphs, and div containers.
- **CSS3: CSS3 is used for styling the webpage elements, including layout, colors, typography, and animations.
- **JavaScript: JavaScript is used for implementing the accordion functionality and handling user interactions, such as clicking on section headers to expand or collapse content.
- Flexbox

### 🧠 What I learned

While working on this project, I learned:

- How to structure HTML documents effectively.
- How to use CSS to style and layout web pages.
- Techniques for creating responsive designs using media queries.
- Best practices for organizing and commenting code.

```css
.photo img {
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
}
```

```js
mgList.forEach(function (img, index) {
  img.addEventListener("click", function () {
    // İlgili resmin ve metnin durumunu değiştirme
    if (img.src.match("assets/images/icon-plus.svg")) {
      img.src = "assets/images/icon-minus.svg";
      textList[index].style.display = "block";
    } else {
      img.src = "assets/images/icon-plus.svg";
      textList[index].style.display = "none";
    }
  });
});

```

### 👩🏼‍💻 Continued development

While the current version of the recipe page meets the initial requirements, there are several areas where it can be further developed and enhanced. Some of the ideas for future improvements include:

- Adding more recipes to expand the content and variety of the page.
- Implementing a search feature to allow users to easily find specific recipes.
- Enhancing the styling and layout to improve the overall visual appeal and user experience.
- Incorporating JavaScript to add interactive features such as filtering recipes or saving favorites.
- Optimizing the page for better performance and accessibility.
- These are just a few of the potential areas for continued development. As I gain more experience and skills, I look forward to implementing these improvements and exploring new ideas to enhance the recipe page further.


### 🤌🏻 Useful resources

- https://www.w3schools.com/cssref/pr_pos_z-index.php
- https://developer.mozilla.org/en-US/docs/Web/CSS/z-index
- https://www.w3schools.com/js/js_htmldom_eventlistener.asp
- 
## 🏳️‍🌈 Author

- Tuğçe Çifci - [@tucecifci](https://github.com/tucecifci)
- Frontend Mentor - [@tucecifci](https://www.frontendmentor.io/profile/tucecifci)
