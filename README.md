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
- CSS3: CSS3 is used for styling the webpage elements, including layout, colors, typography, and animations.
- JavaScript: JavaScript is used for implementing the accordion functionality and handling user interactions, such as clicking on section headers to expand or collapse content.
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

While the Accordion Main Page project provides a solid foundation for creating interactive webpages, there are several areas that could be further enhanced or expanded upon in future development:

- Accessibility: Improve accessibility features such as keyboard navigation and screen reader support to ensure that all users can easily interact with the accordion interface.

- Customization Options: Implement additional customization options, such as allowing users to choose between different accordion styles, colors, or animations.

- Content Management: Develop a content management system (CMS) or backend integration to dynamically load content into the accordion sections from a database or external source.

- Cross-Browser Compatibility: Conduct thorough testing across different web browsers and devices to ensure consistent performance and appearance.

## Feedback and Contributions

Feedback and contributions from the open-source community are essential for the continued development and improvement of the Accordion Main Page project. If you have any suggestions, bug reports, or feature requests, please don't hesitate to reach out by submitting a pull request or opening an issue on the GitHub repository.

## 🤝 Get Involved

If you're interested in contributing to the project, there are several ways you can get involved:

- Code Contributions: Help improve the project by submitting code changes, bug fixes, or new features.
- Documentation Updates: Contribute to the project's documentation by clarifying instructions, adding examples, or updating README files.
- Testing and Feedback: Test the project on different devices and browsers, and provide feedback on usability, performance, and accessibility.

Together, we can make the Accordion Main Page project even better and empower more users to create engaging and interactive web experiences!


### 🤌🏻 Useful resources

- https://www.w3schools.com/cssref/pr_pos_z-index.php
- https://developer.mozilla.org/en-US/docs/Web/CSS/z-index
- https://www.w3schools.com/js/js_htmldom_eventlistener.asp
- 
## 🏳️‍🌈 Author

- Tuğçe Çifci - [@tucecifci](https://github.com/tucecifci)
- Frontend Mentor - [@tucecifci](https://www.frontendmentor.io/profile/tucecifci)
